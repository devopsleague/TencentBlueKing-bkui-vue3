/*
 * Tencent is pleased to support the open source community by making
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 *
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) is licensed under the MIT License.
 *
 * License for 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition):
 *
 * ---------------------------------------------------
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of
 * the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
import { defineComponent } from 'vue';

import { BASIC_DATA } from './options';

import './tree.less';
export default defineComponent({
  components: {},
  data() {
    return {
      treeData: [...BASIC_DATA],
    };
  },
  methods: {
    getPrefixIcon(params, renderType) {
      const {
        __attr__: { hasChildNode, isOpen, isRoot },
      } = params;
      const isAction = renderType === 'node_action';
      const childeFont = hasChildNode ? '+' : '*';
      const openFont = isOpen ? '-' : childeFont;
      const rootFont = isRoot ? 'R' : 'C';
      const fontIcon = !isAction ? rootFont : openFont;
      return (
        <span
          style='font-size: 8px; text-align: center;'
          class='custom-node'
        >
          {fontIcon}
        </span>
      );
    },
  },
  render() {
    return (
      <div class={'row'}>
        <div class={'column'}>
          <span>function 返回对象</span>
          <div class={'cell'}>
            <bk-tree
              children='children'
              data={this.treeData}
              label='name'
              levelLine={true}
              prefix-icon={this.getPrefixIcon}
            />
          </div>
        </div>
      </div>
    );
  },
});
