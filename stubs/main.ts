/*
 * adonis-lucid-filter
 *
 * (c) Lookin Anton <alf@lookinlab.ru>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

export const stubsRoot = dirname(fileURLToPath(import.meta.url));
