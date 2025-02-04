const ROLES = {
    PRESIDENT: 'president',
    VICE_PRESIDENT: 'vice-president',
    HR: 'human resources',
    STAFF: 'staff',
    FINANCE: 'finance officer',
  };
  
  const ACTIONS = {
    CREATE_USER: 'createUser',
    DELETE_USER: 'deleteUser',
    UPDATE_USER: 'updateUser',
    VIEW_USERS: 'viewUsers',
  };
  
  // Define which roles have access to which actions
  const rolePermissions = {
    [ROLES.PRESIDENT]: [ACTIONS.CREATE_USER, ACTIONS.DELETE_USER, ACTIONS.UPDATE_USER, ACTIONS.VIEW_USERS, 'manageRoles'],
    [ROLES.VICE_PRESIDENT]: [ACTIONS.CREATE_USER, ACTIONS.VIEW_USERS, ACTIONS.UPDATE_USER,  ACTIONS.DELETE_USER],
    [ROLES.HR]: [ACTIONS.CREATE_USER, ACTIONS.VIEW_USERS, ACTIONS.UPDATE_USER],
    [ROLES.STAFF]: [ACTIONS.VIEW_USERS],
  };
  
  // Function to check if a role has permission
  const canPerformAction = (role, action) => {
    return rolePermissions[role]?.includes(action) || false;
  };
  
  module.exports = { ROLES, ACTIONS, rolePermissions, canPerformAction };
  