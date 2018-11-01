/**
 * Document Repository.
 * @module repositories/document/document
 */

import autobind from 'autobind-decorator';

import { Document } from '../../models';
import { BaseRepository } from '../../helpers';

@autobind
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
