export default {
  list (sender, params, axiosOption, httpOption) {
    return sender.doUrl('/admin/flow/flowCategory/list', 'post', params, axiosOption, httpOption);
  },

  view (sender, params, axiosOption, httpOption) {
    return sender.doUrl('/admin/flow/flowCategory/view', 'get', params, axiosOption, httpOption);
  },

  add (sender, params, axiosOption, httpOption) {
    return sender.doUrl('/admin/flow/flowCategory/add', 'post', params, axiosOption, httpOption);
  },

  update (sender, params, axiosOption, httpOption) {
    return sender.doUrl('/admin/flow/flowCategory/update', 'post', params, axiosOption, httpOption);
  },

  delete (sender, params, axiosOption, httpOption) {
    return sender.doUrl('/admin/flow/flowCategory/delete', 'post', params, axiosOption, httpOption);
  },
}
