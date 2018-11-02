/**
 * User Repository.
 * @module repositories/user/user
 */

import { User } from '../../models';
import { BaseRepository } from '../../helpers';

/**
 * A Repository for User.
 * @class UserRepository
 * @extends UserRepository
 */
export class UserRepository extends BaseRepository {
  /**
   * Construct a UserRepository for User.
   * @constructs UserRepository
   */
  constructor() {
    super(User);
  }
}

export default new UserRepository();
