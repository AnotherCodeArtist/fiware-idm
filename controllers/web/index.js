module.exports = {
  admins: require('../../controllers/web/admins'),
  notifies: require('../../controllers/web/notifies'),
  list_users: require('../../controllers/web/list_users'),
  applications: require('../../controllers/web/applications'),
  authorize_org_apps: require('../../controllers/web/authorize_org_apps'),
  authorize_user_apps: require('../../controllers/web/authorize_user_apps'),
  trusted_apps: require('../../controllers/web/trusted_apps'),
  authzforces: require('../../controllers/web/authzforces'),
  check_permissions: require('../../controllers/web/check_permissions'),
  homes: require('../../controllers/web/homes'),
  roles: require('../../controllers/web/roles'),
  permissions: require('../../controllers/web/permissions'),
  usage_policies: require('../../controllers/web/usage_policies'),
  ptps: require('../../controllers/web/ptps'),
  pep_proxies: require('../../controllers/web/pep_proxies'),
  iot_agents: require('../../controllers/web/iot_agents'),
  users: require('../../controllers/web/users'),
  organizations: require('../../controllers/web/organizations'),
  manage_members: require('../../controllers/web/manage_members'),
  settings: require('../../controllers/web/settings'),
  sessions: require('../../controllers/web/sessions')
};
