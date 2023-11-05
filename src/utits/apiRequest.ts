import { apiUrl } from '../constants/api';

// export function sendSearchQuery(value: string) {
//   props.updateLoadingStatus(true);
//   localStorage.setItem('searchValue', value);
//   fetch(value ? `${apiUrl}/?search=${value}` : `${apiUrl}`)
//     .then((res) => res.json())
//     .then((res) => {
//       props.updateData(res);
//     })
//     .catch((error) => console.log(error))
//     .finally(() => {
//       props.updateLoadingStatus(false);
//     });
// }

export function fetchData(value: string) {
  localStorage.setItem('searchValue', value);
  return fetch(value ? `${apiUrl}/?search=${value}` : `${apiUrl}`);
}
