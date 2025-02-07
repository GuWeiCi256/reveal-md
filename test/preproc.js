/* eslint-disable no-unused-vars */
module.exports = (markdown, _options) =>
  new Promise((resolve, _reject) => {
    const output = markdown
      .split('\n')
      .map((line, index) => {
        if (!/^#/.test(line) || index === 0) return line;
        if (/^\+ /.test(line) || (/ \+ /.test(line))) line +=' <!-- .element: class="fragment"-->' ;
        const is_vertical = /#\^/.test(line);
        return (is_vertical ? '\n----\n\n' : '\n---\n\n') + line.replace('#^', '#');
      })
      .join('\n');

    return resolve(output);
  });
