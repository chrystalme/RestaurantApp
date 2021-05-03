const pageLoad = () => {
  const content = document.getElementById('content');
  const outerDiv = document.createElement('div');
  outerDiv.classList(
    'tabs',
    'is-toggle',
    'is-flex',
    'is-justify-content-space-between',
    'is-align-items-center',
  );
  content.append(outerDiv);
  content.innerHTML = 'I am here';
};

export { pageLoad };
