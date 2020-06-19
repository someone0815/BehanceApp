import moment from 'moment';

export default {
  methods: {
    // generate tokens
    formatDate(dateString) {
      return moment(String(dateString)).fromNow();
    },
    formatDateProject(dateString) {
      return moment(String(dateString)).format('MMMM Do YYYY');
    },
  },
};

// export function formatDate(dateString) {
//   return moment(String(dateString)).fromNow();
// }
// export function formatDateProject(dateString) {
//   return moment(String(dateString)).format('MMMM Do YYYY');
// }
