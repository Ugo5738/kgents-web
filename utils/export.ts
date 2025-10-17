
import { Lead } from '../types';

const downloadFile = (filename: string, content: string, mimeType: string) => {
  const element = document.createElement('a');
  const file = new Blob([content], { type: mimeType });
  element.href = URL.createObjectURL(file);
  element.download = filename;
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
  document.body.removeChild(element);
};

export const exportLeadsToJSON = (leads: Lead[]) => {
  const jsonString = JSON.stringify(leads, null, 2);
  downloadFile('kgents_leads.json', jsonString, 'application/json');
};

export const exportLeadsToCSV = (leads: Lead[]) => {
  if (leads.length === 0) return;

  const headers = Object.keys(leads[0]);
  const csvRows = [
    headers.join(','), // header row
    ...leads.map(lead =>
      headers.map(fieldName =>
        JSON.stringify(lead[fieldName as keyof Lead], (key, value) => value === null ? '' : value)
      ).join(',')
    )
  ];

  const csvString = csvRows.join('\r\n');
  downloadFile('kgents_leads.csv', csvString, 'text/csv;charset=utf-8;');
};
