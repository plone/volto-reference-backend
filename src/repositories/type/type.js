/**
 * Type Repository.
 * @module repositories/document/document
 */

import { Type } from '../../models';
import { BaseRepository } from '../../helpers';

/**
 * A Repository for Type.
 * @class TypeRepository
 * @extends TypeRepository
 */
export class TypeRepository extends BaseRepository {
  /**
   * Construct a TypeRepository for Type.
   * @constructs TypeRepository
   */
  constructor() {
    super(Type);
  }
}

export default new TypeRepository();
