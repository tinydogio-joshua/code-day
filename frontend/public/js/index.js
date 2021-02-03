(() => {
  let app = {
    config: {
      base_api_url: 'http://localhost:8000'
    },
    elements: {}
  };

  function bindUI() {
    app.elements.customer.addEventListener('change', customerOnChangeEventHandler);
    app.elements.project.addEventListener('change', projectOnChangeEventHandler);
  }

  function customerOnChangeEventHandler(e) {
    const customerElement = app.elements.customer;
    populateProject(customerElement.options[customerElement.selectedIndex].value);
    populateUsers(customerElement.options[customerElement.selectedIndex].value);
  }

  function projectOnChangeEventHandler(e) {
    console.log('projectOnChangeEventHandler');
    const projectElement = app.elements.project;
    populateTasks(projectElement.options[projectElement.selectedIndex].value);
  }

  function customerInit() {
    const customerElement = app.elements.customer;
    const projectElement = app.elements.project;
    console.log(projectElement);
    fetch(`${app.config.base_api_url}/customer/all`)
      .then(response => response.json())
      .then(data => {
        data.forEach((customer, index) => {
          app.elements.customer.add(new Option(customer.name, customer.id, index === 0, index === 0));
        });
        populateProject(customerElement.options[customerElement.selectedIndex].value);
        populateUsers(customerElement.options[customerElement.selectedIndex].value);
      });
  }

  function populateProject(customerId) {
    console.log('populateProject');
    const projectElement = app.elements.project;
    fetch(`${app.config.base_api_url}/project/all-for-customer/${customerId}`)
      .then(response => response.json())
      .then(data => {
        projectElement.innerHTML = '';
        data.forEach((project, index) => {
          projectElement.add(new Option(project.name, project.id, index === 0, index === 0));
        });
      });
    // populateTasks(projectElement.options[projectElement.selectedIndex].value);
  }

  function populateTasks(projectId) {
    const taskElement = app.elements.task;
    fetch(`${app.config.base_api_url}/task/all-for-project/${projectId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        taskElement.innerHTML = '';
        data.forEach((task, index) => {
          taskElement.add(new Option(task.title, task.id, index === 0, index === 0));
        });
      });
  }

  function populateUsers(customerId) {
    const userElement = app.elements.user;
    fetch(`${app.config.base_api_url}/user/all-for-customer/${customerId}`)
      .then(response => response.json())
      .then(data => {
        userElement.innerHTML = '';
        data.forEach((user, index) => {
          userElement.add(new Option(user.email, user.id, index === 0, index === 0));
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
