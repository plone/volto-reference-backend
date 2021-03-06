/**
 * User Role Document Repository.
 * @module repositories/UserRoleDocument/UserRoleDocument
 */

import { UserRoleDocument } from '../../models';
import { BaseRepository } from '../../helpers';

/**
 * A Repository for User Role Document.
 * @class UserRoleDocumentRepository
 * @extends UserRoleDocumentRepository
 */
export class UserRoleDocumentRepository extends BaseRepository {
  /**
   * Construct a UserRoleDocumentRepository.
   * @constructs UserRoleDocumentRepository
   */
  constructor() {
    super(UserRoleDocument);
  }
}

export default new UserRoleDocumentRepository();
