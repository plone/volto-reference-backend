/**
 * Role Permission Repository.
 * @module repositories/RolePermission/RolePermission
 */

import { RolePermission } from '../../models';
import { BaseRepository } from '../../helpers';

/**
 * A Repository for Role Permission.
 * @class RolePermissionRepository
 * @extends RolePermissionRepository
 */
export class RolePermissionRepository extends BaseRepository {
  /**
   * Construct a RolePermissionRepository.
   * @constructs RolePermissionRepository
   */
  constructor() {
    super(RolePermission);
  }
}

export default new RolePermissionRepository();
