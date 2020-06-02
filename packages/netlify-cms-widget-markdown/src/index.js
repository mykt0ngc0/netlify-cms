import controlComponent from './MarkdownControl';
import previewComponent from './MarkdownPreview';
import schema from './Schema';

const Widget = (opts = {}) => ({
  name: 'markdown',
  controlComponent,
  previewComponent,
  schema,
  ...opts,
});

export const NetlifyCmsWidgetMarkdown = { Widget, controlComponent, previewComponent };
export default NetlifyCmsWidgetMarkdown;
