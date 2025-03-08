export function renderContent() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <p>This is a Webpack demo showing:</p>
    <ul>
      <li>Hot Module Replacement</li>
      <li>CSS Loading</li>
      <li>Asset Management</li>
      <li>Code Splitting</li>
    </ul>
  `;
}
