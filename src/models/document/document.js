/**
 * Document Model.
 * @module models/document/document
 */

import { BaseModel } from '../../helpers';
import { Type } from '../../models';

export default BaseModel.extend({
  tableName: 'document',
  parent() {
    return this.belongsTo(Document);
  },
  type() {
    return this.belongsTo(Type);
  },
});
