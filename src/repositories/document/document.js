/**
 * Document Repository.
 * @module repositories/Document/Document
 */

import { Document } from '../../models';
import { BaseRepository } from '../../helpers';

/**
 * A Repository for Document.
 * @class DocumentRepository
 * @extends DocumentRepository
 */
export class DocumentRepository extends BaseRepository {
  /**
   * Construct a DocumentRepository for Document.
   * @constructs DocumentRepository
   */
  constructor() {
    super(Document);
  }
}

export default new DocumentRepository();
