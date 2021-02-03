(() => {
  let app = {
    config: {
      base_api_url: 'http://localhost:8000'
    },
    elements: {}
  };

  function bindUI() {
    app.elements.customer.addEventListener('change', customerOnChangeEventHandler);
  }

  function customerOnChangeEventHandler(e) {
    const customerElement = app.elements.customer;
    populateProject(customerElement.options[customerElement.selectedIndex].value);
  }

  function customerInit() {
    const customerElement = app.elements.customer;
    fetch(`${app.config.base_api_url}/customer/all`)
      .then(response => response.json())
      .then(data => {
        data.forEach((customer, index) => {
          app.elements.customer.add(new Option(customer.name, customer.id, index === 0, index === 0));
        });
        populateProject(customerElement.options[customerElement.selectedIndex].value);
      });
  }

  function populateProject(customerId) {
    const projectElement = app.elements.project;
    fetch(`${app.config.base_api_url}/project/all-for-customer/${customerId}`)
      .then(response => response.json())
      .then(data => {
        projectElement.options = [];
        data.forEach((project, index) => {
          projectElement.add(new Option(project.name, project.id, index === 0, index === 0));
        });
      });
  }

  function initializeValues() {
    customerInit();
  }

  (function init() {
    app.elements.form = document.querySelector('#form');
    app.elements.customer = document.querySelector('#customer');
    app.elements.project = document.querySelector('#project');
    app.elements.task = document.querySelector('#task');
    app.elements.user = document.querySelector('#user');

    bindUI();
    initializeValues();

    window.app = app; // TODO: Remove this.
  })();
})();
