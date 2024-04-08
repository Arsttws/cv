  let projectInfos = document.querySelectorAll('.project-info');

  projectInfos.forEach(function(projectInfo) {
    projectInfo.addEventListener('click', function() {

      let listItem = this.closest('li');
      let projectDescription = listItem.querySelector('.project-description');
      let projectInfo = listItem.querySelector('.project-info');

      projectDescription.classList.toggle('active');
      projectInfo.classList.toggle('active');
    });
  });