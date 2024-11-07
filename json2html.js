// json2html.js

/**
 * Converts a JSON array of objects into an HTML table.
 * @param {Array<Object>} data - Array of objects to be converted into an HTML table.
 * @returns {string} HTML string representing the table.
 */
export function json2html(data) {
  // If data is empty, return an empty table
  if (!data || data.length === 0) {
    return '<table data-user="kavalishiva33@gmail.com"><thead></thead><tbody></tbody></table>';
  }

  // Extract unique headers from data keys
  const headers = Array.from(new Set(data.flatMap(Object.keys)));

  // Build the table header
  let html = '<table data-user="kavalishiva33@gmail.com"><thead><tr>';
  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += '</tr></thead><tbody>';

  // Build the table rows
  data.forEach(row => {
    html += '<tr>';
    headers.forEach(header => {
      html += `<td>${row[header] !== undefined ? row[header] : ''}</td>`;
    });
    html += '</tr>';
  });

  // Close the table
  html += '</tbody></table>';

  return html;
}
