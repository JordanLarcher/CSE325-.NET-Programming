export function enableTableSort(tableId) {
  const table = document.getElementById(tableId);
  if (!table) return;
  const headers = table.querySelectorAll("th");
  let sortDirection = {};

  headers.forEach((header, i) => {
    header.style.cursor = "pointer";
    header.addEventListener("click", () => {
      const tbody = table.tBodies[0];
      const rows = Array.from(tbody.querySelectorAll("tr"));
      const dir = (sortDirection[i] = !sortDirection[i]);

      // Remove arrows from all headers
      headers.forEach((h) => {
        h.innerHTML = h.innerHTML.replace(/\s*[▲▼]$/, "");
      });

      // Add arrow to the clicked header
      header.innerHTML =
        header.innerHTML.replace(/\s*[▲▼]$/, "") + (dir ? " ▲" : " ▼");

      rows.sort((a, b) => {
        let cellA = a.children[i].innerText.trim();
        let cellB = b.children[i].innerText.trim();
        // Try to compare as numbers, fallback to string
        let numA = parseFloat(cellA.replace(/[^0-9.]/g, ""));
        let numB = parseFloat(cellB.replace(/[^0-9.]/g, ""));
        if (!isNaN(numA) && !isNaN(numB)) {
          return dir ? numA - numB : numB - numA;
        }
        return dir ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
      });
      rows.forEach((row) => tbody.appendChild(row));
    });
  });
}
