(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode('[data-theme=auto]{--font-mono: monospace;--font-ui: inherit;--bg-primary: transparent;--bg-secondary: transparent;--bg-tertiary: transparent;--bg-canvas: #000000;--text-primary: currentColor;--text-secondary: color-mix(in srgb, currentColor 80%, transparent);--text-muted: color-mix(in srgb, currentColor 60%, transparent);--text-disabled: color-mix(in srgb, currentColor 40%, transparent);--border-primary: color-mix(in srgb, currentColor 15%, transparent);--border-secondary: color-mix(in srgb, currentColor 25%, transparent);--accent-primary: #4a9eff;--accent-primary-hover: #3a8eef;--accent-primary-active: #2a7edf;--accent-secondary: #7c4dff;--error-bg: rgba(204, 0, 0, .08);--error-text: #cc0000;--error-border: rgba(204, 0, 0, .2);--success-bg: rgba(76, 175, 80, .08);--success-text: #4caf50;--success-border: rgba(76, 175, 80, .2);--overlay-bg: rgba(0, 0, 0, .75);--overlay-backdrop: rgba(0, 0, 0, .95);--shadow-sm: none;--shadow-md: none;--shadow-lg: none;--code-bg: #fafafa;--code-text: #1e1e1e;--code-line-number: #999999;--code-line-border: #e0e0e0;--code-selection: rgba(173, 214, 255, .4);--syntax-comment: #6a9955;--syntax-keyword: #0000ff;--syntax-string: #a31515;--syntax-number: #098658;--syntax-operator: #1e1e1e;--syntax-function: #795e26;--syntax-class: #267f99;--syntax-punctuation: #1e1e1e;--tab-bg: transparent;--tab-text: color-mix(in srgb, currentColor 60%, transparent);--tab-text-hover: color-mix(in srgb, currentColor 80%, transparent);--tab-text-active: currentColor;--tab-border-active: currentColor;--button-bg: transparent;--button-border: color-mix(in srgb, currentColor 25%, transparent);--button-text: currentColor;--button-bg-hover: color-mix(in srgb, currentColor 10%, transparent);--button-border-hover: color-mix(in srgb, currentColor 40%, transparent);--button-text-hover: currentColor;--recompile-bg: color-mix(in srgb, currentColor 10%, transparent);--recompile-text: currentColor;--recompile-bg-hover: color-mix(in srgb, currentColor 15%, transparent);--recompile-bg-active: color-mix(in srgb, currentColor 20%, transparent);--image-viewer-bg: transparent;--pane-radius: 0;--pane-shadow: none}@media (prefers-color-scheme: dark){[data-theme=auto]{--error-bg: rgba(255, 107, 107, .1);--error-text: #ff6b6b;--error-border: rgba(255, 107, 107, .25);--success-bg: rgba(107, 207, 107, .1);--success-text: #6bcf6b;--success-border: rgba(107, 207, 107, .25);--code-bg: #1e1e1e;--code-text: #d4d4d4;--code-line-number: #858585;--code-line-border: #3a3a3a;--code-selection: rgba(38, 79, 120, .6);--syntax-comment: #6a9955;--syntax-keyword: #569cd6;--syntax-string: #ce9178;--syntax-number: #b5cea8;--syntax-operator: #d4d4d4;--syntax-function: #dcdcaa;--syntax-class: #4ec9b0;--syntax-punctuation: #d4d4d4}}[data-theme=light]{--font-mono: "Monaco", "Menlo", "Courier New", monospace;--font-ui: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--bg-primary: #f5f5f5;--bg-secondary: #ffffff;--bg-tertiary: #f8f8f8;--bg-canvas: #000000;--text-primary: #000000;--text-secondary: #333333;--text-muted: #666666;--text-disabled: #999999;--border-primary: #e0e0e0;--border-secondary: #cccccc;--accent-primary: #4a9eff;--accent-primary-hover: #3a8eef;--accent-primary-active: #2a7edf;--accent-secondary: #7c4dff;--error-bg: #fff0f0;--error-text: #cc0000;--error-border: #ffcccc;--success-bg: #e8f5e9;--success-text: #4caf50;--success-border: #4caf50;--overlay-bg: rgba(0, 0, 0, .75);--overlay-backdrop: rgba(0, 0, 0, .95);--shadow-sm: 0 2px 8px rgba(0, 0, 0, .1);--shadow-md: 0 10px 30px rgba(0, 0, 0, .2);--shadow-lg: 0 20px 60px rgba(0, 0, 0, .25);--code-bg: #ffffff;--code-text: #000000;--code-line-number: #999999;--code-line-border: #e0e0e0;--code-selection: rgba(173, 214, 255, .4);--syntax-comment: #6a9955;--syntax-keyword: #0000ff;--syntax-string: #a31515;--syntax-number: #098658;--syntax-operator: #000000;--syntax-function: #795e26;--syntax-class: #267f99;--syntax-punctuation: #000000;--tab-bg: #f8f8f8;--tab-text: #666666;--tab-text-hover: #333333;--tab-text-active: #000000;--tab-border-active: #4a9eff;--button-bg: transparent;--button-border: #cccccc;--button-text: #666666;--button-bg-hover: #f0f0f0;--button-border-hover: #999999;--button-text-hover: #333333;--recompile-bg: #e8e8e8;--recompile-text: #333333;--recompile-bg-hover: #d8d8d8;--recompile-bg-active: #c8c8c8;--image-viewer-bg: #f5f5f5;--pane-radius: 8px;--pane-shadow: var(--shadow-lg), var(--shadow-sm)}[data-theme=dark]{--font-mono: "Monaco", "Menlo", "Courier New", monospace;--font-ui: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--bg-primary: #1a1a1a;--bg-secondary: #252525;--bg-tertiary: #2a2a2a;--bg-canvas: #000000;--text-primary: #ffffff;--text-secondary: #e0e0e0;--text-muted: #a0a0a0;--text-disabled: #666666;--border-primary: #3a3a3a;--border-secondary: #4a4a4a;--accent-primary: #4a9eff;--accent-primary-hover: #5aadff;--accent-primary-active: #3a8eef;--accent-secondary: #9c7cff;--error-bg: #3a1a1a;--error-text: #ff6b6b;--error-border: #5a2a2a;--success-bg: #1a3a1a;--success-text: #6bcf6b;--success-border: #2a5a2a;--overlay-bg: rgba(0, 0, 0, .85);--overlay-backdrop: rgba(0, 0, 0, .98);--shadow-sm: 0 2px 8px rgba(0, 0, 0, .3);--shadow-md: 0 10px 30px rgba(0, 0, 0, .4);--shadow-lg: 0 20px 60px rgba(0, 0, 0, .5);--code-bg: #1e1e1e;--code-text: #d4d4d4;--code-line-number: #858585;--code-line-border: #3a3a3a;--code-selection: rgba(38, 79, 120, .6);--syntax-comment: #6a9955;--syntax-keyword: #569cd6;--syntax-string: #ce9178;--syntax-number: #b5cea8;--syntax-operator: #d4d4d4;--syntax-function: #dcdcaa;--syntax-class: #4ec9b0;--syntax-punctuation: #d4d4d4;--tab-bg: #2a2a2a;--tab-text: #a0a0a0;--tab-text-hover: #d0d0d0;--tab-text-active: #ffffff;--tab-border-active: #4a9eff;--button-bg: transparent;--button-border: #4a4a4a;--button-text: #a0a0a0;--button-bg-hover: #3a3a3a;--button-border-hover: #5a5a5a;--button-text-hover: #e0e0e0;--recompile-bg: #3a3a3a;--recompile-text: #e0e0e0;--recompile-bg-hover: #4a4a4a;--recompile-bg-active: #5a5a5a;--image-viewer-bg: #2a2a2a;--pane-radius: 8px;--pane-shadow: var(--shadow-lg), var(--shadow-sm)}[data-theme=system]{--font-mono: "Monaco", "Menlo", "Courier New", monospace;--font-ui: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--bg-primary: #f5f5f5;--bg-secondary: #ffffff;--bg-tertiary: #f8f8f8;--bg-canvas: #000000;--text-primary: #000000;--text-secondary: #333333;--text-muted: #666666;--text-disabled: #999999;--border-primary: #e0e0e0;--border-secondary: #cccccc;--accent-primary: #4a9eff;--accent-primary-hover: #3a8eef;--accent-primary-active: #2a7edf;--accent-secondary: #7c4dff;--error-bg: #fff0f0;--error-text: #cc0000;--error-border: #ffcccc;--success-bg: #e8f5e9;--success-text: #4caf50;--success-border: #4caf50;--overlay-bg: rgba(0, 0, 0, .75);--overlay-backdrop: rgba(0, 0, 0, .95);--shadow-sm: 0 2px 8px rgba(0, 0, 0, .1);--shadow-md: 0 10px 30px rgba(0, 0, 0, .2);--shadow-lg: 0 20px 60px rgba(0, 0, 0, .25);--code-bg: #ffffff;--code-text: #000000;--code-line-number: #999999;--code-line-border: #e0e0e0;--code-selection: rgba(173, 214, 255, .4);--syntax-comment: #6a9955;--syntax-keyword: #0000ff;--syntax-string: #a31515;--syntax-number: #098658;--syntax-operator: #000000;--syntax-function: #795e26;--syntax-class: #267f99;--syntax-punctuation: #000000;--tab-bg: #f8f8f8;--tab-text: #666666;--tab-text-hover: #333333;--tab-text-active: #000000;--tab-border-active: #4a9eff;--button-bg: transparent;--button-border: #cccccc;--button-text: #666666;--button-bg-hover: #f0f0f0;--button-border-hover: #999999;--button-text-hover: #333333;--recompile-bg: #e8e8e8;--recompile-text: #333333;--recompile-bg-hover: #d8d8d8;--recompile-bg-active: #c8c8c8;--image-viewer-bg: #f5f5f5;--pane-radius: 8px;--pane-shadow: var(--shadow-lg), var(--shadow-sm)}@media (prefers-color-scheme: dark){[data-theme=system]{--bg-primary: #1a1a1a;--bg-secondary: #252525;--bg-tertiary: #2a2a2a;--bg-canvas: #000000;--text-primary: #ffffff;--text-secondary: #e0e0e0;--text-muted: #a0a0a0;--text-disabled: #666666;--border-primary: #3a3a3a;--border-secondary: #4a4a4a;--accent-primary: #4a9eff;--accent-primary-hover: #5aadff;--accent-primary-active: #3a8eef;--accent-secondary: #9c7cff;--error-bg: #3a1a1a;--error-text: #ff6b6b;--error-border: #5a2a2a;--success-bg: #1a3a1a;--success-text: #6bcf6b;--success-border: #2a5a2a;--overlay-bg: rgba(0, 0, 0, .85);--overlay-backdrop: rgba(0, 0, 0, .98);--shadow-sm: 0 2px 8px rgba(0, 0, 0, .3);--shadow-md: 0 10px 30px rgba(0, 0, 0, .4);--shadow-lg: 0 20px 60px rgba(0, 0, 0, .5);--code-bg: #1e1e1e;--code-text: #d4d4d4;--code-line-number: #858585;--code-line-border: #3a3a3a;--code-selection: rgba(38, 79, 120, .6);--syntax-comment: #6a9955;--syntax-keyword: #569cd6;--syntax-string: #ce9178;--syntax-number: #b5cea8;--syntax-operator: #d4d4d4;--syntax-function: #dcdcaa;--syntax-class: #4ec9b0;--syntax-punctuation: #d4d4d4;--tab-bg: #2a2a2a;--tab-text: #a0a0a0;--tab-text-hover: #d0d0d0;--tab-text-active: #ffffff;--tab-border-active: #4a9eff;--button-bg: transparent;--button-border: #4a4a4a;--button-text: #a0a0a0;--button-bg-hover: #3a3a3a;--button-border-hover: #5a5a5a;--button-text-hover: #e0e0e0;--recompile-bg: #3a3a3a;--recompile-text: #e0e0e0;--recompile-bg-hover: #4a4a4a;--recompile-bg-active: #5a5a5a;--image-viewer-bg: #2a2a2a;--pane-radius: 8px;--pane-shadow: var(--shadow-lg), var(--shadow-sm)}}.unstyled{--pane-radius: 0 !important;--pane-shadow: none !important}:root{--glass-bg: rgba(30, 30, 35, .65);--glass-bg-hover: rgba(30, 30, 35, .8);--glass-border: 1px solid rgba(255, 255, 255, .1);--glass-shadow: 0 4px 16px rgba(0, 0, 0, .25), 0 2px 4px rgba(0, 0, 0, .15), inset 0 1px 0 rgba(255, 255, 255, .1);--glass-shadow-sm: 0 2px 8px rgba(0, 0, 0, .25), inset 0 1px 0 rgba(255, 255, 255, .08);--glass-blur: blur(20px);--glass-radius: 6px;--glass-radius-sm: 6px;--glass-text: rgba(255, 255, 255, .9);--glass-text-muted: rgba(255, 255, 255, .6)}.stats-container{position:absolute;bottom:12px;left:12px;z-index:1000;display:flex;flex-direction:column;align-items:flex-start;gap:6px}.fps-counter{padding:6px 10px;background:var(--glass-bg);color:var(--glass-text);font-family:var(--font-mono);font-size:11px;font-weight:500;border-radius:var(--glass-radius-sm);border:var(--glass-border);cursor:pointer;-webkit-user-select:none;user-select:none;backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);transition:all .2s ease}.fps-counter:hover{background:var(--glass-bg-hover)}.stats-grid{display:flex;flex-direction:row;gap:6px;opacity:0;visibility:hidden;transform:translateY(8px);transition:opacity .2s ease,transform .2s ease,visibility .2s;pointer-events:none}.stats-grid.open{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto}.stat-item{padding:6px 10px;background:var(--glass-bg);border-radius:var(--glass-radius-sm);border:var(--glass-border);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);display:flex;flex-direction:column;align-items:center;gap:2px;min-width:48px}.stat-value{color:var(--glass-text);font-family:var(--font-mono);font-size:11px;font-weight:600;white-space:nowrap}.stat-label{color:var(--glass-text-muted);font-family:var(--font-ui);font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:.5px}.playback-controls{position:absolute;bottom:12px;right:12px;z-index:1000}.controls-menu-button{padding:6px 8px;background:var(--glass-bg);color:var(--glass-text);border:var(--glass-border);border-radius:var(--glass-radius-sm);cursor:pointer;backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);transition:all .2s ease;display:flex;align-items:center;justify-content:center;width:44px;height:44px;font-size:20px;font-weight:300;line-height:1}.controls-menu-button:hover{background:var(--glass-bg-hover);transform:scale(1.05)}.controls-menu-button:active{transform:scale(.95)}.controls-grid{position:absolute;bottom:0;right:0;display:grid;grid-template-columns:44px 44px 44px 44px;grid-template-rows:44px 44px;gap:6px;opacity:0;visibility:hidden;transform:scale(.8);transform-origin:bottom right;transition:opacity .2s ease,transform .2s ease,visibility .2s;pointer-events:none}.controls-grid.open{opacity:1;visibility:visible;transform:scale(1);pointer-events:auto}.control-button{padding:6px 8px;background:var(--glass-bg);color:var(--glass-text);border:var(--glass-border);border-radius:var(--glass-radius-sm);cursor:pointer;backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);transition:all .2s ease;display:flex;align-items:center;justify-content:center;width:44px;height:44px}.control-button:hover{background:var(--glass-bg-hover);transform:scale(1.05)}.control-button:active{transform:scale(.95)}.control-button svg{width:16px;height:16px;fill:currentColor}.playback-controls .controls-menu-button{position:relative;z-index:1}.playback-controls.open>.controls-menu-button{opacity:0;pointer-events:none}.shader-error-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:#000000f2;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:2000;padding:60px;overflow-y:auto}.error-overlay-content{background:#1a1a1a;border-radius:6px;max-width:900px;width:100%;display:flex;flex-direction:column;box-shadow:0 20px 60px #000c,0 0 1px #ffffff1a;border:1px solid #2a2a2a;max-height:calc(100vh - 120px)}.error-header{display:flex;align-items:center;justify-content:space-between;padding:18px 24px;background:linear-gradient(135deg,#c62828,#b71c1c);color:#fff;border-radius:6px 6px 0 0;border-bottom:1px solid rgba(0,0,0,.3);box-shadow:0 2px 8px #0003}.error-title{font-size:15px;font-weight:600;font-family:var(--font-ui);display:flex;align-items:center;gap:8px;letter-spacing:-.01em}.error-close{background:transparent;border:none;color:#ffffffe6;font-size:24px;line-height:1;cursor:pointer;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:all .2s ease;opacity:.8}.error-close:hover{background:#ffffff26;opacity:1;transform:scale(1.05)}.error-body{padding:24px;overflow-y:auto;flex:1}.error-section{margin-bottom:24px}.error-section:last-child{margin-bottom:0}.error-pass-name{font-size:13px;font-weight:600;color:#ffa726;font-family:var(--font-mono);margin-bottom:10px;padding-bottom:6px;border-bottom:1px solid #2a2a2a;letter-spacing:.02em}.error-content{margin:0;padding:14px 16px;background:#0f0f0f;border-radius:4px;color:#ff6b6b;font-size:13px;font-family:var(--font-mono);line-height:1.6;overflow-x:auto;border:1px solid #2a2a2a;white-space:pre-wrap;word-break:break-word}.error-code-context{margin:12px 0 0;padding:14px 16px;background:#0d0d0d;border-radius:4px;color:#b0b0b0;font-size:12px;font-family:var(--font-mono);line-height:1.6;overflow-x:auto;border:1px solid #2a2a2a;white-space:pre}.error-code-context .context-line{color:#666;display:block}.error-code-context .error-line-highlight{color:#fff;background:#c6282840;display:block;font-weight:600;border-left:3px solid #c62828;margin-left:-16px;padding-left:13px}.context-lost-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:#000000e6;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:3000}.context-lost-content{text-align:center;color:#fff;padding:40px}.context-lost-icon{margin-bottom:16px;opacity:.8}.context-lost-spinner{width:48px;height:48px;border:3px solid rgba(255,255,255,.2);border-top-color:#fff;border-radius:50%;margin:0 auto 16px;animation:context-lost-spin 1s linear infinite}@keyframes context-lost-spin{to{transform:rotate(360deg)}}.context-lost-title{font-size:18px;font-weight:600;margin-bottom:8px;font-family:var(--font-ui)}.context-lost-message{font-size:14px;opacity:.7;margin-bottom:20px;font-family:var(--font-ui)}.context-lost-reload{background:#fff;color:#000;border:none;padding:10px 24px;border-radius:6px;font-size:14px;font-weight:500;cursor:pointer;transition:transform .2s,box-shadow .2s;font-family:var(--font-ui)}.context-lost-reload:hover{transform:scale(1.02);box-shadow:0 4px 12px #fff3}.context-lost-reload:active{transform:scale(.98)}.recording-indicator{position:absolute;top:12px;right:12px;z-index:1000;display:flex;align-items:center;gap:6px;padding:6px 10px;background:#dc2626d9;border-radius:var(--glass-radius-sm);border:1px solid rgba(255,100,100,.3);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm)}.recording-dot{width:8px;height:8px;background:#fff;border-radius:50%;animation:recording-pulse 1s ease-in-out infinite}@keyframes recording-pulse{0%,to{opacity:1}50%{opacity:.4}}.recording-text{color:#fff;font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.5px}.control-button.recording{background:#dc2626b3;border-color:#ff64644d}.control-button.recording:hover{background:#dc2626d9}.control-button.recording svg{fill:#fff}.media-permission-banner{position:absolute;bottom:48px;left:50%;transform:translate(-50%);background:var(--glass-bg);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:var(--glass-border);box-shadow:var(--glass-shadow);color:#ffffffe6;padding:8px 16px;border-radius:6px;font-size:13px;font-family:var(--font-ui);display:flex;align-items:center;gap:12px;z-index:100;white-space:nowrap}.media-banner-button{background:#4a9effcc;color:#fff;border:none;padding:4px 12px;border-radius:4px;cursor:pointer;font-size:13px;font-family:inherit}.media-banner-button:hover{background:#4a9eff}.script-error-overlay{position:absolute;bottom:48px;left:12px;right:12px;z-index:1500;pointer-events:auto}.script-error-content{background:#1a1a1a;border-radius:6px;box-shadow:0 8px 32px #0009,0 0 1px #ffffff1a;border:1px solid #2a2a2a;overflow:hidden}.script-error-header{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:linear-gradient(135deg,#e65100,#bf360c);color:#fff;border-bottom:1px solid rgba(0,0,0,.3)}.script-error-header.disabled{background:linear-gradient(135deg,#6d4c41,#4e342e)}.script-error-header.warning{background:linear-gradient(135deg,#f9a825,#f57f17);color:#1a1a1a}.script-error-header.warning .script-error-close{color:#000000b3}.script-error-header.warning .script-error-close:hover{background:#00000026;color:#000000e6}.script-error-title{font-size:13px;font-weight:600;font-family:var(--font-mono);display:flex;align-items:center;gap:6px}.script-error-close{background:transparent;border:none;color:#ffffffe6;font-size:20px;line-height:1;cursor:pointer;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;opacity:.8;transition:all .2s ease}.script-error-close:hover{background:#ffffff26;opacity:1}.script-error-message{margin:0;padding:10px 14px;color:#ffab91;font-size:12px;font-family:var(--font-mono);line-height:1.5;white-space:pre-wrap;word-break:break-word;max-height:80px;overflow-y:auto}.script-error-stack{margin:0;padding:6px 14px 10px;color:#888;font-size:11px;font-family:var(--font-mono);line-height:1.4;white-space:pre-wrap;word-break:break-word;max-height:60px;overflow-y:auto;border-top:1px solid #2a2a2a}.script-overlay{position:absolute;z-index:500;padding:6px 10px;background:var(--glass-bg);color:var(--glass-text);font-family:var(--font-mono);font-size:11px;border-radius:var(--glass-radius-sm);border:var(--glass-border);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);pointer-events:none;white-space:pre;max-width:calc(100% - 24px);overflow:hidden;text-overflow:ellipsis}.script-overlay.hidden{display:none}.script-overlay.top-left{top:12px;left:12px}.script-overlay.top-right{top:12px;right:12px}.script-overlay.bottom-left{bottom:12px;left:12px}.script-overlay.bottom-right{bottom:12px;right:12px}@media (prefers-reduced-motion: reduce){*,*:before,*:after{transition-duration:.01ms!important;animation-duration:.01ms!important;animation-iteration-count:1!important}}@media (max-width: 428px){.stats-container{bottom:8px;left:8px}.playback-controls{bottom:8px;right:8px}.script-error-overlay{left:8px;right:8px;bottom:40px}.script-overlay.top-left{top:8px;left:8px}.script-overlay.top-right{top:8px;right:8px}.script-overlay.bottom-left{bottom:8px;left:8px}.script-overlay.bottom-right{bottom:8px;right:8px}}.uniforms-panel-wrapper{position:absolute;top:16px;right:16px;z-index:100;display:flex;flex-direction:column;align-items:flex-end}.uniforms-toggle-button{width:44px;height:44px;padding:6px;background:var(--glass-bg);border:var(--glass-border);border-radius:var(--glass-radius-sm);color:var(--glass-text);cursor:pointer;backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);transition:all .2s ease,opacity .15s ease;display:flex;align-items:center;justify-content:center}.uniforms-toggle-button:hover{background:var(--glass-bg-hover);transform:scale(1.05)}.uniforms-toggle-button:active{transform:scale(.95)}.uniforms-toggle-button svg{width:16px;height:16px}.uniforms-toggle-button.hidden{opacity:0;transform:scale(.8);pointer-events:none;position:absolute}.uniforms-panel{width:175px;max-height:calc(100vh - 100px);background:var(--glass-bg);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);border-radius:var(--glass-radius);border:var(--glass-border);box-shadow:var(--glass-shadow);overflow:hidden;display:flex;flex-direction:column;transform-origin:top right;transition:opacity .2s ease,transform .2s ease,max-height .2s ease}.uniforms-panel.closed{opacity:0;transform:scale(.25) translate(0);transform-origin:top right;pointer-events:none;max-height:0;padding:0}.uniforms-panel-header{padding:10px 14px;font-family:var(--font-ui);font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--glass-text-muted);background:#ffffff08;border-bottom:1px solid rgba(255,255,255,.06);flex-shrink:0;display:flex;justify-content:space-between;align-items:center}.uniforms-panel-close{background:transparent;border:none;color:var(--glass-text-muted);font-size:18px;line-height:1;cursor:pointer;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:all .15s ease}.uniforms-panel-close:hover{background:#ffffff1a;color:var(--glass-text)}.uniforms-panel-content{flex:1;overflow-y:auto;overflow-x:hidden}.uniforms-panel .uniform-controls{padding:12px;gap:12px;background:transparent}.uniforms-panel .uniform-controls-header{display:none}.uniforms-panel .uniform-controls-list{gap:14px}.uniforms-panel .uniform-control{gap:6px}.uniforms-panel .uniform-control-label{font-size:11px;color:var(--glass-text)}.uniforms-panel .uniform-control-value{font-size:10px;padding:1px 4px;min-width:40px;color:var(--glass-text-muted);background:#0003;border-radius:3px}.uniforms-panel .uniform-control-slider{height:4px;background:#ffffff26}.uniforms-panel .uniform-control-slider::-webkit-slider-runnable-track{height:4px;background:#ffffff26}.uniforms-panel .uniform-control-slider::-webkit-slider-thumb{width:12px;height:12px;margin-top:-4px;background:#ffffffe6;box-shadow:0 1px 4px #0000004d}.uniforms-panel .uniform-control-slider::-moz-range-track{height:4px;background:#ffffff26}.uniforms-panel .uniform-control-slider::-moz-range-thumb{width:12px;height:12px;background:#ffffffe6;box-shadow:0 1px 4px #0000004d}.uniforms-panel .uniform-control-toggle{width:34px;height:18px}.uniforms-panel .uniform-control-toggle-slider{border-radius:18px}.uniforms-panel .uniform-control-toggle-slider:before{width:12px;height:12px;left:3px;bottom:3px}.uniforms-panel .uniform-control-toggle input:checked+.uniform-control-toggle-slider:before{transform:translate(16px)}.uniforms-panel .uniform-control-xy-pad{height:100px}.uniforms-panel .uniform-control-xy-handle{width:12px;height:12px}.uniforms-panel .uniform-control-color-swatch{height:28px}.uniforms-panel .uniform-control-vec-slider-row{gap:6px}.uniforms-panel .uniform-control-vec-component{font-size:9px;width:12px;color:var(--glass-text-muted)}.uniforms-panel .uniform-control-vec-value{font-size:9px;min-width:32px;color:var(--glass-text-muted);background:#0003;border-radius:3px}.uniforms-panel .uniform-control-xy-pad{background:#00000040;border:1px solid rgba(255,255,255,.1)}.uniforms-panel .uniform-control-xy-handle{background:#ffffffe6;box-shadow:0 1px 4px #0006}.uniforms-panel-content::-webkit-scrollbar{width:6px}.uniforms-panel-content::-webkit-scrollbar-track{background:transparent}.uniforms-panel-content::-webkit-scrollbar-thumb{background:#fff3;border-radius:3px}.uniforms-panel-content::-webkit-scrollbar-thumb:hover{background:#ffffff59}.uniform-controls{display:flex;flex-direction:column;gap:16px;padding:16px;height:100%;overflow-y:auto;background:var(--bg-secondary)}.uniform-controls-empty{color:var(--text-muted);font-size:13px;text-align:center;padding:20px}.uniform-controls-header{display:flex;justify-content:flex-end;padding-bottom:8px;border-bottom:1px solid var(--border-primary);margin-bottom:8px}.uniform-controls-reset{font-family:inherit;font-size:11px;padding:4px 10px;background:var(--bg-tertiary);color:var(--text-secondary);border:1px solid var(--border-primary);border-radius:4px;cursor:pointer;transition:background .15s ease,color .15s ease}.uniform-controls-reset:hover{background:var(--border-primary);color:var(--text-primary)}.uniform-controls-reset:active{transform:translateY(1px)}.uniform-controls-list{display:flex;flex-direction:column;gap:16px}.uniform-control{display:flex;flex-direction:column;gap:8px}.uniform-control-label-row{display:flex;justify-content:space-between;align-items:center}.uniform-control-label{font-family:var(--font-mono);font-size:12px;font-weight:500;color:var(--text-primary)}.uniform-control-value{font-family:var(--font-mono);font-size:11px;color:var(--text-muted);background:var(--bg-tertiary);padding:2px 6px;border-radius:3px;min-width:50px;text-align:right}.uniform-control-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:6px;background:var(--border-primary);border-radius:3px;outline:none;cursor:pointer}.uniform-control-slider::-webkit-slider-runnable-track{height:6px;background:var(--border-primary);border-radius:3px}.uniform-control-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:14px;height:14px;background:var(--accent-primary);border-radius:50%;cursor:pointer;margin-top:-4px;transition:transform .15s ease,box-shadow .15s ease}.uniform-control-slider::-webkit-slider-thumb:hover{transform:scale(1.1);box-shadow:0 2px 6px #0003}.uniform-control-slider::-webkit-slider-thumb:active{transform:scale(.95)}.uniform-control-slider::-moz-range-track{height:6px;background:var(--border-primary);border-radius:3px}.uniform-control-slider::-moz-range-thumb{width:14px;height:14px;background:var(--accent-primary);border:none;border-radius:50%;cursor:pointer;transition:transform .15s ease,box-shadow .15s ease}.uniform-control-slider::-moz-range-thumb:hover{transform:scale(1.1);box-shadow:0 2px 6px #0003}.uniform-control-slider::-moz-range-thumb:active{transform:scale(.95)}.uniform-control-slider:focus{outline:none}.uniform-control-slider:focus::-webkit-slider-thumb{box-shadow:0 0 0 3px var(--code-selection)}.uniform-control-slider:focus::-moz-range-thumb{box-shadow:0 0 0 3px var(--code-selection)}.uniform-control-toggle{position:relative;display:inline-block;width:40px;height:22px;cursor:pointer}.uniform-control-toggle input{opacity:0;width:0;height:0}.uniform-control-toggle-slider{position:absolute;top:0;left:0;right:0;bottom:0;background:var(--border-primary);border-radius:22px;transition:background .2s ease}.uniform-control-toggle-slider:before{content:"";position:absolute;width:16px;height:16px;left:3px;bottom:3px;background:var(--text-muted);border-radius:50%;transition:transform .2s ease,background .2s ease}.uniform-control-toggle input:checked+.uniform-control-toggle-slider{background:var(--accent-primary)}.uniform-control-toggle input:checked+.uniform-control-toggle-slider:before{transform:translate(18px);background:#fff}.uniform-control-toggle input:focus+.uniform-control-toggle-slider{box-shadow:0 0 0 2px var(--code-selection)}.uniform-control-xy-pad{position:relative;width:100%;height:120px;background:var(--bg-tertiary);border:1px solid var(--border-primary);border-radius:4px;cursor:crosshair;overflow:hidden}.uniform-control-xy-pad:before,.uniform-control-xy-pad:after{content:"";position:absolute;background:var(--border-primary);opacity:.5}.uniform-control-xy-pad:before{left:50%;top:0;bottom:0;width:1px}.uniform-control-xy-pad:after{top:50%;left:0;right:0;height:1px}.uniform-control-xy-handle{position:absolute;width:14px;height:14px;background:var(--accent-primary);border:2px solid white;border-radius:50%;transform:translate(-50%,-50%);box-shadow:0 2px 4px #0000004d;pointer-events:none;z-index:1}.uniform-control-color-wrapper{display:flex;align-items:center;gap:8px}.uniform-control-color-swatch{width:100%;height:32px;border-radius:4px;border:1px solid var(--border-primary);cursor:pointer;transition:box-shadow .15s ease}.uniform-control-color-swatch:hover{box-shadow:0 0 0 2px var(--accent-primary)}.uniform-control-color-input{position:absolute;width:0;height:0;opacity:0;pointer-events:none}.uniform-control-vec3{gap:6px}.uniform-control-vec-slider-row{display:flex;align-items:center;gap:8px}.uniform-control-vec-component{font-family:var(--font-mono);font-size:10px;font-weight:600;color:var(--text-muted);width:14px;text-align:center}.uniform-control-vec-slider{flex:1}.uniform-control-vec-value{min-width:40px;font-size:10px}.render-dialog-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;background:#000000b3;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:4000}.render-dialog{background:#1a1a1f;border:1px solid rgba(255,255,255,.1);border-radius:10px;box-shadow:0 20px 60px #0009;width:360px;max-width:calc(100% - 32px);overflow:hidden;font-family:var(--font-ui);color:#e0e0e0}.render-dialog-header{display:flex;align-items:center;justify-content:space-between;padding:14px 18px;background:linear-gradient(135deg,#1565c0,#0d47a1);color:#fff;border-bottom:1px solid rgba(0,0,0,.3)}.render-dialog-title{font-size:14px;font-weight:600;display:flex;align-items:center;gap:8px}.render-dialog-close{background:transparent;border:none;color:#fffc;font-size:20px;line-height:1;cursor:pointer;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:all .15s ease}.render-dialog-close:hover{background:#ffffff26;color:#fff}.render-dialog-body{padding:18px;display:flex;flex-direction:column;gap:14px}.render-field{display:flex;flex-direction:column;gap:5px}.render-field-label{font-size:12px;font-weight:500;color:#fff9;text-transform:uppercase;letter-spacing:.5px}.render-field-row{display:flex;gap:8px;align-items:center}.render-field-row span{color:#fff6;font-size:13px}.render-input{flex:1;background:#0f0f14;border:1px solid rgba(255,255,255,.1);border-radius:5px;color:#e0e0e0;font-family:var(--font-mono);font-size:13px;padding:7px 10px;outline:none;transition:border-color .15s}.render-input:focus{border-color:#648cff80}.render-input[type=number]{-moz-appearance:textfield}.render-input[type=number]::-webkit-inner-spin-button,.render-input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.render-format-group{display:flex;gap:8px}.render-format-option{flex:1;position:relative}.render-format-option input[type=radio]{position:absolute;opacity:0;pointer-events:none}.render-format-option label{display:block;text-align:center;padding:8px 12px;background:#0f0f14;border:1px solid rgba(255,255,255,.1);border-radius:5px;font-size:12px;font-weight:500;cursor:pointer;transition:all .15s}.render-format-option input[type=radio]:checked+label{background:#648cff26;border-color:#648cff80;color:#8ab4ff}.render-format-option label:hover{border-color:#fff3}.render-estimate{font-size:11px;color:#fff6;font-family:var(--font-mono);text-align:center;padding:4px 0}.render-dialog-actions{display:flex;gap:8px;padding:0 18px 18px}.render-btn{flex:1;padding:9px 16px;border-radius:6px;font-size:13px;font-weight:500;cursor:pointer;border:none;transition:all .15s;font-family:inherit}.render-btn-primary{background:linear-gradient(135deg,#1565c0,#0d47a1);color:#fff}.render-btn-primary:hover{filter:brightness(1.1)}.render-btn-primary:disabled{opacity:.5;cursor:not-allowed;filter:none}.render-btn-cancel{background:#ffffff14;color:#ffffffb3;border:1px solid rgba(255,255,255,.1)}.render-btn-cancel:hover{background:#ffffff1f}.render-progress{display:none;flex-direction:column;gap:8px;padding:18px}.render-progress.active{display:flex}.render-progress-bar-bg{height:6px;background:#0f0f14;border-radius:3px;overflow:hidden}.render-progress-bar{height:100%;background:linear-gradient(90deg,#1565c0,#42a5f5);border-radius:3px;width:0%;transition:width .1s ease}.render-progress-text{font-size:12px;color:#ffffff80;font-family:var(--font-mono);text-align:center}.multi-view-controls-wrapper{position:absolute;top:16px;right:16px;z-index:100;display:flex;flex-direction:column;align-items:flex-end}.multi-view-controls-toggle{width:44px;height:44px;padding:6px;background:var(--glass-bg);border:var(--glass-border);border-radius:var(--glass-radius-sm);color:var(--glass-text);cursor:pointer;backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);transition:all .2s ease,opacity .15s ease;display:flex;align-items:center;justify-content:center}.multi-view-controls-toggle:hover{background:var(--glass-bg-hover);transform:scale(1.05)}.multi-view-controls-toggle:active{transform:scale(.95)}.multi-view-controls-toggle svg{width:16px;height:16px}.multi-view-controls-toggle.hidden{opacity:0;transform:scale(.8);pointer-events:none;position:absolute}.multi-view-controls-panel{width:175px;max-height:calc(100vh - 100px);background:var(--glass-bg);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);border-radius:var(--glass-radius);border:var(--glass-border);box-shadow:var(--glass-shadow);overflow:hidden;display:flex;flex-direction:column;transform-origin:top right;transition:opacity .2s ease,transform .2s ease,max-height .2s ease}.multi-view-controls-panel.closed{opacity:0;transform:scale(.25) translate(0);transform-origin:top right;pointer-events:none;max-height:0;padding:0}.multi-view-controls-header{padding:10px 14px;font-family:var(--font-ui);font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--glass-text-muted);background:#ffffff08;border-bottom:1px solid rgba(255,255,255,.06);flex-shrink:0;display:flex;justify-content:space-between;align-items:center}.multi-view-controls-close{background:transparent;border:none;color:var(--glass-text-muted);font-size:18px;line-height:1;cursor:pointer;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:all .15s ease}.multi-view-controls-close:hover{background:#ffffff1a;color:var(--glass-text)}.controls-section{display:flex;flex-direction:column;gap:8px;padding:12px}.controls-section+.controls-section{padding-top:0}.section-label{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--glass-text-muted);padding-bottom:6px;border-bottom:1px solid rgba(255,255,255,.06);margin-bottom:4px}.playback-controls{flex-direction:row;gap:8px;padding:12px}.control-btn{width:44px;height:44px;border:none;border-radius:var(--glass-radius-sm);background:#ffffff1a;color:var(--glass-text);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s ease}.control-btn:hover{background:#fff3}.control-btn:active{transform:scale(.95)}.control-btn svg{width:16px;height:16px}.uniforms-section{border-top:1px solid rgba(255,255,255,.06)}.uniforms-container{display:flex;flex-direction:column;gap:8px}.multi-view-controls-panel .uniform-controls{padding:0;gap:12px;background:transparent}.multi-view-controls-panel .uniform-controls-header{display:none}.multi-view-controls-panel .uniform-controls-list{gap:14px}.multi-view-controls-panel .uniform-control{gap:6px}.multi-view-controls-panel .uniform-control-label{font-size:11px;color:var(--glass-text)}.multi-view-controls-panel .uniform-control-value{font-size:10px;padding:1px 4px;min-width:40px;color:var(--glass-text-muted);background:#0003;border-radius:3px}.multi-view-controls-panel .uniform-control-slider{height:4px;background:#ffffff26}.multi-view-controls-panel .uniform-control-slider::-webkit-slider-runnable-track{height:4px;background:#ffffff26}.multi-view-controls-panel .uniform-control-slider::-webkit-slider-thumb{width:12px;height:12px;margin-top:-4px;background:#ffffffe6;box-shadow:0 1px 4px #0000004d}.multi-view-controls-panel .uniform-control-slider::-moz-range-track{height:4px;background:#ffffff26}.multi-view-controls-panel .uniform-control-slider::-moz-range-thumb{width:12px;height:12px;background:#ffffffe6;box-shadow:0 1px 4px #0000004d}.multi-view-controls-panel .uniform-control-toggle{width:34px;height:18px}.multi-view-controls-panel .uniform-control-toggle-slider{border-radius:18px}.multi-view-controls-panel .uniform-control-toggle-slider:before{width:12px;height:12px;left:3px;bottom:3px}.multi-view-controls-panel .uniform-control-toggle input:checked+.uniform-control-toggle-slider:before{transform:translate(16px)}.layout-fullscreen{width:100%;height:100%}.layout-fullscreen .canvas-container{position:relative;width:100%;height:100%;background:#000}.layout-default{width:100%;height:100%}.layout-default .canvas-container{position:relative;width:100%;height:100%;background:var(--bg-canvas);border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.layout-split{width:100%;height:100%;display:flex;gap:24px}.layout-split .canvas-container{position:relative;flex:1;background:var(--bg-canvas);border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.layout-split .code-panel{position:relative;flex:1;display:flex;flex-direction:column;background:var(--bg-secondary);border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.tab-bar{display:flex;background:var(--tab-bg);border-bottom:1px solid var(--border-primary);padding:8px 8px 0;gap:4px}.tab-button{padding:8px 16px;background:transparent;border:none;border-radius:6px 6px 0 0;font-size:13px;font-family:var(--font-mono);cursor:pointer;transition:background .2s,color .2s;color:var(--tab-text)}.tab-button:hover{background:var(--button-bg-hover);color:var(--tab-text-hover)}.tab-button.active{background:var(--bg-secondary);color:var(--tab-text-active);font-weight:500}.copy-button{position:absolute;top:12px;right:12px;padding:6px;background:var(--button-bg);border:none;border-radius:4px;color:var(--button-text);cursor:pointer;transition:all .2s;z-index:10;display:flex;align-items:center;justify-content:center}.copy-button:hover{background:var(--button-bg-hover);color:var(--button-text-hover)}.copy-button:active{transform:scale(.9)}.copy-button.copied{color:var(--success-text)}.code-viewer{flex:1;min-height:0;overflow:auto;position:relative;background:var(--code-bg)}.code-viewer pre{margin:0;padding:16px;font-size:13px;line-height:1.5;font-family:var(--font-mono);background:var(--code-bg);color:var(--code-text)}.code-viewer code{font-family:inherit;font-size:inherit}.token.comment{color:var(--syntax-comment)}.token.keyword{color:var(--syntax-keyword)}.token.string{color:var(--syntax-string)}.token.number{color:var(--syntax-number)}.token.operator{color:var(--syntax-operator)}.token.function{color:var(--syntax-function)}.token.class-name{color:var(--syntax-class)}.token.punctuation{color:var(--syntax-punctuation)}.tab-button.image-tab,.tab-button.image-tab.active{color:var(--accent-secondary)}.image-viewer{display:flex;align-items:center;justify-content:center;height:100%;padding:16px;background:var(--image-viewer-bg)}.image-viewer img{max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;box-shadow:var(--shadow-sm)}@media (max-width: 800px){.layout-split{flex-direction:column}}.layout-tabbed{width:100%;height:100%;display:flex;flex-direction:column;box-sizing:border-box}.tabbed-wrapper{display:flex;flex-direction:column;width:100%;height:100%;border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.tabbed-toolbar{display:flex;align-items:center;flex-shrink:0;background:var(--tab-bg);border-bottom:1px solid var(--border-primary);padding-right:8px}.tabbed-tab-bar{display:flex;flex:1;gap:4px;overflow-x:auto;overflow-y:hidden;scrollbar-width:thin}.tabbed-tab-bar::-webkit-scrollbar{height:4px}.tabbed-tab-bar::-webkit-scrollbar-thumb{background:var(--border-secondary);border-radius:2px}.tabbed-tab-button{padding:10px 16px;background:transparent;border:none;border-bottom:2px solid transparent;font-size:12px;font-family:var(--font-mono);cursor:pointer;transition:color .15s,border-color .15s;color:var(--tab-text);white-space:nowrap;flex-shrink:0}.tabbed-tab-button:hover{color:var(--tab-text-hover)}.tabbed-tab-button.active{color:var(--tab-text-active);border-bottom-color:var(--tab-border-active)}.tabbed-tab-button.shader-tab{font-family:var(--font-ui)}.tabbed-tab-button.image-tab{color:var(--accent-secondary)}.tabbed-tab-button.image-tab.active{color:var(--accent-secondary);border-bottom-color:var(--accent-secondary)}.tabbed-tab-button.uniforms-tab{color:var(--accent-tertiary, var(--accent-primary));padding:8px 12px}.tabbed-tab-button.uniforms-tab.active{color:var(--accent-tertiary, var(--accent-primary));border-bottom-color:var(--accent-tertiary, var(--accent-primary))}.tabbed-tab-button .uniforms-icon{width:18px;height:18px;display:block}.tabbed-content{flex:1;min-height:0;position:relative;background:var(--bg-canvas);overflow:hidden}.tabbed-canvas-container{position:absolute;top:0;left:0;width:100%;height:100%}.tabbed-code-viewer{position:absolute;top:0;left:0;width:100%;height:100%;overflow:auto;background:var(--code-bg)}.tabbed-code-viewer pre{margin:0;padding:16px 16px 16px 0;font-size:13px;line-height:1.6;font-family:var(--font-mono);background:var(--code-bg);color:var(--code-text);display:flex}.tabbed-code-viewer code{font-family:inherit;font-size:inherit}.tabbed-line-numbers{text-align:right;padding-right:16px;margin-right:16px;border-right:1px solid var(--code-line-border);color:var(--code-line-number);-webkit-user-select:none;user-select:none;flex-shrink:0;padding-left:16px}.tabbed-code-content{flex:1;overflow-x:auto}.tabbed-image-viewer{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--image-viewer-bg);padding:20px;box-sizing:border-box}.tabbed-image-viewer img{max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;box-shadow:var(--shadow-sm)}.tabbed-code-viewer .token.comment{color:var(--syntax-comment)}.tabbed-code-viewer .token.keyword{color:var(--syntax-keyword)}.tabbed-code-viewer .token.string{color:var(--syntax-string)}.tabbed-code-viewer .token.number{color:var(--syntax-number)}.tabbed-code-viewer .token.operator{color:var(--syntax-operator)}.tabbed-code-viewer .token.function{color:var(--syntax-function)}.tabbed-code-viewer .token.class-name{color:var(--syntax-class)}.tabbed-code-viewer .token.punctuation{color:var(--syntax-punctuation)}@media (max-width: 600px){.tabbed-tab-button{padding:8px 12px;font-size:12px}}.tabbed-editor-container{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;background:var(--code-bg)}.tabbed-button-container{display:flex;align-items:center;gap:6px;flex-shrink:0}.tabbed-copy-button{display:flex;align-items:center;justify-content:center;background:var(--button-bg);border:1px solid var(--button-border);color:var(--button-text);width:44px;height:44px;border-radius:4px;cursor:pointer;transition:background .15s,border-color .15s,color .15s}.tabbed-copy-button:hover{background:var(--button-bg-hover);border-color:var(--button-border-hover);color:var(--button-text-hover)}.tabbed-copy-button:active{background:var(--button-bg-hover)}.tabbed-copy-button.copied{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}.tabbed-recompile-button{display:flex;align-items:center;gap:6px;background:var(--recompile-bg);border:none;color:var(--recompile-text);padding:6px 12px;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;transition:background .15s,color .15s}.tabbed-recompile-button:hover{background:var(--recompile-bg-hover)}.tabbed-recompile-button:active{background:var(--recompile-bg-active)}.tabbed-recompile-button svg{flex-shrink:0}.tabbed-error-display{position:absolute;bottom:0;left:0;right:0;background:var(--error-bg);color:var(--error-text);padding:10px 14px;font-family:var(--font-mono);font-size:12px;white-space:pre-wrap;overflow:auto;max-height:120px;border-top:1px solid var(--error-border);z-index:10}.tabbed-fallback-textarea{width:100%;height:100%;background:var(--code-bg);color:var(--code-text);border:none;padding:12px;font-family:var(--font-mono);font-size:13px;resize:none;outline:none}.tabbed-uniforms-container{position:absolute;top:0;left:0;width:100%;height:100%;overflow-y:auto;background:#00000080;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:flex;justify-content:center;padding:20px;box-sizing:border-box}.tabbed-uniforms-container .uniform-controls{max-width:400px;width:100%;background:#1e1e23f2;border-radius:12px;padding:20px;box-shadow:0 4px 20px #0006;height:fit-content}.tabbed-uniforms-container .uniform-control-label{color:#e0e0e0}.tabbed-uniforms-container .uniform-control-value{color:#a0a0a0;background:#0000004d}.tabbed-uniforms-container .uniform-controls-header{color:#909090;border-bottom-color:#ffffff1a}.tabbed-uniforms-container .uniform-control-slider{background:#ffffff1a}.tabbed-uniforms-container .uniform-control-slider::-webkit-slider-thumb{background:#fff}.tabbed-uniforms-container .uniform-control-slider::-moz-range-thumb{background:#fff}.tabbed-uniforms-container .uniform-control-vec-component{color:#909090}.tabbed-uniforms-container .uniform-control-vec-value{color:#a0a0a0;background:#0000004d}.layout-multi-view{position:relative;width:100%;height:100%;box-sizing:border-box;background:var(--bg-primary)}.multi-view-canvas{position:relative;background:var(--bg-canvas);border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.multi-view-label{position:absolute;top:12px;left:12px;padding:4px 10px;background:#0009;color:#fff;font-family:var(--font-mono);font-size:12px;font-weight:500;border-radius:4px;text-transform:capitalize;z-index:5;pointer-events:none}.multi-view-info{position:absolute;bottom:12px;left:12px;padding:6px 10px;background:#0009;color:#fff;font-family:var(--font-mono);font-size:11px;border-radius:4px;z-index:5;pointer-events:none}.layout-grid-view{display:grid;gap:16px}.layout-grid-view .multi-view-canvas{min-height:0;min-width:0}.layout-grid-view[data-view-count="2"].grid-horizontal{grid-template-columns:1fr 1fr;grid-template-rows:1fr}.layout-grid-view[data-view-count="2"].grid-vertical{grid-template-columns:1fr;grid-template-rows:1fr 1fr}.layout-grid-view[data-view-count="3"].grid-horizontal{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.layout-grid-view[data-view-count="3"].grid-horizontal .multi-view-canvas:last-child{grid-column:1 / -1}.layout-grid-view[data-view-count="3"].grid-vertical{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.layout-grid-view[data-view-count="3"].grid-vertical .multi-view-canvas:first-child{grid-column:1 / -1}.layout-grid-view[data-view-count="4"]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.layout-inset-view .multi-view-canvas.inset-main{width:100%;height:100%}.layout-inset-view .multi-view-canvas.inset-overlay{position:absolute;bottom:40px;right:40px;width:25%;min-width:200px;aspect-ratio:16 / 9;z-index:10;transition:all .2s ease}.layout-inset-view .multi-view-canvas.inset-overlay.minimized{width:48px;height:48px;min-width:unset;aspect-ratio:unset;cursor:pointer;opacity:.8}.layout-inset-view .multi-view-canvas.inset-overlay.minimized:hover{opacity:1}.inset-minimize-btn{position:absolute;top:8px;right:8px;width:24px;height:24px;border:none;border-radius:4px;background:#00000080;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px;z-index:11;transition:background .2s}.inset-minimize-btn:hover{background:#000000b3}.editor-toolbar{display:flex;align-items:center;background:var(--tab-bg);border-bottom:1px solid var(--border-primary);padding-right:8px}.editor-tab-bar{display:flex;flex:1;overflow-x:auto;scrollbar-width:thin}.editor-tab-button{background:transparent;border:none;color:var(--tab-text);padding:10px 16px;cursor:pointer;font-family:var(--font-mono);font-size:12px;white-space:nowrap;border-bottom:2px solid transparent;transition:color .15s,border-color .15s}.editor-tab-button:hover{color:var(--tab-text-hover)}.editor-tab-button.active{color:var(--tab-text-active);border-bottom-color:var(--tab-border-active)}.editor-tab-button.image-tab{color:var(--accent-secondary)}.editor-tab-button.image-tab.active{color:var(--accent-secondary);border-bottom-color:var(--accent-secondary)}.editor-tab-button.uniforms-tab{color:var(--accent-tertiary, var(--accent-primary));padding:8px 12px}.editor-tab-button.uniforms-tab.active{color:var(--accent-tertiary, var(--accent-primary));border-bottom-color:var(--accent-tertiary, var(--accent-primary))}.editor-tab-button .uniforms-icon{width:18px;height:18px;display:block}.editor-copy-button{display:flex;align-items:center;justify-content:center;background:var(--button-bg);border:1px solid var(--button-border);color:var(--button-text);width:32px;height:32px;border-radius:4px;cursor:pointer;transition:background .15s,border-color .15s,color .15s;flex-shrink:0;margin-right:6px}.editor-copy-button:hover{background:var(--button-bg-hover);border-color:var(--button-border-hover);color:var(--button-text-hover)}.editor-copy-button:active{background:var(--button-bg-hover)}.editor-copy-button.copied{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}.editor-copy-button svg{flex-shrink:0}.editor-recompile-button{display:flex;align-items:center;gap:6px;background:var(--recompile-bg);border:none;color:var(--recompile-text);padding:6px 12px;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;transition:background .15s,color .15s;flex-shrink:0}.editor-recompile-button:hover{background:var(--recompile-bg-hover)}.editor-recompile-button:active{background:var(--recompile-bg-active)}.editor-recompile-button svg{flex-shrink:0}.editor-content-area{flex:1;overflow:hidden;position:relative;background:var(--code-bg)}.editor-prism-container{height:100%;width:100%}.editor-fallback-textarea{width:100%;height:100%;background:var(--code-bg);color:var(--code-text);border:none;padding:12px;font-family:var(--font-mono);font-size:13px;resize:none;outline:none}.editor-image-viewer{display:flex;align-items:center;justify-content:center;height:100%;background:var(--image-viewer-bg);padding:20px}.editor-uniforms-container{height:100%;overflow-y:auto;background:var(--bg-secondary)}.editor-image-viewer img{max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;box-shadow:var(--shadow-sm)}.editor-error-display{background:var(--error-bg);color:var(--error-text);padding:10px 14px;font-family:var(--font-mono);font-size:12px;white-space:pre-wrap;overflow:auto;max-height:120px;border-top:1px solid var(--error-border)}.prism-editor-wrapper{display:flex;height:100%;background:var(--code-bg);font-family:var(--font-mono);font-size:13px;line-height:1.6}.prism-editor-line-numbers{flex-shrink:0;padding:16px 12px 16px 16px;text-align:right;color:var(--code-line-number);border-right:1px solid var(--code-line-border);-webkit-user-select:none;user-select:none;overflow:hidden}.prism-editor-line-numbers span{display:block}.prism-editor-area{flex:1;position:relative;overflow:hidden}.prism-editor-textarea,.prism-editor-highlight{position:absolute;top:0;left:0;width:100%;height:100%;padding:16px;margin:0;border:none;outline:none;font-family:inherit;font-size:inherit;line-height:inherit;white-space:pre-wrap;word-wrap:break-word;overflow:auto;box-sizing:border-box;tab-size:2;-moz-tab-size:2;letter-spacing:normal;word-spacing:normal}.prism-editor-textarea{background:transparent;color:transparent;caret-color:var(--code-text);resize:none;z-index:1;-webkit-text-fill-color:transparent}.prism-editor-textarea::selection{background:var(--code-selection)}.prism-editor-textarea::-moz-selection{background:var(--code-selection)}.prism-editor-highlight{background:var(--code-bg);color:var(--code-text);pointer-events:none;z-index:0}.prism-editor-highlight code{font-family:inherit;font-size:inherit;line-height:inherit;background:none;padding:0;margin:0;border:none;display:block;white-space:inherit;word-wrap:inherit;-moz-tab-size:2;tab-size:2}.prism-editor-highlight code[class*=language-],.prism-editor-highlight[class*=language-]{padding:0;margin:0;background:none;border:none;text-shadow:none}.prism-editor-highlight .token.comment{color:var(--syntax-comment)}.prism-editor-highlight .token.keyword{color:var(--syntax-keyword)}.prism-editor-highlight .token.string{color:var(--syntax-string)}.prism-editor-highlight .token.number{color:var(--syntax-number)}.prism-editor-highlight .token.operator{color:var(--syntax-operator)}.prism-editor-highlight .token.function{color:var(--syntax-function)}.prism-editor-highlight .token.class-name{color:var(--syntax-class)}.prism-editor-highlight .token.punctuation{color:var(--syntax-punctuation)}')),document.head.appendChild(r)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
function _e(e) {
  return "count" in e && typeof e.count == "number";
}
function Vn(e) {
  return !_e(e) && !e.hidden;
}
function qr(e) {
  return "views" in e && Array.isArray(e.views);
}
function Wr(e) {
  return "views" in e && Array.isArray(e.views);
}
function rr(e, t, n) {
  const r = e.createShader(t);
  if (!r)
    throw new Error("Failed to create shader object");
  if (e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) {
    const o = e.getShaderInfoLog(r);
    throw e.deleteShader(r), new Error(`Shader compilation failed:
${o}`);
  }
  return r;
}
function ir(e, t, n) {
  const r = rr(e, e.VERTEX_SHADER, t), i = rr(e, e.FRAGMENT_SHADER, n), o = e.createProgram();
  if (!o)
    throw new Error("Failed to create program object");
  if (e.attachShader(o, r), e.attachShader(o, i), e.linkProgram(o), !e.getProgramParameter(o, e.LINK_STATUS)) {
    const a = e.getProgramInfoLog(o);
    throw e.deleteProgram(o), e.deleteShader(r), e.deleteShader(i), new Error(`Program linking failed:
${a}`);
  }
  return e.detachShader(o, r), e.detachShader(o, i), e.deleteShader(r), e.deleteShader(i), o;
}
function Jo(e) {
  const t = e.createVertexArray();
  if (!t)
    throw new Error("Failed to create VAO");
  e.bindVertexArray(t);
  const n = new Float32Array([
    -1,
    -1,
    // Bottom-left
    3,
    -1,
    // Bottom-right (extends beyond viewport)
    -1,
    3
    // Top-left (extends beyond viewport)
  ]), r = e.createBuffer();
  if (!r)
    throw new Error("Failed to create VBO");
  return e.bindBuffer(e.ARRAY_BUFFER, r), e.bufferData(e.ARRAY_BUFFER, n, e.STATIC_DRAW), e.enableVertexAttribArray(0), e.vertexAttribPointer(
    0,
    // attribute location
    2,
    // size (vec2)
    e.FLOAT,
    // type
    !1,
    // normalized
    0,
    // stride
    0
    // offset
  ), e.bindVertexArray(null), e.bindBuffer(e.ARRAY_BUFFER, null), t;
}
function Xt(e, t, n) {
  const r = e.createTexture();
  if (!r)
    throw new Error("Failed to create texture");
  return e.bindTexture(e.TEXTURE_2D, r), e.texImage2D(
    e.TEXTURE_2D,
    0,
    // mip level
    e.RGBA32F,
    // internal format (32-bit float per channel)
    t,
    n,
    0,
    // border (must be 0)
    e.RGBA,
    // format
    e.FLOAT,
    // type
    null
    // no data (allocate only)
  ), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.bindTexture(e.TEXTURE_2D, null), r;
}
function or(e, t) {
  const n = e.createFramebuffer();
  if (!n)
    throw new Error("Failed to create framebuffer");
  e.bindFramebuffer(e.FRAMEBUFFER, n), e.framebufferTexture2D(
    e.FRAMEBUFFER,
    e.COLOR_ATTACHMENT0,
    e.TEXTURE_2D,
    t,
    0
    // mip level
  );
  const r = e.checkFramebufferStatus(e.FRAMEBUFFER);
  if (r !== e.FRAMEBUFFER_COMPLETE)
    throw e.deleteFramebuffer(n), new Error(`Framebuffer incomplete: ${ss(e, r)}`);
  return e.bindFramebuffer(e.FRAMEBUFFER, null), n;
}
function Qo(e) {
  const t = e.createTexture();
  if (!t)
    throw new Error("Failed to create black texture");
  e.bindTexture(e.TEXTURE_2D, t);
  const n = new Float32Array([0, 0, 0, 1]);
  return e.texImage2D(e.TEXTURE_2D, 0, e.RGBA32F, 1, 1, 0, e.RGBA, e.FLOAT, n), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.bindTexture(e.TEXTURE_2D, null), t;
}
function es(e) {
  const t = e.createTexture();
  if (!t)
    throw new Error("Failed to create keyboard texture");
  e.bindTexture(e.TEXTURE_2D, t);
  const n = 256, r = 3, i = new Float32Array(n * r * 4);
  return e.texImage2D(e.TEXTURE_2D, 0, e.RGBA32F, n, r, 0, e.RGBA, e.FLOAT, i), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.bindTexture(e.TEXTURE_2D, null), t;
}
function ts(e, t, n, r) {
  const s = new Float32Array(3072);
  for (let a = 0; a < 256; a++) {
    const u = n.get(a) || !1, c = r.get(a) || 0, h = (0 * 256 + a) * 4;
    s[h + 0] = u ? 1 : 0, s[h + 1] = u ? 1 : 0, s[h + 2] = u ? 1 : 0, s[h + 3] = 1;
    const l = (2 * 256 + a) * 4;
    s[l + 0] = c, s[l + 1] = c, s[l + 2] = c, s[l + 3] = 1;
  }
  e.bindTexture(e.TEXTURE_2D, t), e.texSubImage2D(
    e.TEXTURE_2D,
    0,
    0,
    0,
    // x, y offset
    256,
    3,
    e.RGBA,
    e.FLOAT,
    s
  ), e.bindTexture(e.TEXTURE_2D, null);
}
function ns(e) {
  const t = e.createTexture();
  if (!t)
    throw new Error("Failed to create audio texture");
  e.bindTexture(e.TEXTURE_2D, t);
  const n = 512, r = 2, i = new Uint8Array(n * r);
  return e.texImage2D(e.TEXTURE_2D, 0, e.R8, n, r, 0, e.RED, e.UNSIGNED_BYTE, i), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.bindTexture(e.TEXTURE_2D, null), t;
}
function rs(e, t, n, r) {
  e.bindTexture(e.TEXTURE_2D, t), e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, 512, 1, e.RED, e.UNSIGNED_BYTE, n), e.texSubImage2D(e.TEXTURE_2D, 0, 0, 1, 512, 1, e.RED, e.UNSIGNED_BYTE, r), e.bindTexture(e.TEXTURE_2D, null);
}
function sr(e) {
  const t = e.createTexture();
  if (!t)
    throw new Error("Failed to create video texture");
  return e.bindTexture(e.TEXTURE_2D, t), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255])), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.bindTexture(e.TEXTURE_2D, null), t;
}
function is(e, t, n) {
  e.bindTexture(e.TEXTURE_2D, t), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !0), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, n), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), e.bindTexture(e.TEXTURE_2D, null);
}
function os(e, t, n, r, i) {
  const o = t ?? e.createTexture();
  if (!o)
    throw new Error("Failed to create script texture");
  return e.bindTexture(e.TEXTURE_2D, o), i instanceof Float32Array ? e.texImage2D(e.TEXTURE_2D, 0, e.RGBA32F, n, r, 0, e.RGBA, e.FLOAT, i) : e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, n, r, 0, e.RGBA, e.UNSIGNED_BYTE, i), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.bindTexture(e.TEXTURE_2D, null), o;
}
function ss(e, t) {
  switch (t) {
    case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
      return "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";
    case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
      return "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";
    case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
      return "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";
    case e.FRAMEBUFFER_UNSUPPORTED:
      return "FRAMEBUFFER_UNSUPPORTED";
    case e.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE:
      return "FRAMEBUFFER_INCOMPLETE_MULTISAMPLE";
    default:
      return `Unknown status: ${t}`;
  }
}
const Zr = {
  float: 1,
  vec2: 2,
  vec3: 3,
  vec4: 4,
  mat3: 9,
  mat4: 16
}, Xn = {
  float: 4,
  // 1 float + 3 padding
  vec2: 4,
  // 2 floats + 2 padding
  vec3: 4,
  // 3 floats + 1 padding
  vec4: 4,
  // 4 floats, naturally aligned
  mat3: 12,
  // 3 columns × 4 floats (vec3 padded to vec4)
  mat4: 16
  // 4 columns × 4 floats, no padding
};
function Ut(e, t) {
  return Zr[e] * t;
}
function as(e, t) {
  return Xn[e] * t * 4;
}
function us(e, t) {
  return Xn[e] * t;
}
function cs(e, t, n, r) {
  const i = Zr[e], o = Xn[e];
  if (i === o)
    return n;
  const s = o * t, a = r && r.length >= s ? r : new Float32Array(s);
  if (e === "mat3")
    for (let u = 0; u < t; u++) {
      const c = u * 9, h = u * 12;
      a[h + 0] = n[c + 0], a[h + 1] = n[c + 1], a[h + 2] = n[c + 2], a[h + 3] = 0, a[h + 4] = n[c + 3], a[h + 5] = n[c + 4], a[h + 6] = n[c + 5], a[h + 7] = 0, a[h + 8] = n[c + 6], a[h + 9] = n[c + 7], a[h + 10] = n[c + 8], a[h + 11] = 0;
    }
  else
    for (let u = 0; u < t; u++) {
      const c = u * i, h = u * 4;
      for (let l = 0; l < i; l++)
        a[h + l] = n[c + l];
      for (let l = i; l < 4; l++)
        a[h + l] = 0;
    }
  return a;
}
const ar = `#version 300 es
precision highp float;

layout(location = 0) in vec2 position;

void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`, ls = `#version 300 es
precision highp float;

// Shadertoy compatibility: equirectangular texture sampling
const float ST_PI = 3.14159265359;
const float ST_TWOPI = 6.28318530718;
vec2 _st_dirToEquirect(vec3 dir) {
  float phi = atan(dir.z, dir.x);
  float theta = asin(dir.y);
  return vec2(phi / ST_TWOPI + 0.5, theta / ST_PI + 0.5);
}
`, fs = `// --- Keyboard helpers (auto-injected) ---
// Letter keys
const int KEY_A = 65; const int KEY_B = 66; const int KEY_C = 67; const int KEY_D = 68;
const int KEY_E = 69; const int KEY_F = 70; const int KEY_G = 71; const int KEY_H = 72;
const int KEY_I = 73; const int KEY_J = 74; const int KEY_K = 75; const int KEY_L = 76;
const int KEY_M = 77; const int KEY_N = 78; const int KEY_O = 79; const int KEY_P = 80;
const int KEY_Q = 81; const int KEY_R = 82; const int KEY_S = 83; const int KEY_T = 84;
const int KEY_U = 85; const int KEY_V = 86; const int KEY_W = 87; const int KEY_X = 88;
const int KEY_Y = 89; const int KEY_Z = 90;

// Digit keys
const int KEY_0 = 48; const int KEY_1 = 49; const int KEY_2 = 50; const int KEY_3 = 51;
const int KEY_4 = 52; const int KEY_5 = 53; const int KEY_6 = 54; const int KEY_7 = 55;
const int KEY_8 = 56; const int KEY_9 = 57;

// Arrow keys
const int KEY_LEFT = 37; const int KEY_UP = 38; const int KEY_RIGHT = 39; const int KEY_DOWN = 40;

// Special keys
const int KEY_SPACE = 32;
const int KEY_ENTER = 13;
const int KEY_TAB = 9;
const int KEY_ESC = 27;
const int KEY_BACKSPACE = 8;
const int KEY_DELETE = 46;
const int KEY_SHIFT = 16;
const int KEY_CTRL = 17;
const int KEY_ALT = 18;

// Function keys
const int KEY_F1 = 112; const int KEY_F2 = 113; const int KEY_F3 = 114; const int KEY_F4 = 115;
const int KEY_F5 = 116; const int KEY_F6 = 117; const int KEY_F7 = 118; const int KEY_F8 = 119;
const int KEY_F9 = 120; const int KEY_F10 = 121; const int KEY_F11 = 122; const int KEY_F12 = 123;

// Returns 1.0 if key is held down, 0.0 otherwise
float keyDown(int key) {
  return textureLod(keyboard, vec2((float(key) + 0.5) / 256.0, 0.25), 0.0).x;
}

// Returns 1.0/0.0, toggling each time the key is pressed
float keyToggle(int key) {
  return textureLod(keyboard, vec2((float(key) + 0.5) / 256.0, 0.75), 0.0).x;
}

// Boolean convenience helpers
bool isKeyDown(int key) { return keyDown(key) > 0.5; }
bool isKeyToggled(int key) { return keyToggle(key) > 0.5; }
`;
function hs(e, t, n) {
  const r = [ls];
  if (n.commonSource && (r.push("// Common code"), r.push(n.commonSource), r.push("")), n.namedSamplers && n.namedSamplers.size > 0) {
    if (r.push(`// Core uniforms
uniform vec3  iResolution;
uniform float iTime;
uniform float iTimeDelta;
uniform int   iFrame;
uniform vec4  iMouse;
uniform bool  iMousePressed;
uniform vec4  iDate;
uniform float iFrameRate;

// Shader Sandbox touch extensions
uniform int   iTouchCount;
uniform vec4  iTouch0;
uniform vec4  iTouch1;
uniform vec4  iTouch2;
uniform float iPinch;
uniform float iPinchDelta;
uniform vec2  iPinchCenter;
`), n.viewNames && n.viewNames.length > 1) {
      r.push("// Cross-view uniforms (multi-view project)");
      for (const l of n.viewNames)
        r.push(`uniform vec4  iMouse_${l};`), r.push(`uniform vec3  iResolution_${l};`), r.push(`uniform bool  iMousePressed_${l};`);
      r.push("");
    }
    r.push("// Named samplers");
    for (const [l] of n.namedSamplers)
      r.push(`uniform sampler2D ${l};`), r.push(`uniform vec3 ${l}_resolution;`);
    r.push(""), n.namedSamplers.has("keyboard") && (r.push(fs), r.push(""));
  } else if (r.push(`// Shadertoy built-in uniforms
uniform vec3  iResolution;
uniform float iTime;
uniform float iTimeDelta;
uniform int   iFrame;
uniform vec4  iMouse;
uniform bool  iMousePressed;
uniform vec4  iDate;
uniform float iFrameRate;
uniform vec3  iChannelResolution[4];
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D iChannel2;
uniform sampler2D iChannel3;

// Shader Sandbox touch extensions (not in Shadertoy)
uniform int   iTouchCount;          // Number of active touches (0-10)
uniform vec4  iTouch0;              // Primary touch: (x, y, startX, startY)
uniform vec4  iTouch1;              // Second touch
uniform vec4  iTouch2;              // Third touch
uniform float iPinch;               // Pinch scale factor (1.0 = no pinch)
uniform float iPinchDelta;          // Pinch change since last frame
uniform vec2  iPinchCenter;         // Center point of pinch gesture
`), n.viewNames && n.viewNames.length > 1) {
    r.push("// Cross-view uniforms (multi-view project)");
    for (const l of n.viewNames)
      r.push(`uniform vec4  iMouse_${l};`), r.push(`uniform vec3  iResolution_${l};`), r.push(`uniform bool  iMousePressed_${l};`);
    r.push("");
  }
  for (const l of n.ubos)
    r.push(`// Array uniform: ${l.name} (max ${l.count})`), r.push(`layout(std140) uniform _ub_${l.name} {`), r.push(`  ${l.def.type} ${l.name}[${l.count}];`), r.push("};"), r.push(`uniform int ${l.name}_count;`), r.push("");
  const i = Object.entries(n.uniforms).filter(([, l]) => !_e(l));
  if (i.length > 0) {
    r.push("// Custom uniforms");
    for (const [l, d] of i) {
      const m = d.type === "bool" ? "bool" : d.type;
      r.push(`uniform ${m} ${l};`);
    }
    r.push("");
  }
  const o = ds(e, t);
  r.push("// User shader code"), r.push(o), r.push(""), r.push(`// Main wrapper
out vec4 fragColor;

void main() {
  mainImage(fragColor, gl_FragCoord.xy);
}`);
  const s = r.join(`
`), a = s.split(`
`);
  let u = 0, c = 0, h = 0;
  for (let l = 0; l < a.length; l++)
    a[l] === "// Common code" && (u = l + 2, c = n.commonSource ? n.commonSource.split(`
`).length : 0), a[l] === "// User shader code" && (h = l + 2);
  return {
    source: s,
    lineMapping: { commonStartLine: u, commonLines: c, userCodeStartLine: h }
  };
}
function ds(e, t) {
  const n = /* @__PURE__ */ new Set();
  if (t.forEach((i, o) => {
    i.kind === "texture" && i.cubemap && n.add(`iChannel${o}`);
  }), n.size === 0)
    return e;
  const r = /texture\s*\(\s*(iChannel[0-3])\s*,\s*([^)]+)\)/g;
  return e.replace(r, (i, o, s) => n.has(o) ? `texture(${o}, _st_dirToEquirect(${s}))` : i);
}
class ps {
  constructor(t, n) {
    this._audioTexture = null, this._needsAudio = !1, this._videoTextures = [];
    const r = this.getAllChannelSources(n);
    r.some((i) => i.kind === "audio") && (this._needsAudio = !0, this._audioTexture = {
      texture: ns(t),
      audioContext: null,
      analyser: null,
      stream: null,
      frequencyData: new Uint8Array(512),
      waveformData: new Uint8Array(512),
      width: 512,
      height: 2,
      initialized: !1
    });
    for (const i of r)
      i.kind === "webcam" ? this._videoTextures.find((s) => s.kind === "webcam") || this._videoTextures.push({
        texture: sr(t),
        video: null,
        stream: null,
        width: 1,
        height: 1,
        ready: !1,
        kind: "webcam"
      }) : i.kind === "video" && (this._videoTextures.find((s) => s.kind === "video" && s.src === i.src) || this._videoTextures.push({
        texture: sr(t),
        video: null,
        stream: null,
        width: 1,
        height: 1,
        ready: !1,
        kind: "video",
        src: i.src
      }));
  }
  // ===========================================================================
  // Accessors
  // ===========================================================================
  get needsAudio() {
    return this._needsAudio;
  }
  get needsWebcam() {
    return this._videoTextures.some((t) => t.kind === "webcam");
  }
  get videoSources() {
    return this._videoTextures.filter((t) => t.kind === "video" && !t.ready && t.src).map((t) => t.src);
  }
  get audioTexture() {
    return this._audioTexture;
  }
  get videoTextures() {
    return this._videoTextures;
  }
  // ===========================================================================
  // Initialization (require user gesture for audio/webcam)
  // ===========================================================================
  async initAudio() {
    if (!(!this._audioTexture || this._audioTexture.initialized))
      try {
        const t = await navigator.mediaDevices.getUserMedia({ audio: !0 }), n = new AudioContext(), r = n.createMediaStreamSource(t), i = n.createAnalyser();
        i.fftSize = 1024, i.smoothingTimeConstant = 0.8, r.connect(i), this._audioTexture.audioContext = n, this._audioTexture.analyser = i, this._audioTexture.stream = t, this._audioTexture.initialized = !0;
      } catch (t) {
        console.warn("Failed to initialize audio input:", t);
      }
  }
  async initWebcam() {
    const t = this._videoTextures.find((n) => n.kind === "webcam" && !n.ready);
    if (t)
      try {
        const n = await navigator.mediaDevices.getUserMedia({ video: !0 }), r = document.createElement("video");
        r.srcObject = n, r.muted = !0, r.playsInline = !0, await r.play(), t.video = r, t.stream = n, t.width = r.videoWidth, t.height = r.videoHeight, r.addEventListener("loadedmetadata", () => {
          t.width = r.videoWidth, t.height = r.videoHeight;
        }), t.ready = !0;
      } catch (n) {
        console.warn("Failed to initialize webcam:", n);
      }
  }
  async initVideo(t) {
    const n = this._videoTextures.find((i) => i.kind === "video" && i.src === t && !i.ready);
    if (!n)
      return;
    const r = document.createElement("video");
    r.src = t, r.muted = !0, r.loop = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", () => {
      n.width = r.videoWidth, n.height = r.videoHeight;
    });
    try {
      await r.play(), n.video = r, n.ready = !0;
    } catch (i) {
      console.warn(`Failed to play video '${t}':`, i);
    }
  }
  // ===========================================================================
  // Per-frame updates
  // ===========================================================================
  updateAudioTexture(t) {
    var n;
    (n = this._audioTexture) != null && n.analyser && (this._audioTexture.analyser.getByteFrequencyData(this._audioTexture.frequencyData), this._audioTexture.analyser.getByteTimeDomainData(this._audioTexture.waveformData), rs(t, this._audioTexture.texture, this._audioTexture.frequencyData, this._audioTexture.waveformData));
  }
  updateVideoTextures(t) {
    for (const n of this._videoTextures)
      !n.ready || !n.video || n.video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || (is(t, n.texture, n.video), n.video.videoWidth > 0 && (n.width = n.video.videoWidth, n.height = n.video.videoHeight));
  }
  // ===========================================================================
  // Cleanup
  // ===========================================================================
  dispose(t) {
    var n, r, i, o;
    this._audioTexture && ((n = this._audioTexture.stream) == null || n.getTracks().forEach((s) => s.stop()), (r = this._audioTexture.audioContext) == null || r.close(), t.deleteTexture(this._audioTexture.texture));
    for (const s of this._videoTextures)
      (i = s.stream) == null || i.getTracks().forEach((a) => a.stop()), (o = s.video) == null || o.pause(), t.deleteTexture(s.texture);
    this._audioTexture = null, this._videoTextures = [];
  }
  // ===========================================================================
  // Helpers
  // ===========================================================================
  getAllChannelSources(t) {
    const n = [], r = t.passes;
    for (const i of [r.Image, r.BufferA, r.BufferB, r.BufferC, r.BufferD])
      i && (n.push(...i.channels), i.namedSamplers && n.push(...i.namedSamplers.values()));
    return n;
  }
}
class ms {
  constructor(t) {
    this.values = {}, this.definitions = t, this.initializeDefaults();
  }
  /**
   * Initialize all values to their definition defaults.
   */
  initializeDefaults() {
    for (const [t, n] of Object.entries(this.definitions))
      _e(n) ? this.values[t] = new Float32Array(Ut(n.type, n.count)) : this.values[t] = this.cloneValue(n.value);
  }
  /**
   * Clone a value to avoid mutation of arrays.
   */
  cloneValue(t) {
    return t instanceof Float32Array ? t.slice() : Array.isArray(t) ? [...t] : t;
  }
  /**
   * Get the definition for a uniform.
   */
  getDefinition(t) {
    return this.definitions[t];
  }
  /**
   * Get all definitions.
   */
  getDefinitions() {
    return this.definitions;
  }
  /**
   * Check if a uniform exists.
   */
  has(t) {
    return t in this.definitions;
  }
  /**
   * Get the current value of a uniform.
   */
  get(t) {
    const n = this.values[t];
    return n !== void 0 ? this.cloneValue(n) : void 0;
  }
  /**
   * Get all current values (returns a shallow copy).
   */
  getAll() {
    const t = {};
    for (const [n, r] of Object.entries(this.values))
      t[n] = this.cloneValue(r);
    return t;
  }
  /**
   * Set the value of a uniform.
   * Returns true if the value was set, false if the uniform doesn't exist.
   */
  set(t, n) {
    return this.has(t) ? (this.values[t] = this.cloneValue(n), !0) : !1;
  }
  /**
   * Set multiple values at once.
   */
  setAll(t) {
    for (const [n, r] of Object.entries(t))
      r !== void 0 && this.set(n, r);
  }
  /**
   * Reset a single uniform to its default value.
   */
  reset(t) {
    const n = this.definitions[t];
    return n ? (_e(n) ? this.values[t] = new Float32Array(Ut(n.type, n.count)) : this.values[t] = this.cloneValue(n.value), !0) : !1;
  }
  /**
   * Reset all uniforms to their default values.
   */
  resetAll() {
    this.initializeDefaults();
  }
  /**
   * Get the default value for a uniform.
   */
  getDefault(t) {
    const n = this.definitions[t];
    if (n)
      return _e(n) ? new Float32Array(Ut(n.type, n.count)) : this.cloneValue(n.value);
  }
  /**
   * Iterate over all uniforms (name, definition, current value).
   */
  *entries() {
    for (const [t, n] of Object.entries(this.definitions))
      yield [t, n, this.values[t]];
  }
  /**
   * Get the number of uniforms.
   */
  get size() {
    return Object.keys(this.definitions).length;
  }
  /**
   * Check if there are any uniforms.
   */
  get isEmpty() {
    return this.size === 0;
  }
}
class gs {
  constructor(t, n) {
    this._ubos = [], this._dirtyScalars = /* @__PURE__ */ new Set(), this._uniforms = n, this._store = new ms(n), this.initUBOs(t);
    for (const [r, i] of Object.entries(n))
      _e(i) || this._dirtyScalars.add(r);
  }
  // ===========================================================================
  // Accessors
  // ===========================================================================
  /** UBO metadata needed by shaderSource for building declarations */
  get ubos() {
    return this._ubos;
  }
  /** The underlying uniform store */
  get store() {
    return this._store;
  }
  // ===========================================================================
  // Get / Set
  // ===========================================================================
  get(t) {
    return this._store.get(t);
  }
  getAll() {
    return this._store.getAll();
  }
  /**
   * Set the value of a custom uniform.
   * Validates type, packs UBO data for arrays, marks scalars dirty.
   */
  set(t, n) {
    const r = this._uniforms[t];
    if (!r) {
      console.warn(`setUniformValue('${t}'): uniform not defined in config`);
      return;
    }
    if (!_e(r)) {
      const i = r.type;
      if ((i === "float" || i === "int") && typeof n != "number") {
        console.warn(`setUniformValue('${t}'): expected number for ${i}, got ${typeof n}`);
        return;
      }
      if (i === "bool" && typeof n != "boolean") {
        console.warn(`setUniformValue('${t}'): expected boolean, got ${typeof n}`);
        return;
      }
      if (i === "vec2" || i === "vec3" || i === "vec4") {
        if (!Array.isArray(n)) {
          console.warn(`setUniformValue('${t}'): expected array for ${i}, got ${typeof n}`);
          return;
        }
        const o = i === "vec2" ? 2 : i === "vec3" ? 3 : 4;
        if (n.length !== o) {
          console.warn(`setUniformValue('${t}'): expected array of length ${o} for ${i}, got ${n.length}`);
          return;
        }
      }
    }
    if (this._store.set(t, n), _e(r)) {
      const i = this._ubos.find((o) => o.name === t);
      if (i) {
        const o = n, s = Ut(r.type, r.count), a = Ut(r.type, 1);
        if (o.length > s) {
          console.warn(`setUniformValue('${t}'): Float32Array length ${o.length} exceeds max ${s} (${r.count} × ${r.type})`);
          return;
        }
        if (o.length % a !== 0) {
          console.warn(`setUniformValue('${t}'): Float32Array length ${o.length} is not a multiple of ${a} (components per ${r.type})`);
          return;
        }
        const u = o.length / a, c = cs(r.type, u, o, i.paddedData);
        c !== i.paddedData && i.paddedData.set(c);
        const h = us(r.type, u), l = i.paddedData.length;
        h < l && i.paddedData.fill(0, h), i.activeCount = u, i.dirty = !0;
      }
    } else
      this._dirtyScalars.add(t);
  }
  setMultiple(t) {
    for (const [n, r] of Object.entries(t))
      r !== void 0 && this.set(n, r);
  }
  // ===========================================================================
  // GL Binding
  // ===========================================================================
  /**
   * Bind custom uniform values to the current program.
   * Uploads dirty UBOs and re-binds changed scalar uniforms.
   */
  bindToProgram(t, n) {
    for (const r of this._ubos) {
      r.dirty && (t.bindBuffer(t.UNIFORM_BUFFER, r.buffer), t.bufferSubData(t.UNIFORM_BUFFER, 0, r.paddedData), r.dirty = !1);
      const i = n.custom.get(`${r.name}_count`);
      i && t.uniform1i(i, r.activeCount);
    }
    for (const r of this._dirtyScalars) {
      const i = this._uniforms[r];
      if (!i || _e(i))
        continue;
      const o = this._store.get(r);
      if (o === void 0)
        continue;
      const s = n.custom.get(r);
      if (s)
        switch (i.type) {
          case "float":
            t.uniform1f(s, o);
            break;
          case "int":
            t.uniform1i(s, o);
            break;
          case "bool":
            t.uniform1i(s, o ? 1 : 0);
            break;
          case "vec2": {
            const a = o;
            t.uniform2f(s, a[0], a[1]);
            break;
          }
          case "vec3": {
            const a = o;
            t.uniform3f(s, a[0], a[1], a[2]);
            break;
          }
          case "vec4": {
            const a = o;
            t.uniform4f(s, a[0], a[1], a[2], a[3]);
            break;
          }
        }
    }
  }
  /** Clear dirty flags after all passes have been bound. */
  clearDirty() {
    this._dirtyScalars.clear();
  }
  /** Mark all scalar uniforms dirty (e.g., after recompilation). */
  markAllScalarsDirty() {
    for (const [t, n] of Object.entries(this._uniforms))
      _e(n) || this._dirtyScalars.add(t);
  }
  /**
   * Bind UBO block indices for a newly compiled program.
   * Also caches _count uniform locations.
   */
  bindUBOsToProgram(t, n, r) {
    for (const i of this._ubos) {
      const o = t.getUniformBlockIndex(n, `_ub_${i.name}`);
      o !== t.INVALID_INDEX && t.uniformBlockBinding(n, o, i.bindingPoint), r.set(`${i.name}_count`, t.getUniformLocation(n, `${i.name}_count`));
    }
  }
  // ===========================================================================
  // Cleanup
  // ===========================================================================
  dispose(t) {
    for (const n of this._ubos)
      t.deleteBuffer(n.buffer);
    this._ubos = [];
  }
  // ===========================================================================
  // Initialization
  // ===========================================================================
  initUBOs(t) {
    const n = t.getParameter(t.MAX_UNIFORM_BLOCK_SIZE), r = t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);
    let i = 0;
    for (const [o, s] of Object.entries(this._uniforms)) {
      if (!_e(s))
        continue;
      const a = as(s.type, s.count);
      if (a > n)
        throw new Error(`Array uniform '${o}' requires ${a} bytes but GL MAX_UNIFORM_BLOCK_SIZE is ${n}`);
      const u = t.createBuffer();
      if (!u)
        throw new Error(`Failed to create UBO buffer for '${o}'`);
      if (t.bindBuffer(t.UNIFORM_BUFFER, u), t.bufferData(t.UNIFORM_BUFFER, a, t.DYNAMIC_DRAW), t.bindBuffer(t.UNIFORM_BUFFER, null), i >= r)
        throw new Error(`Too many array uniforms: binding point ${i} exceeds GL MAX_UNIFORM_BUFFER_BINDINGS (${r})`);
      t.bindBufferBase(t.UNIFORM_BUFFER, i, u);
      const c = new Float32Array(a / 4);
      this._ubos.push({
        name: o,
        def: s,
        buffer: u,
        bindingPoint: i,
        byteSize: a,
        dirty: !1,
        paddedData: c,
        activeCount: 0
      }), i++;
    }
  }
}
class ur {
  constructor(t) {
    this._frame = 0, this._time = 0, this._lastStepTime = null, this._passes = [], this._textures = [], this._keyboardTexture = null, this._blackTexture = null, this._keyStates = /* @__PURE__ */ new Map(), this._toggleStates = /* @__PURE__ */ new Map(), this._compilationErrors = [], this._scriptTextures = /* @__PURE__ */ new Map(), this._sharedVAO = null, this._disposed = !1, this._viewNames = [], this.gl = t.gl, this.project = t.project, this._onAssetError = t.onAssetError, this._width = this.gl.drawingBufferWidth, this._height = this.gl.drawingBufferHeight, this.initExtensions(), this._blackTexture = Qo(this.gl);
    const n = es(this.gl);
    this._keyboardTexture = {
      texture: n,
      width: 256,
      height: 3
    }, this.initProjectTextures(), this._media = new ps(this.gl, t.project), this._uniformMgr = new gs(this.gl, t.project.uniforms), t.viewNames && t.viewNames.length > 1 && (this._viewNames = t.viewNames), this.initRuntimePasses();
  }
  // ===========================================================================
  // Media Delegates (forwarded to MediaManager)
  // ===========================================================================
  async initAudio() {
    return this._media.initAudio();
  }
  updateAudioTexture() {
    this._media.updateAudioTexture(this.gl);
  }
  async initWebcam() {
    return this._media.initWebcam();
  }
  async initVideo(t) {
    return this._media.initVideo(t);
  }
  updateVideoTextures() {
    this._media.updateVideoTextures(this.gl);
  }
  /** Whether this project uses audio channels. */
  get needsAudio() {
    return this._media.needsAudio;
  }
  /** Whether this project uses webcam channels. */
  get needsWebcam() {
    return this._media.needsWebcam;
  }
  /** Get video sources that need initialization. */
  get videoSources() {
    return this._media.videoSources;
  }
  /**
   * Upload or update a named texture from JavaScript (for script channel).
   */
  updateTexture(t, n, r, i) {
    const o = this._scriptTextures.get(t), s = i instanceof Float32Array;
    if (o && o.width === n && o.height === r && o.isFloat === s) {
      const a = this.gl;
      a.bindTexture(a.TEXTURE_2D, o.texture), s ? a.texSubImage2D(a.TEXTURE_2D, 0, 0, 0, n, r, a.RGBA, a.FLOAT, i) : a.texSubImage2D(a.TEXTURE_2D, 0, 0, 0, n, r, a.RGBA, a.UNSIGNED_BYTE, i), a.bindTexture(a.TEXTURE_2D, null);
    } else {
      const a = os(this.gl, (o == null ? void 0 : o.texture) ?? null, n, r, i);
      this._scriptTextures.set(t, { texture: a, width: n, height: r, isFloat: s });
    }
  }
  /**
   * Read pixels from a buffer pass (reads previous frame's data).
   */
  readPixels(t, n, r, i, o) {
    const s = this._passes.find((c) => c.name === t);
    if (!s)
      return console.warn(`readPixels: pass '${t}' not found`), new Uint8Array(i * o * 4);
    const a = this.gl;
    a.bindFramebuffer(a.FRAMEBUFFER, s.framebuffer), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, s.previousTexture, 0);
    const u = new Uint8Array(i * o * 4);
    return a.readPixels(n, r, i, o, a.RGBA, a.UNSIGNED_BYTE, u), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, s.currentTexture, 0), a.bindFramebuffer(a.FRAMEBUFFER, null), u;
  }
  // ===========================================================================
  // Public API
  // ===========================================================================
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get stats() {
    const t = this._lastStepTime === null ? 0 : this._time - this._lastStepTime;
    return {
      frame: this._frame,
      time: this._time,
      deltaTime: t,
      width: this._width,
      height: this._height
    };
  }
  /**
   * Get shader compilation errors (if any occurred during initialization).
   * Returns empty array if all shaders compiled successfully.
   */
  getCompilationErrors() {
    return this._compilationErrors;
  }
  /**
   * Check if there were any compilation errors.
   */
  hasErrors() {
    return this._compilationErrors.length > 0;
  }
  getUniformStore() {
    return this._uniformMgr.store;
  }
  getUniformValue(t) {
    return this._uniformMgr.get(t);
  }
  getUniformValues() {
    return this._uniformMgr.getAll();
  }
  setUniformValue(t, n) {
    this._uniformMgr.set(t, n);
  }
  setUniformValues(t) {
    this._uniformMgr.setMultiple(t);
  }
  /** Export UBO data for HTML export (copies current padded data). */
  getUBOExportData() {
    return this._uniformMgr.ubos.map((t) => ({
      name: t.name,
      type: t.def.type,
      count: t.def.count,
      bindingPoint: t.bindingPoint,
      paddedData: new Float32Array(t.paddedData)
    }));
  }
  /**
   * Get the framebuffer for the Image pass (for presenting to screen).
   */
  getImageFramebuffer() {
    const t = this._passes.find((n) => n.name === "Image");
    return (t == null ? void 0 : t.framebuffer) ?? null;
  }
  /**
   * Bind the Image pass output as the READ_FRAMEBUFFER for blitting to screen.
   *
   * After the ping-pong swap, the rendered output is in previousTexture,
   * but the framebuffer is attached to currentTexture. This method temporarily
   * attaches previousTexture so blitFramebuffer reads the correct data.
   */
  bindImageForRead() {
    const t = this.gl, n = this._passes.find((r) => r.name === "Image");
    return n ? (t.bindFramebuffer(t.READ_FRAMEBUFFER, n.framebuffer), t.framebufferTexture2D(t.READ_FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, n.previousTexture, 0), !0) : !1;
  }
  /**
   * Restore the Image pass framebuffer to its normal state (attached to currentTexture).
   * Call after blitting to screen.
   */
  unbindImageForRead() {
    const t = this.gl, n = this._passes.find((r) => r.name === "Image");
    n && (t.framebufferTexture2D(t.READ_FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, n.currentTexture, 0), t.bindFramebuffer(t.READ_FRAMEBUFFER, null));
  }
  /**
   * Run one full frame of all passes.
   *
   * @param timeSeconds - global time in seconds (monotone, from App)
   * @param mouse - iMouse as [x, y, clickX, clickY]
   * @param touch - optional touch state for touch uniforms
   */
  step(t, n, r, i, o) {
    const s = this.gl, a = this._lastStepTime === null ? 0 : t - this._lastStepTime;
    this._lastStepTime = t, this._time = t;
    const u = /* @__PURE__ */ new Date(), c = i ?? {
      count: 0,
      touches: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      pinch: 1,
      pinchDelta: 0,
      pinchCenter: [0, 0]
    }, h = {
      iResolution: [this._width, this._height, 1],
      iTime: this._time,
      iTimeDelta: a,
      iFrame: this._frame,
      iMouse: n,
      iMousePressed: r,
      iDate: [
        u.getFullYear(),
        u.getMonth(),
        // 0-11 (matches Shadertoy)
        u.getDate(),
        // 1-31
        u.getHours() * 3600 + u.getMinutes() * 60 + u.getSeconds() + u.getMilliseconds() / 1e3
      ],
      iFrameRate: a > 0 ? 1 / a : 60,
      iTouchCount: c.count,
      iTouch: c.touches,
      iPinch: c.pinch,
      iPinchDelta: c.pinchDelta,
      iPinchCenter: c.pinchCenter,
      crossViewStates: o
    };
    s.viewport(0, 0, this._width, this._height);
    const l = ["BufferA", "BufferB", "BufferC", "BufferD", "Image"];
    for (const d of l) {
      const m = this._passes.find((v) => v.name === d);
      m && (this.executePass(m, h), this.swapPassTextures(m));
    }
    this._uniformMgr.clearDirty(), this._frame += 1;
  }
  /**
   * Resize all internal render targets to new width/height.
   * Does not reset time or frame count.
   */
  resize(t, n) {
    this._width = t, this._height = n;
    const r = this.gl;
    for (const i of this._passes)
      r.deleteTexture(i.currentTexture), r.deleteTexture(i.previousTexture), r.deleteFramebuffer(i.framebuffer), i.currentTexture = Xt(r, t, n), i.previousTexture = Xt(r, t, n), i.framebuffer = or(r, i.currentTexture);
  }
  /**
   * Reset frame counter and clear all render targets.
   * Used for playback controls to restart shader from frame 0.
   */
  reset() {
    this._frame = 0;
    const t = this.gl;
    for (const n of this._passes)
      t.bindFramebuffer(t.FRAMEBUFFER, n.framebuffer), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, n.previousTexture, 0), t.clear(t.COLOR_BUFFER_BIT), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, n.currentTexture, 0);
    t.bindFramebuffer(t.FRAMEBUFFER, null);
  }
  /**
   * Update keyboard key state (called from App on keydown/keyup events).
   *
   * @param keycode ASCII keycode (e.g., 65 for 'A')
   * @param isDown true if key pressed, false if released
   */
  updateKeyState(t, n) {
    const r = this._keyStates.get(t) || !1;
    if (this._keyStates.set(t, n), n && !r) {
      const i = this._toggleStates.get(t) || 0;
      this._toggleStates.set(t, i === 0 ? 1 : 0);
    }
  }
  /**
   * Update keyboard texture with current key states.
   * Should be called once per frame before rendering.
   */
  updateKeyboardTexture() {
    this._keyboardTexture && ts(this.gl, this._keyboardTexture.texture, this._keyStates, this._toggleStates);
  }
  /**
   * Recompile a single pass with new GLSL source code.
   * Used for live editing - keeps the old shader running if compilation fails.
   *
   * @param passName - Name of the pass to recompile ('Image', 'BufferA', etc.)
   * @param newSource - New GLSL source code for the pass
   * @returns Object with success status and error message if failed
   */
  recompilePass(t, n) {
    const r = this.gl, i = this._passes.find((a) => a.name === t);
    if (!i)
      return { success: !1, error: `Pass '${t}' not found` };
    const o = this.project.passes[t];
    if (!o)
      return { success: !1, error: `Project pass '${t}' not found` };
    const { source: s } = this.buildFragmentShader(n, o.channels, o.namedSamplers);
    try {
      const a = ir(r, ar, s);
      return r.deleteProgram(i.uniforms.program), i.uniforms = this.cacheUniformLocations(a, o.namedSamplers), o.glslSource = n, this._compilationErrors = this._compilationErrors.filter((u) => u.passName !== t), this._uniformMgr.markAllScalarsDirty(), { success: !0 };
    } catch (a) {
      return { success: !1, error: a instanceof Error ? a.message : String(a) };
    }
  }
  /**
   * Recompile common.glsl and all passes that use it.
   * Used for live editing of common code.
   *
   * @param newCommonSource - New GLSL source code for common.glsl
   * @returns Object with success status and errors for each failed pass
   */
  recompileCommon(t) {
    const n = this.project.commonSource;
    this.project.commonSource = t;
    const r = [], i = ["BufferA", "BufferB", "BufferC", "BufferD", "Image"];
    for (const o of i) {
      const s = this.project.passes[o];
      if (!s)
        continue;
      const a = this.recompilePass(o, s.glslSource);
      a.success || r.push({ passName: o, error: a.error || "Unknown error" });
    }
    if (r.length > 0) {
      this.project.commonSource = n;
      for (const o of i) {
        const s = this.project.passes[o];
        if (!s || r.some((u) => u.passName === o))
          continue;
        const a = this.recompilePass(o, s.glslSource);
        a.success || (console.error(`Failed to revert ${o} to old common source:`, a.error), r.push({ passName: o, error: `Revert failed: ${a.error}` }));
      }
      return { success: !1, errors: r };
    }
    return { success: !0, errors: [] };
  }
  /**
   * Delete all GL resources.
   */
  dispose() {
    this._disposed = !0;
    const t = this.gl;
    for (const n of this._passes)
      t.deleteProgram(n.uniforms.program), t.deleteFramebuffer(n.framebuffer), t.deleteTexture(n.currentTexture), t.deleteTexture(n.previousTexture);
    this._sharedVAO && (t.deleteVertexArray(this._sharedVAO), this._sharedVAO = null);
    for (const n of this._textures)
      t.deleteTexture(n.texture);
    this._keyboardTexture && t.deleteTexture(this._keyboardTexture.texture), this._blackTexture && t.deleteTexture(this._blackTexture);
    for (const [, n] of this._scriptTextures)
      t.deleteTexture(n.texture);
    this._scriptTextures.clear(), this._uniformMgr.dispose(t), this._media.dispose(t), this._passes = [], this._textures = [], this._keyboardTexture = null, this._blackTexture = null;
  }
  // ===========================================================================
  // Initialization Helpers
  // ===========================================================================
  initExtensions() {
    const t = this.gl;
    if (!t.getExtension("EXT_color_buffer_float"))
      throw new Error("EXT_color_buffer_float not supported. WebGL2 with float rendering is required.");
    t.getExtension("OES_texture_float_linear");
  }
  /**
   * Cache uniform locations for a compiled program.
   * Returns a PassUniformLocations object with all standard and custom uniform locations.
   */
  cacheUniformLocations(t, n) {
    const r = this.gl, i = /* @__PURE__ */ new Map();
    for (const [o, s] of Object.entries(this.project.uniforms))
      _e(s) || i.set(o, r.getUniformLocation(t, o));
    return this._uniformMgr.bindUBOsToProgram(r, t, i), {
      program: t,
      iResolution: r.getUniformLocation(t, "iResolution"),
      iTime: r.getUniformLocation(t, "iTime"),
      iTimeDelta: r.getUniformLocation(t, "iTimeDelta"),
      iFrame: r.getUniformLocation(t, "iFrame"),
      iMouse: r.getUniformLocation(t, "iMouse"),
      iMousePressed: r.getUniformLocation(t, "iMousePressed"),
      iDate: r.getUniformLocation(t, "iDate"),
      iFrameRate: r.getUniformLocation(t, "iFrameRate"),
      iChannel: [
        r.getUniformLocation(t, "iChannel0"),
        r.getUniformLocation(t, "iChannel1"),
        r.getUniformLocation(t, "iChannel2"),
        r.getUniformLocation(t, "iChannel3")
      ],
      iChannelResolution: [
        r.getUniformLocation(t, "iChannelResolution[0]"),
        r.getUniformLocation(t, "iChannelResolution[1]"),
        r.getUniformLocation(t, "iChannelResolution[2]"),
        r.getUniformLocation(t, "iChannelResolution[3]")
      ],
      // Touch uniforms
      iTouchCount: r.getUniformLocation(t, "iTouchCount"),
      iTouch: [
        r.getUniformLocation(t, "iTouch0"),
        r.getUniformLocation(t, "iTouch1"),
        r.getUniformLocation(t, "iTouch2")
      ],
      iPinch: r.getUniformLocation(t, "iPinch"),
      iPinchDelta: r.getUniformLocation(t, "iPinchDelta"),
      iPinchCenter: r.getUniformLocation(t, "iPinchCenter"),
      custom: i,
      namedSamplers: (() => {
        const o = /* @__PURE__ */ new Map();
        if (n)
          for (const [s] of n)
            o.set(s, r.getUniformLocation(t, s));
        return o;
      })(),
      namedSamplerResolutions: (() => {
        const o = /* @__PURE__ */ new Map();
        if (n)
          for (const [s] of n)
            o.set(s, r.getUniformLocation(t, `${s}_resolution`));
        return o;
      })(),
      // Cross-view uniforms for multi-view projects
      crossViewMouse: (() => {
        const o = /* @__PURE__ */ new Map();
        if (this._viewNames.length > 1)
          for (const s of this._viewNames)
            o.set(s, r.getUniformLocation(t, `iMouse_${s}`));
        return o;
      })(),
      crossViewResolution: (() => {
        const o = /* @__PURE__ */ new Map();
        if (this._viewNames.length > 1)
          for (const s of this._viewNames)
            o.set(s, r.getUniformLocation(t, `iResolution_${s}`));
        return o;
      })(),
      crossViewMousePressed: (() => {
        const o = /* @__PURE__ */ new Map();
        if (this._viewNames.length > 1)
          for (const s of this._viewNames)
            o.set(s, r.getUniformLocation(t, `iMousePressed_${s}`));
        return o;
      })()
    };
  }
  /**
   * Initialize external textures based on project.textures.
   *
   * NOTE: This function as written assumes that actual image loading
   * is handled elsewhere. For now we just construct an empty array.
   * In a real implementation, you would load images here.
   */
  initProjectTextures() {
    const t = this.gl;
    this._textures = [];
    for (const n of this.project.textures) {
      const r = t.createTexture();
      if (!r)
        throw new Error("Failed to create texture");
      t.bindTexture(t.TEXTURE_2D, r), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255]));
      const i = {
        name: n.name,
        texture: r,
        width: 1,
        height: 1
      };
      this._textures.push(i);
      const o = new Image();
      o.crossOrigin = "anonymous", o.onload = () => {
        if (this._disposed || t.isContextLost())
          return;
        t.bindTexture(t.TEXTURE_2D, r), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !0), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, o), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1);
        const s = n.filter !== "nearest";
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, s ? t.LINEAR : t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, s ? t.LINEAR_MIPMAP_LINEAR : t.NEAREST);
        const a = n.wrap === "clamp" ? t.CLAMP_TO_EDGE : t.REPEAT;
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, a), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, a), s && t.generateMipmap(t.TEXTURE_2D), i.width = o.width, i.height = o.height, console.log(`Loaded texture '${n.name}': ${o.width}x${o.height}`);
      }, o.onerror = () => {
        var s;
        console.error(`Failed to load texture '${n.name}' from ${n.source}`), (s = this._onAssetError) == null || s.call(this, { type: "texture", name: n.name, detail: n.source });
      }, o.src = n.source;
    }
  }
  /**
   * Compile shaders, create VAOs/FBOs/textures, and build RuntimePass array.
   */
  initRuntimePasses() {
    const t = this.gl, n = this.project, r = Jo(t);
    this._sharedVAO = r;
    const i = ["BufferA", "BufferB", "BufferC", "BufferD", "Image"];
    for (const o of i) {
      const s = n.passes[o];
      if (!s)
        continue;
      const { source: a, lineMapping: u } = this.buildFragmentShader(s.glslSource, s.channels, s.namedSamplers);
      try {
        const c = ir(t, ar, a), h = this.cacheUniformLocations(c, s.namedSamplers), l = Xt(t, this._width, this._height), d = Xt(t, this._width, this._height), m = or(t, l), v = {
          name: o,
          projectChannels: s.channels,
          vao: r,
          uniforms: h,
          framebuffer: m,
          currentTexture: l,
          previousTexture: d,
          namedSamplers: s.namedSamplers
        };
        this._passes.push(v);
      } catch (c) {
        const h = c instanceof Error ? c.message : String(c), l = h.match(/ERROR:\s*\d+:(\d+):/);
        let d = !1, m = null;
        if (l) {
          const v = parseInt(l[1], 10);
          if (u.commonStartLine > 0 && u.commonLines > 0) {
            const f = u.commonStartLine + u.commonLines - 1;
            v >= u.commonStartLine && v <= f && (d = !0, m = v - u.commonStartLine + 1);
          }
          !d && u.userCodeStartLine > 0 && v >= u.userCodeStartLine && (m = v - u.userCodeStartLine + 1);
        }
        this._compilationErrors.push({
          passName: o,
          error: h,
          source: a,
          isFromCommon: d,
          originalLine: m,
          lineMapping: u
        }), console.error(`Failed to compile ${o}:`, h);
      }
    }
  }
  /**
   * Build complete fragment shader source with Shadertoy boilerplate.
   */
  buildFragmentShader(t, n, r) {
    return hs(t, n, {
      commonSource: this.project.commonSource ?? "",
      ubos: this._uniformMgr.ubos.map((i) => ({ name: i.name, def: i.def, count: i.def.count })),
      uniforms: this.project.uniforms,
      namedSamplers: r,
      viewNames: this._viewNames.length > 1 ? this._viewNames : void 0
    });
  }
  /**
   * Set view names for multi-view projects.
   * This enables cross-view uniforms (iMouse_viewName, iResolution_viewName, etc.)
   * Must be called before shader compilation.
   */
  setViewNames(t) {
    this._viewNames = t;
  }
  // ===========================================================================
  // Pass Execution
  // ===========================================================================
  executePass(t, n) {
    const r = this.gl;
    r.bindFramebuffer(r.FRAMEBUFFER, t.framebuffer), r.useProgram(t.uniforms.program), r.bindVertexArray(t.vao), this.bindBuiltinUniforms(t.uniforms, n), this._uniformMgr.bindToProgram(r, t.uniforms), t.namedSamplers && t.namedSamplers.size > 0 ? this.bindNamedSamplers(t) : this.bindChannelTextures(t), r.drawArrays(r.TRIANGLES, 0, 3), r.bindVertexArray(null), r.useProgram(null), r.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  bindBuiltinUniforms(t, n) {
    const r = this.gl;
    t.iResolution && r.uniform3f(t.iResolution, n.iResolution[0], n.iResolution[1], n.iResolution[2]), t.iTime && r.uniform1f(t.iTime, n.iTime), t.iTimeDelta && r.uniform1f(t.iTimeDelta, n.iTimeDelta), t.iFrame && r.uniform1i(t.iFrame, n.iFrame), t.iMouse && r.uniform4f(t.iMouse, n.iMouse[0], n.iMouse[1], n.iMouse[2], n.iMouse[3]), t.iMousePressed && r.uniform1i(t.iMousePressed, n.iMousePressed ? 1 : 0), t.iDate && r.uniform4f(t.iDate, n.iDate[0], n.iDate[1], n.iDate[2], n.iDate[3]), t.iFrameRate && r.uniform1f(t.iFrameRate, n.iFrameRate), t.iTouchCount && r.uniform1i(t.iTouchCount, n.iTouchCount);
    for (let i = 0; i < 3; i++) {
      const o = t.iTouch[i];
      if (o) {
        const s = n.iTouch[i];
        r.uniform4f(o, s[0], s[1], s[2], s[3]);
      }
    }
    if (t.iPinch && r.uniform1f(t.iPinch, n.iPinch), t.iPinchDelta && r.uniform1f(t.iPinchDelta, n.iPinchDelta), t.iPinchCenter && r.uniform2f(t.iPinchCenter, n.iPinchCenter[0], n.iPinchCenter[1]), n.crossViewStates)
      for (const [i, o] of n.crossViewStates) {
        const s = t.crossViewMouse.get(i);
        s && r.uniform4f(s, o.mouse[0], o.mouse[1], o.mouse[2], o.mouse[3]);
        const a = t.crossViewResolution.get(i);
        a && r.uniform3f(a, o.resolution[0], o.resolution[1], o.resolution[2]);
        const u = t.crossViewMousePressed.get(i);
        u && r.uniform1i(u, o.mousePressed ? 1 : 0);
      }
  }
  bindChannelTextures(t) {
    const n = this.gl;
    for (let r = 0; r < 4; r++) {
      const i = t.projectChannels[r], o = this.resolveChannelTexture(i), s = this.resolveChannelResolution(i);
      n.activeTexture(n.TEXTURE0 + r), n.bindTexture(n.TEXTURE_2D, o);
      const a = t.uniforms.iChannel[r];
      a && n.uniform1i(a, r);
      const u = t.uniforms.iChannelResolution[r];
      u && n.uniform3f(u, s[0], s[1], 1);
    }
  }
  /**
   * Bind named samplers (standard mode).
   * Each named sampler gets its own texture unit.
   */
  bindNamedSamplers(t) {
    const n = this.gl;
    let r = 0;
    for (const [i, o] of t.namedSamplers) {
      const s = this.resolveChannelTexture(o), a = this.resolveChannelResolution(o);
      n.activeTexture(n.TEXTURE0 + r), n.bindTexture(n.TEXTURE_2D, s);
      const u = t.uniforms.namedSamplers.get(i);
      u && n.uniform1i(u, r);
      const c = t.uniforms.namedSamplerResolutions.get(i);
      c && n.uniform3f(c, a[0], a[1], 1), r++;
    }
  }
  /**
   * Resolve a ChannelSource to an actual WebGLTexture to bind.
   */
  resolveChannelTexture(t) {
    switch (t.kind) {
      case "none":
        if (!this._blackTexture)
          throw new Error("Black texture not initialized");
        return this._blackTexture;
      case "buffer": {
        const n = this._passes.find((r) => r.name === t.buffer);
        return n ? t.current ? n.currentTexture : n.previousTexture : (console.warn(`resolveChannelTexture: buffer '${t.buffer}' not found, using black`), this._blackTexture);
      }
      case "texture": {
        const n = this._textures.find((r) => r.name === t.name);
        return n ? n.texture : (console.warn(`resolveChannelTexture: texture '${t.name}' not found, using black`), this._blackTexture);
      }
      case "keyboard":
        if (!this._keyboardTexture)
          throw new Error("Internal error: keyboard texture not initialized");
        return this._keyboardTexture.texture;
      case "audio":
        return this._media.audioTexture ? this._media.audioTexture.texture : this._blackTexture;
      case "webcam": {
        const n = this._media.videoTextures.find((r) => r.kind === "webcam");
        return (n == null ? void 0 : n.texture) ?? this._blackTexture;
      }
      case "video": {
        const n = this._media.videoTextures.find((r) => r.kind === "video" && r.src === t.src);
        return (n == null ? void 0 : n.texture) ?? this._blackTexture;
      }
      case "script": {
        const n = this._scriptTextures.get(t.name);
        return (n == null ? void 0 : n.texture) ?? this._blackTexture;
      }
    }
  }
  /**
   * Resolve a ChannelSource to its resolution [width, height].
   * Returns [0, 0] for unused channels.
   */
  resolveChannelResolution(t) {
    switch (t.kind) {
      case "none":
        return [0, 0];
      case "buffer":
        return [this._width, this._height];
      case "texture": {
        const n = this._textures.find((r) => r.name === t.name);
        return n ? [n.width, n.height] : [0, 0];
      }
      case "keyboard":
        return [256, 3];
      case "audio":
        return this._media.audioTexture ? [this._media.audioTexture.width, this._media.audioTexture.height] : [0, 0];
      case "webcam": {
        const n = this._media.videoTextures.find((r) => r.kind === "webcam");
        return n ? [n.width, n.height] : [0, 0];
      }
      case "video": {
        const n = this._media.videoTextures.find((r) => r.kind === "video" && r.src === t.src);
        return n ? [n.width, n.height] : [0, 0];
      }
      case "script": {
        const n = this._scriptTextures.get(t.name);
        return n ? [n.width, n.height] : [0, 0];
      }
    }
  }
  /**
   * Swap current and previous textures for a pass (ping-pong).
   * Also reattach framebuffer to new current texture.
   */
  swapPassTextures(t) {
    const n = this.gl, r = t.currentTexture;
    t.currentTexture = t.previousTexture, t.previousTexture = r, n.bindFramebuffer(n.FRAMEBUFFER, t.framebuffer), n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, t.currentTexture, 0), n.bindFramebuffer(n.FRAMEBUFFER, null);
  }
}
class vs {
  constructor(t) {
    this.overlay = null, this.container = t;
  }
  /**
   * Display shader compilation errors in an overlay.
   */
  show(t, n) {
    this.overlay || (this.overlay = document.createElement("div"), this.overlay.className = "shader-error-overlay", this.container.appendChild(this.overlay));
    const r = t.filter((h) => h.isFromCommon), i = t.filter((h) => !h.isFromCommon), u = [...r.length > 0 ? [r[0]] : [], ...i].map(({ passName: h, error: l, isFromCommon: d, originalLine: m, lineMapping: v }) => {
      const f = l.replace(`Shader compilation failed:
`, ""), y = m;
      let C = f;
      y !== null && (C = f.replace(/ERROR:\s*\d+:(\d+):/g, `ERROR: 0:${y}:`));
      let E = null;
      if (d)
        E = n.commonSource;
      else {
        const p = n.passes[h];
        E = (p == null ? void 0 : p.glslSource) ?? null;
      }
      return {
        passName: d ? "common.glsl" : h,
        error: Ds(C, v, d),
        codeContext: y !== null && E ? ys(E, y) : null
      };
    }).map(({ passName: h, error: l, codeContext: d }) => `
      <div class="error-section">
        <div class="error-pass-name">${h}</div>
        <pre class="error-content">${Jr(l)}</pre>
        ${d ? `<pre class="error-code-context">${d}</pre>` : ""}
      </div>
    `).join("");
    this.overlay.innerHTML = `
      <div class="error-overlay-content">
        <div class="error-header">
          <span class="error-title">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style="vertical-align: text-bottom;">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM3.5 7.5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9z"/>
            </svg>
            Shader Compilation Failed
          </span>
          <button class="error-close" title="Dismiss">×</button>
        </div>
        <div class="error-body">
          ${u}
        </div>
      </div>
    `;
    const c = this.overlay.querySelector(".error-close");
    c && c.addEventListener("click", () => this.hide());
  }
  /**
   * Hide the error overlay.
   */
  hide() {
    this.overlay && (this.overlay.remove(), this.overlay = null);
  }
  /**
   * Clean up resources.
   */
  dispose() {
    this.hide();
  }
}
function Ds(e, t, n) {
  return e.split(`
`).map((r) => {
    const i = r.match(/^ERROR:\s*(\d+):(\d+):\s*(.+)$/);
    if (i) {
      const [, , o, s] = i, a = parseInt(o, 10);
      let u = a;
      return n && t.commonStartLine > 0 ? u = a - t.commonStartLine + 1 : t.userCodeStartLine > 0 && a >= t.userCodeStartLine && (u = a - t.userCodeStartLine + 1), `Line ${u}: ${Es(s)}`;
    }
    return r;
  }).join(`
`);
}
function Es(e) {
  return e.includes("no matching overloaded function found") ? e + " (check function name spelling and argument types)" : e.includes("undeclared identifier") ? e + " (variable not declared — check spelling)" : e.includes("syntax error") ? e + " (check for missing semicolons, brackets, or commas)" : e.includes("is not a function") ? e + " (identifier exists but is not callable)" : e.includes("wrong operand types") ? e + " (type mismatch — check vec/float/int types)" : e;
}
function ys(e, t) {
  const n = e.split(`
`);
  if (t < 1 || t > n.length)
    return null;
  const r = 3, i = Math.max(0, t - r - 1), o = Math.min(n.length, t + r);
  return n.slice(i, o).map((a, u) => {
    const c = i + u + 1, h = c === t, l = String(c).padStart(4, " "), d = Jr(a);
    return h ? `<span class="error-line-highlight">${l} │ ${d}</span>` : `<span class="context-line">${l} │ ${d}</span>`;
  }).join("");
}
function Jr(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
class Ot {
  constructor(t) {
    this.overlay = null, this.autoHideTimer = null, this.container = t;
  }
  /**
   * Show an error from setup() or onFrame().
   */
  showError(t, n) {
    this.clearAutoHide(), this.ensureOverlay();
    const r = n instanceof Error ? n.message : String(n), i = n instanceof Error && n.stack ? n.stack.split(`
`).slice(1, 4).join(`
`) : "";
    this.overlay.innerHTML = `
      <div class="script-error-content">
        <div class="script-error-header">
          <span class="script-error-title">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style="vertical-align: text-bottom;">
              <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm9 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-.25-6.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5z"/>
            </svg>
            script.js ${t}() error
          </span>
          <button class="script-error-close" title="Dismiss">×</button>
        </div>
        <pre class="script-error-message">${jt(r)}</pre>
        ${i ? `<pre class="script-error-stack">${jt(i)}</pre>` : ""}
      </div>
    `, this.wireClose(), this.autoHideTimer = setTimeout(() => this.hide(), Ot.AUTO_HIDE_MS);
  }
  /**
   * Show a persistent warning when onFrame() has been disabled.
   */
  showDisabled() {
    this.clearAutoHide(), this.ensureOverlay(), this.overlay.innerHTML = `
      <div class="script-error-content">
        <div class="script-error-header disabled">
          <span class="script-error-title">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style="vertical-align: text-bottom;">
              <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm9 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-.25-6.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5z"/>
            </svg>
            script.js onFrame() disabled
          </span>
          <button class="script-error-close" title="Dismiss">×</button>
        </div>
        <pre class="script-error-message">Too many consecutive errors. Reload to retry.</pre>
      </div>
    `, this.wireClose();
  }
  /**
   * Show a warning banner for asset load errors (textures, framebuffers).
   */
  showWarning(t, n) {
    this.clearAutoHide(), this.ensureOverlay(), this.overlay.innerHTML = `
      <div class="script-error-content">
        <div class="script-error-header warning">
          <span class="script-error-title">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style="vertical-align: text-bottom;">
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            ${jt(t)}
          </span>
          <button class="script-error-close" title="Dismiss">×</button>
        </div>
        <pre class="script-error-message">${jt(n)}</pre>
      </div>
    `, this.wireClose(), this.autoHideTimer = setTimeout(() => this.hide(), Ot.AUTO_HIDE_MS);
  }
  /**
   * Hide the overlay.
   */
  hide() {
    this.clearAutoHide(), this.overlay && (this.overlay.remove(), this.overlay = null);
  }
  /**
   * Clean up resources.
   */
  dispose() {
    this.hide();
  }
  ensureOverlay() {
    this.overlay || (this.overlay = document.createElement("div"), this.overlay.className = "script-error-overlay", this.container.appendChild(this.overlay));
  }
  wireClose() {
    var n;
    const t = (n = this.overlay) == null ? void 0 : n.querySelector(".script-error-close");
    t && t.addEventListener("click", () => this.hide());
  }
  clearAutoHide() {
    this.autoHideTimer !== null && (clearTimeout(this.autoHideTimer), this.autoHideTimer = null);
  }
}
Ot.AUTO_HIDE_MS = 5e3;
function jt(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const zt = {};
for (let e = 0; e < 26; e++)
  zt[`Key${String.fromCharCode(65 + e)}`] = 65 + e;
for (let e = 0; e < 10; e++)
  zt[`Digit${e}`] = 48 + e;
for (let e = 1; e <= 12; e++)
  zt[`F${e}`] = 111 + e;
Object.assign(zt, {
  Backspace: 8,
  Tab: 9,
  Enter: 13,
  ShiftLeft: 16,
  ShiftRight: 16,
  ControlLeft: 17,
  ControlRight: 17,
  AltLeft: 18,
  AltRight: 18,
  Pause: 19,
  CapsLock: 20,
  Escape: 27,
  Space: 32,
  PageUp: 33,
  PageDown: 34,
  End: 35,
  Home: 36,
  ArrowLeft: 37,
  ArrowUp: 38,
  ArrowRight: 39,
  ArrowDown: 40,
  Insert: 45,
  Delete: 46,
  NumLock: 144,
  ScrollLock: 145,
  Semicolon: 186,
  Equal: 187,
  Comma: 188,
  Minus: 189,
  Period: 190,
  Slash: 191,
  Backquote: 192,
  BracketLeft: 219,
  Backslash: 220,
  BracketRight: 221,
  Quote: 222
});
function cr(e) {
  const t = zt[e.code];
  return t !== void 0 && t >= 0 && t < 256 ? t : null;
}
class ws {
  constructor(t, n, r) {
    this.mouse = [0, 0, 0, 0], this.isMouseDown = !1, this.touchState = {
      count: 0,
      touches: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      pinch: 1,
      pinchDelta: 0,
      pinchCenter: [0, 0]
    }, this.onFirstGesture = null, this.activePointers = /* @__PURE__ */ new Map(), this.gestureTriggered = !1, this.keyEvents = [], this.canvasListeners = [], this.canvas = t, this.pixelRatio = n, this.keyboardTarget = r ?? document, this.setupMouseTracking(), this.setupTouchTracking(), this.keydownHandler = (i) => {
      const o = cr(i);
      o !== null && this.keyEvents.push({ keycode: o, down: !0 });
    }, this.keyupHandler = (i) => {
      const o = cr(i);
      o !== null && this.keyEvents.push({ keycode: o, down: !1 });
    }, this.keyboardTarget.addEventListener("keydown", this.keydownHandler), this.keyboardTarget.addEventListener("keyup", this.keyupHandler);
  }
  /**
   * Drain and return accumulated key events since last call.
   */
  getAndClearKeyEvents() {
    const t = this.keyEvents;
    return this.keyEvents = [], t;
  }
  /**
   * Clean up all event listeners.
   */
  dispose() {
    this.keyboardTarget.removeEventListener("keydown", this.keydownHandler), this.keyboardTarget.removeEventListener("keyup", this.keyupHandler);
    for (const { event: t, handler: n } of this.canvasListeners)
      this.canvas.removeEventListener(t, n);
    this.canvasListeners = [];
  }
  triggerGesture() {
    var t;
    this.gestureTriggered || (this.gestureTriggered = !0, (t = this.onFirstGesture) == null || t.call(this));
  }
  setupMouseTracking() {
    const t = (o) => {
      const s = this.canvas.getBoundingClientRect(), a = (o.clientX - s.left) * this.pixelRatio, u = (s.height - (o.clientY - s.top)) * this.pixelRatio;
      return [a, u];
    }, n = (o) => {
      const [s, a] = t(o);
      this.isMouseDown = !0, this.mouse[0] = s, this.mouse[1] = a, this.mouse[2] = s, this.mouse[3] = a, this.triggerGesture();
    }, r = (o) => {
      if (!this.isMouseDown)
        return;
      const [s, a] = t(o);
      this.mouse[0] = s, this.mouse[1] = a;
    }, i = () => {
      this.isMouseDown = !1, this.mouse[2] = -Math.abs(this.mouse[2]), this.mouse[3] = -Math.abs(this.mouse[3]);
    };
    this.canvas.addEventListener("mousedown", n), this.canvas.addEventListener("mousemove", r), this.canvas.addEventListener("mouseup", i), this.canvasListeners.push({ event: "mousedown", handler: n }, { event: "mousemove", handler: r }, { event: "mouseup", handler: i });
  }
  setupTouchTracking() {
    this.canvas.style.touchAction = "pan-y";
    const t = (s, a) => {
      const u = this.canvas.getBoundingClientRect(), c = (s - u.left) * this.pixelRatio, h = (u.height - (a - u.top)) * this.pixelRatio;
      return [c, h];
    }, n = (s) => {
      if (s.pointerType === "mouse")
        return;
      const [a, u] = t(s.clientX, s.clientY);
      this.activePointers.set(s.pointerId, {
        id: s.pointerId,
        x: a,
        y: u,
        startX: a,
        startY: u
      }), this.canvas.setPointerCapture(s.pointerId), this.updateTouchState(), this.activePointers.size === 1 && (this.isMouseDown = !0, this.mouse[0] = a, this.mouse[1] = u, this.mouse[2] = a, this.mouse[3] = u);
    }, r = (s) => {
      if (s.pointerType === "mouse")
        return;
      const a = this.activePointers.get(s.pointerId);
      if (!a)
        return;
      const [u, c] = t(s.clientX, s.clientY);
      a.x = u, a.y = c, this.updateTouchState(), this.activePointers.size === 1 && (this.mouse[0] = u, this.mouse[1] = c), s.preventDefault();
    }, i = (s) => {
      s.pointerType !== "mouse" && (this.activePointers.delete(s.pointerId), this.canvas.releasePointerCapture(s.pointerId), this.activePointers.size === 0 && (this.isMouseDown = !1, this.mouse[2] = -Math.abs(this.mouse[2]), this.mouse[3] = -Math.abs(this.mouse[3])), this.updateTouchState());
    }, o = (s) => {
      i(s);
    };
    this.canvas.addEventListener("pointerdown", n), this.canvas.addEventListener("pointermove", r), this.canvas.addEventListener("pointerup", i), this.canvas.addEventListener("pointercancel", o), this.canvasListeners.push({ event: "pointerdown", handler: n }, { event: "pointermove", handler: r }, { event: "pointerup", handler: i }, { event: "pointercancel", handler: o });
  }
  updateTouchState() {
    const t = Array.from(this.activePointers.values()), n = t.length;
    this.touchState.count = n;
    for (let r = 0; r < 3; r++)
      if (r < t.length) {
        const i = t[r];
        this.touchState.touches[r] = [i.x, i.y, i.startX, i.startY];
      } else
        this.touchState.touches[r] = [0, 0, 0, 0];
    if (n >= 2) {
      const r = t[0], i = t[1], o = i.x - r.x, s = i.y - r.y, a = Math.sqrt(o * o + s * s), u = i.startX - r.startX, c = i.startY - r.startY, h = Math.sqrt(u * u + c * c);
      if (h > 0) {
        const l = a / h;
        this.touchState.pinchDelta = l - this.touchState.pinch, this.touchState.pinch = l;
      }
      this.touchState.pinchCenter = [
        (r.x + i.x) / 2,
        (r.y + i.y) / 2
      ];
    } else
      this.touchState.pinchDelta = 0, n === 0 && (this.touchState.pinch = 1, this.touchState.pinchCenter = [0, 0]);
  }
}
class lr {
  get engine() {
    return this._engine;
  }
  get isContextLost() {
    return this._isContextLost;
  }
  constructor(t) {
    this._resizeDebounceTimer = null, this._contextLostOverlay = null, this._isContextLost = !1, this._mediaBanner = null, this._mediaInitialized = !1, this._overlays = /* @__PURE__ */ new Map(), this.onResize = null, this.onContextRestored = null, this.container = t.container, this._project = t.project, this._pixelRatio = t.pixelRatio, this._viewNames = t.viewNames, this.canvas = document.createElement("canvas"), this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.display = "block", this.container.appendChild(this.canvas), this.errorOverlay = new vs(this.container), this.runtimeErrorOverlay = new Ot(this.container);
    const n = this.canvas.getContext("webgl2", {
      alpha: !1,
      antialias: !1,
      depth: !1,
      stencil: !1,
      preserveDrawingBuffer: !0,
      powerPreference: "high-performance"
    });
    if (!n)
      throw new Error("WebGL2 not supported");
    this.gl = n, this.setupContextLossHandling(), this.updateCanvasSize(), this._engine = new ur({
      gl: this.gl,
      project: t.project,
      viewNames: t.viewNames,
      onAssetError: (r) => {
        const i = r.type === "texture" ? `Texture '${r.name}' failed to load` : `Framebuffer '${r.name}' error`;
        this.runtimeErrorOverlay.showWarning(i, r.detail);
      }
    }), this._engine.hasErrors() && this.errorOverlay.show(this._engine.getCompilationErrors(), this._project), (this._engine.needsAudio || this._engine.needsWebcam) && this.showMediaBanner(), this._resizeObserver = new ResizeObserver(() => {
      this.updateCanvasSize(), this._resizeDebounceTimer !== null && clearTimeout(this._resizeDebounceTimer), this._resizeDebounceTimer = setTimeout(() => {
        var r;
        this._resizeDebounceTimer = null, this._engine.resize(this.canvas.width, this.canvas.height), this._engine.reset(), (r = this.onResize) == null || r.call(this, this.canvas.width, this.canvas.height);
      }, 150);
    }), this._resizeObserver.observe(this.container), this.input = new ws(this.canvas, this._pixelRatio, t.keyboardTarget), this.input.onFirstGesture = () => this.initMediaOnGesture(), this.initVideoFiles();
  }
  // ===========================================================================
  // Per-Frame Rendering
  // ===========================================================================
  /**
   * Step this view for one frame: forward input, run engine, blit to screen.
   */
  step(t, n) {
    if (!this._isContextLost) {
      for (const r of this.input.getAndClearKeyEvents())
        this._engine.updateKeyState(r.keycode, r.down);
      this._engine.updateKeyboardTexture(), this._engine.updateAudioTexture(), this._engine.updateVideoTextures(), this._engine.step(t, this.input.mouse, this.input.isMouseDown, {
        count: this.input.touchState.count,
        touches: this.input.touchState.touches,
        pinch: this.input.touchState.pinch,
        pinchDelta: this.input.touchState.pinchDelta,
        pinchCenter: this.input.touchState.pinchCenter
      }, n), this.input.touchState.pinchDelta = 0, this.presentToScreen();
    }
  }
  /**
   * Blit engine Image pass output to the canvas.
   */
  presentToScreen() {
    const t = this.gl;
    this._engine.bindImageForRead() && (t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null), t.blitFramebuffer(0, 0, this.canvas.width, this.canvas.height, 0, 0, this.canvas.width, this.canvas.height, t.COLOR_BUFFER_BIT, t.NEAREST), this._engine.unbindImageForRead());
  }
  // ===========================================================================
  // Cross-View State Getters
  // ===========================================================================
  getMouseState() {
    return [...this.input.mouse];
  }
  getResolution() {
    return [this.canvas.width, this.canvas.height, 1];
  }
  getMousePressed() {
    return this.input.isMouseDown;
  }
  hasErrors() {
    return this._engine.hasErrors();
  }
  // ===========================================================================
  // Script Info Overlays
  // ===========================================================================
  setOverlay(t, n) {
    let r = this._overlays.get(t);
    if (n === null) {
      r && r.classList.add("hidden");
      return;
    }
    r || (r = document.createElement("div"), r.className = `script-overlay ${t}`, this.container.appendChild(r), this._overlays.set(t, r)), r.textContent = n, r.classList.remove("hidden");
  }
  // ===========================================================================
  // Lifecycle
  // ===========================================================================
  dispose() {
    this.input.dispose(), this._resizeObserver.disconnect(), this._resizeDebounceTimer !== null && clearTimeout(this._resizeDebounceTimer), this._engine.dispose(), this.errorOverlay.hide(), this.runtimeErrorOverlay.dispose(), this.hideMediaBanner(), this.hideContextLostOverlay();
    for (const n of this._overlays.values())
      n.remove();
    this._overlays.clear();
    const t = this.gl.getExtension("WEBGL_lose_context");
    t && t.loseContext(), this.container.removeChild(this.canvas);
  }
  // ===========================================================================
  // Canvas Sizing
  // ===========================================================================
  updateCanvasSize() {
    const t = this.container.getBoundingClientRect(), n = Math.floor(t.width * this._pixelRatio), r = Math.floor(t.height * this._pixelRatio);
    (this.canvas.width !== n || this.canvas.height !== r) && (this.canvas.width = n, this.canvas.height = r);
  }
  // ===========================================================================
  // Context Loss Handling
  // ===========================================================================
  setupContextLossHandling() {
    this.canvas.addEventListener("webglcontextlost", (t) => {
      t.preventDefault(), this.handleContextLost();
    }), this.canvas.addEventListener("webglcontextrestored", () => {
      this.handleContextRestored();
    });
  }
  handleContextLost() {
    this._isContextLost = !0, this.showContextLostOverlay(), console.warn("WebGL context lost. Waiting for restoration...");
  }
  handleContextRestored() {
    var t;
    console.log("WebGL context restored. Reinitializing...");
    try {
      this._engine.dispose(), this._engine = new ur({
        gl: this.gl,
        project: this._project,
        viewNames: this._viewNames,
        onAssetError: (n) => {
          const r = n.type === "texture" ? `Texture '${n.name}' failed to load` : `Framebuffer '${n.name}' error`;
          this.runtimeErrorOverlay.showWarning(r, n.detail);
        }
      }), this._engine.hasErrors() && this.errorOverlay.show(this._engine.getCompilationErrors(), this._project), this._engine.resize(this.canvas.width, this.canvas.height), this.hideContextLostOverlay(), this._isContextLost = !1, (t = this.onContextRestored) == null || t.call(this), console.log("WebGL context successfully restored");
    } catch (n) {
      console.error("Failed to restore WebGL context:", n), this.showContextLostOverlay(!0);
    }
  }
  showContextLostOverlay(t = !1) {
    this._contextLostOverlay || (this._contextLostOverlay = document.createElement("div"), this._contextLostOverlay.className = "context-lost-overlay", this.container.appendChild(this._contextLostOverlay)), t ? this._contextLostOverlay.innerHTML = `
        <div class="context-lost-content">
          <div class="context-lost-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div class="context-lost-title">WebGL Context Lost</div>
          <div class="context-lost-message">Unable to restore automatically.</div>
          <button class="context-lost-reload" onclick="location.reload()">Reload Page</button>
        </div>
      ` : this._contextLostOverlay.innerHTML = `
        <div class="context-lost-content">
          <div class="context-lost-spinner"></div>
          <div class="context-lost-title">WebGL Context Lost</div>
          <div class="context-lost-message">Attempting to restore...</div>
        </div>
      `;
  }
  hideContextLostOverlay() {
    this._contextLostOverlay && (this._contextLostOverlay.remove(), this._contextLostOverlay = null);
  }
  // ===========================================================================
  // Media Initialization
  // ===========================================================================
  initMediaOnGesture() {
    this._mediaInitialized || (this._mediaInitialized = !0, this.hideMediaBanner(), this._engine.needsAudio && this._engine.initAudio(), this._engine.needsWebcam && this._engine.initWebcam());
  }
  initVideoFiles() {
    for (const t of this._engine.videoSources)
      this._engine.initVideo(t);
  }
  showMediaBanner() {
    this._mediaBanner = document.createElement("div"), this._mediaBanner.className = "media-permission-banner";
    const t = [];
    this._engine.needsAudio && t.push("microphone"), this._engine.needsWebcam && t.push("webcam"), this._mediaBanner.innerHTML = `
      <span class="media-banner-text">This shader uses ${t.join(" and ")}</span>
      <button class="media-banner-button">Click to enable</button>
    `, this._mediaBanner.querySelector(".media-banner-button").addEventListener("click", () => {
      this.initMediaOnGesture();
    }), this.container.appendChild(this._mediaBanner);
  }
  hideMediaBanner() {
    this._mediaBanner && (this._mediaBanner.remove(), this._mediaBanner = null);
  }
}
class Qr {
  constructor(t) {
    var n;
    this.values = {}, this.updaters = /* @__PURE__ */ new Map(), this.documentListeners = [], this.container = t.container, this.uniforms = t.uniforms, this.onChange = t.onChange;
    for (const [r, i] of Object.entries(this.uniforms))
      _e(i) || i.hidden || (this.values[r] = ((n = t.initialValues) == null ? void 0 : n[r]) ?? i.value);
    this.render();
  }
  /**
   * Render all uniform controls.
   */
  render() {
    this.container.innerHTML = "", this.container.className = "uniform-controls";
    const t = Object.entries(this.uniforms);
    if (t.length === 0) {
      const o = document.createElement("div");
      o.className = "uniform-controls-empty", o.textContent = "No uniforms defined", this.container.appendChild(o);
      return;
    }
    const n = document.createElement("div");
    n.className = "uniform-controls-header";
    const r = document.createElement("button");
    r.className = "uniform-controls-reset", r.textContent = "Reset", r.title = "Reset all uniforms to defaults", r.addEventListener("click", () => this.resetToDefaults()), n.appendChild(r), this.container.appendChild(n);
    const i = document.createElement("div");
    i.className = "uniform-controls-list";
    for (const [o, s] of t) {
      if (_e(s) || s.hidden)
        continue;
      const a = this.createControl(o, s);
      a && (this.updaters.set(o, a.update), i.appendChild(a.element));
    }
    this.container.appendChild(i);
  }
  /**
   * Create a control element for a uniform.
   */
  createControl(t, n) {
    if (_e(n) || n.hidden)
      return null;
    switch (n.type) {
      case "float":
        return this.createFloatSlider(t, n);
      case "int":
        return this.createIntSlider(t, n);
      case "bool":
        return this.createBoolToggle(t, n);
      case "vec2":
        return this.createVec2Pad(t, n);
      case "vec3":
        return n.color ? this.createColorPicker(t, n) : this.createVecSliders(t, n, 3);
      case "vec4":
        return n.color ? this.createColorPicker4(t, n) : this.createVecSliders(t, n, 4);
      default:
        return console.warn(`Uniform '${t}': unknown type '${n.type}'`), null;
    }
  }
  // ===========================================================================
  // Shared Slider Row Helper
  // ===========================================================================
  createSliderRow(t) {
    const n = document.createElement("div");
    n.className = "uniform-control-label-row";
    const r = document.createElement("label");
    r.className = "uniform-control-label", r.textContent = t.label;
    const i = document.createElement("span");
    i.className = "uniform-control-value", i.textContent = t.format(t.value), n.appendChild(r), n.appendChild(i);
    const o = document.createElement("input");
    o.type = "range", o.className = "uniform-control-slider", o.min = String(t.min), o.max = String(t.max), o.step = String(t.step), o.value = String(t.value), o.addEventListener("input", () => {
      const u = parseFloat(o.value);
      t.onInput(u), i.textContent = t.format(u);
    });
    const s = document.createElement("div");
    return s.appendChild(n), s.appendChild(o), { element: s, update: (u) => {
      o.value = String(u), i.textContent = t.format(u);
    } };
  }
  // ===========================================================================
  // Float Slider
  // ===========================================================================
  createFloatSlider(t, n) {
    const r = n.step ?? 0.01, { element: i, update: o } = this.createSliderRow({
      label: n.label ?? t,
      min: n.min ?? 0,
      max: n.max ?? 1,
      step: r,
      value: this.values[t],
      format: (a) => this.formatNumber(a, r),
      onInput: (a) => {
        this.values[t] = a, this.onChange(t, a);
      }
    }), s = document.createElement("div");
    return s.className = "uniform-control uniform-control-float", s.appendChild(i), {
      element: s,
      update: (a) => o(a)
    };
  }
  // ===========================================================================
  // Int Slider
  // ===========================================================================
  createIntSlider(t, n) {
    const { element: r, update: i } = this.createSliderRow({
      label: n.label ?? t,
      min: n.min ?? 0,
      max: n.max ?? 10,
      step: n.step ?? 1,
      value: this.values[t],
      format: (s) => String(Math.round(s)),
      onInput: (s) => {
        const a = Math.round(s);
        this.values[t] = a, this.onChange(t, a);
      }
    }), o = document.createElement("div");
    return o.className = "uniform-control uniform-control-int", o.appendChild(r), {
      element: o,
      update: (s) => i(s)
    };
  }
  // ===========================================================================
  // Bool Toggle
  // ===========================================================================
  createBoolToggle(t, n) {
    const r = this.values[t], i = n.label ?? t, o = document.createElement("div");
    o.className = "uniform-control uniform-control-bool";
    const s = document.createElement("div");
    s.className = "uniform-control-label-row";
    const a = document.createElement("label");
    a.className = "uniform-control-label", a.textContent = i;
    const u = document.createElement("label");
    u.className = "uniform-control-toggle";
    const c = document.createElement("input");
    c.type = "checkbox", c.checked = r;
    const h = document.createElement("span");
    return h.className = "uniform-control-toggle-slider", c.addEventListener("change", () => {
      const l = c.checked;
      this.values[t] = l, this.onChange(t, l);
    }), u.appendChild(c), u.appendChild(h), s.appendChild(a), s.appendChild(u), o.appendChild(s), {
      element: o,
      update: (l) => {
        c.checked = l;
      }
    };
  }
  // ===========================================================================
  // Vec2 XY Pad
  // ===========================================================================
  createVec2Pad(t, n) {
    const r = this.values[t], i = n.min ?? [0, 0], o = n.max ?? [1, 1], s = n.label ?? t, a = document.createElement("div");
    a.className = "uniform-control uniform-control-vec2";
    const u = document.createElement("div");
    u.className = "uniform-control-label-row";
    const c = document.createElement("label");
    c.className = "uniform-control-label", c.textContent = s;
    const h = document.createElement("span");
    h.className = "uniform-control-value", h.textContent = this.formatVec2(r), u.appendChild(c), u.appendChild(h);
    const l = document.createElement("div");
    l.className = "uniform-control-xy-pad";
    const d = document.createElement("div");
    d.className = "uniform-control-xy-handle", l.appendChild(d);
    const m = (g) => {
      const D = (g[0] - i[0]) / (o[0] - i[0]) * 100, A = (1 - (g[1] - i[1]) / (o[1] - i[1])) * 100;
      d.style.left = `${D}%`, d.style.top = `${A}%`;
    };
    m(r);
    let v = !1;
    const f = (g) => {
      const D = l.getBoundingClientRect(), A = "touches" in g ? g.touches[0].clientX : g.clientX, _ = "touches" in g ? g.touches[0].clientY : g.clientY;
      let b = Math.max(0, Math.min(1, (A - D.left) / D.width)), T = Math.max(0, Math.min(1, (_ - D.top) / D.height));
      const S = i[0] + b * (o[0] - i[0]), M = i[1] + (1 - T) * (o[1] - i[1]), j = [S, M];
      this.values[t] = j, d.style.left = `${b * 100}%`, d.style.top = `${T * 100}%`, h.textContent = this.formatVec2(j), this.onChange(t, j);
    }, y = (g) => {
      v = !0, f(g), g.preventDefault();
    }, C = (g) => {
      v && f(g);
    }, E = () => {
      v = !1;
    };
    l.addEventListener("mousedown", y), document.addEventListener("mousemove", C), document.addEventListener("mouseup", E), this.documentListeners.push({ type: "mousemove", handler: C }), this.documentListeners.push({ type: "mouseup", handler: E });
    const p = (g) => {
      v = !0, f(g), g.preventDefault();
    }, w = (g) => {
      v && f(g);
    };
    return l.addEventListener("touchstart", p), document.addEventListener("touchmove", w), document.addEventListener("touchend", E), this.documentListeners.push({ type: "touchmove", handler: w }), this.documentListeners.push({ type: "touchend", handler: E }), a.appendChild(u), a.appendChild(l), {
      element: a,
      update: (g) => {
        const D = g;
        m(D), h.textContent = this.formatVec2(D);
      }
    };
  }
  // ===========================================================================
  // Vec3 Color Picker
  // ===========================================================================
  createColorPicker(t, n) {
    const r = this.values[t], i = n.label ?? t, o = document.createElement("div");
    o.className = "uniform-control uniform-control-color";
    const s = document.createElement("div");
    s.className = "uniform-control-label-row";
    const a = document.createElement("label");
    a.className = "uniform-control-label", a.textContent = i;
    const u = document.createElement("span");
    u.className = "uniform-control-value", u.textContent = this.rgbToHex(r), s.appendChild(a), s.appendChild(u);
    const c = document.createElement("div");
    c.className = "uniform-control-color-wrapper";
    const h = document.createElement("input");
    h.type = "color", h.className = "uniform-control-color-input", h.value = this.rgbToHex(r);
    const l = document.createElement("div");
    return l.className = "uniform-control-color-swatch", l.style.backgroundColor = this.rgbToHex(r), h.addEventListener("input", () => {
      const d = this.hexToRgb(h.value);
      this.values[t] = d, u.textContent = h.value, l.style.backgroundColor = h.value, this.onChange(t, d);
    }), l.addEventListener("click", () => h.click()), c.appendChild(l), c.appendChild(h), o.appendChild(s), o.appendChild(c), {
      element: o,
      update: (d) => {
        const m = this.rgbToHex(d);
        h.value = m, l.style.backgroundColor = m, u.textContent = m;
      }
    };
  }
  // ===========================================================================
  // Vec4 Color Picker (with alpha)
  // ===========================================================================
  createColorPicker4(t, n) {
    var f, y, C;
    const r = this.values[t], i = n.label ?? t, o = document.createElement("div");
    o.className = "uniform-control uniform-control-color";
    const s = document.createElement("div");
    s.className = "uniform-control-label-row";
    const a = document.createElement("label");
    a.className = "uniform-control-label", a.textContent = i;
    const u = document.createElement("span");
    u.className = "uniform-control-value", u.textContent = this.rgbToHex(r), s.appendChild(a), s.appendChild(u);
    const c = document.createElement("div");
    c.className = "uniform-control-color-wrapper";
    const h = document.createElement("input");
    h.type = "color", h.className = "uniform-control-color-input", h.value = this.rgbToHex(r);
    const l = document.createElement("div");
    l.className = "uniform-control-color-swatch", l.style.backgroundColor = this.rgbToHex(r), h.addEventListener("input", () => {
      const E = this.hexToRgb(h.value), p = this.values[t];
      p[0] = E[0], p[1] = E[1], p[2] = E[2], u.textContent = h.value, l.style.backgroundColor = h.value, this.onChange(t, [...p]);
    }), l.addEventListener("click", () => h.click()), c.appendChild(l), c.appendChild(h);
    const d = ((f = n.step) == null ? void 0 : f[3]) ?? 0.01, { element: m, update: v } = this.createSliderRow({
      label: "Alpha",
      min: ((y = n.min) == null ? void 0 : y[3]) ?? 0,
      max: ((C = n.max) == null ? void 0 : C[3]) ?? 1,
      step: d,
      value: r[3],
      format: (E) => this.formatNumber(E, d),
      onInput: (E) => {
        const p = this.values[t];
        p[3] = E, this.onChange(t, [...p]);
      }
    });
    return o.appendChild(s), o.appendChild(c), o.appendChild(m), {
      element: o,
      update: (E) => {
        const p = E, w = this.rgbToHex(p);
        h.value = w, l.style.backgroundColor = w, u.textContent = w, v(p[3]);
      }
    };
  }
  // ===========================================================================
  // Vec3/Vec4 Component Sliders
  // ===========================================================================
  createVecSliders(t, n, r) {
    const i = this.values[t], o = n.label ?? t, s = r === 3 ? ["X", "Y", "Z"] : ["X", "Y", "Z", "W"], a = document.createElement("div");
    a.className = `uniform-control uniform-control-vec${r}`;
    const u = document.createElement("div");
    u.className = "uniform-control-label", u.textContent = o, a.appendChild(u);
    const c = [];
    return s.forEach((h, l) => {
      var C, E, p;
      const d = ((C = n.step) == null ? void 0 : C[l]) ?? 0.01, { element: m, update: v } = this.createSliderRow({
        label: h,
        min: ((E = n.min) == null ? void 0 : E[l]) ?? 0,
        max: ((p = n.max) == null ? void 0 : p[l]) ?? 1,
        step: d,
        value: i[l],
        format: (w) => this.formatNumber(w, d),
        onInput: (w) => {
          const g = this.values[t];
          g[l] = w, this.onChange(t, [...g]);
        }
      }), f = m.querySelector(".uniform-control-label-row");
      if (f) {
        f.classList.add("uniform-control-vec-slider-row");
        const w = f.querySelector(".uniform-control-label");
        w && w.classList.add("uniform-control-vec-component");
        const g = f.querySelector(".uniform-control-value");
        g && g.classList.add("uniform-control-vec-value");
      }
      const y = m.querySelector(".uniform-control-slider");
      y && y.classList.add("uniform-control-vec-slider"), c.push(v), a.appendChild(m);
    }), {
      element: a,
      update: (h) => {
        const l = h;
        c.forEach((d, m) => d(l[m]));
      }
    };
  }
  // ===========================================================================
  // Utility Methods
  // ===========================================================================
  formatNumber(t, n) {
    const r = String(n), i = r.indexOf("."), o = i === -1 ? 0 : r.length - i - 1;
    return t.toFixed(o);
  }
  formatVec2(t) {
    return `(${t[0].toFixed(2)}, ${t[1].toFixed(2)})`;
  }
  rgbToHex(t) {
    const n = Math.round(t[0] * 255), r = Math.round(t[1] * 255), i = Math.round(t[2] * 255);
    return `#${n.toString(16).padStart(2, "0")}${r.toString(16).padStart(2, "0")}${i.toString(16).padStart(2, "0")}`;
  }
  hexToRgb(t) {
    const n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return n ? [
      parseInt(n[1], 16) / 255,
      parseInt(n[2], 16) / 255,
      parseInt(n[3], 16) / 255
    ] : [0, 0, 0];
  }
  // ===========================================================================
  // Public Methods
  // ===========================================================================
  /**
   * Update a uniform value externally (e.g., from reset).
   */
  setValue(t, n) {
    var r;
    t in this.uniforms && (this.values[t] = n, (r = this.updaters.get(t)) == null || r(n));
  }
  /**
   * Reset all uniforms to their default values.
   */
  resetToDefaults() {
    for (const [t, n] of Object.entries(this.uniforms))
      _e(n) || n.hidden || (this.setValue(t, n.value), this.onChange(t, n.value));
  }
  /**
   * Destroy the controls and clean up.
   */
  destroy() {
    for (const { type: t, handler: n } of this.documentListeners)
      document.removeEventListener(t, n);
    this.documentListeners = [], this.container.innerHTML = "", this.updaters.clear();
  }
}
class Cs {
  constructor(t) {
    if (this.controls = null, this.isOpen = t.startOpen ?? !1, this.wrapper = document.createElement("div"), this.wrapper.className = "uniforms-panel-wrapper", this.toggleButton = document.createElement("button"), this.toggleButton.className = "uniforms-toggle-button", this.toggleButton.title = "Toggle Uniforms Panel", this.toggleButton.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="4" y1="21" x2="4" y2="14"></line>
        <line x1="4" y1="10" x2="4" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12" y2="3"></line>
        <line x1="20" y1="21" x2="20" y2="16"></line>
        <line x1="20" y1="12" x2="20" y2="3"></line>
        <line x1="1" y1="14" x2="7" y2="14"></line>
        <line x1="9" y1="8" x2="15" y2="8"></line>
        <line x1="17" y1="16" x2="23" y2="16"></line>
      </svg>
    `, this.toggleButton.addEventListener("click", () => this.toggle()), this.wrapper.appendChild(this.toggleButton), this.panel = document.createElement("div"), this.panel.className = "uniforms-panel", !Object.values(t.uniforms).some((a) => Vn(a))) {
      this.wrapper.style.display = "none", t.container.appendChild(this.wrapper);
      return;
    }
    const r = document.createElement("div");
    r.className = "uniforms-panel-header";
    const i = document.createElement("span");
    i.textContent = "Uniforms", r.appendChild(i);
    const o = document.createElement("button");
    o.className = "uniforms-panel-close", o.innerHTML = "&times;", o.title = "Close", o.addEventListener("click", () => this.hide()), r.appendChild(o), this.panel.appendChild(r);
    const s = document.createElement("div");
    s.className = "uniforms-panel-content", this.panel.appendChild(s), this.controls = new Qr({
      container: s,
      uniforms: t.uniforms,
      initialValues: t.initialValues,
      onChange: t.onChange
    }), this.wrapper.appendChild(this.panel), this.isOpen || this.panel.classList.add("closed"), t.container.appendChild(this.wrapper);
  }
  /**
   * Update a uniform value from external source.
   */
  setValue(t, n) {
    var r;
    (r = this.controls) == null || r.setValue(t, n);
  }
  /**
   * Show the panel.
   */
  show() {
    this.isOpen = !0, this.toggleButton.classList.add("hidden"), this.panel.classList.remove("closed");
  }
  /**
   * Hide the panel.
   */
  hide() {
    this.isOpen = !1, this.panel.classList.add("closed"), this.toggleButton.classList.remove("hidden");
  }
  /**
   * Toggle panel visibility.
   */
  toggle() {
    this.isOpen ? this.hide() : this.show();
  }
  /**
   * Check if panel is visible.
   */
  isVisible() {
    return this.isOpen;
  }
  /**
   * Destroy the panel.
   */
  destroy() {
    var t;
    (t = this.controls) == null || t.destroy(), this.wrapper.remove();
  }
}
const Fn = (e) => e.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
function bs(e, t) {
  const n = Fs(e, t), r = new Blob([n], { type: "text/html" }), o = `${e.root.split("/").pop() || "shader"}.html`, s = URL.createObjectURL(r), a = document.createElement("a");
  a.href = s, a.download = o, a.click(), URL.revokeObjectURL(s), console.log(`Exported: ${o}`);
}
function Fs(e, t) {
  var g, D, A, _;
  const n = e.meta.title, r = e.commonSource ?? "", i = t.getUniformValues(), o = t.getUBOExportData(), s = ["BufferA", "BufferB", "BufferC", "BufferD", "Image"], a = [];
  let u = !1, c = !1;
  for (const b of s) {
    const T = e.passes[b];
    if (!T)
      continue;
    const S = T.channels.map((M) => M.kind === "buffer" ? `buffer:${M.buffer}` : M.kind === "texture" ? "procedural" : M.kind === "keyboard" ? (u = !0, "keyboard") : M.kind === "script" ? (c = !0, `script:${M.name}`) : M.kind === "audio" || M.kind === "webcam" || M.kind === "video" ? "black" : "none");
    a.push({
      name: b,
      source: T.glslSource,
      channels: T.channels,
      channelTypes: S
    });
  }
  const h = !!((g = e.script) != null && g.setup || (D = e.script) != null && D.onFrame), l = Object.entries(e.uniforms).filter(([, b]) => !_e(b)), d = [];
  for (const [b, T] of l) {
    if (_e(T))
      continue;
    const S = i[b] ?? T.value;
    if (T.type === "float" || T.type === "int")
      d.push(`  '${b}': ${S}`);
    else if (T.type === "bool")
      d.push(`  '${b}': ${S ? 1 : 0}`);
    else if (T.type === "vec2") {
      const M = S;
      d.push(`  '${b}': [${M[0]}, ${M[1]}]`);
    } else if (T.type === "vec3") {
      const M = S;
      d.push(`  '${b}': [${M[0]}, ${M[1]}, ${M[2]}]`);
    } else if (T.type === "vec4") {
      const M = S;
      d.push(`  '${b}': [${M[0]}, ${M[1]}, ${M[2]}, ${M[3]}]`);
    }
  }
  const m = l.map(([b, T]) => `uniform ${T.type === "bool" ? "bool" : T.type} ${b};`).join(`
`), v = o.map((b) => `// Array uniform: ${b.name} (max ${b.count})
layout(std140) uniform _ub_${b.name} {
  ${b.type} ${b.name}[${b.count}];
};
uniform int ${b.name}_count;`).join(`

`), f = o.map((b) => {
    const T = Array.from(b.paddedData).map((S) => S.toFixed(6)).join(", ");
    return `  { name: '${b.name}', type: '${b.type}', count: ${b.count}, binding: ${b.bindingPoint}, data: new Float32Array([${T}]) }`;
  }).join(`,
`);
  let y = "", C = "";
  h && ((A = e.script) != null && A.setup && (y = e.script.setup.toString()), (_ = e.script) != null && _.onFrame && (C = e.script.onFrame.toString()));
  const E = u ? `
// --- Keyboard helpers ---
const int KEY_A = 65; const int KEY_B = 66; const int KEY_C = 67; const int KEY_D = 68;
const int KEY_E = 69; const int KEY_F = 70; const int KEY_G = 71; const int KEY_H = 72;
const int KEY_I = 73; const int KEY_J = 74; const int KEY_K = 75; const int KEY_L = 76;
const int KEY_M = 77; const int KEY_N = 78; const int KEY_O = 79; const int KEY_P = 80;
const int KEY_Q = 81; const int KEY_R = 82; const int KEY_S = 83; const int KEY_T = 84;
const int KEY_U = 85; const int KEY_V = 86; const int KEY_W = 87; const int KEY_X = 88;
const int KEY_Y = 89; const int KEY_Z = 90;
const int KEY_0 = 48; const int KEY_1 = 49; const int KEY_2 = 50; const int KEY_3 = 51;
const int KEY_4 = 52; const int KEY_5 = 53; const int KEY_6 = 54; const int KEY_7 = 55;
const int KEY_8 = 56; const int KEY_9 = 57;
const int KEY_LEFT = 37; const int KEY_UP = 38; const int KEY_RIGHT = 39; const int KEY_DOWN = 40;
const int KEY_SPACE = 32; const int KEY_ENTER = 13; const int KEY_TAB = 9; const int KEY_ESC = 27;
const int KEY_BACKSPACE = 8; const int KEY_DELETE = 46; const int KEY_SHIFT = 16;
const int KEY_CTRL = 17; const int KEY_ALT = 18;
const int KEY_F1 = 112; const int KEY_F2 = 113; const int KEY_F3 = 114; const int KEY_F4 = 115;
const int KEY_F5 = 116; const int KEY_F6 = 117; const int KEY_F7 = 118; const int KEY_F8 = 119;
const int KEY_F9 = 120; const int KEY_F10 = 121; const int KEY_F11 = 122; const int KEY_F12 = 123;
float keyDown(int key) { return textureLod(iChannel0, vec2((float(key) + 0.5) / 256.0, 0.25), 0.0).x; }
float keyToggle(int key) { return textureLod(iChannel0, vec2((float(key) + 0.5) / 256.0, 0.75), 0.0).x; }
bool isKeyDown(int key) { return keyDown(key) > 0.5; }
bool isKeyToggled(int key) { return keyToggle(key) > 0.5; }
` : "", p = a.map((b) => `  { name: '${b.name}', source: \`${Fn(b.source)}\`, channels: ${JSON.stringify(b.channelTypes)} }`).join(`,
`), w = `#version 300 es
precision highp float;

const float ST_PI = 3.14159265359;
const float ST_TWOPI = 6.28318530718;
vec2 _st_dirToEquirect(vec3 dir) {
  float phi = atan(dir.z, dir.x);
  float theta = asin(dir.y);
  return vec2(phi / ST_TWOPI + 0.5, theta / ST_PI + 0.5);
}

uniform vec3  iResolution;
uniform float iTime;
uniform float iTimeDelta;
uniform int   iFrame;
uniform vec4  iMouse;
uniform bool  iMousePressed;
uniform vec4  iDate;
uniform float iFrameRate;
uniform vec3  iChannelResolution[4];
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D iChannel2;
uniform sampler2D iChannel3;

${v}
${m}
${E}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${n}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 100%; height: 100%; background: #fff; }
    body { display: flex; align-items: center; justify-content: center; }
    .container {
      width: 90vw;
      max-width: 1200px;
      aspect-ratio: 16 / 9;
      background: #000;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 24px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.1);
    }
    canvas { display: block; width: 100%; height: 100%; }
  </style>
</head>
<body>
  <div class="container">
    <canvas id="canvas"></canvas>
  </div>
  <script>
// Shader Sandbox Export - ${n}
// Generated ${(/* @__PURE__ */ new Date()).toISOString()}

// ── Constants ──

const VERTEX_SHADER = \`#version 300 es
precision highp float;
layout(location = 0) in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
\`;

const FRAGMENT_PREAMBLE = \`${Fn(w)}\`;

const FRAGMENT_SUFFIX = \`
out vec4 fragColor;
void main() { mainImage(fragColor, gl_FragCoord.xy); }
\`;

const COMMON_SOURCE = \`${Fn(r)}\`;

const PASSES = [
${p}
];

const UNIFORM_VALUES = {
${d.join(`,
`)}
};

const UBO_DATA = [
${f}
];

// ── WebGL Setup ──

const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl2', { alpha: false, antialias: false, preserveDrawingBuffer: true });
if (!gl) { alert('WebGL2 not supported'); throw new Error('WebGL2 not supported'); }

const floatExt = gl.getExtension('EXT_color_buffer_float');
if (!floatExt) console.warn('EXT_color_buffer_float not supported');

// Fullscreen triangle
const vao = gl.createVertexArray();
gl.bindVertexArray(vao);
const vbo = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);
gl.enableVertexAttribArray(0);
gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

// ── Helper Textures ──

function createProceduralTexture() {
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  const data = new Uint8Array(8 * 8 * 4);
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      const i = (y * 8 + x) * 4;
      const c = (x + y) % 2;
      data[i] = c ? 204 : 51; data[i+1] = c ? 26 : 51;
      data[i+2] = c ? 204 : 51; data[i+3] = 255;
    }
  }
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 8, 8, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
  return tex;
}

function createBlackTexture() {
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0,0,0,255]));
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  return tex;
}

const proceduralTex = createProceduralTexture();
const blackTex = createBlackTexture();
${u ? `
// ── Keyboard Texture (256x3) ──
// Row 0: current key state, Row 1: key down events, Row 2: toggle state
const keyboardTex = gl.createTexture();
const keyboardData = new Uint8Array(256 * 3);
gl.bindTexture(gl.TEXTURE_2D, keyboardTex);
gl.texImage2D(gl.TEXTURE_2D, 0, gl.R8, 256, 3, 0, gl.RED, gl.UNSIGNED_BYTE, keyboardData);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

const keyStates = new Uint8Array(256);     // row 0: held
const keyDown_ev = new Uint8Array(256);    // row 1: down this frame
const keyToggle_st = new Uint8Array(256);  // row 2: toggle

document.addEventListener('keydown', e => {
  const k = e.keyCode;
  if (k < 256) {
    if (!keyStates[k]) {
      keyDown_ev[k] = 255;
      keyToggle_st[k] = keyToggle_st[k] ? 0 : 255;
    }
    keyStates[k] = 255;
  }
});
document.addEventListener('keyup', e => {
  const k = e.keyCode;
  if (k < 256) keyStates[k] = 0;
});

function updateKeyboardTexture() {
  keyboardData.set(keyStates, 0);
  keyboardData.set(keyDown_ev, 256);
  keyboardData.set(keyToggle_st, 512);
  gl.bindTexture(gl.TEXTURE_2D, keyboardTex);
  gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, 256, 3, gl.RED, gl.UNSIGNED_BYTE, keyboardData);
  keyDown_ev.fill(0);
}
` : ""}
${c || h ? `
// ── Script Textures ──
const scriptTextures = new Map();

function updateScriptTexture(name, w, h, data) {
  const existing = scriptTextures.get(name);
  const isFloat = data instanceof Float32Array;
  const internalFormat = isFloat ? gl.RGBA32F : gl.RGBA;
  const type = isFloat ? gl.FLOAT : gl.UNSIGNED_BYTE;
  if (existing && existing.width === w && existing.height === h) {
    gl.bindTexture(gl.TEXTURE_2D, existing.texture);
    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, w, h, gl.RGBA, type, data);
  } else {
    const tex = existing ? existing.texture : gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, gl.RGBA, type, data);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    scriptTextures.set(name, { texture: tex, width: w, height: h });
  }
}
` : ""}
// ── Shader Compilation ──

function compileShader(type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    console.error(source.split('\\n').map((l,i) => (i+1) + ': ' + l).join('\\n'));
    throw new Error('Shader compile failed');
  }
  return shader;
}

function createProgram(fragSource) {
  const vs = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER);
  const fs = compileShader(gl.FRAGMENT_SHADER, fragSource);
  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error('Program link failed: ' + gl.getProgramInfoLog(program));
  }
  return program;
}

function createRenderTexture(w, h) {
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, w, h, 0, gl.RGBA, gl.FLOAT, null);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  return tex;
}

function createFramebuffer(tex) {
  const fb = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
  return fb;
}

// ── Initialize Passes ──

const container = canvas.parentElement;
let width = canvas.width = container.clientWidth * devicePixelRatio;
let height = canvas.height = container.clientHeight * devicePixelRatio;

const runtimePasses = PASSES.map(pass => {
  const fragSource = FRAGMENT_PREAMBLE +
    (COMMON_SOURCE ? '\\n// Common\\n' + COMMON_SOURCE + '\\n' : '') +
    '\\n// User code\\n' + pass.source + FRAGMENT_SUFFIX;
  const program = createProgram(fragSource);
  const currentTexture = createRenderTexture(width, height);
  const previousTexture = createRenderTexture(width, height);
  const framebuffer = createFramebuffer(currentTexture);

  // Cache uniform locations
  const uniforms = {
    iResolution: gl.getUniformLocation(program, 'iResolution'),
    iTime: gl.getUniformLocation(program, 'iTime'),
    iTimeDelta: gl.getUniformLocation(program, 'iTimeDelta'),
    iFrame: gl.getUniformLocation(program, 'iFrame'),
    iMouse: gl.getUniformLocation(program, 'iMouse'),
    iMousePressed: gl.getUniformLocation(program, 'iMousePressed'),
    iDate: gl.getUniformLocation(program, 'iDate'),
    iFrameRate: gl.getUniformLocation(program, 'iFrameRate'),
    iChannel: [0,1,2,3].map(i => gl.getUniformLocation(program, 'iChannel' + i)),
    iChannelResolution: gl.getUniformLocation(program, 'iChannelResolution'),
    custom: {},
    uboCountLocs: {},
  };

  // Scalar uniform locations
  for (const name of Object.keys(UNIFORM_VALUES)) {
    uniforms.custom[name] = gl.getUniformLocation(program, name);
  }

  // UBO block bindings and count locations
  for (const ubo of UBO_DATA) {
    const blockIndex = gl.getUniformBlockIndex(program, '_ub_' + ubo.name);
    if (blockIndex !== gl.INVALID_INDEX) {
      gl.uniformBlockBinding(program, blockIndex, ubo.binding);
    }
    uniforms.uboCountLocs[ubo.name] = gl.getUniformLocation(program, ubo.name + '_count');
  }

  return { name: pass.name, channels: pass.channels, program, framebuffer, currentTexture, previousTexture, uniforms };
});

// ── UBO Buffers ──

const uboBuffers = UBO_DATA.map(ubo => {
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.UNIFORM_BUFFER, buffer);
  gl.bufferData(gl.UNIFORM_BUFFER, ubo.data, gl.DYNAMIC_DRAW);
  gl.bindBufferBase(gl.UNIFORM_BUFFER, ubo.binding, buffer);
  return { name: ubo.name, buffer, count: ubo.count, data: ubo.data };
});

const findPass = name => runtimePasses.find(p => p.name === name);
${h ? `
// ── Script Setup ──

const scriptSetup = ${y || "null"};
const scriptOnFrame = ${C || "null"};

const scriptEngine = {
  setUniformValue(name, value) {
    // Check if this is an array uniform (Float32Array)
    if (value instanceof Float32Array) {
      const ubo = uboBuffers.find(u => u.name === name);
      if (ubo) {
        // Pack to std140: user provides tight data, we need to pad
        // For simplicity, copy directly (assume already padded or vec4/mat4)
        const len = Math.min(value.length, ubo.data.length);
        ubo.data.set(value.subarray(0, len));
        gl.bindBuffer(gl.UNIFORM_BUFFER, ubo.buffer);
        gl.bufferSubData(gl.UNIFORM_BUFFER, 0, ubo.data);
      }
    } else {
      UNIFORM_VALUES[name] = value;
    }
  },
  getUniformValue(name) {
    return UNIFORM_VALUES[name];
  },
  updateTexture(name, w, h, data) {
    updateScriptTexture(name, w, h, data);
  },
  readPixels(passName, x, y, w, h) {
    const pass = findPass(passName);
    if (!pass) return new Uint8Array(w * h * 4);
    gl.bindFramebuffer(gl.FRAMEBUFFER, pass.framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pass.previousTexture, 0);
    const pixels = new Uint8Array(w * h * 4);
    gl.readPixels(x, y, w, h, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pass.currentTexture, 0);
    return pixels;
  },
  get width() { return width; },
  get height() { return height; },
  setOverlay() {},
};

try {
  if (scriptSetup) scriptSetup(scriptEngine);
} catch(e) { console.error('script setup error:', e); }
` : ""}
// ── Mouse ──

let mouse = [0, 0, 0, 0];
let mouseDown = false;
canvas.addEventListener('mousedown', e => {
  mouseDown = true;
  const rect = canvas.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width * width;
  const y = (1 - (e.clientY - rect.top) / rect.height) * height;
  mouse[0] = x; mouse[1] = y;
  mouse[2] = x; mouse[3] = y;
});
canvas.addEventListener('mousemove', e => {
  if (!mouseDown) return;
  const rect = canvas.getBoundingClientRect();
  mouse[0] = (e.clientX - rect.left) / rect.width * width;
  mouse[1] = (1 - (e.clientY - rect.top) / rect.height) * height;
});
canvas.addEventListener('mouseup', () => {
  mouseDown = false;
  mouse[2] = -Math.abs(mouse[2]);
  mouse[3] = -Math.abs(mouse[3]);
});

// ── Resize ──

let resizeTimer = null;
new ResizeObserver(() => {
  const newW = container.clientWidth * devicePixelRatio;
  const newH = container.clientHeight * devicePixelRatio;
  canvas.width = newW;
  canvas.height = newH;
  if (resizeTimer) clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    width = newW;
    height = newH;
    runtimePasses.forEach(p => {
      [p.currentTexture, p.previousTexture].forEach(tex => {
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, width, height, 0, gl.RGBA, gl.FLOAT, null);
      });
      gl.bindFramebuffer(gl.FRAMEBUFFER, p.framebuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, p.currentTexture, 0);
    });
    frame = 0;
    startTime = performance.now() / 1000;
    lastTime = 0;
  }, 150);
}).observe(container);

// ── Animation Loop ──

let frame = 0;
let startTime = performance.now() / 1000;
let lastTime = 0;

function render(now) {
  requestAnimationFrame(render);

  const time = now / 1000 - startTime;
  const deltaTime = Math.max(0.001, time - lastTime);
  lastTime = time;

  const date = new Date();
  const iDate = [date.getFullYear(), date.getMonth(), date.getDate(),
    date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds() + date.getMilliseconds() / 1000];
${u ? `
  updateKeyboardTexture();` : ""}
${h ? `
  // Run script onFrame
  try {
    if (scriptOnFrame) scriptOnFrame(scriptEngine, time, deltaTime, frame);
  } catch(e) { console.error('script onFrame error:', e); }
` : ""}
  gl.bindVertexArray(vao);

  runtimePasses.forEach(pass => {
    gl.useProgram(pass.program);
    gl.bindFramebuffer(gl.FRAMEBUFFER, pass.framebuffer);
    gl.viewport(0, 0, width, height);

    // Built-in uniforms
    gl.uniform3f(pass.uniforms.iResolution, width, height, 1);
    gl.uniform1f(pass.uniforms.iTime, time);
    gl.uniform1f(pass.uniforms.iTimeDelta, deltaTime);
    gl.uniform1i(pass.uniforms.iFrame, frame);
    gl.uniform4fv(pass.uniforms.iMouse, mouse);
    gl.uniform1i(pass.uniforms.iMousePressed, mouseDown ? 1 : 0);
    gl.uniform4fv(pass.uniforms.iDate, iDate);
    gl.uniform1f(pass.uniforms.iFrameRate, 1 / deltaTime);

    // Scalar custom uniforms
    for (const [name, value] of Object.entries(UNIFORM_VALUES)) {
      const loc = pass.uniforms.custom[name];
      if (!loc) continue;
      if (Array.isArray(value)) {
        if (value.length === 2) gl.uniform2fv(loc, value);
        else if (value.length === 3) gl.uniform3fv(loc, value);
        else if (value.length === 4) gl.uniform4fv(loc, value);
      } else if (typeof value === 'number') {
        gl.uniform1f(loc, value);
      }
    }

    // UBO count uniforms
    for (const ubo of UBO_DATA) {
      const countLoc = pass.uniforms.uboCountLocs[ubo.name];
      if (countLoc) gl.uniform1i(countLoc, ubo.count);
    }

    // Bind channels
    const channelRes = new Float32Array(12); // iChannelResolution[4] × vec3
    pass.channels.forEach((ch, i) => {
      gl.activeTexture(gl.TEXTURE0 + i);
      if (ch === 'none') {
        gl.bindTexture(gl.TEXTURE_2D, blackTex);
      } else if (ch === 'procedural') {
        gl.bindTexture(gl.TEXTURE_2D, proceduralTex);
        channelRes[i*3] = 8; channelRes[i*3+1] = 8; channelRes[i*3+2] = 1;
      } else if (ch === 'keyboard') {
        gl.bindTexture(gl.TEXTURE_2D, ${u ? "keyboardTex" : "blackTex"});
        channelRes[i*3] = 256; channelRes[i*3+1] = 3; channelRes[i*3+2] = 1;
      } else if (ch === 'black') {
        gl.bindTexture(gl.TEXTURE_2D, blackTex);
      } else if (ch.startsWith('buffer:')) {
        const srcPass = findPass(ch.slice(7));
        gl.bindTexture(gl.TEXTURE_2D, srcPass ? srcPass.previousTexture : blackTex);
        channelRes[i*3] = width; channelRes[i*3+1] = height; channelRes[i*3+2] = 1;
      } else if (ch.startsWith('script:')) {
        const stex = scriptTextures?.get(ch.slice(7));
        gl.bindTexture(gl.TEXTURE_2D, stex ? stex.texture : blackTex);
        if (stex) { channelRes[i*3] = stex.width; channelRes[i*3+1] = stex.height; channelRes[i*3+2] = 1; }
      } else {
        gl.bindTexture(gl.TEXTURE_2D, blackTex);
      }
      gl.uniform1i(pass.uniforms.iChannel[i], i);
    });

    if (pass.uniforms.iChannelResolution) {
      gl.uniform3fv(pass.uniforms.iChannelResolution, channelRes);
    }

    gl.drawArrays(gl.TRIANGLES, 0, 3);

    // Swap textures
    const temp = pass.currentTexture;
    pass.currentTexture = pass.previousTexture;
    pass.previousTexture = temp;
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pass.currentTexture, 0);
  });

  // Blit Image pass to screen
  const imagePass = findPass('Image');
  if (imagePass) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, imagePass.framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, imagePass.previousTexture, 0);
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, imagePass.framebuffer);
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
    gl.blitFramebuffer(0, 0, width, height, 0, 0, width, height, gl.COLOR_BUFFER_BIT, gl.NEAREST);
    gl.bindFramebuffer(gl.FRAMEBUFFER, imagePass.framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, imagePass.currentTexture, 0);
  }

  frame++;
}

requestAnimationFrame(render);
  <\/script>
</body>
</html>`;
}
class _s {
  constructor(t, n, r) {
    this.isRecording = !1, this.mediaRecorder = null, this.recordedChunks = [], this.recordingIndicator = null, this.canvas = t, this.container = n, this.projectRoot = r;
  }
  /**
   * Toggle recording on/off.
   * If paused, calls unpause callback before starting.
   */
  toggle(t, n) {
    this.isRecording ? this.stop() : this.start(t, n);
  }
  /**
   * Start recording the canvas as WebM video.
   */
  start(t, n) {
    if (!MediaRecorder.isTypeSupported("video/webm")) {
      console.error("WebM recording not supported in this browser");
      return;
    }
    t && n();
    const r = this.canvas.captureStream(60);
    this.mediaRecorder = new MediaRecorder(r, {
      mimeType: "video/webm;codecs=vp9",
      videoBitsPerSecond: 8e6
      // 8 Mbps for high quality
    }), this.recordedChunks = [], this.mediaRecorder.ondataavailable = (i) => {
      i.data.size > 0 && this.recordedChunks.push(i.data);
    }, this.mediaRecorder.onstop = () => {
      const i = new Blob(this.recordedChunks, { type: "video/webm" }), o = this.projectRoot.split("/").pop() || "shader", s = /* @__PURE__ */ new Date(), a = s.getFullYear().toString() + (s.getMonth() + 1).toString().padStart(2, "0") + s.getDate().toString().padStart(2, "0") + "-" + s.getHours().toString().padStart(2, "0") + s.getMinutes().toString().padStart(2, "0") + s.getSeconds().toString().padStart(2, "0"), u = `shadertoy-${o}-${a}.webm`, c = URL.createObjectURL(i), h = document.createElement("a");
      h.href = c, h.download = u, h.click(), URL.revokeObjectURL(c), console.log(`Recording saved: ${u}`);
    }, this.mediaRecorder.start(), this.isRecording = !0, this.showRecordingIndicator(), console.log("Recording started");
  }
  /**
   * Stop recording and trigger download.
   */
  stop() {
    this.mediaRecorder && this.mediaRecorder.state !== "inactive" && this.mediaRecorder.stop(), this.isRecording = !1, this.mediaRecorder = null, this.hideRecordingIndicator(), console.log("Recording stopped");
  }
  /**
   * Clean up resources.
   */
  dispose() {
    this.isRecording && this.stop(), this.hideRecordingIndicator();
  }
  /**
   * Show the recording indicator (pulsing red dot in corner).
   */
  showRecordingIndicator() {
    this.recordingIndicator || (this.recordingIndicator = document.createElement("div"), this.recordingIndicator.className = "recording-indicator", this.recordingIndicator.innerHTML = `
      <span class="recording-dot"></span>
      <span class="recording-text">REC</span>
    `, this.container.appendChild(this.recordingIndicator));
  }
  /**
   * Hide the recording indicator.
   */
  hideRecordingIndicator() {
    this.recordingIndicator && (this.recordingIndicator.remove(), this.recordingIndicator = null);
  }
}
class As {
  constructor(t) {
    this.frameCount = 0, this.totalFrameCount = 0, this.lastFpsUpdate = 0, this.currentFps = 0, this.isStatsOpen = !1, this.container = t, this.statsContainer = document.createElement("div"), this.statsContainer.className = "stats-container", this.fpsDisplay = document.createElement("button"), this.fpsDisplay.className = "fps-counter", this.fpsDisplay.textContent = "0 FPS", this.fpsDisplay.title = "Click to show stats", this.fpsDisplay.addEventListener("click", () => this.toggle()), this.statsGrid = document.createElement("div"), this.statsGrid.className = "stats-grid", this.timeDisplay = document.createElement("div"), this.timeDisplay.className = "stat-item", this.timeDisplay.innerHTML = '<span class="stat-value">0:00</span><span class="stat-label">time</span>', this.statsGrid.appendChild(this.timeDisplay), this.frameDisplay = document.createElement("div"), this.frameDisplay.className = "stat-item", this.frameDisplay.innerHTML = '<span class="stat-value">0</span><span class="stat-label">frame</span>', this.statsGrid.appendChild(this.frameDisplay), this.resolutionDisplay = document.createElement("div"), this.resolutionDisplay.className = "stat-item", this.resolutionDisplay.innerHTML = '<span class="stat-value">0×0</span><span class="stat-label">res</span>', this.statsGrid.appendChild(this.resolutionDisplay), this.statsContainer.appendChild(this.statsGrid), this.statsContainer.appendChild(this.fpsDisplay), this.container.appendChild(this.statsContainer);
  }
  /**
   * Update FPS counter and stats. Call once per frame.
   */
  update(t, n) {
    this.frameCount++, this.totalFrameCount++, this.isStatsOpen && this.updateFrameDisplay(), t - this.lastFpsUpdate >= 1 && (this.currentFps = this.frameCount / (t - this.lastFpsUpdate), this.fpsDisplay.textContent = `${Math.round(this.currentFps)} FPS`, this.frameCount = 0, this.lastFpsUpdate = t, this.isStatsOpen && (this.updateTimeDisplay(n), this.updateResolutionDisplay()));
  }
  /**
   * Reset all counters.
   */
  reset() {
    this.frameCount = 0, this.totalFrameCount = 0, this.lastFpsUpdate = 0, this.isStatsOpen && (this.updateTimeDisplay(0), this.updateFrameDisplay(), this.updateResolutionDisplay());
  }
  /**
   * Update resolution display with current canvas dimensions.
   */
  updateResolution(t, n) {
    this.resolutionDisplay.querySelector(".stat-value").textContent = `${t}×${n}`;
  }
  /**
   * Clean up DOM.
   */
  dispose() {
    this.statsContainer.remove();
  }
  toggle() {
    this.isStatsOpen = !this.isStatsOpen, this.statsGrid.classList.toggle("open", this.isStatsOpen), this.statsContainer.classList.toggle("open", this.isStatsOpen), this.isStatsOpen && (this.updateFrameDisplay(), this.updateResolutionDisplay());
  }
  updateFrameDisplay() {
    let t;
    this.totalFrameCount >= 1e6 ? t = (this.totalFrameCount / 1e6).toFixed(1) + "M" : this.totalFrameCount >= 1e3 ? t = (this.totalFrameCount / 1e3).toFixed(1) + "K" : t = this.totalFrameCount.toString(), this.frameDisplay.querySelector(".stat-value").textContent = t;
  }
  updateTimeDisplay(t) {
    const n = Math.floor(t), r = Math.floor(n / 3600), i = Math.floor(n % 3600 / 60), o = n % 60;
    let s;
    r > 0 ? s = `${r}:${i.toString().padStart(2, "0")}:${o.toString().padStart(2, "0")}` : s = `${i}:${o.toString().padStart(2, "0")}`, this.timeDisplay.querySelector(".stat-value").textContent = s;
  }
  updateResolutionDisplay() {
    this.resolutionDisplay.querySelector(".stat-value").textContent || (this.resolutionDisplay.querySelector(".stat-value").textContent = "0×0");
  }
}
class Ts {
  constructor(t, n) {
    this.isMenuOpen = !1, this.container = t, this.controlsContainer = document.createElement("div"), this.controlsContainer.className = "playback-controls", this.menuButton = document.createElement("button"), this.menuButton.className = "controls-menu-button", this.menuButton.title = "Controls", this.menuButton.textContent = "+", this.menuButton.addEventListener("click", () => this.toggleMenu()), this.controlsGrid = document.createElement("div"), this.controlsGrid.className = "controls-grid", this.playPauseButton = document.createElement("button"), this.playPauseButton.className = "control-button", this.playPauseButton.title = "Play/Pause (Space)", this.playPauseButton.innerHTML = `
      <svg viewBox="0 0 16 16">
        <path d="M5 3h2v10H5V3zm4 0h2v10H9V3z"/>
      </svg>
    `, this.playPauseButton.addEventListener("click", () => n.onTogglePlayPause());
    const r = document.createElement("button");
    r.className = "control-button", r.title = "Reset (R)", r.innerHTML = `
      <svg viewBox="0 0 16 16">
        <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
      </svg>
    `, r.addEventListener("click", () => n.onReset());
    const i = document.createElement("button");
    i.className = "control-button", i.title = "Screenshot (S)", i.innerHTML = `
      <svg viewBox="0 0 16 16">
        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
      </svg>
    `, i.addEventListener("click", () => n.onScreenshot());
    const o = document.createElement("button");
    o.className = "control-button", o.title = "Record Video", o.innerHTML = `
      <svg viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="5"/>
      </svg>
    `, o.addEventListener("click", () => n.onToggleRecording());
    const s = document.createElement("button");
    s.className = "control-button", s.title = "Export HTML", s.innerHTML = `
      <svg viewBox="0 0 16 16">
        <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
        <path d="M2 14.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
      </svg>
    `, s.addEventListener("click", () => n.onExportHTML());
    const a = document.createElement("button");
    a.className = "control-button", a.title = "Render", a.innerHTML = `
      <svg viewBox="0 0 16 16">
        <path d="M2 3h12v2H2V3zm0 4h12v2H2V7zm0 4h12v2H2v-2z"/>
      </svg>
    `, a.addEventListener("click", () => n.onRender());
    const u = document.createElement("button");
    u.className = "control-button", u.title = "Close", u.textContent = "−", u.style.fontSize = "20px", u.style.fontWeight = "300", u.addEventListener("click", () => this.toggleMenu()), this.controlsGrid.appendChild(this.playPauseButton), this.controlsGrid.appendChild(r), this.controlsGrid.appendChild(s), this.controlsGrid.appendChild(a), this.controlsGrid.appendChild(i), this.controlsGrid.appendChild(o);
    const c = document.createElement("div");
    this.controlsGrid.appendChild(c), this.controlsGrid.appendChild(u), this.controlsContainer.appendChild(this.controlsGrid), this.controlsContainer.appendChild(this.menuButton), this.container.appendChild(this.controlsContainer);
  }
  /**
   * Update the play/pause button icon.
   */
  setPaused(t) {
    t ? this.playPauseButton.innerHTML = `
        <svg viewBox="0 0 16 16">
          <path d="M4 3v10l8-5-8-5z"/>
        </svg>
      ` : this.playPauseButton.innerHTML = `
        <svg viewBox="0 0 16 16">
          <path d="M5 3h2v10H5V3zm4 0h2v10H9V3z"/>
        </svg>
      `;
  }
  /**
   * Clean up DOM.
   */
  dispose() {
    this.controlsContainer.remove();
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen, this.menuButton.textContent = this.isMenuOpen ? "−" : "+", this.controlsGrid.classList.toggle("open", this.isMenuOpen), this.controlsContainer.classList.toggle("open", this.isMenuOpen);
  }
}
class xs {
  constructor(t, n, r, i) {
    this.parentContainer = t, this.canvasWidth = n, this.canvasHeight = r, this.onStartRender = i, this.cancelRenderFn = null, this.backdrop = document.createElement("div"), this.backdrop.className = "render-dialog-backdrop", this.backdrop.addEventListener("click", (A) => {
      A.target === this.backdrop && this.close();
    });
    const o = document.createElement("div");
    o.className = "render-dialog";
    const s = document.createElement("div");
    s.className = "render-dialog-header", s.innerHTML = `
      <div class="render-dialog-title">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
          <path d="M2 14.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
        </svg>
        Render
      </div>
    `;
    const a = document.createElement("button");
    a.className = "render-dialog-close", a.textContent = "×", a.addEventListener("click", () => this.close()), s.appendChild(a), this.bodyEl = document.createElement("div"), this.bodyEl.className = "render-dialog-body";
    const u = this.createField("Resolution"), c = document.createElement("div");
    c.className = "render-field-row", this.widthInput = this.createNumberInput(n, 1, 7680), this.heightInput = this.createNumberInput(r, 1, 4320);
    const h = document.createElement("span");
    h.textContent = "×", c.appendChild(this.widthInput), c.appendChild(h), c.appendChild(this.heightInput), u.appendChild(c);
    const l = this.createField("FPS");
    this.fpsInput = this.createNumberInput(60, 1, 120), l.appendChild(this.fpsInput);
    const d = this.createField("Duration (seconds)");
    this.durationInput = this.createNumberInput(10, 1, 3600), d.appendChild(this.durationInput);
    const m = this.createField("Format"), v = document.createElement("div");
    v.className = "render-format-group", this.formatFrames = document.createElement("input"), this.formatFrames.type = "radio", this.formatFrames.name = "render-format", this.formatFrames.id = "render-fmt-frames", this.formatFrames.value = "frames", this.formatVideo = document.createElement("input"), this.formatVideo.type = "radio", this.formatVideo.name = "render-format", this.formatVideo.id = "render-fmt-video", this.formatVideo.value = "video", this.formatVideo.checked = !0;
    const f = document.createElement("div");
    f.className = "render-format-option";
    const y = document.createElement("label");
    y.htmlFor = "render-fmt-frames", y.textContent = "PNG Frames", f.appendChild(this.formatFrames), f.appendChild(y);
    const C = document.createElement("div");
    C.className = "render-format-option";
    const E = document.createElement("label");
    E.htmlFor = "render-fmt-video", E.textContent = "Video (WebM)", C.appendChild(this.formatVideo), C.appendChild(E), v.appendChild(C), v.appendChild(f), m.appendChild(v), this.estimateEl = document.createElement("div"), this.estimateEl.className = "render-estimate", this.bodyEl.appendChild(u), this.bodyEl.appendChild(l), this.bodyEl.appendChild(d), this.bodyEl.appendChild(m), this.bodyEl.appendChild(this.estimateEl), this.actionsEl = document.createElement("div"), this.actionsEl.className = "render-dialog-actions";
    const p = document.createElement("button");
    p.className = "render-btn render-btn-cancel", p.textContent = "Cancel", p.addEventListener("click", () => this.close());
    const w = document.createElement("button");
    w.className = "render-btn render-btn-primary", w.textContent = "Start Render", w.addEventListener("click", () => this.startRender()), this.actionsEl.appendChild(p), this.actionsEl.appendChild(w), this.progressEl = document.createElement("div"), this.progressEl.className = "render-progress", this.progressEl.innerHTML = `
      <div class="render-progress-bar-bg"><div class="render-progress-bar"></div></div>
      <div class="render-progress-text">Preparing...</div>
    `, this.progressBar = this.progressEl.querySelector(".render-progress-bar"), this.progressText = this.progressEl.querySelector(".render-progress-text");
    const g = document.createElement("button");
    g.className = "render-btn render-btn-cancel", g.textContent = "Cancel Render", g.style.marginTop = "4px", g.addEventListener("click", () => this.cancelRender()), this.progressEl.appendChild(g), o.appendChild(s), o.appendChild(this.bodyEl), o.appendChild(this.actionsEl), o.appendChild(this.progressEl), this.backdrop.appendChild(o);
    const D = () => this.updateEstimate();
    this.widthInput.addEventListener("input", D), this.heightInput.addEventListener("input", D), this.fpsInput.addEventListener("input", D), this.durationInput.addEventListener("input", D), this.formatFrames.addEventListener("change", D), this.formatVideo.addEventListener("change", D), this.updateEstimate();
  }
  open() {
    this.parentContainer.appendChild(this.backdrop);
  }
  close() {
    var t;
    (t = this.cancelRenderFn) == null || t.call(this), this.cancelRenderFn = null, this.backdrop.remove();
  }
  createField(t) {
    const n = document.createElement("div");
    n.className = "render-field";
    const r = document.createElement("div");
    return r.className = "render-field-label", r.textContent = t, n.appendChild(r), n;
  }
  createNumberInput(t, n, r) {
    const i = document.createElement("input");
    return i.type = "number", i.className = "render-input", i.value = String(Math.round(t)), i.min = String(n), i.max = String(r), i;
  }
  updateEstimate() {
    const t = parseInt(this.widthInput.value) || 0, n = parseInt(this.heightInput.value) || 0, r = parseInt(this.fpsInput.value) || 0, i = parseFloat(this.durationInput.value) || 0, o = Math.ceil(r * i);
    if (this.formatFrames.checked) {
      const a = t * n * 4 / 1048576 * o;
      this.estimateEl.textContent = `${o} frames, ~${a < 1024 ? Math.round(a) + " MB" : (a / 1024).toFixed(1) + " GB"} raw`;
    } else
      this.estimateEl.textContent = `${o} frames, ${i}s at ${r} fps`;
  }
  startRender() {
    const t = parseInt(this.widthInput.value) || this.canvasWidth, n = parseInt(this.heightInput.value) || this.canvasHeight, r = parseInt(this.fpsInput.value) || 60, i = parseFloat(this.durationInput.value) || 10, o = this.formatFrames.checked ? "frames" : "video";
    this.bodyEl.style.display = "none", this.actionsEl.style.display = "none", this.progressEl.classList.add("active"), this.progressBar.style.width = "0%", this.progressText.textContent = "Preparing...", this.cancelRenderFn = this.onStartRender({
      width: t,
      height: n,
      fps: r,
      duration: i,
      format: o,
      onProgress: (s, a) => {
        const u = s / a * 100;
        this.progressBar.style.width = `${u}%`, this.progressText.textContent = `Frame ${s} / ${a} (${Math.round(u)}%)`;
      },
      onComplete: () => {
        this.progressText.textContent = "Done!", this.progressBar.style.width = "100%", setTimeout(() => this.close(), 1500);
      },
      onError: (s) => {
        this.progressText.textContent = `Error: ${s.message}`, this.progressBar.style.background = "#c62828";
      }
    });
  }
  cancelRender() {
    var t;
    (t = this.cancelRenderFn) == null || t.call(this), this.cancelRenderFn = null, this.bodyEl.style.display = "", this.actionsEl.style.display = "", this.progressEl.classList.remove("active");
  }
}
class st {
  constructor(t) {
    var r;
    this.views = /* @__PURE__ */ new Map(), this.animationId = null, this.startTime = 0, this.pausedElapsedTime = 0, this.disposed = !1, this.statsPanel = null, this.playbackControls = null, this.isPaused = !1, this._pauseAfterFirstFrame = !1, this.isVisible = !0, this.uniformsPanel = null, this.scriptAPI = null, this.scriptErrorCount = 0, this._lastOnFrameTime = null, this.globalKeyHandler = null, this.controlsKeyHandler = null, this.animate = (i) => {
      var a, u, c;
      if (this.disposed || (this.animationId = requestAnimationFrame(this.animate), this.isPaused || !this.isVisible))
        return;
      for (const h of this.views.values())
        if (h.isContextLost)
          return;
      const o = i / 1e3, s = o - this.startTime;
      if ((a = this.statsPanel) == null || a.update(o, s), this.runScriptOnFrame(s, ((u = this.statsPanel) == null ? void 0 : u.totalFrameCount) ?? 0), this.isMultiView) {
        const h = /* @__PURE__ */ new Map();
        for (const [l, d] of this.views)
          h.set(l, {
            mouse: d.getMouseState(),
            resolution: d.getResolution(),
            mousePressed: d.getMousePressed()
          });
        for (const l of this.views.values())
          l.step(s, h);
      } else
        this.primaryView.step(s);
      this._pauseAfterFirstFrame && (this._pauseAfterFirstFrame = !1, this.isPaused = !0, (c = this.playbackControls) == null || c.setPaused(!0));
    }, this.container = t.container, this.project = t.project, this.isMultiView = Wr(t.project), this.container.hasAttribute("tabindex") || this.container.setAttribute("tabindex", "-1"), this.container.style.outline = "none", this.container.addEventListener("mousedown", () => this.container.focus());
    const n = t.pixelRatio ?? t.project.pixelRatio ?? window.devicePixelRatio;
    if (this.isMultiView) {
      const i = t.project, o = i.views.map((s) => s.name);
      if (!t.viewContainers)
        throw new Error("viewContainers required for multi-view projects");
      for (const s of i.views) {
        const a = t.viewContainers.get(s.name);
        if (!a)
          throw new Error(`No container provided for view "${s.name}"`);
        const u = this.createViewProject(i, s), c = new lr({
          container: a,
          project: u,
          keyboardTarget: this.container,
          pixelRatio: n,
          viewNames: o
        });
        this.views.set(s.name, c);
      }
      this.primaryView = this.views.values().next().value;
    } else {
      const i = new lr({
        container: t.container,
        project: t.project,
        keyboardTarget: this.container,
        pixelRatio: n
      });
      this.views.set("default", i), this.primaryView = i;
    }
    if (this.recorder = new _s(this.primaryView.canvas, this.container, this.project.root), this.project.controls !== !1 && (this.statsPanel = new As(this.container), this.statsPanel.updateResolution(this.primaryView.canvas.width, this.primaryView.canvas.height)), this.isMultiView) {
      this.primaryView.onResize = (i, o) => {
        var s;
        (s = this.statsPanel) == null || s.updateResolution(i, o);
      };
      for (const i of this.views.values())
        i.onContextRestored = () => {
          var o;
          if (this.scriptAPI && ((o = this.project.script) != null && o.setup))
            try {
              this.project.script.setup(this.scriptAPI);
            } catch (s) {
              console.error("script.js setup() threw during context restore:", s), this.primaryView.runtimeErrorOverlay.showError("setup", s);
            }
        };
    } else
      this.primaryView.onResize = (i, o) => {
        var s;
        (s = this.statsPanel) == null || s.updateResolution(i, o), this.startTime = performance.now() / 1e3, this.pausedElapsedTime = 0, this.isPaused && this.primaryView.step(0);
      }, this.primaryView.onContextRestored = () => {
        var i;
        if (this.scriptAPI && ((i = this.project.script) != null && i.setup))
          try {
            this.project.script.setup(this.scriptAPI);
          } catch (o) {
            console.error("script.js setup() threw during context restore:", o), this.primaryView.runtimeErrorOverlay.showError("setup", o);
          }
        this.reset(), this.start();
      };
    if (this.project.controls && !t.skipPlaybackControls && (this.playbackControls = new Ts(this.container, {
      onTogglePlayPause: () => this.togglePlayPause(),
      onReset: () => this.reset(),
      onScreenshot: () => this.screenshot(),
      onToggleRecording: () => this.toggleRecording(),
      onExportHTML: () => this.exportHTML(),
      onRender: () => this.openRenderDialog()
    })), this.project.startPaused && (this._pauseAfterFirstFrame = !0, (r = this.playbackControls) == null || r.setPaused(!0)), this.intersectionObserver = new IntersectionObserver((i) => {
      this.isVisible = i[0].isIntersecting;
    }, { threshold: 0.1 }), this.intersectionObserver.observe(this.container), this.project.script && (this.initScriptAPI(), this.project.script.setup && this.scriptAPI))
      try {
        this.project.script.setup(this.scriptAPI);
      } catch (i) {
        console.error("script.js setup() threw:", i), this.primaryView.runtimeErrorOverlay.showError("setup", i);
      }
    this.project.controls !== !1 && !t.skipUniformsPanel && this.project.uniforms && Object.values(this.project.uniforms).some((i) => Vn(i)) && (this.uniformsPanel = new Cs({
      container: this.container,
      uniforms: this.project.uniforms,
      onChange: (i, o) => {
        this.setUniformValue(i, o);
      }
    })), this.setupGlobalShortcuts(), this.project.controls && this.setupKeyboardShortcuts();
  }
  // ===========================================================================
  // Multi-View Helpers
  // ===========================================================================
  /**
   * Create a single-view ShaderProject from a MultiViewProject + ViewEntry.
   * Each view gets a fullscreen layout with no controls (App manages controls).
   */
  createViewProject(t, n) {
    return {
      mode: t.mode,
      root: t.root,
      meta: {
        ...t.meta,
        title: `${t.meta.title} - ${n.name}`
      },
      layout: "fullscreen",
      theme: t.theme,
      controls: !1,
      startPaused: t.startPaused,
      pixelRatio: t.pixelRatio,
      commonSource: t.commonSource,
      passes: n.passes,
      textures: t.textures,
      uniforms: t.uniforms,
      script: null
      // Script handled by App, not individual views
    };
  }
  // ===========================================================================
  // Script API
  // ===========================================================================
  initScriptAPI() {
    const t = this;
    this.scriptAPI = {
      setUniformValue: (n, r) => t.setUniformValue(n, r),
      getUniformValue: (n) => t.primaryView.engine.getUniformValue(n),
      updateTexture: (n, r, i, o) => t.primaryView.engine.updateTexture(n, r, i, o),
      readPixels: (n, r, i, o, s) => t.primaryView.engine.readPixels(n, r, i, o, s),
      get width() {
        return t.primaryView.engine.width;
      },
      get height() {
        return t.primaryView.engine.height;
      },
      setOverlay: (n, r, i) => {
        const o = i ? t.views.get(i) : t.primaryView;
        o == null || o.setOverlay(n, r);
      },
      // Multi-view extensions (undefined for single-view)
      getCrossViewState: t.isMultiView ? (n) => t.getCrossViewState(n) : void 0,
      viewNames: t.isMultiView ? t.project.views.map((n) => n.name) : void 0
    };
  }
  /**
   * Run script onFrame hook with error tracking.
   * Called from animate() with error tracking.
   */
  runScriptOnFrame(t, n) {
    var i;
    if (!this.scriptAPI || !((i = this.project.script) != null && i.onFrame) || this.scriptErrorCount >= st.MAX_SCRIPT_ERRORS)
      return;
    const r = this._lastOnFrameTime !== null ? t - this._lastOnFrameTime : 0;
    try {
      this.project.script.onFrame(this.scriptAPI, t, r, n), this.scriptErrorCount = 0;
    } catch (o) {
      this.scriptErrorCount++, console.error(`script.js onFrame() threw (${this.scriptErrorCount}/${st.MAX_SCRIPT_ERRORS}):`, o), this.primaryView.runtimeErrorOverlay.showError("onFrame", o), this.scriptErrorCount >= st.MAX_SCRIPT_ERRORS && (console.warn("script.js onFrame() disabled after too many errors"), this.primaryView.runtimeErrorOverlay.showDisabled());
    }
    this._lastOnFrameTime = t;
  }
  // ===========================================================================
  // Public API
  // ===========================================================================
  hasErrors() {
    for (const t of this.views.values())
      if (t.hasErrors())
        return !0;
    return !1;
  }
  getEngine() {
    return this.primaryView.engine;
  }
  /**
   * Set a uniform value across all views.
   */
  setUniformValue(t, n) {
    for (const r of this.views.values())
      r.engine.setUniformValue(t, n);
  }
  /**
   * Get a uniform value from the primary view.
   */
  getUniformValue(t) {
    return this.primaryView.engine.getUniformValue(t);
  }
  /**
   * Start the animation loop.
   */
  start() {
    this.animationId === null && (this.startTime = performance.now() / 1e3, this.animationId = requestAnimationFrame(this.animate));
  }
  stop() {
    this.animationId !== null && (cancelAnimationFrame(this.animationId), this.animationId = null);
  }
  // ===========================================================================
  // Cross-View State
  // ===========================================================================
  getMouseState() {
    return this.primaryView.getMouseState();
  }
  getResolution() {
    return this.primaryView.getResolution();
  }
  getMousePressed() {
    return this.primaryView.getMousePressed();
  }
  /**
   * Get cross-view state for a named view.
   */
  getCrossViewState(t) {
    const n = this.views.get(t);
    if (n)
      return {
        mouse: n.getMouseState(),
        resolution: n.getResolution(),
        mousePressed: n.getMousePressed()
      };
  }
  setOverlay(t, n) {
    this.primaryView.setOverlay(t, n);
  }
  // ===========================================================================
  // Playback Control
  // ===========================================================================
  togglePlayPause() {
    var t;
    this.isPaused ? this.startTime = performance.now() / 1e3 - this.pausedElapsedTime : this.pausedElapsedTime = performance.now() / 1e3 - this.startTime, this.isPaused = !this.isPaused, (t = this.playbackControls) == null || t.setPaused(this.isPaused);
  }
  getPaused() {
    return this.isPaused;
  }
  reset() {
    var t;
    this.startTime = performance.now() / 1e3, this.pausedElapsedTime = 0, this._lastOnFrameTime = null, (t = this.statsPanel) == null || t.reset();
    for (const n of this.views.values())
      n.engine.reset();
  }
  // ===========================================================================
  // Screenshots & Recording
  // ===========================================================================
  screenshot() {
    const t = this.project.root.split("/").pop() || "shader", n = /* @__PURE__ */ new Date(), r = n.getFullYear().toString() + (n.getMonth() + 1).toString().padStart(2, "0") + n.getDate().toString().padStart(2, "0") + "-" + n.getHours().toString().padStart(2, "0") + n.getMinutes().toString().padStart(2, "0") + n.getSeconds().toString().padStart(2, "0"), i = `shadertoy-${t}-${r}.png`;
    this.primaryView.canvas.toBlob((o) => {
      if (!o) {
        console.error("Failed to create screenshot blob");
        return;
      }
      const s = URL.createObjectURL(o), a = document.createElement("a");
      a.href = s, a.download = i, a.click(), URL.revokeObjectURL(s), console.log(`Screenshot saved: ${i}`);
    }, "image/png");
  }
  toggleRecording() {
    this.recorder.toggle(this.isPaused, () => this.togglePlayPause());
  }
  // ===========================================================================
  // HTML Export
  // ===========================================================================
  exportHTML() {
    if (this.isMultiView) {
      console.warn("HTML export is not supported for multi-view projects");
      return;
    }
    bs(this.project, this.primaryView.engine);
  }
  openRenderDialog() {
    new xs(this.container, this.primaryView.canvas.width, this.primaryView.canvas.height, (n) => this.renderOffline(n)).open();
  }
  renderOffline(t) {
    let n = !1;
    const r = () => {
      n = !0;
    };
    return (async () => {
      var h, l;
      const o = this.primaryView.canvas, s = this.primaryView.engine, a = o.width, u = o.height, c = this.isPaused;
      try {
        this.isPaused = !0, o.width = t.width, o.height = t.height, s.resize(t.width, t.height), s.reset(), this.scriptAPI && ((h = this.project.script) != null && h.setup) && this.project.script.setup(this.scriptAPI);
        const d = Math.ceil(t.fps * t.duration);
        t.format === "video" ? await this.renderVideoFrames(d, t.fps, () => n, t.onProgress) : await this.renderPngFrames(d, t.fps, () => n, t.onProgress), n || t.onComplete();
      } catch (d) {
        n || t.onError(d instanceof Error ? d : new Error(String(d)));
      } finally {
        if (o.width = a, o.height = u, s.resize(a, u), s.reset(), this.scriptAPI && ((l = this.project.script) != null && l.setup))
          try {
            this.project.script.setup(this.scriptAPI);
          } catch {
          }
        this.isPaused = c;
      }
    })(), r;
  }
  async renderPngFrames(t, n, r, i) {
    let o = null;
    if ("showDirectoryPicker" in window)
      try {
        o = await window.showDirectoryPicker({ mode: "readwrite" });
      } catch {
      }
    for (let s = 0; s < t; s++) {
      if (r())
        return;
      this.stepForRender(s, n), this.primaryView.presentToScreen();
      const a = await new Promise((c, h) => {
        this.primaryView.canvas.toBlob((l) => l ? c(l) : h(new Error("Failed to capture frame")), "image/png");
      }), u = `frame_${String(s).padStart(5, "0")}.png`;
      if (o) {
        const h = await (await o.getFileHandle(u, { create: !0 })).createWritable();
        await h.write(a), await h.close();
      } else {
        const c = URL.createObjectURL(a), h = document.createElement("a");
        h.href = c, h.download = u, h.click(), URL.revokeObjectURL(c);
      }
      i(s + 1, t), s % 10 === 0 && await new Promise((c) => setTimeout(c, 0));
    }
  }
  async renderVideoFrames(t, n, r, i) {
    const o = this.primaryView.canvas, s = document.createElement("canvas");
    s.width = o.width, s.height = o.height;
    const a = s.getContext("2d"), u = s.captureStream(0), c = new MediaRecorder(u, {
      mimeType: "video/webm;codecs=vp9",
      videoBitsPerSecond: 8e6
    }), h = [];
    c.ondataavailable = (f) => {
      f.data.size > 0 && h.push(f.data);
    };
    const l = new Promise((f) => {
      c.onstop = () => f();
    });
    c.start();
    for (let f = 0; f < t; f++) {
      if (r()) {
        c.stop(), await l;
        return;
      }
      this.stepForRender(f, n), this.primaryView.presentToScreen(), a.drawImage(o, 0, 0);
      const y = u.getVideoTracks()[0];
      y != null && y.requestFrame && y.requestFrame(), i(f + 1, t), f % 10 === 0 && await new Promise((C) => setTimeout(C, 0));
    }
    c.stop(), await l;
    const d = new Blob(h, { type: "video/webm" }), m = URL.createObjectURL(d), v = document.createElement("a");
    v.href = m, v.download = `render_${o.width}x${o.height}_${n}fps.webm`, v.click(), URL.revokeObjectURL(m);
  }
  stepForRender(t, n) {
    var o;
    const r = t / n, i = 1 / n;
    if (this.scriptAPI && ((o = this.project.script) != null && o.onFrame))
      try {
        this.project.script.onFrame(this.scriptAPI, r, i, t);
      } catch {
      }
    this.primaryView.engine.step(r, [0, 0, 0, 0], !1);
  }
  // ===========================================================================
  // Keyboard Shortcuts
  // ===========================================================================
  static isTextInput(t) {
    const n = t.target;
    if (!n)
      return !1;
    const r = n.tagName;
    return r === "INPUT" || r === "TEXTAREA" || n.isContentEditable;
  }
  setupGlobalShortcuts() {
    this.globalKeyHandler = (t) => {
      st.isTextInput(t) || t.code === "KeyS" && !t.repeat && (t.preventDefault(), this.screenshot());
    }, this.container.addEventListener("keydown", this.globalKeyHandler);
  }
  setupKeyboardShortcuts() {
    this.controlsKeyHandler = (t) => {
      st.isTextInput(t) || (t.code === "Space" && !t.repeat && (t.preventDefault(), this.togglePlayPause()), t.code === "KeyR" && !t.repeat && (t.preventDefault(), this.reset()));
    }, this.container.addEventListener("keydown", this.controlsKeyHandler);
  }
  // ===========================================================================
  // Lifecycle
  // ===========================================================================
  dispose() {
    var t, n, r;
    this.disposed = !0, this.stop();
    for (const i of this.views.values())
      i.dispose();
    this.recorder.dispose(), (t = this.playbackControls) == null || t.dispose(), this.intersectionObserver.disconnect(), this.globalKeyHandler && this.container.removeEventListener("keydown", this.globalKeyHandler), this.controlsKeyHandler && this.container.removeEventListener("keydown", this.controlsKeyHandler), (n = this.uniformsPanel) == null || n.destroy(), (r = this.statsPanel) == null || r.dispose();
  }
}
st.MAX_SCRIPT_ERRORS = 10;
class Ss {
  constructor(t) {
    this.panel = null, this.controls = null, this.isOpen = !1, this.isPaused = !1, this.wrapper = t.wrapper, this.opts = t, this.isPaused = t.getPaused(), this.controlsWrapper = document.createElement("div"), this.controlsWrapper.className = "multi-view-controls-wrapper", this.toggleButton = document.createElement("button"), this.toggleButton.className = "multi-view-controls-toggle", this.toggleButton.title = "Toggle Controls", this.toggleButton.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="4" y1="21" x2="4" y2="14"></line>
        <line x1="4" y1="10" x2="4" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12" y2="3"></line>
        <line x1="20" y1="21" x2="20" y2="16"></line>
        <line x1="20" y1="12" x2="20" y2="3"></line>
        <line x1="1" y1="14" x2="7" y2="14"></line>
        <line x1="9" y1="8" x2="15" y2="8"></line>
        <line x1="17" y1="16" x2="23" y2="16"></line>
      </svg>
    `, this.toggleButton.addEventListener("click", () => this.toggle()), this.controlsWrapper.appendChild(this.toggleButton), this.createPanel(t.uniforms), this.wrapper.appendChild(this.controlsWrapper);
  }
  createPanel(t) {
    this.panel = document.createElement("div"), this.panel.className = "multi-view-controls-panel";
    const n = document.createElement("div");
    n.className = "multi-view-controls-header";
    const r = document.createElement("span");
    r.textContent = "Controls", n.appendChild(r);
    const i = document.createElement("button");
    i.className = "multi-view-controls-close", i.innerHTML = "&times;", i.title = "Close", i.addEventListener("click", () => this.toggle()), n.appendChild(i), this.panel.appendChild(n);
    const o = document.createElement("div");
    o.className = "controls-section playback-controls";
    const s = document.createElement("button");
    s.className = "control-btn play-pause-btn", s.title = "Play/Pause", this.updatePlayPauseIcon(s), s.addEventListener("click", () => {
      this.opts.onTogglePlayPause(), this.isPaused = this.opts.getPaused(), this.updatePlayPauseIcon(s);
    }), o.appendChild(s);
    const a = document.createElement("button");
    if (a.className = "control-btn reset-btn", a.title = "Reset", a.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
        <path d="M3 3v5h5"></path>
      </svg>
    `, a.addEventListener("click", () => {
      this.opts.onReset();
    }), o.appendChild(a), this.panel.appendChild(o), t && Object.values(t).some((u) => Vn(u))) {
      const u = document.createElement("div");
      u.className = "controls-section uniforms-section";
      const c = document.createElement("div");
      c.className = "section-label", c.textContent = "Uniforms", u.appendChild(c);
      const h = document.createElement("div");
      h.className = "uniforms-container", this.controls = new Qr({
        container: h,
        uniforms: t,
        onChange: (l, d) => {
          var m, v;
          (v = (m = this.opts).onSetUniformValue) == null || v.call(m, l, d);
        }
      }), u.appendChild(h), this.panel.appendChild(u);
    }
    this.panel.classList.add("closed"), this.controlsWrapper.appendChild(this.panel);
  }
  updatePlayPauseIcon(t) {
    this.isPaused ? t.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      ` : t.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
      `;
  }
  toggle() {
    var t, n;
    this.isOpen = !this.isOpen, this.isOpen ? ((t = this.panel) == null || t.classList.remove("closed"), this.toggleButton.classList.add("hidden")) : ((n = this.panel) == null || n.classList.add("closed"), this.toggleButton.classList.remove("hidden"));
  }
  dispose() {
    var t;
    (t = this.controls) == null || t.destroy(), this.wrapper.removeChild(this.controlsWrapper);
  }
}
class Bs {
  constructor(t) {
    this.container = t.container, this.root = document.createElement("div"), this.root.className = "layout-fullscreen", this.canvasContainer = document.createElement("div"), this.canvasContainer.className = "canvas-container", this.root.appendChild(this.canvasContainer), this.container.appendChild(this.root);
  }
  getCanvasContainer() {
    return this.canvasContainer;
  }
  dispose() {
    this.container.innerHTML = "";
  }
}
class Rs {
  constructor(t) {
    this.container = t.container, this.root = document.createElement("div"), this.root.className = "layout-default", this.canvasContainer = document.createElement("div"), this.canvasContainer.className = "canvas-container", this.root.appendChild(this.canvasContainer), this.container.appendChild(this.root);
  }
  getCanvasContainer() {
    return this.canvasContainer;
  }
  dispose() {
    this.container.innerHTML = "";
  }
}
class Ms {
  constructor(t) {
    this.editorPanel = null, this.recompileHandler = null, this._disposed = !1, this.container = t.container, this.project = t.project, this.root = document.createElement("div"), this.root.className = "layout-split", this.canvasContainer = document.createElement("div"), this.canvasContainer.className = "canvas-container", this.codePanel = document.createElement("div"), this.codePanel.className = "code-panel", this.buildEditorPanel(), this.root.appendChild(this.canvasContainer), this.root.appendChild(this.codePanel), this.container.appendChild(this.root);
  }
  getCanvasContainer() {
    return this.canvasContainer;
  }
  setRecompileHandler(t) {
    this.recompileHandler = t, this.editorPanel && this.editorPanel.setRecompileHandler(t);
  }
  setUniformHandler(t) {
  }
  dispose() {
    this._disposed = !0, this.editorPanel && (this.editorPanel.dispose(), this.editorPanel = null), this.container.innerHTML = "";
  }
  /**
   * Build editor panel (dynamically loaded).
   */
  async buildEditorPanel() {
    try {
      const { EditorPanel: t } = await Promise.resolve().then(() => ca);
      if (this._disposed)
        return;
      this.editorPanel = new t(this.codePanel, this.project), this.recompileHandler && this.editorPanel.setRecompileHandler(this.recompileHandler);
    } catch (t) {
      console.error("Failed to load editor panel:", t);
    }
  }
}
class Ns {
  constructor(t) {
    this.editorInstance = null, this.recompileHandler = null, this.modifiedSources = /* @__PURE__ */ new Map(), this.tabs = [], this.activeTabIndex = 0, this.keydownHandler = null, this.container = t.container, this.project = t.project, this.root = document.createElement("div"), this.root.className = "layout-tabbed";
    const n = document.createElement("div");
    n.className = "tabbed-wrapper", this.contentArea = document.createElement("div"), this.contentArea.className = "tabbed-content", this.canvasContainer = document.createElement("div"), this.canvasContainer.className = "tabbed-canvas-container", this.imageViewer = document.createElement("div"), this.imageViewer.className = "tabbed-image-viewer", this.imageViewer.style.visibility = "hidden", this.contentArea.appendChild(this.canvasContainer), this.contentArea.appendChild(this.imageViewer), this.editorContainer = document.createElement("div"), this.editorContainer.className = "tabbed-editor-container", this.editorContainer.style.visibility = "hidden", this.contentArea.appendChild(this.editorContainer), this.buttonContainer = document.createElement("div"), this.buttonContainer.className = "tabbed-button-container", this.buttonContainer.style.display = "none", this.copyButton = document.createElement("button"), this.copyButton.className = "tabbed-copy-button", this.copyButton.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2z" opacity="0.4"/>
        <path d="M2 5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2zm0 1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"/>
      </svg>
    `, this.copyButton.title = "Copy code to clipboard", this.copyButton.addEventListener("click", () => this.copyToClipboard()), this.buttonContainer.appendChild(this.copyButton), this.recompileButton = document.createElement("button"), this.recompileButton.className = "tabbed-recompile-button", this.recompileButton.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4 3v10l8-5-8-5z"/>
      </svg>
      Recompile
    `, this.recompileButton.title = "Recompile shader (Ctrl+Enter)", this.recompileButton.addEventListener("click", () => this.recompile()), this.buttonContainer.appendChild(this.recompileButton), this.errorDisplay = document.createElement("div"), this.errorDisplay.className = "tabbed-error-display", this.errorDisplay.style.display = "none", this.contentArea.appendChild(this.errorDisplay), this.setupKeyboardShortcut();
    const r = this.buildTabBar();
    n.appendChild(r), n.appendChild(this.contentArea), this.root.appendChild(n), this.container.appendChild(this.root);
  }
  getCanvasContainer() {
    return this.canvasContainer;
  }
  setRecompileHandler(t) {
    this.recompileHandler = t;
  }
  dispose() {
    this.keydownHandler && (this.container.removeEventListener("keydown", this.keydownHandler), this.keydownHandler = null), this.editorInstance && (this.editorInstance.destroy(), this.editorInstance = null), this.container.innerHTML = "";
  }
  setupKeyboardShortcut() {
    this.keydownHandler = (t) => {
      (t.ctrlKey || t.metaKey) && t.key === "Enter" && this.tabs[this.activeTabIndex].kind === "code" && (t.preventDefault(), this.recompile());
    }, this.container.addEventListener("keydown", this.keydownHandler);
  }
  saveCurrentEditorContent() {
    if (this.editorInstance) {
      const t = this.tabs[this.activeTabIndex];
      if (t.kind === "code") {
        const n = this.editorInstance.getSource();
        this.modifiedSources.set(t.passName, n);
      }
    }
  }
  recompile() {
    if (!this.recompileHandler) {
      console.warn("No recompile handler set");
      return;
    }
    this.saveCurrentEditorContent();
    const t = this.tabs[this.activeTabIndex];
    if (t.kind !== "code")
      return;
    const n = this.modifiedSources.get(t.passName) ?? t.source, r = this.recompileHandler(t.passName, n);
    r.success ? (this.hideError(), t.source = n) : this.showError(r.error || "Compilation failed");
  }
  showError(t) {
    this.errorDisplay && (this.errorDisplay.textContent = t, this.errorDisplay.style.display = "block");
  }
  hideError() {
    this.errorDisplay && (this.errorDisplay.style.display = "none");
  }
  async copyToClipboard() {
    const t = this.tabs[this.activeTabIndex];
    if (t.kind !== "code")
      return;
    const n = this.editorInstance ? this.editorInstance.getSource() : this.modifiedSources.get(t.passName) ?? t.source;
    try {
      await navigator.clipboard.writeText(n);
      const r = this.copyButton.innerHTML;
      this.copyButton.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
        </svg>
      `, this.copyButton.classList.add("copied"), setTimeout(() => {
        this.copyButton.innerHTML = r, this.copyButton.classList.remove("copied");
      }, 1500);
    } catch (r) {
      console.error("Failed to copy:", r);
    }
  }
  buildTabBar() {
    const t = document.createElement("div");
    t.className = "tabbed-toolbar";
    const n = document.createElement("div");
    n.className = "tabbed-tab-bar", this.tabs = [], this.tabs.push({ kind: "shader", name: "Shader" }), this.project.commonSource && this.tabs.push({
      kind: "code",
      name: "common.glsl",
      passName: "common",
      source: this.project.commonSource
    });
    const r = [
      "BufferA",
      "BufferB",
      "BufferC",
      "BufferD"
    ];
    for (const s of r) {
      const a = this.project.passes[s];
      a && this.tabs.push({
        kind: "code",
        name: `${s.toLowerCase()}.glsl`,
        passName: s,
        source: a.glslSource
      });
    }
    const i = this.project.passes.Image;
    this.tabs.push({
      kind: "code",
      name: "image.glsl",
      passName: "Image",
      source: i.glslSource
    });
    for (const s of this.project.textures)
      this.tabs.push({
        kind: "image",
        name: s.filename || s.name,
        url: s.source
      });
    const o = async (s) => {
      this.saveCurrentEditorContent();
      const a = this.tabs[s];
      if (this.activeTabIndex = s, n.querySelectorAll(".tabbed-tab-button").forEach((u, c) => {
        u.classList.toggle("active", c === s);
      }), this.canvasContainer.style.visibility = "hidden", this.imageViewer.style.visibility = "hidden", this.editorContainer.style.visibility = "hidden", this.buttonContainer.style.display = "none", this.editorInstance && (this.editorInstance.destroy(), this.editorInstance = null), a.kind === "shader")
        this.canvasContainer.style.visibility = "visible";
      else if (a.kind === "code") {
        this.editorContainer.style.visibility = "visible", this.buttonContainer.style.display = "flex";
        const u = this.modifiedSources.get(a.passName) ?? a.source;
        this.editorContainer.innerHTML = "";
        try {
          const { createEditor: c } = await Promise.resolve().then(() => hi);
          this.editorInstance = c(this.editorContainer, u, (h) => {
            this.modifiedSources.set(a.passName, h);
          });
        } catch (c) {
          console.error("Failed to load editor:", c);
          const h = document.createElement("textarea");
          h.className = "tabbed-fallback-textarea", h.value = u, h.addEventListener("input", () => {
            this.modifiedSources.set(a.passName, h.value);
          }), this.editorContainer.appendChild(h);
        }
      } else {
        this.imageViewer.style.visibility = "visible";
        const u = document.createElement("img");
        u.src = a.url, u.alt = a.name, this.imageViewer.innerHTML = "", this.imageViewer.appendChild(u);
      }
    };
    return this.tabs.forEach((s, a) => {
      const u = document.createElement("button");
      u.className = "tabbed-tab-button", s.kind === "shader" ? u.classList.add("shader-tab") : s.kind === "image" && u.classList.add("image-tab"), u.textContent = s.name, a === 0 && u.classList.add("active"), u.addEventListener("click", () => o(a)), n.appendChild(u);
    }), t.appendChild(n), t.appendChild(this.buttonContainer), t;
  }
}
class fr {
  constructor(t) {
    this.canvasContainers = /* @__PURE__ */ new Map(), this.container = t.container;
    const n = t.viewNames.length;
    this.wrapper = document.createElement("div"), this.wrapper.className = "layout-multi-view layout-grid-view", this.wrapper.dataset.viewCount = String(n);
    for (const i of t.viewNames) {
      const o = document.createElement("div");
      o.className = "multi-view-canvas", o.setAttribute("data-view-name", i);
      const s = document.createElement("div");
      s.className = "multi-view-label", s.textContent = i, o.appendChild(s), this.canvasContainers.set(i, o), this.wrapper.appendChild(o);
    }
    this.container.appendChild(this.wrapper), this.resizeObserver = new ResizeObserver((i) => {
      for (const o of i) {
        const { width: s, height: a } = o.contentRect;
        this.updateOrientation(s, a);
      }
    }), this.resizeObserver.observe(this.wrapper);
    const r = this.wrapper.getBoundingClientRect();
    this.updateOrientation(r.width, r.height);
  }
  updateOrientation(t, n) {
    const r = t > n;
    this.wrapper.classList.toggle("grid-horizontal", r), this.wrapper.classList.toggle("grid-vertical", !r);
  }
  getCanvasContainers() {
    return this.canvasContainers;
  }
  getWrapperElement() {
    return this.wrapper;
  }
  dispose() {
    this.resizeObserver.disconnect(), this.container.innerHTML = "";
  }
}
class Ps {
  constructor(t) {
    if (this.canvasContainers = /* @__PURE__ */ new Map(), this.insetContainer = null, this.minimizeBtn = null, this.isMinimized = !1, this.toggleMinimize = () => {
      this.isMinimized = !this.isMinimized, this.insetContainer && this.insetContainer.classList.toggle("minimized", this.isMinimized), this.minimizeBtn && (this.isMinimized ? (this.minimizeBtn.innerHTML = "&#x25A1;", this.minimizeBtn.title = "Restore", this.minimizeBtn.style.display = "none") : (this.minimizeBtn.innerHTML = "&#x2212;", this.minimizeBtn.title = "Minimize", this.minimizeBtn.style.display = ""));
    }, this.container = t.container, t.viewNames.length < 2)
      throw new Error("InsetViewLayout requires at least 2 views");
    this.wrapper = document.createElement("div"), this.wrapper.className = "layout-multi-view layout-inset-view";
    const n = t.viewNames[0], r = document.createElement("div");
    r.className = "multi-view-canvas inset-main", r.setAttribute("data-view-name", n), this.canvasContainers.set(n, r), this.wrapper.appendChild(r);
    const i = t.viewNames[1];
    this.insetContainer = document.createElement("div"), this.insetContainer.className = "multi-view-canvas inset-overlay", this.insetContainer.setAttribute("data-view-name", i), this.canvasContainers.set(i, this.insetContainer), this.minimizeBtn = document.createElement("button"), this.minimizeBtn.className = "inset-minimize-btn", this.minimizeBtn.innerHTML = "&#x2212;", this.minimizeBtn.title = "Minimize", this.minimizeBtn.addEventListener("click", this.toggleMinimize), this.insetContainer.appendChild(this.minimizeBtn), this.wrapper.appendChild(this.insetContainer), this.insetContainer.addEventListener("click", (o) => {
      this.isMinimized && o.target === this.insetContainer && this.toggleMinimize();
    }), this.container.appendChild(this.wrapper);
  }
  getCanvasContainers() {
    return this.canvasContainers;
  }
  getWrapperElement() {
    return this.wrapper;
  }
  dispose() {
    this.minimizeBtn && this.minimizeBtn.removeEventListener("click", this.toggleMinimize), this.container.innerHTML = "";
  }
}
function Ls(e, t) {
  switch (e) {
    case "fullscreen":
      return new Bs(t);
    case "default":
      return new Rs(t);
    case "split":
      return new Ms(t);
    case "tabbed":
      return new Ns(t);
  }
}
function Is(e, t) {
  switch (e) {
    case "split":
    case "quad":
    case "grid":
      return new fr(t);
    case "inset":
      return new Ps(t);
    default:
      return new fr(t);
  }
}
function Us(e, t) {
  const { styled: n = !0, pixelRatio: r = window.devicePixelRatio } = t, i = { ...t.project };
  return t.layout !== void 0 && (i.layout = t.layout), t.controls !== void 0 && (i.controls = t.controls), t.theme !== void 0 && (i.theme = t.theme), t.startPaused !== void 0 && (i.startPaused = t.startPaused), t.pixelRatio !== void 0 && (i.pixelRatio = t.pixelRatio), n || e.classList.add("unstyled"), e.setAttribute("data-theme", i.theme), Wr(i) ? Os(e, i, r) : ks(e, i, r);
}
function ei(e, t) {
  return {
    pause: () => {
      e.getPaused() || e.togglePlayPause();
    },
    resume: () => {
      e.getPaused() && e.togglePlayPause();
    },
    reset: () => e.reset(),
    get isPaused() {
      return e.getPaused();
    },
    setUniform: (n, r) => e.setUniformValue(n, r),
    getUniform: (n) => e.getUniformValue(n),
    destroy: t
  };
}
function ks(e, t, n) {
  const r = Ls(t.layout, {
    container: e,
    project: t
  }), i = new st({
    container: r.getCanvasContainer(),
    project: t,
    pixelRatio: n,
    skipUniformsPanel: !1,
    skipPlaybackControls: !1
  });
  return r.setRecompileHandler && r.setRecompileHandler((o, s) => {
    const a = i.getEngine();
    if (!a)
      return { success: !1, error: "Engine not initialized" };
    if (o === "common") {
      const u = a.recompileCommon(s);
      if (u.success)
        return { success: !0 };
      const c = u.errors[0];
      return {
        success: !1,
        error: c ? `${c.passName}: ${c.error}` : "Unknown error"
      };
    }
    return a.recompilePass(o, s);
  }), r.setUniformHandler && r.setUniformHandler((o, s) => {
    const a = i.getEngine();
    a && a.setUniformValue(o, s);
  }), i.hasErrors() || i.start(), ei(i, () => {
    i.dispose(), r.dispose();
  });
}
function Os(e, t, n) {
  const r = t.views.map((a) => a.name), i = Is(t.viewLayout, {
    container: e,
    project: t,
    viewNames: r
  }), o = new st({
    container: i.getWrapperElement(),
    project: t,
    pixelRatio: n,
    viewContainers: i.getCanvasContainers(),
    skipPlaybackControls: !0,
    skipUniformsPanel: !0
  }), s = new Ss({
    wrapper: i.getWrapperElement(),
    onTogglePlayPause: () => o.togglePlayPause(),
    onReset: () => o.reset(),
    getPaused: () => o.getPaused(),
    onSetUniformValue: (a, u) => o.setUniformValue(a, u),
    uniforms: t.uniforms
  });
  return o.hasErrors() || o.start(), ei(o, () => {
    s.dispose(), o.dispose(), i.dispose();
  });
}
function jn(e) {
  return e === "Image" || e === "BufferA" || e === "BufferB" || e === "BufferC" || e === "BufferD";
}
function $s(e) {
  switch (e) {
    case "Image":
      return "image.glsl";
    case "BufferA":
      return "bufferA.glsl";
    case "BufferB":
      return "bufferB.glsl";
    case "BufferC":
      return "bufferC.glsl";
    case "BufferD":
      return "bufferD.glsl";
  }
}
function ti(e) {
  return typeof e == "string" ? jn(e) ? { buffer: e } : e === "keyboard" ? { keyboard: !0 } : e === "audio" ? { audio: !0 } : e === "webcam" ? { webcam: !0 } : { texture: e } : e;
}
const Rn = ["Image", "BufferA", "BufferB", "BufferC", "BufferD"], zs = ["BufferA", "BufferB", "BufferC", "BufferD"], ni = ["iChannel0", "iChannel1", "iChannel2", "iChannel3"], Hs = "default", ri = !0, Vs = "auto", ii = /* @__PURE__ */ new Set([
  "iResolution",
  "iTime",
  "iTimeDelta",
  "iFrame",
  "iMouse",
  "iDate",
  "iFrameRate",
  "iChannelResolution",
  "iChannel0",
  "iChannel1",
  "iChannel2",
  "iChannel3",
  "iTouchCount",
  "iTouch0",
  "iTouch1",
  "iTouch2",
  "iPinch",
  "iPinchDelta",
  "iPinchCenter"
]), Xs = /^[a-zA-Z_][a-zA-Z0-9_]*$/, js = /* @__PURE__ */ new Set([
  "attribute",
  "const",
  "uniform",
  "varying",
  "break",
  "continue",
  "do",
  "for",
  "while",
  "if",
  "else",
  "in",
  "out",
  "inout",
  "float",
  "int",
  "void",
  "bool",
  "true",
  "false",
  "discard",
  "return",
  "mat2",
  "mat3",
  "mat4",
  "vec2",
  "vec3",
  "vec4",
  "ivec2",
  "ivec3",
  "ivec4",
  "bvec2",
  "bvec3",
  "bvec4",
  "sampler2D",
  "samplerCube",
  "struct",
  "precision",
  "highp",
  "mediump",
  "lowp",
  "layout",
  "centroid",
  "flat",
  "smooth",
  "noperspective",
  "switch",
  "case",
  "default"
]);
function It(e) {
  return Xs.test(e) && !js.has(e);
}
const hr = /* @__PURE__ */ new Set(["fullscreen", "default", "split", "tabbed"]), Jt = /* @__PURE__ */ new Set(["light", "dark", "system"]), Gs = /* @__PURE__ */ new Set([
  "mode",
  "title",
  "author",
  "description",
  "layout",
  "theme",
  "controls",
  "common",
  "startPaused",
  "pixelRatio",
  "uniforms",
  "buffers",
  "textures",
  "Image",
  "BufferA",
  "BufferB",
  "BufferC",
  "BufferD",
  "views"
  // multi-view projects
]), Ys = /* @__PURE__ */ new Set(["source", "iChannel0", "iChannel1", "iChannel2", "iChannel3"]), dr = /* @__PURE__ */ new Set(["keyboard", "audio", "webcam"]);
function Ks(e, t) {
  const n = [], r = [];
  for (const o of Object.keys(e))
    Gs.has(o) || n.push(`Unknown config key '${o}'`);
  if (e.layout !== void 0 && !hr.has(e.layout) && r.push(`Invalid layout '${e.layout}'. Expected one of: ${[...hr].join(", ")}`), e.theme !== void 0 && !Jt.has(e.theme) && r.push(`Invalid theme '${e.theme}'. Expected one of: ${[...Jt].join(", ")}`), e.uniforms && typeof e.uniforms == "object")
    for (const o of Object.keys(e.uniforms))
      ii.has(o) && r.push(`Uniform name '${o}' is reserved (built-in uniform)`), It(o) || r.push(`Uniform name '${o}' is not a valid GLSL identifier`);
  const i = /* @__PURE__ */ new Set();
  if (e.buffers) {
    const o = Object.keys(e.buffers);
    for (const s of o) {
      if (typeof s != "string") {
        r.push(`Buffer name must be a string, got ${typeof s}`);
        continue;
      }
      It(s) || r.push(`Buffer name '${s}' is not a valid GLSL identifier`), i.add(s);
    }
  }
  if (e.textures && typeof e.textures == "object")
    for (const [o, s] of Object.entries(e.textures))
      It(o) || r.push(`Texture name '${o}' is not a valid GLSL identifier`), i.has(o) && r.push(`Texture name '${o}' collides with a buffer name`), typeof s != "string" ? r.push(`Texture source for '${o}' must be a string`) : !dr.has(s) && !/\.\w+$/.test(s) && !It(s) && r.push(`Invalid texture source '${s}' for '${o}'. Expected a file path with extension, a script texture name, or one of: ${[...dr].join(", ")}`);
  for (const o of Rn) {
    const s = e[o];
    if (!(!s || typeof s != "object")) {
      for (const a of Object.keys(s))
        Ys.has(a) || n.push(`Unknown key '${a}' in pass '${o}'`);
      for (const a of ni) {
        const u = s[a];
        u && typeof u == "string" && jn(u) && u !== "Image" && !e[u] && n.push(`${o}.${a} references '${u}' but no ${u} pass is configured`);
      }
    }
  }
  for (const o of n)
    console.warn(`[config] ${t}: ${o}`);
  if (r.length > 0)
    throw new Error(`Config validation failed for '${t}':
${r.map((o) => `  - ${o}`).join(`
`)}`);
}
const pr = /* @__PURE__ */ new Set(["split", "quad", "grid", "inset"]);
function qs(e, t) {
  const n = [];
  if (!Array.isArray(e.views) || e.views.length < 2)
    n.push("'views' must be an array with at least 2 entries");
  else {
    for (const i of e.views)
      (typeof i != "string" || !i) && n.push(`Each view name must be a non-empty string, got '${i}'`);
    new Set(e.views).size !== e.views.length && n.push("Duplicate view names found");
  }
  if (e.layout !== void 0 && !pr.has(e.layout) && n.push(`Invalid multi-view layout '${e.layout}'. Expected one of: ${[...pr].join(", ")}`), e.theme !== void 0 && !Jt.has(e.theme) && n.push(`Invalid theme '${e.theme}'. Expected one of: ${[...Jt].join(", ")}`), e.uniforms && typeof e.uniforms == "object")
    for (const r of Object.keys(e.uniforms))
      ii.has(r) && n.push(`Uniform name '${r}' is reserved (built-in uniform)`), It(r) || n.push(`Uniform name '${r}' is not a valid GLSL identifier`);
  if (n.length > 0)
    throw new Error(`Multi-view config validation failed for '${t}':
${n.map((r) => `  - ${r}`).join(`
`)}`);
}
function dn(e) {
  return {
    mode: e.mode,
    root: e.root,
    meta: {
      title: e.title ?? e.root.split("/").pop() ?? "Untitled",
      author: e.author ?? null,
      description: e.description ?? null
    },
    layout: e.layout ?? Hs,
    theme: e.theme ?? Vs,
    controls: e.controls ?? ri,
    startPaused: e.startPaused ?? !1,
    pixelRatio: e.pixelRatio ?? null,
    commonSource: e.commonSource,
    passes: e.passes,
    textures: e.textures ?? [],
    uniforms: e.uniforms ?? {},
    script: e.script ?? null
  };
}
const mr = /* @__PURE__ */ new Set(["float", "int", "bool", "vec2", "vec3", "vec4"]), gr = /* @__PURE__ */ new Set(["float", "vec2", "vec3", "vec4", "mat3", "mat4"]), Ws = {
  vec2: 2,
  vec3: 3,
  vec4: 4
};
function Zs(e, t) {
  for (const [n, r] of Object.entries(e)) {
    const i = `Uniform '${n}' in '${t}'`;
    if (!r.type)
      throw new Error(`${i}: missing 'type' field`);
    if (_e(r)) {
      if (!gr.has(r.type))
        throw new Error(`${i}: invalid array type '${r.type}'. Expected one of: ${[...gr].join(", ")}`);
      if (typeof r.count != "number" || r.count < 1 || !Number.isInteger(r.count))
        throw new Error(`${i}: 'count' must be a positive integer, got ${r.count}`);
      continue;
    }
    const o = r;
    if (!mr.has(o.type))
      throw new Error(`${i}: invalid type '${o.type}'. Expected one of: ${[...mr].join(", ")}`);
    switch (o.type) {
      case "float":
      case "int":
        if (typeof o.value != "number")
          throw new Error(`${i}: 'value' must be a number for type '${o.type}', got ${typeof o.value}`);
        if (o.min !== void 0 && typeof o.min != "number")
          throw new Error(`${i}: 'min' must be a number`);
        if (o.max !== void 0 && typeof o.max != "number")
          throw new Error(`${i}: 'max' must be a number`);
        if (o.step !== void 0 && typeof o.step != "number")
          throw new Error(`${i}: 'step' must be a number`);
        break;
      case "bool":
        if (typeof o.value != "boolean")
          throw new Error(`${i}: 'value' must be a boolean for type 'bool', got ${typeof o.value}`);
        break;
      case "vec2":
      case "vec3":
      case "vec4": {
        const s = Ws[o.type];
        if (!Array.isArray(o.value) || o.value.length !== s)
          throw new Error(`${i}: 'value' must be an array of ${s} numbers for type '${o.type}'`);
        if (o.value.some((u) => typeof u != "number"))
          throw new Error(`${i}: all components of 'value' must be numbers`);
        const a = o;
        for (const u of ["min", "max", "step"]) {
          const c = a[u];
          if (c !== void 0 && (!Array.isArray(c) || c.length !== s))
            throw new Error(`${i}: '${u}' must be an array of ${s} numbers for type '${o.type}'`);
        }
        break;
      }
    }
  }
}
async function oi(e, t, n) {
  if (n) {
    const i = e.joinPath(t, n);
    if (!await e.exists(i))
      throw new Error(`Common GLSL file '${n}' not found in '${t}'.`);
    return await e.readText(i);
  }
  const r = e.joinPath(t, "common.glsl");
  return await e.exists(r) ? await e.readText(r) : null;
}
class si {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  register(t, n = "linear", r = "repeat", i) {
    const o = `${t}|${n}|${r}`, s = this.map.get(o);
    if (s)
      return s.name;
    const a = `tex${this.map.size}`;
    return this.map.set(o, { name: a, filename: i, source: t, filter: n, wrap: r }), a;
  }
  toArray() {
    return Array.from(this.map.values());
  }
}
function Js(e, t, n, r, i, o) {
  if ("buffer" in e) {
    const s = e.buffer;
    if (!jn(s))
      throw new Error(`Invalid buffer name '${s}' for ${n} in pass '${t}' at '${r}'.`);
    return { kind: "buffer", buffer: s, current: !!e.current };
  }
  if ("texture" in e)
    return { kind: "texture", name: (o == null ? void 0 : o.get(e.texture)) ?? i.register(e.texture, e.filter, e.wrap), cubemap: e.type === "cubemap" };
  if ("keyboard" in e)
    return { kind: "keyboard" };
  if ("audio" in e)
    return { kind: "audio" };
  if ("webcam" in e)
    return { kind: "webcam" };
  if ("video" in e)
    return { kind: "video", src: e.video };
  if ("script" in e)
    return { kind: "script", name: e.script };
  throw new Error(`Invalid channel object for ${n} in pass '${t}' at '${r}'.`);
}
function Gt(e, t, n, r, i, o) {
  if (!e)
    return { kind: "none" };
  const s = ti(e);
  return s ? Js(s, t, n, r, i, o) : { kind: "none" };
}
async function Qs(e, t, n) {
  let r = n == null ? void 0 : n.config;
  if (r === void 0) {
    const i = e.joinPath(t, "config.json");
    if (await e.exists(i)) {
      const o = await e.readText(i);
      try {
        r = JSON.parse(o);
      } catch (s) {
        throw new Error(`Invalid JSON in config.json at '${t}': ${(s == null ? void 0 : s.message) ?? String(s)}`);
      }
    }
  }
  return r ? (Ks(r, t), r.mode === "shadertoy" ? ta(e, t, r, n) : na(e, t, r, n)) : ea(e, t, n);
}
async function ea(e, t, n) {
  const r = e.joinPath(t, "image.glsl");
  if (!await e.exists(r))
    throw new Error(`Single-pass project at '${t}' requires 'image.glsl'.`);
  const i = await e.listGlslFiles(t);
  if (i.length > 0 && i.filter((c) => c !== "image.glsl").length > 0)
    throw new Error(`Project at '${t}' contains multiple GLSL files (${i.join(", ")}) but no 'config.json'. Add a config file to use multiple passes.`);
  if (await e.hasFiles(e.joinPath(t, "textures")))
    throw new Error(`Project at '${t}' uses textures (in 'textures/' folder) but has no 'config.json'. Add a config file to define texture bindings.`);
  const s = await e.readText(r);
  return dn({
    mode: "standard",
    root: t,
    commonSource: null,
    passes: {
      Image: { name: "Image", glslSource: s, channels: [{ kind: "none" }, { kind: "none" }, { kind: "none" }, { kind: "none" }] }
    },
    script: n == null ? void 0 : n.script
  });
}
async function ta(e, t, n, r) {
  const i = {
    Image: n.Image,
    BufferA: n.BufferA,
    BufferB: n.BufferB,
    BufferC: n.BufferC,
    BufferD: n.BufferD
  };
  i.Image || i.BufferA || i.BufferB || i.BufferC || i.BufferD || (i.Image = {});
  const s = await oi(e, t, n.common), a = new si(), u = /* @__PURE__ */ new Map();
  if (r != null && r.textureUrlResolver)
    for (const h of Rn) {
      const l = i[h];
      if (l)
        for (const d of ni) {
          const m = l[d];
          if (!m)
            continue;
          const v = ti(m);
          if (v && "texture" in v && !u.has(v.texture)) {
            const f = await r.textureUrlResolver(v.texture), y = v.texture.split("/").pop(), C = a.register(f, v.filter, v.wrap, y);
            u.set(v.texture, C);
          }
        }
    }
  const c = {};
  for (const h of Rn) {
    const l = i[h];
    if (!l)
      continue;
    const d = l.source ?? $s(h), m = e.joinPath(t, d);
    if (!await e.exists(m))
      throw new Error(`Source GLSL file for pass '${h}' not found at '${d}' in '${t}'.`);
    const v = await e.readText(m), f = [
      Gt(l.iChannel0, h, "iChannel0", t, a, u),
      Gt(l.iChannel1, h, "iChannel1", t, a, u),
      Gt(l.iChannel2, h, "iChannel2", t, a, u),
      Gt(l.iChannel3, h, "iChannel3", t, a, u)
    ];
    c[h] = { name: h, glslSource: v, channels: f };
  }
  if (!c.Image)
    throw new Error(`config.json at '${t}' must define an Image pass.`);
  return dn({
    mode: "shadertoy",
    root: t,
    title: n.title,
    author: n.author,
    description: n.description,
    layout: n.layout,
    theme: n.theme,
    controls: n.controls,
    startPaused: n.startPaused,
    pixelRatio: n.pixelRatio,
    commonSource: s,
    passes: c,
    textures: a.toArray(),
    script: r == null ? void 0 : r.script
  });
}
async function na(e, t, n, r) {
  n.uniforms && Zs(n.uniforms, t);
  const i = await oi(e, t, n.common), o = n.buffers ?? {};
  if (Object.keys(o).length > 0 || n.textures && Object.keys(n.textures).length > 0)
    return ia(e, t, n, i, r);
  const s = e.joinPath(t, "image.glsl");
  if (!await e.exists(s))
    throw new Error(`Standard mode project at '${t}' requires 'image.glsl'.`);
  const a = await e.readText(s), u = [{ kind: "none" }, { kind: "none" }, { kind: "none" }, { kind: "none" }];
  return dn({
    mode: "standard",
    root: t,
    title: n.title,
    author: n.author,
    description: n.description,
    layout: n.layout,
    theme: n.theme,
    controls: n.controls,
    startPaused: n.startPaused,
    pixelRatio: n.pixelRatio,
    commonSource: i,
    passes: {
      Image: { name: "Image", glslSource: a, channels: u }
    },
    uniforms: n.uniforms,
    script: r == null ? void 0 : r.script
  });
}
const ra = /* @__PURE__ */ new Set(["keyboard", "audio", "webcam"]);
async function ia(e, t, n, r, i) {
  const o = n.buffers ?? {}, s = Object.keys(o);
  if (s.length > 4)
    throw new Error(`Standard mode at '${t}' supports max 4 buffers, got ${s.length}: ${s.join(", ")}`);
  const a = /* @__PURE__ */ new Map();
  for (let v = 0; v < s.length; v++)
    a.set(s[v], zs[v]);
  const u = new si(), c = /* @__PURE__ */ new Map();
  for (const [v, f] of a)
    c.set(v, { kind: "buffer", buffer: f, current: !1 });
  for (const [v, f] of Object.entries(n.textures ?? {}))
    if (f === "keyboard")
      c.set(v, { kind: "keyboard" });
    else if (f === "audio")
      c.set(v, { kind: "audio" });
    else if (f === "webcam")
      c.set(v, { kind: "webcam" });
    else if (/\.\w+$/.test(f)) {
      let y;
      i != null && i.textureUrlResolver ? y = await i.textureUrlResolver(f) : y = f;
      const C = u.register(y);
      c.set(v, { kind: "texture", name: C, cubemap: !1 });
    } else ra.has(f) || c.set(v, { kind: "script", name: f });
  const h = [{ kind: "none" }, { kind: "none" }, { kind: "none" }, { kind: "none" }], l = e.joinPath(t, "image.glsl");
  if (!await e.exists(l))
    throw new Error(`Standard mode project at '${t}' requires 'image.glsl'.`);
  const m = {
    Image: {
      name: "Image",
      glslSource: await e.readText(l),
      channels: h,
      namedSamplers: new Map(c)
    }
  };
  for (const [v, f] of a) {
    const y = e.joinPath(t, `${v}.glsl`);
    if (!await e.exists(y))
      throw new Error(`Buffer '${v}' requires '${v}.glsl' in '${t}'.`);
    const C = await e.readText(y);
    m[f] = {
      name: f,
      glslSource: C,
      channels: h,
      namedSamplers: new Map(c)
    };
  }
  return dn({
    mode: "standard",
    root: t,
    title: n.title,
    author: n.author,
    description: n.description,
    layout: n.layout,
    theme: n.theme,
    controls: n.controls,
    startPaused: n.startPaused,
    pixelRatio: n.pixelRatio,
    commonSource: r,
    passes: m,
    textures: u.toArray(),
    uniforms: n.uniforms,
    script: i == null ? void 0 : i.script
  });
}
function ft(e, t) {
  if (t in e)
    return t;
  const n = t.toLowerCase();
  for (const r of Object.keys(e))
    if (r.toLowerCase() === n)
      return r;
  return null;
}
async function ai(e, t) {
  if (!t)
    return null;
  const n = `${e}/script.js`, r = ft(t, n);
  if (!r)
    return null;
  const i = await t[r](), o = {};
  return typeof i.setup == "function" && (o.setup = i.setup), typeof i.onFrame == "function" && (o.onFrame = i.onFrame), o.setup || o.onFrame ? o : null;
}
function ui(e, t) {
  return {
    async exists(n) {
      return ft(e, n) !== null || ft(t, n) !== null;
    },
    async readText(n) {
      const r = ft(e, n);
      if (!r)
        throw new Error(`File not found: ${n}`);
      return e[r]();
    },
    async resolveImageUrl(n) {
      const r = ft(t, n);
      if (!r)
        throw new Error(`Image not found: ${n}`);
      return t[r]();
    },
    async listGlslFiles() {
      return [];
    },
    async hasFiles() {
      return !1;
    },
    joinPath(...n) {
      return n.map((r, i) => i === 0 ? r : r.replace(/^\/+/, "")).join("/").replace(/\/+/g, "/");
    },
    baseName(n) {
      return n.split("/").pop() || n;
    }
  };
}
function ci(e) {
  return (e.split("/").pop() || e).split("-").map((n) => n.charAt(0).toUpperCase() + n.slice(1)).join(" ");
}
async function li(e, t, n, r, i) {
  const o = e.startsWith("./") ? e : `./${e}`, s = `${o}/config.json`;
  let a;
  if (s in n && (a = await n[s]()), a && qr(a))
    return qs(a, o), oa(o, a, t, r, i);
  const u = await ai(o, i), c = ui(t, r), l = await Qs(c, o, {
    config: a,
    script: u,
    textureUrlResolver: async (d) => {
      const m = `${o}/${d.replace(/^\.\//, "")}`;
      return c.resolveImageUrl(m);
    }
  });
  return a != null && a.title || (l.meta.title = ci(o)), l;
}
async function oa(e, t, n, r, i) {
  const o = ui(n, r), s = await ai(e, i);
  let a = null;
  const u = `${e}/common.glsl`;
  ft(n, u) && (a = await o.readText(u));
  const c = [], h = [
    { kind: "none" },
    { kind: "none" },
    { kind: "none" },
    { kind: "none" }
  ];
  for (const l of t.views) {
    const d = `${e}/${l}.glsl`, m = `${e}/${l}/image.glsl`;
    let v;
    if (ft(n, d))
      v = await o.readText(d);
    else if (ft(n, m))
      v = await o.readText(m);
    else
      throw new Error(`Multi-view: No shader found for view "${l}". Expected ${l}.glsl or ${l}/image.glsl`);
    const f = {
      name: "Image",
      glslSource: v,
      channels: h,
      namedSamplers: /* @__PURE__ */ new Map()
    };
    c.push({
      name: l,
      passes: { Image: f }
    });
  }
  return {
    mode: "standard",
    root: e,
    meta: {
      title: t.title ?? ci(e),
      author: t.author ?? null,
      description: t.description ?? null
    },
    theme: t.theme ?? "light",
    controls: t.controls ?? ri,
    startPaused: t.startPaused ?? !1,
    pixelRatio: t.pixelRatio ?? null,
    commonSource: a,
    uniforms: t.uniforms ?? {},
    textures: [],
    script: s,
    views: c,
    viewLayout: t.layout ?? "split"
  };
}
const vr = /* @__PURE__ */ Object.assign({ "./shaders/2dCombinedJS/common.glsl": () => Promise.resolve().then(() => da).then((e) => e.default), "./shaders/2dFlowJS/common.glsl": () => Promise.resolve().then(() => ma).then((e) => e.default), "./shaders/2dFlowJS/dotTrails.glsl": () => Promise.resolve().then(() => va).then((e) => e.default), "./shaders/2dFlowJS/gridTrace.glsl": () => Promise.resolve().then(() => Ea).then((e) => e.default), "./shaders/2dFlowJS/image.glsl": () => Promise.resolve().then(() => wa).then((e) => e.default), "./shaders/2dHalfplaneJS/common.glsl": () => Promise.resolve().then(() => ba).then((e) => e.default), "./shaders/2dHalfplaneJS/hpBackground.glsl": () => Promise.resolve().then(() => _a).then((e) => e.default), "./shaders/2dHalfplaneJS/hpTrails.glsl": () => Promise.resolve().then(() => Ta).then((e) => e.default), "./shaders/2dHalfplaneJS/image.glsl": () => Promise.resolve().then(() => Sa).then((e) => e.default), "./shaders/2dHalfplaneJS/pathBackground.glsl": () => Promise.resolve().then(() => Ra).then((e) => e.default) }), Dr = /* @__PURE__ */ Object.assign({ "./shaders/2dCombinedJS/config.json": () => Promise.resolve().then(() => Na).then((e) => e.default), "./shaders/2dFlowJS/config.json": () => Promise.resolve().then(() => La).then((e) => e.default), "./shaders/2dHalfplaneJS/config.json": () => Promise.resolve().then(() => Ua).then((e) => e.default) }), Er = /* @__PURE__ */ Object.assign({}), Qt = /* @__PURE__ */ Object.assign({ "./shaders/2dCombinedJS/script.js": () => Promise.resolve().then(() => Bn), "./shaders/2dFlowJS/script.js": () => Promise.resolve().then(() => Bn), "./shaders/2dHalfplaneJS/script.js": () => Promise.resolve().then(() => Bn) });
async function sa(e, t, n, r, i) {
  const o = `./shaders/${e}/config.json`;
  if (!(o in n)) return null;
  const s = await n[o]();
  if (!qr(s)) return null;
  const a = (v) => `./shaders/${v}/config.json` in n;
  if (!s.views.some(a)) return null;
  const u = await Promise.all(
    s.views.map((v) => li(`shaders/${v}`, t, n, r, i))
  );
  let c = null;
  const h = `./shaders/${e}/script.js`;
  if (h in i) {
    const v = await i[h](), f = {};
    typeof v.setup == "function" && (f.setup = v.setup), typeof v.onFrame == "function" && (f.onFrame = v.onFrame), (f.setup || f.onFrame) && (c = f);
  }
  const l = `./shaders/${e}/common.glsl`, d = l in t ? await t[l]() : null, m = Object.assign({}, ...u.map((v) => v.uniforms), s.uniforms ?? {});
  return {
    mode: "standard",
    root: `./shaders/${e}`,
    meta: {
      title: s.title ?? e,
      author: s.author ?? null,
      description: s.description ?? null
    },
    theme: s.theme ?? "light",
    controls: s.controls ?? !0,
    startPaused: s.startPaused ?? !1,
    pixelRatio: s.pixelRatio ?? null,
    commonSource: d,
    uniforms: m,
    textures: u.flatMap((v) => v.textures),
    script: c,
    views: s.views.map((v, f) => ({ name: v, passes: u[f].passes })),
    viewLayout: s.layout ?? "split"
  };
}
let _n = null;
async function aa() {
  return _n || (_n = await sa("2dCombinedJS", vr, Dr, Er, Qt) ?? await li("shaders/2dCombinedJS", vr, Dr, Er, Qt)), _n;
}
async function Xf(e, t = {}) {
  const n = await aa();
  let r = e;
  const i = { left: "0", top: "25%", width: "100%", height: "50%" };
  if (i) {
    const c = document.createElement("div");
    c.style.position = "absolute", c.style.left = i.left, c.style.top = i.top, c.style.width = i.width, c.style.height = i.height, e.appendChild(c), r = c;
  }
  const o = Us(r, { project: n, ...t }), s = "./shaders/2dCombinedJS/script.js", a = s in Qt ? await Qt[s]() : null, u = r.querySelector(".uniform-controls-list");
  if (u) {
    for (const [d, m] of Object.entries(n.uniforms ?? {})) {
      if (!Array.isArray(m.options)) continue;
      const v = document.createElement("div");
      v.className = "uniform-control uniform-control-select";
      const f = document.createElement("div");
      f.className = "uniform-control-label-row";
      const y = document.createElement("label");
      y.className = "uniform-control-label", y.textContent = m.label ?? d, f.appendChild(y), v.appendChild(f);
      const C = document.createElement("select");
      C.style.cssText = [
        "width:100%",
        "background:var(--bg-tertiary)",
        "color:var(--text-primary)",
        "border:1px solid var(--border-primary)",
        "border-radius:4px",
        "padding:4px 8px",
        "font-family:var(--font-mono)",
        "font-size:12px",
        "cursor:pointer",
        "outline:none"
      ].join(";"), m.options.forEach((E, p) => {
        const w = document.createElement("option");
        w.value = String(p), w.textContent = E, p === (m.value ?? 0) && (w.selected = !0), C.appendChild(w);
      }), C.addEventListener("change", () => o.setUniform(d, parseInt(C.value))), v.appendChild(C), u.appendChild(v);
    }
    const c = [{ id: "cfPrefix", label: "CF prefix", default: "" }, { id: "cfPeriod", label: "CF period", default: "1" }], h = {};
    for (const d of c) {
      h[d.id] = d.default ?? "";
      const m = document.createElement("div");
      m.className = "uniform-control";
      const v = document.createElement("div");
      v.className = "uniform-control-label-row";
      const f = document.createElement("label");
      f.className = "uniform-control-label", f.textContent = d.label, v.appendChild(f), m.appendChild(v);
      const y = document.createElement("input");
      y.type = "text", y.value = d.default ?? "", y.style.cssText = [
        "width:100%",
        "background:var(--bg-tertiary)",
        "color:var(--text-primary)",
        "border:1px solid var(--border-primary)",
        "border-radius:4px",
        "padding:4px 8px",
        "font-family:var(--font-mono)",
        "font-size:12px",
        "outline:none",
        "box-sizing:border-box"
      ].join(";"), y.addEventListener("input", () => {
        h[d.id] = y.value;
      }), m.appendChild(y), u.appendChild(m);
    }
    const l = [{ label: "Set lattice", action: "onSetLattice" }];
    for (const d of l) {
      const m = document.createElement("div");
      m.className = "uniform-control";
      const v = document.createElement("button");
      v.textContent = d.label, v.style.cssText = [
        "width:100%",
        "background:var(--bg-tertiary)",
        "color:var(--text-primary)",
        "border:1px solid var(--border-primary)",
        "border-radius:4px",
        "padding:6px 8px",
        "font-family:var(--font-mono)",
        "font-size:12px",
        "cursor:pointer"
      ].join(";"), v.addEventListener("click", () => {
        a && typeof a[d.action] == "function" && a[d.action]({ ...h }, o);
      }), m.appendChild(v), u.appendChild(m);
    }
  }
  return o;
}
class ua {
  constructor(t, n) {
    this.recompileHandler = null, this.tabs = [], this.activeTabIndex = 0, this.editorInstance = null, this.modifiedSources = /* @__PURE__ */ new Map(), this.keydownHandler = null, this.container = t, this.project = n, this.buildTabs(), this.tabBar = document.createElement("div"), this.tabBar.className = "editor-tab-bar", this.buildTabBar(), this.contentArea = document.createElement("div"), this.contentArea.className = "editor-content-area", this.copyButton = document.createElement("button"), this.copyButton.className = "editor-copy-button", this.copyButton.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2z" opacity="0.4"/>
        <path d="M2 5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2zm0 1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"/>
      </svg>
    `, this.copyButton.title = "Copy code to clipboard", this.copyButton.addEventListener("click", () => this.copyToClipboard()), this.recompileButton = document.createElement("button"), this.recompileButton.className = "editor-recompile-button", this.recompileButton.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4 3v10l8-5-8-5z"/>
      </svg>
      Recompile
    `, this.recompileButton.title = "Recompile shader (Ctrl+Enter)", this.recompileButton.addEventListener("click", () => this.recompile()), this.errorDisplay = document.createElement("div"), this.errorDisplay.className = "editor-error-display", this.errorDisplay.style.display = "none";
    const r = document.createElement("div");
    r.className = "editor-toolbar", r.appendChild(this.tabBar), r.appendChild(this.copyButton), r.appendChild(this.recompileButton), this.container.appendChild(r), this.container.appendChild(this.contentArea), this.container.appendChild(this.errorDisplay), this.setupKeyboardShortcut(), this.showTab(0);
  }
  setRecompileHandler(t) {
    this.recompileHandler = t;
  }
  dispose() {
    this.keydownHandler && (this.container.removeEventListener("keydown", this.keydownHandler), this.keydownHandler = null), this.editorInstance && (this.editorInstance.destroy(), this.editorInstance = null), this.container.innerHTML = "";
  }
  buildTabs() {
    this.tabs = [], this.project.commonSource && this.tabs.push({
      kind: "code",
      name: "common.glsl",
      passName: "common",
      source: this.project.commonSource
    });
    const t = [
      "BufferA",
      "BufferB",
      "BufferC",
      "BufferD"
    ];
    for (const r of t) {
      const i = this.project.passes[r];
      i && this.tabs.push({
        kind: "code",
        name: `${r.toLowerCase()}.glsl`,
        passName: r,
        source: i.glslSource
      });
    }
    const n = this.project.passes.Image;
    this.tabs.push({
      kind: "code",
      name: "image.glsl",
      passName: "Image",
      source: n.glslSource
    });
    for (const r of this.project.textures)
      this.tabs.push({
        kind: "image",
        name: r.filename || r.name,
        url: r.source
      });
  }
  buildTabBar() {
    this.tabBar.innerHTML = "", this.tabs.forEach((t, n) => {
      const r = document.createElement("button");
      r.className = "editor-tab-button", t.kind === "image" && r.classList.add("image-tab"), r.textContent = t.name, n === this.activeTabIndex && r.classList.add("active"), r.addEventListener("click", () => this.showTab(n)), this.tabBar.appendChild(r);
    });
  }
  async showTab(t) {
    this.saveCurrentEditorContent(), this.activeTabIndex = t;
    const n = this.tabs[t];
    if (this.tabBar.querySelectorAll(".editor-tab-button").forEach((r, i) => {
      r.classList.toggle("active", i === t);
    }), this.editorInstance && (this.editorInstance.destroy(), this.editorInstance = null), this.contentArea.innerHTML = "", n.kind === "code") {
      this.copyButton.style.display = "", this.recompileButton.style.display = "";
      const r = this.modifiedSources.get(n.passName) ?? n.source, i = document.createElement("div");
      i.className = "editor-prism-container", this.contentArea.appendChild(i);
      try {
        const { createEditor: o } = await Promise.resolve().then(() => hi);
        this.editorInstance = o(i, r, (s) => {
          this.modifiedSources.set(n.passName, s);
        });
      } catch (o) {
        console.error("Failed to load editor:", o);
        const s = document.createElement("textarea");
        s.className = "editor-fallback-textarea", s.value = r, s.addEventListener("input", () => {
          this.modifiedSources.set(n.passName, s.value);
        }), i.appendChild(s);
      }
    } else {
      this.copyButton.style.display = "none", this.recompileButton.style.display = "none";
      const r = document.createElement("div");
      r.className = "editor-image-viewer";
      const i = document.createElement("img");
      i.src = n.url, i.alt = n.name, r.appendChild(i), this.contentArea.appendChild(r);
    }
  }
  saveCurrentEditorContent() {
    if (this.editorInstance) {
      const t = this.tabs[this.activeTabIndex];
      if (t.kind === "code") {
        const n = this.editorInstance.getSource();
        this.modifiedSources.set(t.passName, n);
      }
    }
  }
  recompile() {
    if (!this.recompileHandler) {
      console.warn("No recompile handler set");
      return;
    }
    this.saveCurrentEditorContent();
    const t = this.tabs[this.activeTabIndex];
    if (t.kind !== "code")
      return;
    const n = this.modifiedSources.get(t.passName) ?? t.source, r = this.recompileHandler(t.passName, n);
    r.success ? (this.hideError(), t.source = n) : this.showError(r.error || "Compilation failed");
  }
  showError(t) {
    this.errorDisplay.textContent = t, this.errorDisplay.style.display = "block";
  }
  hideError() {
    this.errorDisplay.style.display = "none";
  }
  async copyToClipboard() {
    const t = this.tabs[this.activeTabIndex];
    if (t.kind !== "code")
      return;
    const n = this.editorInstance ? this.editorInstance.getSource() : this.modifiedSources.get(t.passName) ?? t.source;
    try {
      await navigator.clipboard.writeText(n);
      const r = this.copyButton.innerHTML;
      this.copyButton.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
        </svg>
      `, this.copyButton.classList.add("copied"), setTimeout(() => {
        this.copyButton.innerHTML = r, this.copyButton.classList.remove("copied");
      }, 1500);
    } catch (r) {
      console.error("Failed to copy:", r);
    }
  }
  setupKeyboardShortcut() {
    this.keydownHandler = (t) => {
      (t.ctrlKey || t.metaKey) && t.key === "Enter" && (t.preventDefault(), this.recompile());
    }, this.container.addEventListener("keydown", this.keydownHandler);
  }
}
const ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EditorPanel: ua
}, Symbol.toStringTag, { value: "Module" }));
var yr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, fi = { exports: {} };
(function(e) {
  var t = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var n = function(r) {
    var i = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, o = 0, s = {}, a = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: r.Prism && r.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: r.Prism && r.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function E(p) {
          return p instanceof u ? new u(p.type, E(p.content), p.alias) : Array.isArray(p) ? p.map(E) : p.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(E) {
          return Object.prototype.toString.call(E).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(E) {
          return E.__id || Object.defineProperty(E, "__id", { value: ++o }), E.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function E(p, w) {
          w = w || {};
          var g, D;
          switch (a.util.type(p)) {
            case "Object":
              if (D = a.util.objId(p), w[D])
                return w[D];
              g = /** @type {Record<string, any>} */
              {}, w[D] = g;
              for (var A in p)
                p.hasOwnProperty(A) && (g[A] = E(p[A], w));
              return (
                /** @type {any} */
                g
              );
            case "Array":
              return D = a.util.objId(p), w[D] ? w[D] : (g = [], w[D] = g, /** @type {Array} */
              /** @type {any} */
              p.forEach(function(_, b) {
                g[b] = E(_, w);
              }), /** @type {any} */
              g);
            default:
              return p;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(E) {
          for (; E; ) {
            var p = i.exec(E.className);
            if (p)
              return p[1].toLowerCase();
            E = E.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(E, p) {
          E.className = E.className.replace(RegExp(i, "gi"), ""), E.classList.add("language-" + p);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if (document.currentScript && document.currentScript.tagName === "SCRIPT")
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (g) {
            var E = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(g.stack) || [])[1];
            if (E) {
              var p = document.getElementsByTagName("script");
              for (var w in p)
                if (p[w].src == E)
                  return p[w];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(E, p, w) {
          for (var g = "no-" + p; E; ) {
            var D = E.classList;
            if (D.contains(p))
              return !0;
            if (D.contains(g))
              return !1;
            E = E.parentElement;
          }
          return !!w;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: s,
        plaintext: s,
        text: s,
        txt: s,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(E, p) {
          var w = a.util.clone(a.languages[E]);
          for (var g in p)
            w[g] = p[g];
          return w;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(E, p, w, g) {
          g = g || /** @type {any} */
          a.languages;
          var D = g[E], A = {};
          for (var _ in D)
            if (D.hasOwnProperty(_)) {
              if (_ == p)
                for (var b in w)
                  w.hasOwnProperty(b) && (A[b] = w[b]);
              w.hasOwnProperty(_) || (A[_] = D[_]);
            }
          var T = g[E];
          return g[E] = A, a.languages.DFS(a.languages, function(S, M) {
            M === T && S != E && (this[S] = A);
          }), A;
        },
        // Traverse a language definition with Depth First Search
        DFS: function E(p, w, g, D) {
          D = D || {};
          var A = a.util.objId;
          for (var _ in p)
            if (p.hasOwnProperty(_)) {
              w.call(p, _, p[_], g || _);
              var b = p[_], T = a.util.type(b);
              T === "Object" && !D[A(b)] ? (D[A(b)] = !0, E(b, w, null, D)) : T === "Array" && !D[A(b)] && (D[A(b)] = !0, E(b, w, _, D));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(E, p) {
        a.highlightAllUnder(document, E, p);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(E, p, w) {
        var g = {
          callback: w,
          container: E,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        a.hooks.run("before-highlightall", g), g.elements = Array.prototype.slice.apply(g.container.querySelectorAll(g.selector)), a.hooks.run("before-all-elements-highlight", g);
        for (var D = 0, A; A = g.elements[D++]; )
          a.highlightElement(A, p === !0, g.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(E, p, w) {
        var g = a.util.getLanguage(E), D = a.languages[g];
        a.util.setLanguage(E, g);
        var A = E.parentElement;
        A && A.nodeName.toLowerCase() === "pre" && a.util.setLanguage(A, g);
        var _ = E.textContent, b = {
          element: E,
          language: g,
          grammar: D,
          code: _
        };
        function T(M) {
          b.highlightedCode = M, a.hooks.run("before-insert", b), b.element.innerHTML = b.highlightedCode, a.hooks.run("after-highlight", b), a.hooks.run("complete", b), w && w.call(b.element);
        }
        if (a.hooks.run("before-sanity-check", b), A = b.element.parentElement, A && A.nodeName.toLowerCase() === "pre" && !A.hasAttribute("tabindex") && A.setAttribute("tabindex", "0"), !b.code) {
          a.hooks.run("complete", b), w && w.call(b.element);
          return;
        }
        if (a.hooks.run("before-highlight", b), !b.grammar) {
          T(a.util.encode(b.code));
          return;
        }
        if (p && r.Worker) {
          var S = new Worker(a.filename);
          S.onmessage = function(M) {
            T(M.data);
          }, S.postMessage(JSON.stringify({
            language: b.language,
            code: b.code,
            immediateClose: !0
          }));
        } else
          T(a.highlight(b.code, b.grammar, b.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(E, p, w) {
        var g = {
          code: E,
          grammar: p,
          language: w
        };
        if (a.hooks.run("before-tokenize", g), !g.grammar)
          throw new Error('The language "' + g.language + '" has no grammar.');
        return g.tokens = a.tokenize(g.code, g.grammar), a.hooks.run("after-tokenize", g), u.stringify(a.util.encode(g.tokens), g.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(E, p) {
        var w = p.rest;
        if (w) {
          for (var g in w)
            p[g] = w[g];
          delete p.rest;
        }
        var D = new l();
        return d(D, D.head, E), h(E, D, p, D.head, 0), v(D);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(E, p) {
          var w = a.hooks.all;
          w[E] = w[E] || [], w[E].push(p);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(E, p) {
          var w = a.hooks.all[E];
          if (!(!w || !w.length))
            for (var g = 0, D; D = w[g++]; )
              D(p);
        }
      },
      Token: u
    };
    r.Prism = a;
    function u(E, p, w, g) {
      this.type = E, this.content = p, this.alias = w, this.length = (g || "").length | 0;
    }
    u.stringify = function E(p, w) {
      if (typeof p == "string")
        return p;
      if (Array.isArray(p)) {
        var g = "";
        return p.forEach(function(T) {
          g += E(T, w);
        }), g;
      }
      var D = {
        type: p.type,
        content: E(p.content, w),
        tag: "span",
        classes: ["token", p.type],
        attributes: {},
        language: w
      }, A = p.alias;
      A && (Array.isArray(A) ? Array.prototype.push.apply(D.classes, A) : D.classes.push(A)), a.hooks.run("wrap", D);
      var _ = "";
      for (var b in D.attributes)
        _ += " " + b + '="' + (D.attributes[b] || "").replace(/"/g, "&quot;") + '"';
      return "<" + D.tag + ' class="' + D.classes.join(" ") + '"' + _ + ">" + D.content + "</" + D.tag + ">";
    };
    function c(E, p, w, g) {
      E.lastIndex = p;
      var D = E.exec(w);
      if (D && g && D[1]) {
        var A = D[1].length;
        D.index += A, D[0] = D[0].slice(A);
      }
      return D;
    }
    function h(E, p, w, g, D, A) {
      for (var _ in w)
        if (!(!w.hasOwnProperty(_) || !w[_])) {
          var b = w[_];
          b = Array.isArray(b) ? b : [b];
          for (var T = 0; T < b.length; ++T) {
            if (A && A.cause == _ + "," + T)
              return;
            var S = b[T], M = S.inside, j = !!S.lookbehind, $ = !!S.greedy, X = S.alias;
            if ($ && !S.pattern.global) {
              var I = S.pattern.toString().match(/[imsuy]*$/)[0];
              S.pattern = RegExp(S.pattern.source, I + "g");
            }
            for (var q = S.pattern || S, H = g.next, Y = D; H !== p.tail && !(A && Y >= A.reach); Y += H.value.length, H = H.next) {
              var Z = H.value;
              if (p.length > E.length)
                return;
              if (!(Z instanceof u)) {
                var ne = 1, te;
                if ($) {
                  if (te = c(q, Y, E, j), !te || te.index >= E.length)
                    break;
                  var ge = te.index, oe = te.index + te[0].length, de = Y;
                  for (de += H.value.length; ge >= de; )
                    H = H.next, de += H.value.length;
                  if (de -= H.value.length, Y = de, H.value instanceof u)
                    continue;
                  for (var me = H; me !== p.tail && (de < oe || typeof me.value == "string"); me = me.next)
                    ne++, de += me.value.length;
                  ne--, Z = E.slice(Y, de), te.index -= Y;
                } else if (te = c(q, 0, Z, j), !te)
                  continue;
                var ge = te.index, le = te[0], we = Z.slice(0, ge), fe = Z.slice(ge + le.length), se = Y + Z.length;
                A && se > A.reach && (A.reach = se);
                var Re = H.prev;
                we && (Re = d(p, Re, we), Y += we.length), m(p, Re, ne);
                var Ce = new u(_, M ? a.tokenize(le, M) : le, X, le);
                if (H = d(p, Re, Ce), fe && d(p, H, fe), ne > 1) {
                  var ae = {
                    cause: _ + "," + T,
                    reach: se
                  };
                  h(E, p, w, H.prev, Y, ae), A && ae.reach > A.reach && (A.reach = ae.reach);
                }
              }
            }
          }
        }
    }
    function l() {
      var E = { value: null, prev: null, next: null }, p = { value: null, prev: E, next: null };
      E.next = p, this.head = E, this.tail = p, this.length = 0;
    }
    function d(E, p, w) {
      var g = p.next, D = { value: w, prev: p, next: g };
      return p.next = D, g.prev = D, E.length++, D;
    }
    function m(E, p, w) {
      for (var g = p.next, D = 0; D < w && g !== E.tail; D++)
        g = g.next;
      p.next = g, g.prev = p, E.length -= D;
    }
    function v(E) {
      for (var p = [], w = E.head.next; w !== E.tail; )
        p.push(w.value), w = w.next;
      return p;
    }
    if (!r.document)
      return r.addEventListener && (a.disableWorkerMessageHandler || r.addEventListener("message", function(E) {
        var p = JSON.parse(E.data), w = p.language, g = p.code, D = p.immediateClose;
        r.postMessage(a.highlight(g, a.languages[w], w)), D && r.close();
      }, !1)), a;
    var f = a.util.currentScript();
    f && (a.filename = f.src, f.hasAttribute("data-manual") && (a.manual = !0));
    function y() {
      a.manual || a.highlightAll();
    }
    if (!a.manual) {
      var C = document.readyState;
      C === "loading" || C === "interactive" && f && f.defer ? document.addEventListener("DOMContentLoaded", y) : window.requestAnimationFrame ? window.requestAnimationFrame(y) : window.setTimeout(y, 16);
    }
    return a;
  }(t);
  e.exports && (e.exports = n), typeof yr < "u" && (yr.Prism = n), n.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
          // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, n.languages.markup.tag.inside["attr-value"].inside.entity = n.languages.markup.entity, n.languages.markup.doctype.inside["internal-subset"].inside = n.languages.markup, n.hooks.add("wrap", function(r) {
    r.type === "entity" && (r.attributes.title = r.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(n.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function(i, o) {
      var s = {};
      s["language-" + o] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: n.languages[o]
      }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var a = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: s
        }
      };
      a["language-" + o] = {
        pattern: /[\s\S]+/,
        inside: n.languages[o]
      };
      var u = {};
      u[i] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return i;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: a
      }, n.languages.insertBefore("markup", "cdata", u);
    }
  }), Object.defineProperty(n.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(r, i) {
      n.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + r + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [i, "language-" + i],
                inside: n.languages[i]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), n.languages.html = n.languages.markup, n.languages.mathml = n.languages.markup, n.languages.svg = n.languages.markup, n.languages.xml = n.languages.extend("markup", {}), n.languages.ssml = n.languages.xml, n.languages.atom = n.languages.xml, n.languages.rss = n.languages.xml, function(r) {
    var i = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    r.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + i.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
          // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + i.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + i.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + i.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: i,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, r.languages.css.atrule.inside.rest = r.languages.css;
    var o = r.languages.markup;
    o && (o.tag.addInlined("style", "css"), o.tag.addAttribute("style", "css"));
  }(n), n.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }, n.languages.javascript = n.languages.extend("clike", {
    "class-name": [
      n.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), n.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, n.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: n.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: n.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: n.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: n.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: n.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), n.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: n.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), n.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), n.languages.markup && (n.languages.markup.tag.addInlined("script", "javascript"), n.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), n.languages.js = n.languages.javascript, function() {
    if (typeof n > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var r = "Loading…", i = function(f, y) {
      return "✖ Error " + f + " while fetching file: " + y;
    }, o = "✖ Error: File does not exist or is empty", s = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, a = "data-src-status", u = "loading", c = "loaded", h = "failed", l = "pre[data-src]:not([" + a + '="' + c + '"]):not([' + a + '="' + u + '"])';
    function d(f, y, C) {
      var E = new XMLHttpRequest();
      E.open("GET", f, !0), E.onreadystatechange = function() {
        E.readyState == 4 && (E.status < 400 && E.responseText ? y(E.responseText) : E.status >= 400 ? C(i(E.status, E.statusText)) : C(o));
      }, E.send(null);
    }
    function m(f) {
      var y = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(f || "");
      if (y) {
        var C = Number(y[1]), E = y[2], p = y[3];
        return E ? p ? [C, Number(p)] : [C, void 0] : [C, C];
      }
    }
    n.hooks.add("before-highlightall", function(f) {
      f.selector += ", " + l;
    }), n.hooks.add("before-sanity-check", function(f) {
      var y = (
        /** @type {HTMLPreElement} */
        f.element
      );
      if (y.matches(l)) {
        f.code = "", y.setAttribute(a, u);
        var C = y.appendChild(document.createElement("CODE"));
        C.textContent = r;
        var E = y.getAttribute("data-src"), p = f.language;
        if (p === "none") {
          var w = (/\.(\w+)$/.exec(E) || [, "none"])[1];
          p = s[w] || w;
        }
        n.util.setLanguage(C, p), n.util.setLanguage(y, p);
        var g = n.plugins.autoloader;
        g && g.loadLanguages(p), d(
          E,
          function(D) {
            y.setAttribute(a, c);
            var A = m(y.getAttribute("data-range"));
            if (A) {
              var _ = D.split(/\r\n?|\n/g), b = A[0], T = A[1] == null ? _.length : A[1];
              b < 0 && (b += _.length), b = Math.max(0, Math.min(b - 1, _.length)), T < 0 && (T += _.length), T = Math.max(0, Math.min(T, _.length)), D = _.slice(b, T).join(`
`), y.hasAttribute("data-start") || y.setAttribute("data-start", String(b + 1));
            }
            C.textContent = D, n.highlightElement(C);
          },
          function(D) {
            y.setAttribute(a, h), C.textContent = D;
          }
        );
      }
    }), n.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function(y) {
        for (var C = (y || document).querySelectorAll(l), E = 0, p; p = C[E++]; )
          n.highlightElement(p);
      }
    };
    var v = !1;
    n.fileHighlight = function() {
      v || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), v = !0), n.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(fi);
var la = fi.exports;
Prism.languages.c = Prism.languages.extend("clike", {
  comment: {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  string: {
    // https://en.cppreference.com/w/c/language/string_literal
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0
  },
  keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
Prism.languages.insertBefore("c", "string", {
  char: {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: !0
  }
});
Prism.languages.insertBefore("c", "string", {
  macro: {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
    inside: {
      string: [
        {
          // highlight the path of the include statement as a string
          pattern: /^(#\s*include\s*)<[^>]+>/,
          lookbehind: !0
        },
        Prism.languages.c.string
      ],
      char: Prism.languages.c.char,
      comment: Prism.languages.c.comment,
      "macro-name": [
        {
          pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
          lookbehind: !0
        },
        {
          pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
          lookbehind: !0,
          alias: "function"
        }
      ],
      // highlight macro directives as keywords
      directive: {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: !0,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      punctuation: /##|\\(?=[\r\n])/,
      expression: {
        pattern: /\S[\s\S]*/,
        inside: Prism.languages.c
      }
    }
  }
});
Prism.languages.insertBefore("c", "function", {
  // highlight predefined macros as constants
  constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete Prism.languages.c.boolean;
(function(e) {
  var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, n = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return t.source;
  });
  e.languages.cpp = e.languages.extend("c", {
    "class-name": [
      {
        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
          return t.source;
        })),
        lookbehind: !0
      },
      // This is intended to capture the class name of method implementations like:
      //   void foo::bar() const {}
      // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
      // it starts with an uppercase letter. This approximation should give decent results.
      /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
      // This will capture the class name before destructors like:
      //   Foo::~Foo() {}
      /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
      // This also intends to capture the class name of method implementations but here the class has template
      // parameters, so it can't be a namespace (until C++ adds generic namespaces).
      /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
    ],
    keyword: t,
    number: {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: !0
    },
    operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    boolean: /\b(?:false|true)\b/
  }), e.languages.insertBefore("cpp", "string", {
    module: {
      // https://en.cppreference.com/w/cpp/language/modules
      pattern: RegExp(
        /(\b(?:import|module)\s+)/.source + "(?:" + // header-name
        /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + // module name or partition or both
        /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
          return n;
        }) + ")"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        string: /^[<"][\s\S]+/,
        operator: /:/,
        punctuation: /\./
      }
    },
    "raw-string": {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: "string",
      greedy: !0
    }
  }), e.languages.insertBefore("cpp", "keyword", {
    "generic-function": {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        function: /^\w+/,
        generic: {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: e.languages.cpp
        }
      }
    }
  }), e.languages.insertBefore("cpp", "operator", {
    "double-colon": {
      pattern: /::/,
      alias: "punctuation"
    }
  }), e.languages.insertBefore("cpp", "class-name", {
    // the base clause is an optional list of parent classes
    // https://en.cppreference.com/w/cpp/language/class
    "base-clause": {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: !0,
      greedy: !0,
      inside: e.languages.extend("cpp", {})
    }
  }), e.languages.insertBefore("inside", "double-colon", {
    // All untokenized words that are not namespaces should be class names
    "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
  }, e.languages.cpp["base-clause"]);
})(Prism);
function fa(e, t, n) {
  const r = document.createElement("div");
  r.className = "prism-editor-wrapper";
  const i = document.createElement("div");
  i.className = "prism-editor-line-numbers";
  const o = document.createElement("div");
  o.className = "prism-editor-area";
  const s = document.createElement("textarea");
  s.className = "prism-editor-textarea", s.value = t, s.spellcheck = !1, s.autocapitalize = "off", s.autocomplete = "off";
  const a = document.createElement("div");
  a.className = "prism-editor-highlight";
  const u = document.createElement("code");
  u.className = "language-cpp", a.appendChild(u), o.appendChild(s), o.appendChild(a), r.appendChild(i), r.appendChild(o), e.appendChild(r);
  function c() {
    const d = s.value;
    u.textContent = d + `
`, la.highlightElement(u);
    const m = d.split(`
`);
    i.innerHTML = m.map((v, f) => `<span>${f + 1}</span>`).join(""), n && n(d);
  }
  function h() {
    a.scrollTop = s.scrollTop, a.scrollLeft = s.scrollLeft, i.scrollTop = s.scrollTop;
  }
  function l(d) {
    if (d.key === "Tab") {
      d.preventDefault();
      const m = s.selectionStart, v = s.selectionEnd, f = s.value;
      s.value = f.substring(0, m) + "  " + f.substring(v), s.selectionStart = s.selectionEnd = m + 2, c();
    }
  }
  return s.addEventListener("input", c), s.addEventListener("scroll", h), s.addEventListener("keydown", l), c(), {
    getSource: () => s.value,
    setSource: (d) => {
      s.value = d, c();
    },
    destroy: () => {
      s.removeEventListener("input", c), s.removeEventListener("scroll", h), s.removeEventListener("keydown", l), r.parentNode && r.parentNode.removeChild(r);
    }
  };
}
const hi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createEditor: fa
}, Symbol.toStringTag, { value: "Module" })), ha = `vec4 drPt(in vec4 pC, in vec2 p, in vec4 pt, in float r, in vec4 c, in float exp)
{
    vec4 oC = pC;
    float l = length(p - pt.xy);
    if (l < r) { oC = mix(pC, c, pow((r-l)/r, exp)); }
    return oC;
}

vec4 drGrid(in vec4 pC, in vec2 p, in mat2 m, in float r, in vec4 c, in float exp)
{
    vec4 oC = pC;
    mat2 im = inverse(m);
    float l = length(p - m * round(im * p));
    if (l < r) { oC = mix(pC, c, pow((r-l)/r, exp) * c.a); }
    return oC;
}

vec4 blur(sampler2D image, vec2 uv, vec2 resolution) {
    vec4 color = vec4(0.0);
    vec2 off1 = vec2(1.3333333333333333, 0) / resolution;
    vec2 off2 = vec2(0, 1.3333333333333333) / resolution;
    color += texture(image, uv) * 0.641984;
    color += texture(image, uv + off1) * 0.0796275;
    color += texture(image, uv - off1) * 0.0796275;
    color += texture(image, uv + off2) * 0.0796275;
    color += texture(image, uv - off2) * 0.0796275;
    color += texture(image, uv + off1 + off2) * 0.00987648;
    color += texture(image, uv - off1 + off2) * 0.00987648;
    color += texture(image, uv + off1 - off2) * 0.00987648;
    color += texture(image, uv - off1 - off2) * 0.00987648;
    return color;
}

vec2 cDiv(vec2 a, vec2 b)
{
    return vec2(a.x*b.x + a.y*b.y, a.y*b.x - a.x*b.y) / dot(b, b);
}

vec4 hpPt(in vec2 b1, in vec2 b2)
{
    vec4 pt;
    if (length(b1) > length(b2)) {
        pt = vec4(cDiv(b1, b2), 0, 0);
    } else {
        pt = vec4(cDiv(b2, b1), 0, 0);
    }
    if (pt.y < 0.) { pt = -pt; }
    return pt;
}

bool uCellTest(vec2 p)
{
    return length(p)>=1. && p.x>=-.5 && p.x < .5;
}

bool seriesCellTest(vec2 p)
{
    return length(p-vec2(0.5,0.))>=.5 && p.x>=0. && p.x < 1.;
}

vec2 coords(in vec2 fragCoord, in vec3 res, in float sc, in vec2 offset)
{
    return sc * (fragCoord - offset) / res.y;
}

vec2 iCoords(in vec2 p, in vec3 res, in float sc, in vec2 offset)
{
    return res.y * p / sc + offset;
}


bool showTrails = false;
float trailFalloff = 1.;
bool showDots = true;
bool showBasis = false;
bool wholePlane = true;
float traceLevel = 0.3;
float backFadeHp = .99995;
float backFade = .999;
float lineThick = 1./15.;

vec4 dotCol   = vec4(.8, .05, .04, 1.);
vec4 backCol  = vec4(1., 1., 1., 0);
vec4 traceCol = vec4(0., 0., 0., 1.);
vec4 basisCol = vec4(.651, .669, .95, 1.);
vec4 edgeCol  = vec4(.651, .669, .95, 1.);

`, da = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ha
}, Symbol.toStringTag, { value: "Module" })), pa = `vec4 drPt(in vec4 pC, in vec2 p, in vec4 pt, in float r, in vec4 c, in float exp)
{
    vec4 oC = pC;
    float l = length(p - pt.xy);
    if (l < r) { oC = mix(pC, c, pow((r-l)/r, exp)); }
    return oC;
}

vec4 drGrid(in vec4 pC, in vec2 p, in mat2 m, in float r, in vec4 c, in float exp)
{
    vec4 oC = pC;
    mat2 im = inverse(m);
    float l = length(p - m * round(im * p));
    if (l < r) { oC = mix(pC, c, pow((r-l)/r, exp) * c.a); }
    return oC;
}

vec4 blur(sampler2D image, vec2 uv, vec2 resolution) {
    vec4 color = vec4(0.0);
    vec2 off1 = vec2(1.3333333333333333, 0) / resolution;
    vec2 off2 = vec2(0, 1.3333333333333333) / resolution;
    color += texture(image, uv) * 0.641984;
    color += texture(image, uv + off1) * 0.0796275;
    color += texture(image, uv - off1) * 0.0796275;
    color += texture(image, uv + off2) * 0.0796275;
    color += texture(image, uv - off2) * 0.0796275;
    color += texture(image, uv + off1 + off2) * 0.00987648;
    color += texture(image, uv - off1 + off2) * 0.00987648;
    color += texture(image, uv + off1 - off2) * 0.00987648;
    color += texture(image, uv - off1 - off2) * 0.00987648;
    return color;
}

vec2 coords(in vec2 fragCoord, in vec3 res, in float sc, in vec2 offset)
{
    return sc * (fragCoord - offset) / res.y;
}

vec2 iCoords(in vec2 p, in vec3 res, in float sc, in vec2 offset)
{
    return res.y * p / sc + offset;
}


bool showTrails = false;
float trailFalloff = 1.; // Length of fading trails, 1 gives no tails.
bool showDots = true;
bool showBasis = false;
bool secondLattice = false;
float traceLevel = 0.3;
float backFade = .999;
bool chBasis = true;

vec4 dotCol = vec4(.8,.05,.04,1.);
vec4 dotCol2 = vec4(.05,.04,.55,1.);
vec4 backCol = vec4(1.,1.,1.,0);
vec4 traceCol = vec4(0.,0.,0.,1.);
vec4 basisCol = vec4(.651,.669,.95,1.);

float sc = 14.;
`, ma = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pa
}, Symbol.toStringTag, { value: "Module" })), ga = `// Buffer for trailing dots

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{    
    vec2 p = coords(fragCoord, iResolution, uScale, iResolution.xy * 0.5);
    
	vec2 uv = fragCoord / iResolution.xy;
    
    vec4 col = vec4(blur(dotTrails,uv,5.*iResolution.xy));
    if(showTrails) {
    	col = mix(col,vec4(backCol.xyz,0),iResolution.y/640.*trailFalloff/length(backCol-col));
    } else {
        col = vec4(backCol.xyz,0);
    }
    
    mat2 pLattice = mat2(uLattice);

    if(showDots) 
    { 
        col = drGrid(col, p, pLattice, 0.2, dotCol, 0.15); 
    }
    
    if(showBasis)
    {    
    	col = drPt(col, p, uLattice, .4, basisCol, .75);
    	col = drPt(col, p, vec4(uLattice.zw,0,0), .4, basisCol, .75);
    }

    fragColor = col;
}`, va = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ga
}, Symbol.toStringTag, { value: "Module" })), Da = `// Buffer for Background and complete path record

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{   
    vec2 p = coords(fragCoord, iResolution, uScale, iResolution.xy * 0.5);
	vec2 uv = fragCoord / iResolution.xy;

    vec4 col = mix(backCol,vec4(texture(gridTrace,uv).xyz,1),backFade);

    col = drGrid(col, p, mat2(uLattice), 0.075, mix(col,traceCol,traceLevel), 2.);
    
    if(iFrame == 0 || uv.x > 1. || uv.y <0. || uv.y > 1. || uv.y < 0. || iMouse.z > 0.) 
    { col = backCol; }
    
    fragColor = col;
}`, Ea = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Da
}, Symbol.toStringTag, { value: "Module" })), ya = `void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	vec2 uv = fragCoord.xy / iResolution.xy;
    
    vec4 col = vec4(texture(gridTrace,uv).xyz,1);
    
    vec4 traced = vec4(texture(dotTrails,uv));
    
    col = vec4(mix(col, traced, traced.w).xyz,1.);

    // Output to screen
    fragColor = col;
}
`, wa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ya
}, Symbol.toStringTag, { value: "Module" })), Ca = `vec4 drPt(in vec4 pC, in vec2 p, in vec4 pt, in float r, in vec4 c, in float exp)
{
    vec4 oC = pC;
    float l = length(p - pt.xy);
    if (l < r) { oC = mix(pC, c, pow((r-l)/r, exp)); }
    return oC;
}

vec4 drGrid(in vec4 pC, in vec2 p, in mat2 m, in float r, in vec4 c, in float exp)
{
    vec4 oC = pC;
    mat2 im = inverse(m);
    float l = length(p - m * round(im * p));
    if (l < r) { oC = mix(pC, c, pow((r-l)/r, exp) * c.a); }
    return oC;
}

vec4 blur(sampler2D image, vec2 uv, vec2 resolution) {
    vec4 color = vec4(0.0);
    vec2 off1 = vec2(1.3333333333333333, 0) / resolution;
    vec2 off2 = vec2(0, 1.3333333333333333) / resolution;
    color += texture(image, uv) * 0.641984;
    color += texture(image, uv + off1) * 0.0796275;
    color += texture(image, uv - off1) * 0.0796275;
    color += texture(image, uv + off2) * 0.0796275;
    color += texture(image, uv - off2) * 0.0796275;
    color += texture(image, uv + off1 + off2) * 0.00987648;
    color += texture(image, uv - off1 + off2) * 0.00987648;
    color += texture(image, uv + off1 - off2) * 0.00987648;
    color += texture(image, uv - off1 - off2) * 0.00987648;
    return color;
}

vec2 cDiv(vec2 a, vec2 b)
{
    return vec2(a.x*b.x + a.y*b.y, a.y*b.x - a.x*b.y) / dot(b, b);
}

vec4 hpPt(in vec2 b1, in vec2 b2)
{
    vec4 pt;
    if (length(b1) > length(b2)) {
        pt = vec4(cDiv(b1, b2), 0, 0);
    } else {
        pt = vec4(cDiv(b2, b1), 0, 0);
    }
    if (pt.y < 0.) { pt = -pt; }
    return pt;
}

bool uCellTest(vec2 p)
{
    return length(p)>=1. && p.x>=-.5 && p.x < .5;
}

bool seriesCellTest(vec2 p)
{
    return length(p-vec2(0.5,0.))>=.5 && p.x>=0. && p.x < 1.;
}

vec2 coords(in vec2 fragCoord, in vec3 res, in float sc, in vec2 offset)
{
    return sc * (fragCoord - offset) / res.y;
}

vec2 iCoords(in vec2 p, in vec3 res, in float sc, in vec2 offset)
{
    return res.y * p / sc + offset;
}


bool showTrails = false;
float trailFalloff = 0.5; // Length of fading trails, 1 gives no tails.
bool showDots = true;
float traceLevel = .3;
float lineThick = 1./20.;
float backFadeHp = .99999; 


vec4 dotCol = vec4(.8,.05,.04,1.);
vec4 backCol = vec4(1.,1.,1.,1.);
vec4 traceCol = vec4(0.,0.,0.,1.);
vec4 edgeCol = vec4(.651,.669,.95,1.);

`, ba = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ca
}, Symbol.toStringTag, { value: "Module" })), Fa = `// Buffer for Background

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    
    vec2 p = coords(fragCoord, iResolution, 2., vec2(iResolution.x * 0.5, 0.0));
    
	vec2 uv = fragCoord / iResolution.xy;
    
    vec4 col;

        col = backCol; 
        float len = length(p);
                
        float d = abs(len - 1.);
        if( abs(p.x) < .5 && d < p.y*lineThick) { col = mix(edgeCol,col,pow(d/(lineThick*p.y),3.)); }

                
        d = abs(p.x - .5);        
        if(len>1. && d < p.y*lineThick) { col = mix(edgeCol,col,pow(d/(lineThick*p.y),3.)); }
        d = abs(p.x + .5);
        if(len>1. && d < p.y*lineThick) { col = mix(edgeCol,col,pow(d/(lineThick*p.y),3.)); }
        
        p = vec2(-p.x/(len*len),p.y/(len*len));
        len =1./len;
                
        d = abs(p.x - .5);        
        if(len>1. && d < p.y*lineThick) { col = mix(edgeCol,col,pow(d/(lineThick*p.y),3.)); }
        d = abs(p.x + .5);
        if(len>1. && d < p.y*lineThick) { col = mix(edgeCol,col,pow(d/(lineThick*p.y),3.)); }

    fragColor = col;
}`, _a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fa
}, Symbol.toStringTag, { value: "Module" })), Aa = `// Buffer for trailing dots

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 p = coords(fragCoord, iResolution, 2., vec2(iResolution.x * 0.5, 0.0));
	vec2 uv = fragCoord.xy / iResolution.xy;
    
    vec4 col = vec4(blur(hpTrails,uv,5.*iResolution.xy));
    if(showTrails) {
    	col = mix(col,vec4(backCol.xyz,0),iResolution.y/640.*trailFalloff/length(backCol-col));
    } else {
        col = vec4(backCol.xyz,0);
    }
    //col = backCol;
    
    if(showDots) { 
    	vec2 b1 = uLattice.xy;
    	vec2 b2 = uLattice.zw;

        vec4 pt = hpPt(b1, b2);

        col = drPt(col, p, pt, pt.y/25., dotCol, 0.15); 
        col = drPt(col, p+vec2(1.,0.), pt, pt.y/25., dotCol, 0.15); 
        col = drPt(col, p-vec2(1.,0.), pt, pt.y/25., dotCol, 0.15); 
               
        float len2 = dot(pt,pt);
    	pt = vec4(-pt.x/len2, pt.y/len2,0,0);
        
        col = drPt(col, p, pt, pt.y/25., dotCol, 0.15); 
        len2 = dot(p,p);
        float div = 1. - 2.*p.x + len2;
        col = drPt(col, vec2((p.x-len2)/div,p.y/div), pt, pt.y/25., dotCol, 0.15); 
        div = 1. + 2.*p.x + len2;
        col = drPt(col, vec2((p.x+len2)/div,p.y/div), pt, pt.y/25., dotCol, 0.15); 
    }
    
    fragColor = col;
}`, Ta = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Aa
}, Symbol.toStringTag, { value: "Module" })), xa = `void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec4 col = vec4(.6,.6,.6,1.);
    
    vec2 p = coords(fragCoord, iResolution, 2., vec2(iResolution.x * 0.5, 0.0));

    bool inCell;
    switch(uCell) {
        case 0:  inCell = uCellTest(p);      break;
        case 1:  inCell = seriesCellTest(p); break;
        default: inCell = true;              break;
    }

    	for(int i=0; i<10; i++)
    	{    
    		p.x = p.x - round(p.x);
    		float len2 = dot(p,p);
    
    		if(len2 < 1.) { 
    	    	p = vec2(-p.x/len2, p.y/len2);
    		}
    	}
    	float len2 = dot(p,p);
    
    	if(p.y > 2.)
    	{
    		p = vec2(-p.x/len2, p.y/len2);
    	}

    if(inCell)
    {
        vec2 uv = iCoords(p, iResolution, 2., vec2(iResolution.x * 0.5, 0.0)) / iResolution.xy;
    
        if(uv.y > .998) { uv.y = .9995;}
    
        col = vec4(texture(hpBackground,uv).xyz,1);

        vec4 traced = vec4(texture(pathBackground,uv));
        
        col = vec4(mix(col, traced, 1.-traced.x).xyz,1.);
    
        traced = vec4(texture(hpTrails,uv));
    
        if(traced.w < .001) { traced.w = 0.; }
    
        col = vec4(mix(col, traced, traced.w).xyz,1.);
    }

    // Output to screen
    fragColor = col;
}
`, Sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xa
}, Symbol.toStringTag, { value: "Module" })), Ba = `// Buffer for complete path record

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 p = coords(fragCoord, iResolution, 2., vec2(iResolution.x * 0.5, 0.0));
    
	vec2 uv = fragCoord / iResolution.xy;
    
    vec4 col;
    
    if(iFrame == 0 || uv.x > 1. || uv.y > 1. || uv.x < 0. || uv.y < 0. || iMouse.z > 0.) 
    { 
        col = vec4(1.,1.,1.,1.); 
        float len = length(p); } 
    else
    {
    	col = texture(pathBackground,uv);
        col = mix(backCol,col,backFadeHp);

        vec4 recCol = vec4(0.,0.,0.5,1.);

        if(uNewLattice && col.z < 1.) { col = mix(backCol,recCol,1.-col.z); }
        //if(uNewLattice) { col = col*vec4(0.,1.,0.,1.);}

    	vec2 b1 = uLattice.xy;
    	vec2 b2 = uLattice.zw;

        vec4 pt = hpPt(b1, b2);
    	col = drPt(col, p, pt, pt.y/100., mix(col,traceCol,traceLevel), .5);
        col = drPt(col, p+vec2(1.,0.), pt, pt.y/100., mix(col,traceCol,traceLevel), .5); 
        col = drPt(col, p-vec2(1.,0.), pt, pt.y/100., mix(col,traceCol,traceLevel), .5); 
        
    	float len2 = dot(pt,pt);
    	pt = vec4(-pt.x/len2, pt.y/len2,0,0);
        
    	col = drPt(col, p, pt, pt.y/100., mix(col,traceCol,traceLevel), .5);
        len2 = dot(p,p);
        float div = 1. - 2.*p.x + len2;
        col = drPt(col, vec2((p.x-len2)/div,p.y/div), pt, pt.y/100., mix(col,traceCol,traceLevel), .5); 
        div = 1. + 2.*p.x + len2;
        col = drPt(col, vec2((p.x+len2)/div,p.y/div), pt, pt.y/100., mix(col,traceCol,traceLevel), .5); 

    }

    fragColor = col;
}`, Ra = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ba
}, Symbol.toStringTag, { value: "Module" })), di = [
  "2dFlowJS",
  "2dHalfplaneJS"
], pi = "split", mi = "/Users/eharriss/Documents/Web design/mathematicians-site/public", gi = !0, vi = {
  left: "0",
  top: "25%",
  width: "100%",
  height: "50%"
}, Di = [
  {
    id: "cfPrefix",
    label: "CF prefix",
    default: ""
  },
  {
    id: "cfPeriod",
    label: "CF period",
    default: "1"
  }
], Ei = [
  {
    label: "Set lattice",
    action: "onSetLattice"
  }
], yi = {
  uLattice: {
    type: "vec4",
    value: [
      1,
      0,
      0,
      1
    ],
    hidden: !0
  },
  uSpeed: {
    type: "float",
    value: 0.15,
    min: -1,
    max: 1,
    step: 0.01,
    label: "Speed"
  },
  uFlow: {
    type: "int",
    value: 0,
    min: 0,
    max: 2,
    step: 1,
    hidden: !0,
    label: "Flow",
    options: [
      "Geodesic",
      "Horocyclic vertical",
      "Horocyclic horizontal"
    ]
  },
  uCell: {
    type: "int",
    value: 2,
    min: 0,
    max: 2,
    step: 1,
    hidden: !0,
    label: "Cell",
    options: [
      "Unit cell",
      "Series cell",
      "Whole plane"
    ]
  },
  uNewLattice: {
    type: "bool",
    value: !1,
    hidden: !0
  }
}, Ma = {
  views: di,
  layout: pi,
  deploy: mi,
  controls: gi,
  patch: vi,
  textInputs: Di,
  buttons: Ei,
  uniforms: yi
}, Na = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  buttons: Ei,
  controls: gi,
  default: Ma,
  deploy: mi,
  layout: pi,
  patch: vi,
  textInputs: Di,
  uniforms: yi,
  views: di
}, Symbol.toStringTag, { value: "Module" })), wi = "default", Ci = !0, bi = [
  {
    id: "cfPrefix",
    label: "CF prefix",
    default: ""
  },
  {
    id: "cfPeriod",
    label: "CF period",
    default: "1"
  }
], Fi = [
  {
    label: "Set lattice",
    action: "onSetLattice"
  }
], _i = {
  gridTrace: {},
  dotTrails: {}
}, Ai = {
  uScale: {
    type: "float",
    value: 30,
    min: 5,
    max: 100,
    step: 0.1,
    label: "Scale"
  },
  uLattice: {
    type: "vec4",
    value: [
      1,
      0,
      0,
      1
    ],
    hidden: !0
  },
  uSpeed: {
    type: "float",
    value: 0.5,
    min: -1,
    max: 1,
    step: 0.01,
    label: "Speed"
  },
  uFlow: {
    type: "int",
    value: 0,
    min: 0,
    max: 2,
    step: 1,
    hidden: !0,
    label: "Flow",
    options: [
      "Geodesic",
      "Horocyclic vertical",
      "Horocyclic horizontal"
    ]
  },
  uNewLattice: {
    type: "bool",
    value: !1,
    hidden: !0
  }
}, Pa = {
  layout: wi,
  controls: Ci,
  textInputs: bi,
  buttons: Fi,
  buffers: _i,
  uniforms: Ai
}, La = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  buffers: _i,
  buttons: Fi,
  controls: Ci,
  default: Pa,
  layout: wi,
  textInputs: bi,
  uniforms: Ai
}, Symbol.toStringTag, { value: "Module" })), Ti = "default", xi = !0, Si = [
  {
    id: "cfPrefix",
    label: "CF prefix",
    default: ""
  },
  {
    id: "cfPeriod",
    label: "CF period",
    default: "1"
  }
], Bi = [
  {
    label: "Set lattice",
    action: "onSetLattice"
  }
], Ri = {
  hpBackground: {},
  pathBackground: {},
  hpTrails: {}
}, Mi = {
  uLattice: {
    type: "vec4",
    value: [
      1,
      1.618033988749895,
      -1.618033988749895,
      1
    ],
    hidden: !0
  },
  uSpeed: {
    type: "float",
    value: 0.15,
    min: -1,
    max: 1,
    step: 0.01,
    label: "Speed"
  },
  uFlow: {
    type: "int",
    value: 0,
    min: 0,
    max: 2,
    step: 1,
    hidden: !0,
    label: "Flow",
    options: [
      "Geodesic",
      "Horocyclic vertical",
      "Horocyclic horizontal"
    ]
  },
  uCell: {
    type: "int",
    value: 2,
    min: 0,
    max: 2,
    step: 1,
    hidden: !0,
    label: "Cell",
    options: [
      "Unit cell",
      "Series cell",
      "Whole plane"
    ]
  },
  uNewLattice: {
    type: "bool",
    value: !1,
    hidden: !0
  }
}, Ia = {
  layout: Ti,
  controls: xi,
  textInputs: Si,
  buttons: Bi,
  buffers: Ri,
  uniforms: Mi
}, Ua = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  buffers: Ri,
  buttons: Bi,
  controls: xi,
  default: Ia,
  layout: Ti,
  textInputs: Si,
  uniforms: Mi
}, Symbol.toStringTag, { value: "Module" }));
function en() {
  return en = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, en.apply(null, arguments);
}
var Ni = {
  // minimum relative difference between two compared values,
  // used by all comparison functions
  relTol: 1e-12,
  // minimum absolute difference between two compared values,
  // used by all comparison functions
  absTol: 1e-15,
  // type of default matrix output. Choose 'matrix' (default) or 'array'
  matrix: "Matrix",
  // type of default number output. Choose 'number' (default) 'BigNumber', 'bigint', or 'Fraction'
  number: "number",
  // type of fallback used for config { number: 'bigint' } when a value cannot be represented
  // in the configured numeric type. Choose 'number' (default) or 'BigNumber'.
  numberFallback: "number",
  // number of significant digits in BigNumbers
  precision: 64,
  // predictable output type of functions. When true, output type depends only
  // on the input types. When false (default), output type can vary depending
  // on input values. For example `math.sqrt(-4)` returns `complex('2i')` when
  // predictable is false, and returns `NaN` when true.
  predictable: !1,
  // random seed for seeded pseudo random number generation
  // null = randomly seed
  randomSeed: null,
  // legacy behavior for matrix subset. When true, the subset function
  // returns a matrix or array with the same size as the index (except for scalars).
  // When false, it returns a matrix or array with a size depending on the type of index.
  legacySubset: !1
};
function ka(e, t) {
  if (tn(e, t) || Pi(e, t))
    return e[t];
  throw za(e, t) ? new Error('Cannot access method "'.concat(t, '" as a property')) : e == null ? new TypeError('Cannot access property "'.concat(t, '": object is ').concat(e)) : new Error('No access to property "' + t + '"');
}
function Oa(e, t, n) {
  if (tn(e, t) || Pi(e, t))
    return e[t] = n, n;
  throw new Error('No access to property "'.concat(t, '"'));
}
function tn(e, t) {
  return Ha(e) ? !(t in Object.prototype) : !1;
}
function Pi(e, t) {
  return Array.isArray(e) ? typeof t == "number" || typeof t == "string" && $a(t) || t === "length" : !1;
}
function $a(e) {
  return /^\d+$/.test(e);
}
function za(e, t) {
  return e == null || typeof e[t] != "function" || Kn(e, t) && Object.getPrototypeOf && t in Object.getPrototypeOf(e) ? !1 : Va.has(t) ? !0 : !(t in Object.prototype || t in Function.prototype);
}
function Ha(e) {
  return typeof e == "object" && e && e.constructor === Object;
}
var Va = /* @__PURE__ */ new Set(["toString", "valueOf", "toLocaleString"]);
class Xa {
  constructor(t) {
    this.wrappedObject = t, this[Symbol.iterator] = this.entries;
  }
  keys() {
    return Object.keys(this.wrappedObject).filter((t) => this.has(t)).values();
  }
  get(t) {
    return ka(this.wrappedObject, t);
  }
  set(t, n) {
    return Oa(this.wrappedObject, t, n), this;
  }
  has(t) {
    return tn(this.wrappedObject, t) && t in this.wrappedObject;
  }
  entries() {
    return ja(this.keys(), (t) => [t, this.get(t)]);
  }
  forEach(t) {
    for (var n of this.keys())
      t(this.get(n), n, this);
  }
  delete(t) {
    tn(this.wrappedObject, t) && delete this.wrappedObject[t];
  }
  clear() {
    for (var t of this.keys())
      this.delete(t);
  }
  get size() {
    return Object.keys(this.wrappedObject).length;
  }
}
function ja(e, t) {
  return {
    next: () => {
      var n = e.next();
      return n.done ? n : {
        value: t(n.value),
        done: !1
      };
    }
  };
}
function ce(e) {
  return typeof e == "number";
}
function Ne(e) {
  return !e || typeof e != "object" || typeof e.constructor != "function" ? !1 : e.isBigNumber === !0 && typeof e.constructor.prototype == "object" && e.constructor.prototype.isBigNumber === !0 || typeof e.constructor.isDecimal == "function" && e.constructor.isDecimal(e) === !0;
}
function Ga(e) {
  return typeof e == "bigint";
}
function Li(e) {
  return e && typeof e == "object" && Object.getPrototypeOf(e).isComplex === !0 || !1;
}
function Ii(e) {
  return e && typeof e == "object" && Object.getPrototypeOf(e).isFraction === !0 || !1;
}
function Ui(e) {
  return e && e.constructor.prototype.isUnit === !0 || !1;
}
function et(e) {
  return typeof e == "string";
}
var be = Array.isArray;
function Pe(e) {
  return e && e.constructor.prototype.isMatrix === !0 || !1;
}
function nn(e) {
  return Array.isArray(e) || Pe(e);
}
function Ya(e) {
  return e && e.isDenseMatrix && e.constructor.prototype.isMatrix === !0 || !1;
}
function Ka(e) {
  return e && e.isSparseMatrix && e.constructor.prototype.isMatrix === !0 || !1;
}
function qa(e) {
  return e && e.constructor.prototype.isRange === !0 || !1;
}
function Gn(e) {
  return e && e.constructor.prototype.isIndex === !0 || !1;
}
function Wa(e) {
  return typeof e == "boolean";
}
function Za(e) {
  return e && e.constructor.prototype.isResultSet === !0 || !1;
}
function Ja(e) {
  return e && e.constructor.prototype.isHelp === !0 || !1;
}
function Qa(e) {
  return typeof e == "function";
}
function eu(e) {
  return e instanceof Date;
}
function tu(e) {
  return e instanceof RegExp;
}
function Yn(e) {
  return !!(e && typeof e == "object" && e.constructor === Object && !Li(e) && !Ii(e));
}
function nu(e) {
  return e ? e instanceof Map || e instanceof Xa || typeof e.set == "function" && typeof e.get == "function" && typeof e.keys == "function" && typeof e.has == "function" : !1;
}
function ru(e) {
  return e === null;
}
function iu(e) {
  return e === void 0;
}
function ou(e) {
  return e && e.isAccessorNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function su(e) {
  return e && e.isArrayNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function au(e) {
  return e && e.isAssignmentNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function uu(e) {
  return e && e.isBlockNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function cu(e) {
  return e && e.isConditionalNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function lu(e) {
  return e && e.isConstantNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function fu(e) {
  return e && e.isFunctionAssignmentNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function hu(e) {
  return e && e.isFunctionNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function du(e) {
  return e && e.isIndexNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function pu(e) {
  return e && e.isNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function mu(e) {
  return e && e.isObjectNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function gu(e) {
  return e && e.isOperatorNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function vu(e) {
  return e && e.isParenthesisNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Du(e) {
  return e && e.isRangeNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Eu(e) {
  return e && e.isRelationalNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function yu(e) {
  return e && e.isSymbolNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function wu(e) {
  return e && e.constructor.prototype.isChain === !0 || !1;
}
function yt(e) {
  var t = typeof e;
  return t === "object" ? e === null ? "null" : Ne(e) ? "BigNumber" : e.constructor && e.constructor.name ? e.constructor.name : "Object" : t;
}
function Be(e) {
  var t = typeof e;
  if (t === "number" || t === "bigint" || t === "string" || t === "boolean" || e === null || e === void 0)
    return e;
  if (typeof e.clone == "function")
    return e.clone();
  if (Array.isArray(e))
    return e.map(function(n) {
      return Be(n);
    });
  if (e instanceof Date) return new Date(e.valueOf());
  if (Ne(e)) return e;
  if (Yn(e))
    return Cu(e, Be);
  if (t === "function")
    return e;
  throw new TypeError("Cannot clone: unknown type of value (value: ".concat(e, ")"));
}
function Cu(e, t) {
  var n = {};
  for (var r in e)
    Kn(e, r) && (n[r] = t(e[r]));
  return n;
}
function bu(e, t) {
  for (var n in t)
    Kn(t, n) && (e[n] = t[n]);
  return e;
}
function mt(e, t) {
  var n, r, i;
  if (Array.isArray(e)) {
    if (!Array.isArray(t) || e.length !== t.length)
      return !1;
    for (r = 0, i = e.length; r < i; r++)
      if (!mt(e[r], t[r]))
        return !1;
    return !0;
  } else {
    if (typeof e == "function")
      return e === t;
    if (e instanceof Object) {
      if (Array.isArray(t) || !(t instanceof Object))
        return !1;
      for (n in e)
        if (!(n in t) || !mt(e[n], t[n]))
          return !1;
      for (n in t)
        if (!(n in e))
          return !1;
      return !0;
    } else
      return e === t;
  }
}
function Kn(e, t) {
  return e && Object.hasOwnProperty.call(e, t);
}
function Fu(e, t) {
  for (var n = {}, r = 0; r < t.length; r++) {
    var i = t[r], o = e[i];
    o !== void 0 && (n[i] = o);
  }
  return n;
}
var _u = ["Matrix", "Array"], Au = ["number", "BigNumber", "bigint", "Fraction"], pn = function(t) {
  if (t)
    throw new Error(`The global config is readonly. 
Please create a mathjs instance if you want to change the default configuration. 
Example:

  import { create, all } from 'mathjs';
  const mathjs = create(all);
  mathjs.config({ number: 'BigNumber' });
`);
  return Object.freeze(Ni);
};
en(pn, Ni, {
  MATRIX_OPTIONS: _u,
  NUMBER_OPTIONS: Au
});
function wr() {
  return !0;
}
function qe() {
  return !1;
}
function At() {
}
const Cr = "Argument is not a typed-function.";
function ki() {
  function e(F) {
    return typeof F == "object" && F !== null && F.constructor === Object;
  }
  const t = [{
    name: "number",
    test: function(F) {
      return typeof F == "number";
    }
  }, {
    name: "string",
    test: function(F) {
      return typeof F == "string";
    }
  }, {
    name: "boolean",
    test: function(F) {
      return typeof F == "boolean";
    }
  }, {
    name: "Function",
    test: function(F) {
      return typeof F == "function";
    }
  }, {
    name: "Array",
    test: Array.isArray
  }, {
    name: "Date",
    test: function(F) {
      return F instanceof Date;
    }
  }, {
    name: "RegExp",
    test: function(F) {
      return F instanceof RegExp;
    }
  }, {
    name: "Object",
    test: e
  }, {
    name: "null",
    test: function(F) {
      return F === null;
    }
  }, {
    name: "undefined",
    test: function(F) {
      return F === void 0;
    }
  }], n = {
    name: "any",
    test: wr,
    isAny: !0
  };
  let r, i, o = 0, s = {
    createCount: 0
  };
  function a(F) {
    const x = r.get(F);
    if (x)
      return x;
    let R = 'Unknown type "' + F + '"';
    const N = F.toLowerCase();
    let k;
    for (k of i)
      if (k.toLowerCase() === N) {
        R += '. Did you mean "' + k + '" ?';
        break;
      }
    throw new TypeError(R);
  }
  function u(F) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "any";
    const R = x ? a(x).index : i.length, N = [];
    for (let P = 0; P < F.length; ++P) {
      if (!F[P] || typeof F[P].name != "string" || typeof F[P].test != "function")
        throw new TypeError("Object with properties {name: string, test: function} expected");
      const z = F[P].name;
      if (r.has(z))
        throw new TypeError('Duplicate type name "' + z + '"');
      N.push(z), r.set(z, {
        name: z,
        test: F[P].test,
        isAny: F[P].isAny,
        index: R + P,
        conversionsTo: []
        // Newly added type can't have any conversions to it
      });
    }
    const k = i.slice(R);
    i = i.slice(0, R).concat(N).concat(k);
    for (let P = R + N.length; P < i.length; ++P)
      r.get(i[P]).index = P;
  }
  function c() {
    r = /* @__PURE__ */ new Map(), i = [], o = 0, u([n], !1);
  }
  c(), u(t);
  function h() {
    let F;
    for (F of i)
      r.get(F).conversionsTo = [];
    o = 0;
  }
  function l(F) {
    const x = i.filter((R) => {
      const N = r.get(R);
      return !N.isAny && N.test(F);
    });
    return x.length ? x : ["any"];
  }
  function d(F) {
    return F && typeof F == "function" && "_typedFunctionData" in F;
  }
  function m(F, x, R) {
    if (!d(F))
      throw new TypeError(Cr);
    const N = R && R.exact, k = Array.isArray(x) ? x.join(",") : x, P = w(k), z = y(P);
    if (!N || z in F.signatures) {
      const Q = F._typedFunctionData.signatureMap.get(z);
      if (Q)
        return Q;
    }
    const O = P.length;
    let G;
    if (N) {
      G = [];
      let Q;
      for (Q in F.signatures)
        G.push(F._typedFunctionData.signatureMap.get(Q));
    } else
      G = F._typedFunctionData.signatures;
    for (let Q = 0; Q < O; ++Q) {
      const ue = P[Q], ye = [];
      let $e;
      for ($e of G) {
        const Ie = _($e.params, Q);
        if (!(!Ie || ue.restParam && !Ie.restParam)) {
          if (!Ie.hasAny) {
            const Ye = p(Ie);
            if (ue.types.some((Ke) => !Ye.has(Ke.name)))
              continue;
          }
          ye.push($e);
        }
      }
      if (G = ye, G.length === 0) break;
    }
    let U;
    for (U of G)
      if (U.params.length <= O)
        return U;
    throw new TypeError("Signature not found (signature: " + (F.name || "unnamed") + "(" + y(P, ", ") + "))");
  }
  function v(F, x, R) {
    return m(F, x, R).implementation;
  }
  function f(F, x) {
    const R = a(x);
    if (R.test(F))
      return F;
    const N = R.conversionsTo;
    if (N.length === 0)
      throw new Error("There are no conversions to " + x + " defined.");
    for (let k = 0; k < N.length; k++)
      if (a(N[k].from).test(F))
        return N[k].convert(F);
    throw new Error("Cannot convert " + F + " to " + x);
  }
  function y(F) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ",";
    return F.map((R) => R.name).join(x);
  }
  function C(F) {
    const x = F.indexOf("...") === 0, N = (x ? F.length > 3 ? F.slice(3) : "any" : F).split("|").map((O) => a(O.trim()));
    let k = !1, P = x ? "..." : "";
    return {
      types: N.map(function(O) {
        return k = O.isAny || k, P += O.name + "|", {
          name: O.name,
          typeIndex: O.index,
          test: O.test,
          isAny: O.isAny,
          conversion: null,
          conversionIndex: -1
        };
      }),
      name: P.slice(0, -1),
      // remove trailing '|' from above
      hasAny: k,
      hasConversion: !1,
      restParam: x
    };
  }
  function E(F) {
    const x = F.types.map((z) => z.name), R = q(x);
    let N = F.hasAny, k = F.name;
    const P = R.map(function(z) {
      const O = a(z.from);
      return N = O.isAny || N, k += "|" + z.from, {
        name: z.from,
        typeIndex: O.index,
        test: O.test,
        isAny: O.isAny,
        conversion: z,
        conversionIndex: z.index
      };
    });
    return {
      types: F.types.concat(P),
      name: k,
      hasAny: N,
      hasConversion: P.length > 0,
      restParam: F.restParam
    };
  }
  function p(F) {
    return F.typeSet || (F.typeSet = /* @__PURE__ */ new Set(), F.types.forEach((x) => F.typeSet.add(x.name))), F.typeSet;
  }
  function w(F) {
    const x = [];
    if (typeof F != "string")
      throw new TypeError("Signatures must be strings");
    const R = F.trim();
    if (R === "")
      return x;
    const N = R.split(",");
    for (let k = 0; k < N.length; ++k) {
      const P = C(N[k].trim());
      if (P.restParam && k !== N.length - 1)
        throw new SyntaxError('Unexpected rest parameter "' + N[k] + '": only allowed for the last parameter');
      if (P.types.length === 0)
        return null;
      x.push(P);
    }
    return x;
  }
  function g(F) {
    const x = fe(F);
    return x ? x.restParam : !1;
  }
  function D(F) {
    if (!F || F.types.length === 0)
      return wr;
    if (F.types.length === 1)
      return a(F.types[0].name).test;
    if (F.types.length === 2) {
      const x = a(F.types[0].name).test, R = a(F.types[1].name).test;
      return function(k) {
        return x(k) || R(k);
      };
    } else {
      const x = F.types.map(function(R) {
        return a(R.name).test;
      });
      return function(N) {
        for (let k = 0; k < x.length; k++)
          if (x[k](N))
            return !0;
        return !1;
      };
    }
  }
  function A(F) {
    let x, R, N;
    if (g(F)) {
      x = we(F).map(D);
      const k = x.length, P = D(fe(F)), z = function(O) {
        for (let G = k; G < O.length; G++)
          if (!P(O[G]))
            return !1;
        return !0;
      };
      return function(G) {
        for (let U = 0; U < x.length; U++)
          if (!x[U](G[U]))
            return !1;
        return z(G) && G.length >= k + 1;
      };
    } else
      return F.length === 0 ? function(P) {
        return P.length === 0;
      } : F.length === 1 ? (R = D(F[0]), function(P) {
        return R(P[0]) && P.length === 1;
      }) : F.length === 2 ? (R = D(F[0]), N = D(F[1]), function(P) {
        return R(P[0]) && N(P[1]) && P.length === 2;
      }) : (x = F.map(D), function(P) {
        for (let z = 0; z < x.length; z++)
          if (!x[z](P[z]))
            return !1;
        return P.length === x.length;
      });
  }
  function _(F, x) {
    return x < F.length ? F[x] : g(F) ? fe(F) : null;
  }
  function b(F, x) {
    const R = _(F, x);
    return R ? p(R) : /* @__PURE__ */ new Set();
  }
  function T(F) {
    return F.conversion === null || F.conversion === void 0;
  }
  function S(F, x) {
    const R = /* @__PURE__ */ new Set();
    return F.forEach((N) => {
      const k = b(N.params, x);
      let P;
      for (P of k)
        R.add(P);
    }), R.has("any") ? ["any"] : Array.from(R);
  }
  function M(F, x, R) {
    let N, k;
    const P = F || "unnamed";
    let z = R, O;
    for (O = 0; O < x.length; O++) {
      const ue = [];
      if (z.forEach((ye) => {
        const $e = _(ye.params, O), Ie = D($e);
        (O < ye.params.length || g(ye.params)) && Ie(x[O]) && ue.push(ye);
      }), ue.length === 0) {
        if (k = S(z, O), k.length > 0) {
          const ye = l(x[O]);
          return N = new TypeError("Unexpected type of argument in function " + P + " (expected: " + k.join(" or ") + ", actual: " + ye.join(" | ") + ", index: " + O + ")"), N.data = {
            category: "wrongType",
            fn: P,
            index: O,
            actual: ye,
            expected: k
          }, N;
        }
      } else
        z = ue;
    }
    const G = z.map(function(ue) {
      return g(ue.params) ? 1 / 0 : ue.params.length;
    });
    if (x.length < Math.min.apply(null, G))
      return k = S(z, O), N = new TypeError("Too few arguments in function " + P + " (expected: " + k.join(" or ") + ", index: " + x.length + ")"), N.data = {
        category: "tooFewArgs",
        fn: P,
        index: x.length,
        expected: k
      }, N;
    const U = Math.max.apply(null, G);
    if (x.length > U)
      return N = new TypeError("Too many arguments in function " + P + " (expected: " + U + ", actual: " + x.length + ")"), N.data = {
        category: "tooManyArgs",
        fn: P,
        index: x.length,
        expectedLength: U
      }, N;
    const Q = [];
    for (let ue = 0; ue < x.length; ++ue)
      Q.push(l(x[ue]).join("|"));
    return N = new TypeError('Arguments of type "' + Q.join(", ") + '" do not match any of the defined signatures of function ' + P + "."), N.data = {
      category: "mismatch",
      actual: Q
    }, N;
  }
  function j(F) {
    let x = i.length + 1;
    for (let R = 0; R < F.types.length; R++)
      x = Math.min(x, F.types[R].typeIndex);
    return x;
  }
  function $(F) {
    let x = o + 1;
    for (let R = 0; R < F.types.length; R++)
      T(F.types[R]) || (x = Math.min(x, F.types[R].conversionIndex));
    return x;
  }
  function X(F, x) {
    if (F.hasAny) {
      if (!x.hasAny)
        return 0.1;
    } else if (x.hasAny)
      return -0.1;
    if (F.restParam) {
      if (!x.restParam)
        return 0.01;
    } else if (x.restParam)
      return -0.01;
    const R = j(F) - j(x);
    if (R < 0)
      return -1e-3;
    if (R > 0)
      return 1e-3;
    const N = $(F), k = $(x);
    if (F.hasConversion) {
      if (!x.hasConversion)
        return (1 + N) * 1e-6;
    } else if (x.hasConversion)
      return -(1 + k) * 1e-6;
    const P = N - k;
    return P < 0 ? -1e-7 : P > 0 ? 1e-7 : 0;
  }
  function I(F, x) {
    const R = F.params, N = x.params, k = fe(R), P = fe(N), z = g(R), O = g(N);
    if (z && k.hasAny) {
      if (!O || !P.hasAny)
        return 1e7;
    } else if (O && P.hasAny)
      return -1e7;
    let G = 0, U = 0, Q;
    for (Q of R)
      Q.hasAny && ++G, Q.hasConversion && ++U;
    let ue = 0, ye = 0;
    for (Q of N)
      Q.hasAny && ++ue, Q.hasConversion && ++ye;
    if (G !== ue)
      return (G - ue) * 1e6;
    if (z && k.hasConversion) {
      if (!O || !P.hasConversion)
        return 1e5;
    } else if (O && P.hasConversion)
      return -1e5;
    if (U !== ye)
      return (U - ye) * 1e4;
    if (z) {
      if (!O)
        return 1e3;
    } else if (O)
      return -1e3;
    const $e = (R.length - N.length) * (z ? -100 : 100);
    if ($e !== 0)
      return $e;
    const Ie = [];
    let Ye = 0;
    for (let _t = 0; _t < R.length; ++_t) {
      const Ht = X(R[_t], N[_t]);
      Ie.push(Ht), Ye += Ht;
    }
    if (Ye !== 0)
      return (Ye < 0 ? -10 : 10) + Ye;
    let Ke, Ft = 9;
    const bn = Ft / (Ie.length + 1);
    for (Ke of Ie) {
      if (Ke !== 0)
        return (Ke < 0 ? -Ft : Ft) + Ke;
      Ft -= bn;
    }
    return 0;
  }
  function q(F) {
    if (F.length === 0)
      return [];
    const x = F.map(a);
    if (F.length === 1) return x[0].conversionsTo;
    const R = new Set(F), N = /* @__PURE__ */ new Set();
    for (let P = 0; P < x.length; ++P)
      for (const z of x[P].conversionsTo)
        R.has(z.from) || N.add(z.from);
    const k = [];
    for (const P of N) {
      let z = o + 1, O = null;
      for (let G = 0; G < x.length; ++G)
        for (const U of x[G].conversionsTo)
          U.from === P && U.index < z && (z = U.index, O = U);
      k.push(O);
    }
    return k;
  }
  function H(F, x) {
    let R = x, N = "";
    if (F.some((P) => P.hasConversion)) {
      const P = g(F), z = F.map(Y);
      N = z.map((O) => O.name).join(";"), R = function() {
        const G = [], U = P ? arguments.length - 1 : arguments.length;
        for (let Q = 0; Q < U; Q++)
          G[Q] = z[Q](arguments[Q]);
        return P && (G[U] = arguments[U].map(z[U])), x.apply(this, G);
      };
    }
    let k = R;
    if (g(F)) {
      const P = F.length - 1;
      k = function() {
        return R.apply(this, se(arguments, 0, P).concat([se(arguments, P)]));
      };
    }
    return N && Object.defineProperty(k, "name", {
      value: N
    }), k;
  }
  function Y(F) {
    let x, R, N, k;
    const P = [], z = [];
    let O = "";
    F.types.forEach(function(U) {
      U.conversion && (O += U.conversion.from + "~>" + U.conversion.to + ",", P.push(a(U.conversion.from).test), z.push(U.conversion.convert));
    }), O ? O = O.slice(0, -1) : O = "pass";
    let G = (U) => U;
    switch (z.length) {
      case 0:
        break;
      case 1:
        x = P[0], N = z[0], G = function(Q) {
          return x(Q) ? N(Q) : Q;
        };
        break;
      case 2:
        x = P[0], R = P[1], N = z[0], k = z[1], G = function(Q) {
          return x(Q) ? N(Q) : R(Q) ? k(Q) : Q;
        };
        break;
      default:
        G = function(Q) {
          for (let ue = 0; ue < z.length; ue++)
            if (P[ue](Q))
              return z[ue](Q);
          return Q;
        };
    }
    return Object.defineProperty(G, "name", {
      value: O
    }), G;
  }
  function Z(F) {
    function x(R, N, k) {
      if (N < R.length) {
        const P = R[N];
        let z = [];
        if (P.restParam) {
          const O = P.types.filter(T);
          O.length < P.types.length && z.push({
            types: O,
            name: "..." + O.map((G) => G.name).join("|"),
            hasAny: O.some((G) => G.isAny),
            hasConversion: !1,
            restParam: !0
          }), z.push(P);
        } else
          z = P.types.map(function(O) {
            return {
              types: [O],
              name: O.name,
              hasAny: O.isAny,
              hasConversion: O.conversion,
              restParam: !1
            };
          });
        return Ce(z, function(O) {
          return x(R, N + 1, k.concat([O]));
        });
      } else
        return [k];
    }
    return x(F, 0, []);
  }
  function ne(F, x) {
    const R = Math.max(F.length, x.length);
    for (let O = 0; O < R; O++) {
      const G = b(F, O), U = b(x, O);
      let Q = !1, ue;
      for (ue of U)
        if (G.has(ue)) {
          Q = !0;
          break;
        }
      if (!Q)
        return !1;
    }
    const N = F.length, k = x.length, P = g(F), z = g(x);
    return P ? z ? N === k : k >= N : z ? N >= k : N === k;
  }
  function te(F) {
    return F.map((x) => it(x) ? Ge(x.referToSelf.callback) : rt(x) ? Ae(x.referTo.references, x.referTo.callback) : x);
  }
  function oe(F, x, R) {
    const N = [];
    let k;
    for (k of F) {
      let P = R[k];
      if (typeof P != "number")
        throw new TypeError('No definition for referenced signature "' + k + '"');
      if (P = x[P], typeof P != "function")
        return !1;
      N.push(P);
    }
    return N;
  }
  function de(F, x, R) {
    const N = te(F), k = new Array(N.length).fill(!1);
    let P = !0;
    for (; P; ) {
      P = !1;
      let z = !0;
      for (let O = 0; O < N.length; ++O) {
        if (k[O]) continue;
        const G = N[O];
        if (it(G))
          N[O] = G.referToSelf.callback(R), N[O].referToSelf = G.referToSelf, k[O] = !0, z = !1;
        else if (rt(G)) {
          const U = oe(G.referTo.references, N, x);
          U ? (N[O] = G.referTo.callback.apply(this, U), N[O].referTo = G.referTo, k[O] = !0, z = !1) : P = !0;
        }
      }
      if (z && P)
        throw new SyntaxError("Circular reference detected in resolving typed.referTo");
    }
    return N;
  }
  function me(F) {
    const x = /\bthis(\(|\.signatures\b)/;
    Object.keys(F).forEach((R) => {
      const N = F[R];
      if (x.test(N.toString()))
        throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.");
    });
  }
  function ge(F, x) {
    if (s.createCount++, Object.keys(x).length === 0)
      throw new SyntaxError("No signatures provided");
    s.warnAgainstDeprecatedThis && me(x);
    const R = [], N = [], k = {}, P = [];
    let z;
    for (z in x) {
      if (!Object.prototype.hasOwnProperty.call(x, z))
        continue;
      const pe = w(z);
      if (!pe) continue;
      R.forEach(function(Lt) {
        if (ne(Lt, pe))
          throw new TypeError('Conflicting signatures "' + y(Lt) + '" and "' + y(pe) + '".');
      }), R.push(pe);
      const ze = N.length;
      N.push(x[z]);
      const Wo = pe.map(E);
      let Vt;
      for (Vt of Z(Wo)) {
        const Lt = y(Vt);
        P.push({
          params: Vt,
          name: Lt,
          fn: ze
        }), Vt.every((Zo) => !Zo.hasConversion) && (k[Lt] = ze);
      }
    }
    P.sort(I);
    const O = de(N, k, Pt);
    let G;
    for (G in k)
      Object.prototype.hasOwnProperty.call(k, G) && (k[G] = O[k[G]]);
    const U = [], Q = /* @__PURE__ */ new Map();
    for (G of P)
      Q.has(G.name) || (G.fn = O[G.fn], U.push(G), Q.set(G.name, G));
    const ue = U[0] && U[0].params.length <= 2 && !g(U[0].params), ye = U[1] && U[1].params.length <= 2 && !g(U[1].params), $e = U[2] && U[2].params.length <= 2 && !g(U[2].params), Ie = U[3] && U[3].params.length <= 2 && !g(U[3].params), Ye = U[4] && U[4].params.length <= 2 && !g(U[4].params), Ke = U[5] && U[5].params.length <= 2 && !g(U[5].params), Ft = ue && ye && $e && Ie && Ye && Ke;
    for (let pe = 0; pe < U.length; ++pe)
      U[pe].test = A(U[pe].params);
    const bn = ue ? D(U[0].params[0]) : qe, _t = ye ? D(U[1].params[0]) : qe, Ht = $e ? D(U[2].params[0]) : qe, Fo = Ie ? D(U[3].params[0]) : qe, _o = Ye ? D(U[4].params[0]) : qe, Ao = Ke ? D(U[5].params[0]) : qe, To = ue ? D(U[0].params[1]) : qe, xo = ye ? D(U[1].params[1]) : qe, So = $e ? D(U[2].params[1]) : qe, Bo = Ie ? D(U[3].params[1]) : qe, Ro = Ye ? D(U[4].params[1]) : qe, Mo = Ke ? D(U[5].params[1]) : qe;
    for (let pe = 0; pe < U.length; ++pe)
      U[pe].implementation = H(U[pe].params, U[pe].fn);
    const No = ue ? U[0].implementation : At, Po = ye ? U[1].implementation : At, Lo = $e ? U[2].implementation : At, Io = Ie ? U[3].implementation : At, Uo = Ye ? U[4].implementation : At, ko = Ke ? U[5].implementation : At, Oo = ue ? U[0].params.length : -1, $o = ye ? U[1].params.length : -1, zo = $e ? U[2].params.length : -1, Ho = Ie ? U[3].params.length : -1, Vo = Ye ? U[4].params.length : -1, Xo = Ke ? U[5].params.length : -1, jo = Ft ? 6 : 0, Go = U.length, Yo = U.map((pe) => pe.test), Ko = U.map((pe) => pe.implementation), qo = function() {
      for (let ze = jo; ze < Go; ze++)
        if (Yo[ze](arguments))
          return Ko[ze].apply(this, arguments);
      return s.onMismatch(F, arguments, U);
    };
    function Pt(pe, ze) {
      return arguments.length === Oo && bn(pe) && To(ze) ? No.apply(this, arguments) : arguments.length === $o && _t(pe) && xo(ze) ? Po.apply(this, arguments) : arguments.length === zo && Ht(pe) && So(ze) ? Lo.apply(this, arguments) : arguments.length === Ho && Fo(pe) && Bo(ze) ? Io.apply(this, arguments) : arguments.length === Vo && _o(pe) && Ro(ze) ? Uo.apply(this, arguments) : arguments.length === Xo && Ao(pe) && Mo(ze) ? ko.apply(this, arguments) : qo.apply(this, arguments);
    }
    try {
      Object.defineProperty(Pt, "name", {
        value: F
      });
    } catch {
    }
    return Pt.signatures = k, Pt._typedFunctionData = {
      signatures: U,
      signatureMap: Q
    }, Pt;
  }
  function le(F, x, R) {
    throw M(F, x, R);
  }
  function we(F) {
    return se(F, 0, F.length - 1);
  }
  function fe(F) {
    return F[F.length - 1];
  }
  function se(F, x, R) {
    return Array.prototype.slice.call(F, x, R);
  }
  function Re(F, x) {
    for (let R = 0; R < F.length; R++)
      if (x(F[R]))
        return F[R];
  }
  function Ce(F, x) {
    return Array.prototype.concat.apply([], F.map(x));
  }
  function ae() {
    const F = we(arguments).map((R) => y(w(R))), x = fe(arguments);
    if (typeof x != "function")
      throw new TypeError("Callback function expected as last argument");
    return Ae(F, x);
  }
  function Ae(F, x) {
    return {
      referTo: {
        references: F,
        callback: x
      }
    };
  }
  function Ge(F) {
    if (typeof F != "function")
      throw new TypeError("Callback function expected as first argument");
    return {
      referToSelf: {
        callback: F
      }
    };
  }
  function rt(F) {
    return F && typeof F.referTo == "object" && Array.isArray(F.referTo.references) && typeof F.referTo.callback == "function";
  }
  function it(F) {
    return F && typeof F.referToSelf == "object" && typeof F.referToSelf.callback == "function";
  }
  function Ct(F, x) {
    if (!F)
      return x;
    if (x && x !== F) {
      const R = new Error("Function names do not match (expected: " + F + ", actual: " + x + ")");
      throw R.data = {
        actual: x,
        expected: F
      }, R;
    }
    return F;
  }
  function bt(F) {
    let x;
    for (const R in F)
      Object.prototype.hasOwnProperty.call(F, R) && (d(F[R]) || typeof F[R].signature == "string") && (x = Ct(x, F[R].name));
    return x;
  }
  function Cn(F, x) {
    let R;
    for (R in x)
      if (Object.prototype.hasOwnProperty.call(x, R)) {
        if (R in F && x[R] !== F[R]) {
          const N = new Error('Signature "' + R + '" is defined twice');
          throw N.data = {
            signature: R,
            sourceFunction: x[R],
            destFunction: F[R]
          }, N;
        }
        F[R] = x[R];
      }
  }
  const bo = s;
  s = function(F) {
    const x = typeof F == "string", R = x ? 1 : 0;
    let N = x ? F : "";
    const k = {};
    for (let P = R; P < arguments.length; ++P) {
      const z = arguments[P];
      let O = {}, G;
      if (typeof z == "function" ? (G = z.name, typeof z.signature == "string" ? O[z.signature] = z : d(z) && (O = z.signatures)) : e(z) && (O = z, x || (G = bt(z))), Object.keys(O).length === 0) {
        const U = new TypeError("Argument to 'typed' at index " + P + " is not a (typed) function, nor an object with signatures as keys and functions as values.");
        throw U.data = {
          index: P,
          argument: z
        }, U;
      }
      x || (N = Ct(N, G)), Cn(k, O);
    }
    return ge(N || "", k);
  }, s.create = ki, s.createCount = bo.createCount, s.onMismatch = le, s.throwMismatchError = le, s.createError = M, s.clear = c, s.clearConversions = h, s.addTypes = u, s._findType = a, s.referTo = ae, s.referToSelf = Ge, s.convert = f, s.findSignature = m, s.find = v, s.isTypedFunction = d, s.warnAgainstDeprecatedThis = !0, s.addType = function(F, x) {
    let R = "any";
    x !== !1 && r.has("Object") && (R = "Object"), s.addTypes([F], R);
  };
  function nr(F) {
    if (!F || typeof F.from != "string" || typeof F.to != "string" || typeof F.convert != "function")
      throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");
    if (F.to === F.from)
      throw new SyntaxError('Illegal to define conversion from "' + F.from + '" to itself.');
  }
  return s.addConversion = function(F) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      override: !1
    };
    nr(F);
    const R = a(F.to), N = R.conversionsTo.find((k) => k.from === F.from);
    if (N)
      if (x && x.override)
        s.removeConversion({
          from: N.from,
          to: F.to,
          convert: N.convert
        });
      else
        throw new Error('There is already a conversion from "' + F.from + '" to "' + R.name + '"');
    R.conversionsTo.push({
      from: F.from,
      to: R.name,
      convert: F.convert,
      index: o++
    });
  }, s.addConversions = function(F, x) {
    F.forEach((R) => s.addConversion(R, x));
  }, s.removeConversion = function(F) {
    nr(F);
    const x = a(F.to), R = Re(x.conversionsTo, (k) => k.from === F.from);
    if (!R)
      throw new Error("Attempt to remove nonexistent conversion from " + F.from + " to " + F.to);
    if (R.convert !== F.convert)
      throw new Error("Conversion to remove does not match existing conversion");
    const N = x.conversionsTo.indexOf(R);
    x.conversionsTo.splice(N, 1);
  }, s.resolve = function(F, x) {
    if (!d(F))
      throw new TypeError(Cr);
    const R = F._typedFunctionData.signatures;
    for (let N = 0; N < R.length; ++N)
      if (R[N].test(x))
        return R[N];
    return null;
  }, s;
}
const rn = ki();
function ie(e, t, n, r) {
  function i(o) {
    var s = Fu(o, t.map(Su));
    return Tu(e, t, o), n(s);
  }
  return i.isFactory = !0, i.fn = e, i.dependencies = t.slice().sort(), r && (i.meta = r), i;
}
function Tu(e, t, n) {
  var r = t.filter((o) => !xu(o)).every((o) => n[o] !== void 0);
  if (!r) {
    var i = t.filter((o) => n[o] === void 0);
    throw new Error('Cannot create function "'.concat(e, '", ') + "some dependencies are missing: ".concat(i.map((o) => '"'.concat(o, '"')).join(", "), "."));
  }
}
function xu(e) {
  return e && e[0] === "?";
}
function Su(e) {
  return e && e[0] === "?" ? e.slice(1) : e;
}
function Me(e) {
  return typeof e == "boolean" ? !0 : Number.isFinite(e) ? e === Math.round(e) : !1;
}
function An(e, t, n) {
  var r = {
    2: "0b",
    8: "0o",
    16: "0x"
  }, i = r[t], o = "";
  if (n) {
    if (n < 1)
      throw new Error("size must be in greater than 0");
    if (!Me(n))
      throw new Error("size must be an integer");
    if (e > 2 ** (n - 1) - 1 || e < -(2 ** (n - 1)))
      throw new Error("Value must be in range [-2^".concat(n - 1, ", 2^").concat(n - 1, "-1]"));
    if (!Me(e))
      throw new Error("Value must be an integer");
    e < 0 && (e = e + 2 ** n), o = "i".concat(n);
  }
  var s = "";
  return e < 0 && (e = -e, s = "-"), "".concat(s).concat(i).concat(e.toString(t)).concat(o);
}
function Mn(e, t) {
  if (typeof t == "function")
    return t(e);
  if (e === 1 / 0)
    return "Infinity";
  if (e === -1 / 0)
    return "-Infinity";
  if (isNaN(e))
    return "NaN";
  var {
    notation: n,
    precision: r,
    wordSize: i
  } = Oi(t);
  switch (n) {
    case "fixed":
      return Ru(e, r);
    case "exponential":
      return $i(e, r);
    case "engineering":
      return Bu(e, r);
    case "bin":
      return An(e, 2, i);
    case "oct":
      return An(e, 8, i);
    case "hex":
      return An(e, 16, i);
    case "auto":
      return Mu(e, r, t).replace(/((\.\d*?)(0+))($|e)/, function() {
        var o = arguments[2], s = arguments[4];
        return o !== "." ? o + s : s;
      });
    default:
      throw new Error('Unknown notation "' + n + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
  }
}
function Oi(e) {
  var t = "auto", n, r;
  if (e !== void 0)
    if (ce(e))
      n = e;
    else if (Ne(e))
      n = e.toNumber();
    else if (Yn(e))
      e.precision !== void 0 && (n = br(e.precision, () => {
        throw new Error('Option "precision" must be a number or BigNumber');
      })), e.wordSize !== void 0 && (r = br(e.wordSize, () => {
        throw new Error('Option "wordSize" must be a number or BigNumber');
      })), e.notation && (t = e.notation);
    else
      throw new Error("Unsupported type of options, number, BigNumber, or object expected");
  return {
    notation: t,
    precision: n,
    wordSize: r
  };
}
function mn(e) {
  var t = String(e).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
  if (!t)
    throw new SyntaxError("Invalid number " + e);
  var n = t[1], r = t[2], i = parseFloat(t[4] || "0"), o = r.indexOf(".");
  i += o !== -1 ? o - 1 : r.length - 1;
  var s = r.replace(".", "").replace(/^0*/, function(a) {
    return i -= a.length, "";
  }).replace(/0*$/, "").split("").map(function(a) {
    return parseInt(a);
  });
  return s.length === 0 && (s.push(0), i++), {
    sign: n,
    coefficients: s,
    exponent: i
  };
}
function Bu(e, t) {
  if (isNaN(e) || !Number.isFinite(e))
    return String(e);
  var n = mn(e), r = gn(n, t), i = r.exponent, o = r.coefficients, s = i % 3 === 0 ? i : i < 0 ? i - 3 - i % 3 : i - i % 3;
  if (ce(t))
    for (; t > o.length || i - s + 1 > o.length; )
      o.push(0);
  else
    for (var a = Math.abs(i - s) - (o.length - 1), u = 0; u < a; u++)
      o.push(0);
  for (var c = Math.abs(i - s), h = 1; c > 0; )
    h++, c--;
  var l = o.slice(h).join(""), d = ce(t) && l.length || l.match(/[1-9]/) ? "." + l : "", m = o.slice(0, h).join("") + d + "e" + (i >= 0 ? "+" : "") + s.toString();
  return r.sign + m;
}
function Ru(e, t) {
  if (isNaN(e) || !Number.isFinite(e))
    return String(e);
  var n = mn(e), r = typeof t == "number" ? gn(n, n.exponent + 1 + t) : n, i = r.coefficients, o = r.exponent + 1, s = o + (t || 0);
  return i.length < s && (i = i.concat(Rt(s - i.length))), o < 0 && (i = Rt(-o + 1).concat(i), o = 1), o < i.length && i.splice(o, 0, o === 0 ? "0." : "."), r.sign + i.join("");
}
function $i(e, t) {
  if (isNaN(e) || !Number.isFinite(Number(e)))
    return String(e);
  var n = mn(e), r = t ? gn(n, t) : n, i = r.coefficients, o = r.exponent;
  i.length < t && (i = i.concat(Rt(t - i.length)));
  var s = i.shift();
  return r.sign + s + (i.length > 0 ? "." + i.join("") : "") + "e" + (o >= 0 ? "+" : "") + o;
}
function Mu(e, t, n) {
  if (isNaN(e) || !Number.isFinite(e))
    return String(e);
  var r = Fr(n == null ? void 0 : n.lowerExp, -3), i = Fr(n == null ? void 0 : n.upperExp, 5), o = mn(e), s = t ? gn(o, t) : o;
  if (s.exponent < r || s.exponent >= i)
    return $i(e, t);
  var a = s.coefficients, u = s.exponent;
  a.length < t && (a = a.concat(Rt(t - a.length))), a = a.concat(Rt(u - a.length + 1 + (a.length < t ? t - a.length : 0))), a = Rt(-u).concat(a);
  var c = u > 0 ? u : 0;
  return c < a.length - 1 && a.splice(c + 1, 0, "."), s.sign + a.join("");
}
function gn(e, t) {
  for (var n = {
    sign: e.sign,
    coefficients: e.coefficients,
    exponent: e.exponent
  }, r = n.coefficients; t <= 0; )
    r.unshift(0), n.exponent++, t++;
  if (r.length > t) {
    var i = r.splice(t, r.length - t);
    if (i[0] >= 5) {
      var o = t - 1;
      for (r[o]++; r[o] === 10; )
        r.pop(), o === 0 && (r.unshift(0), n.exponent++, o++), o--, r[o]++;
    }
  }
  return n;
}
function Rt(e) {
  for (var t = [], n = 0; n < e; n++)
    t.push(0);
  return t;
}
function Nu(e) {
  return e.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length;
}
function on(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1e-8, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  if (n <= 0)
    throw new Error("Relative tolerance must be greater than 0");
  if (r < 0)
    throw new Error("Absolute tolerance must be at least 0");
  return isNaN(e) || isNaN(t) ? !1 : !Number.isFinite(e) || !Number.isFinite(t) ? e === t : e === t ? !0 : Math.abs(e - t) <= Math.max(n * Math.max(Math.abs(e), Math.abs(t)), r);
}
function br(e, t) {
  if (ce(e))
    return e;
  if (Ne(e))
    return e.toNumber();
  t();
}
function Fr(e, t) {
  return ce(e) ? e : Ne(e) ? e.toNumber() : t;
}
var zi = function() {
  return zi = rn.create, rn;
}, Pu = ["?BigNumber", "?Complex", "?DenseMatrix", "?Fraction"], Lu = /* @__PURE__ */ ie("typed", Pu, function(t) {
  var {
    BigNumber: n,
    Complex: r,
    DenseMatrix: i,
    Fraction: o
  } = t, s = zi();
  return s.clear(), s.addTypes([
    {
      name: "number",
      test: ce
    },
    {
      name: "Complex",
      test: Li
    },
    {
      name: "BigNumber",
      test: Ne
    },
    {
      name: "bigint",
      test: Ga
    },
    {
      name: "Fraction",
      test: Ii
    },
    {
      name: "Unit",
      test: Ui
    },
    // The following type matches a valid variable name, i.e., an alphanumeric
    // string starting with an alphabetic character. It is used (at least)
    // in the definition of the derivative() function, as the argument telling
    // what to differentiate over must (currently) be a variable.
    // TODO: deprecate the identifier type (it's not used anymore, see https://github.com/josdejong/mathjs/issues/3253)
    {
      name: "identifier",
      test: (a) => et && /^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD40-\uDD59\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC7\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDB0-\uDDDB\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD822\uD840-\uD868\uD86A-\uD86D\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD88C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDEA0-\uDEB8\uDEBB-\uDED3\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF2\uDFF3]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD1E\uDD80-\uDDF2]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDEC0-\uDEDE\uDEE0-\uDEE2\uDEE4\uDEE5\uDEE7-\uDEED\uDEF0-\uDEF4\uDEFE\uDEFF\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEAD\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD88D[\uDC00-\uDC79])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD40-\uDD59\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC7\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDB0-\uDDDB\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD822\uD840-\uD868\uD86A-\uD86D\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD88C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDEA0-\uDEB8\uDEBB-\uDED3\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF2\uDFF3]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD1E\uDD80-\uDDF2]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDEC0-\uDEDE\uDEE0-\uDEE2\uDEE4\uDEE5\uDEE7-\uDEED\uDEF0-\uDEF4\uDEFE\uDEFF\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEAD\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD88D[\uDC00-\uDC79])*$/.test(a)
    },
    {
      name: "string",
      test: et
    },
    {
      name: "Chain",
      test: wu
    },
    {
      name: "Array",
      test: be
    },
    {
      name: "Matrix",
      test: Pe
    },
    {
      name: "DenseMatrix",
      test: Ya
    },
    {
      name: "SparseMatrix",
      test: Ka
    },
    {
      name: "Range",
      test: qa
    },
    {
      name: "Index",
      test: Gn
    },
    {
      name: "boolean",
      test: Wa
    },
    {
      name: "ResultSet",
      test: Za
    },
    {
      name: "Help",
      test: Ja
    },
    {
      name: "function",
      test: Qa
    },
    {
      name: "Date",
      test: eu
    },
    {
      name: "RegExp",
      test: tu
    },
    {
      name: "null",
      test: ru
    },
    {
      name: "undefined",
      test: iu
    },
    {
      name: "AccessorNode",
      test: ou
    },
    {
      name: "ArrayNode",
      test: su
    },
    {
      name: "AssignmentNode",
      test: au
    },
    {
      name: "BlockNode",
      test: uu
    },
    {
      name: "ConditionalNode",
      test: cu
    },
    {
      name: "ConstantNode",
      test: lu
    },
    {
      name: "FunctionNode",
      test: hu
    },
    {
      name: "FunctionAssignmentNode",
      test: fu
    },
    {
      name: "IndexNode",
      test: du
    },
    {
      name: "Node",
      test: pu
    },
    {
      name: "ObjectNode",
      test: mu
    },
    {
      name: "OperatorNode",
      test: gu
    },
    {
      name: "ParenthesisNode",
      test: vu
    },
    {
      name: "RangeNode",
      test: Du
    },
    {
      name: "RelationalNode",
      test: Eu
    },
    {
      name: "SymbolNode",
      test: yu
    },
    {
      name: "Map",
      test: nu
    },
    {
      name: "Object",
      test: Yn
    }
    // order 'Object' last, it matches on other classes too
  ]), s.addConversions([{
    from: "number",
    to: "BigNumber",
    convert: function(u) {
      if (n || Yt(u), Nu(u) > 15)
        throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " + u + "). Use function bignumber(x) to convert to BigNumber.");
      return new n(u);
    }
  }, {
    from: "number",
    to: "Complex",
    convert: function(u) {
      return r || Kt(u), new r(u, 0);
    }
  }, {
    from: "BigNumber",
    to: "Complex",
    convert: function(u) {
      return r || Kt(u), new r(u.toNumber(), 0);
    }
  }, {
    from: "bigint",
    to: "number",
    convert: function(u) {
      if (u > Number.MAX_SAFE_INTEGER)
        throw new TypeError("Cannot implicitly convert bigint to number: value exceeds the max safe integer value (value: " + u + ")");
      return Number(u);
    }
  }, {
    from: "bigint",
    to: "BigNumber",
    convert: function(u) {
      return n || Yt(u), new n(u.toString());
    }
  }, {
    from: "bigint",
    to: "Fraction",
    convert: function(u) {
      return o || qt(u), new o(u);
    }
  }, {
    from: "Fraction",
    to: "BigNumber",
    convert: function(u) {
      throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.");
    }
  }, {
    from: "Fraction",
    to: "Complex",
    convert: function(u) {
      return r || Kt(u), new r(u.valueOf(), 0);
    }
  }, {
    from: "number",
    to: "Fraction",
    convert: function(u) {
      o || qt(u);
      var c = new o(u);
      if (c.valueOf() !== u)
        throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: " + u + "). Use function fraction(x) to convert to Fraction.");
      return c;
    }
  }, {
    // FIXME: add conversion from Fraction to number, for example for `sqrt(fraction(1,3))`
    //  from: 'Fraction',
    //  to: 'number',
    //  convert: function (x) {
    //    return x.valueOf()
    //  }
    // }, {
    from: "string",
    to: "number",
    convert: function(u) {
      var c = Number(u);
      if (isNaN(c))
        throw new Error('Cannot convert "' + u + '" to a number');
      return c;
    }
  }, {
    from: "string",
    to: "BigNumber",
    convert: function(u) {
      n || Yt(u);
      try {
        return new n(u);
      } catch {
        throw new Error('Cannot convert "' + u + '" to BigNumber');
      }
    }
  }, {
    from: "string",
    to: "bigint",
    convert: function(u) {
      try {
        return BigInt(u);
      } catch {
        throw new Error('Cannot convert "' + u + '" to BigInt');
      }
    }
  }, {
    from: "string",
    to: "Fraction",
    convert: function(u) {
      o || qt(u);
      try {
        return new o(u);
      } catch {
        throw new Error('Cannot convert "' + u + '" to Fraction');
      }
    }
  }, {
    from: "string",
    to: "Complex",
    convert: function(u) {
      r || Kt(u);
      try {
        return new r(u);
      } catch {
        throw new Error('Cannot convert "' + u + '" to Complex');
      }
    }
  }, {
    from: "boolean",
    to: "number",
    convert: function(u) {
      return +u;
    }
  }, {
    from: "boolean",
    to: "BigNumber",
    convert: function(u) {
      return n || Yt(u), new n(+u);
    }
  }, {
    from: "boolean",
    to: "bigint",
    convert: function(u) {
      return BigInt(+u);
    }
  }, {
    from: "boolean",
    to: "Fraction",
    convert: function(u) {
      return o || qt(u), new o(+u);
    }
  }, {
    from: "boolean",
    to: "string",
    convert: function(u) {
      return String(u);
    }
  }, {
    from: "Array",
    to: "Matrix",
    convert: function(u) {
      return i || Iu(), new i(u);
    }
  }, {
    from: "Matrix",
    to: "Array",
    convert: function(u) {
      return u.valueOf();
    }
  }]), s.onMismatch = (a, u, c) => {
    var h = s.createError(a, u, c);
    if (["wrongType", "mismatch"].includes(h.data.category) && u.length === 1 && nn(u[0]) && // check if the function can be unary:
    c.some((d) => !d.params.includes(","))) {
      var l = new TypeError("Function '".concat(a, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(a, ")'."));
      throw l.data = h.data, l;
    }
    throw h;
  }, s.onMismatch = (a, u, c) => {
    var h = s.createError(a, u, c);
    if (["wrongType", "mismatch"].includes(h.data.category) && u.length === 1 && nn(u[0]) && // check if the function can be unary:
    c.some((d) => !d.params.includes(","))) {
      var l = new TypeError("Function '".concat(a, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(a, ")'."));
      throw l.data = h.data, l;
    }
    throw h;
  }, s;
});
function Yt(e) {
  throw new Error("Cannot convert value ".concat(e, " into a BigNumber: no class 'BigNumber' provided"));
}
function Kt(e) {
  throw new Error("Cannot convert value ".concat(e, " into a Complex number: no class 'Complex' provided"));
}
function Iu() {
  throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided");
}
function qt(e) {
  throw new Error("Cannot convert value ".concat(e, " into a Fraction, no class 'Fraction' provided."));
}
/*!
 *  decimal.js v10.6.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var St = 9e15, vt = 1e9, Nn = "0123456789abcdef", sn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", an = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Pn = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed at run-time using the `Decimal.config` method.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used when rounding to `precision`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The modulo mode used when calculating the modulus: a mod n.
  // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
  // The remainder (r) is calculated as: r = a - n * q.
  //
  // UP         0 The remainder is positive if the dividend is negative, else is negative.
  // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
  // FLOOR      3 The remainder has the same sign as the divisor (Python %).
  // HALF_EVEN  6 The IEEE 754 remainder function.
  // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
  //
  // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
  // division (9) are commonly used for the modulus operation. The other rounding modes can also
  // be used, but they may not give useful results.
  modulo: 1,
  // 0 to 9
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -EXP_LIMIT
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to EXP_LIMIT
  // The minimum exponent value, beneath which underflow to zero occurs.
  // JavaScript numbers: -324  (5e-324)
  minE: -St,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: St,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Hi, at, ee = !0, vn = "[DecimalError] ", gt = vn + "Invalid argument: ", Vi = vn + "Precision limit exceeded", Xi = vn + "crypto unavailable", ji = "[object Decimal]", ke = Math.floor, Fe = Math.pow, Uu = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, ku = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Ou = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Gi = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Qe = 1e7, J = 7, $u = 9007199254740991, zu = sn.length - 1, Ln = an.length - 1, L = { toStringTag: ji };
L.absoluteValue = L.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), W(e);
};
L.ceil = function() {
  return W(new this.constructor(this), this.e + 1, 2);
};
L.clampedTo = L.clamp = function(e, t) {
  var n, r = this, i = r.constructor;
  if (e = new i(e), t = new i(t), !e.s || !t.s) return new i(NaN);
  if (e.gt(t)) throw Error(gt + t);
  return n = r.cmp(e), n < 0 ? e : r.cmp(t) > 0 ? t : new i(r);
};
L.comparedTo = L.cmp = function(e) {
  var t, n, r, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, u = o.s, c = e.s;
  if (!s || !a)
    return !u || !c ? NaN : u !== c ? u : s === a ? 0 : !s ^ u < 0 ? 1 : -1;
  if (!s[0] || !a[0]) return s[0] ? u : a[0] ? -c : 0;
  if (u !== c) return u;
  if (o.e !== e.e) return o.e > e.e ^ u < 0 ? 1 : -1;
  for (r = s.length, i = a.length, t = 0, n = r < i ? r : i; t < n; ++t)
    if (s[t] !== a[t]) return s[t] > a[t] ^ u < 0 ? 1 : -1;
  return r === i ? 0 : r > i ^ u < 0 ? 1 : -1;
};
L.cosine = L.cos = function() {
  var e, t, n = this, r = n.constructor;
  return n.d ? n.d[0] ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + J, r.rounding = 1, n = Hu(r, Zi(r, n)), r.precision = e, r.rounding = t, W(at == 2 || at == 3 ? n.neg() : n, e, t, !0)) : new r(1) : new r(NaN);
};
L.cubeRoot = L.cbrt = function() {
  var e, t, n, r, i, o, s, a, u, c, h = this, l = h.constructor;
  if (!h.isFinite() || h.isZero()) return new l(h);
  for (ee = !1, o = h.s * Fe(h.s * h, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (n = Le(h.d), e = h.e, (o = (e - n.length + 1) % 3) && (n += o == 1 || o == -2 ? "0" : "00"), o = Fe(n, 1 / 3), e = ke((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? n = "5e" + e : (n = o.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), r = new l(n), r.s = h.s) : r = new l(o.toString()), s = (e = l.precision) + 3; ; )
    if (a = r, u = a.times(a).times(a), c = u.plus(h), r = ve(c.plus(h).times(a), c.plus(u), s + 2, 1), Le(a.d).slice(0, s) === (n = Le(r.d)).slice(0, s))
      if (n = n.slice(s - 3, s + 1), n == "9999" || !i && n == "4999") {
        if (!i && (W(a, e + 1, 0), a.times(a).times(a).eq(h))) {
          r = a;
          break;
        }
        s += 4, i = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (W(r, e + 1, 1), t = !r.times(r).times(r).eq(h));
        break;
      }
  return ee = !0, W(r, e, l.rounding, t);
};
L.decimalPlaces = L.dp = function() {
  var e, t = this.d, n = NaN;
  if (t) {
    if (e = t.length - 1, n = (e - ke(this.e / J)) * J, e = t[e], e) for (; e % 10 == 0; e /= 10) n--;
    n < 0 && (n = 0);
  }
  return n;
};
L.dividedBy = L.div = function(e) {
  return ve(this, new this.constructor(e));
};
L.dividedToIntegerBy = L.divToInt = function(e) {
  var t = this, n = t.constructor;
  return W(ve(t, new n(e), 0, 1, 1), n.precision, n.rounding);
};
L.equals = L.eq = function(e) {
  return this.cmp(e) === 0;
};
L.floor = function() {
  return W(new this.constructor(this), this.e + 1, 3);
};
L.greaterThan = L.gt = function(e) {
  return this.cmp(e) > 0;
};
L.greaterThanOrEqualTo = L.gte = function(e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
L.hyperbolicCosine = L.cosh = function() {
  var e, t, n, r, i, o = this, s = o.constructor, a = new s(1);
  if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
  if (o.isZero()) return a;
  n = s.precision, r = s.rounding, s.precision = n + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / En(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = Mt(s, 1, o.times(t), new s(1), !0);
  for (var u, c = e, h = new s(8); c--; )
    u = o.times(o), o = a.minus(u.times(h.minus(u.times(h))));
  return W(o, s.precision = n, s.rounding = r, !0);
};
L.hyperbolicSine = L.sinh = function() {
  var e, t, n, r, i = this, o = i.constructor;
  if (!i.isFinite() || i.isZero()) return new o(i);
  if (t = o.precision, n = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, r = i.d.length, r < 3)
    i = Mt(o, 2, i, i, !0);
  else {
    e = 1.4 * Math.sqrt(r), e = e > 16 ? 16 : e | 0, i = i.times(1 / En(5, e)), i = Mt(o, 2, i, i, !0);
    for (var s, a = new o(5), u = new o(16), c = new o(20); e--; )
      s = i.times(i), i = i.times(a.plus(s.times(u.times(s).plus(c))));
  }
  return o.precision = t, o.rounding = n, W(i, t, n, !0);
};
L.hyperbolicTangent = L.tanh = function() {
  var e, t, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 7, r.rounding = 1, ve(n.sinh(), n.cosh(), r.precision = e, r.rounding = t)) : new r(n.s);
};
L.inverseCosine = L.acos = function() {
  var e = this, t = e.constructor, n = e.abs().cmp(1), r = t.precision, i = t.rounding;
  return n !== -1 ? n === 0 ? e.isNeg() ? tt(t, r, i) : new t(0) : new t(NaN) : e.isZero() ? tt(t, r + 4, i).times(0.5) : (t.precision = r + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = r, t.rounding = i, e.times(2));
};
L.inverseHyperbolicCosine = L.acosh = function() {
  var e, t, n = this, r = n.constructor;
  return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, ee = !1, n = n.times(n).minus(1).sqrt().plus(n), ee = !0, r.precision = e, r.rounding = t, n.ln()) : new r(n);
};
L.inverseHyperbolicSine = L.asinh = function() {
  var e, t, n = this, r = n.constructor;
  return !n.isFinite() || n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, ee = !1, n = n.times(n).plus(1).sqrt().plus(n), ee = !0, r.precision = e, r.rounding = t, n.ln());
};
L.inverseHyperbolicTangent = L.atanh = function() {
  var e, t, n, r, i = this, o = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, r = i.sd(), Math.max(r, e) < 2 * -i.e - 1 ? W(new o(i), e, t, !0) : (o.precision = n = r - i.e, i = ve(i.plus(1), new o(1).minus(i), n + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
};
L.inverseSine = L.asin = function() {
  var e, t, n, r, i = this, o = i.constructor;
  return i.isZero() ? new o(i) : (t = i.abs().cmp(1), n = o.precision, r = o.rounding, t !== -1 ? t === 0 ? (e = tt(o, n + 4, r).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = n + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = n, o.rounding = r, i.times(2)));
};
L.inverseTangent = L.atan = function() {
  var e, t, n, r, i, o, s, a, u, c = this, h = c.constructor, l = h.precision, d = h.rounding;
  if (c.isFinite()) {
    if (c.isZero())
      return new h(c);
    if (c.abs().eq(1) && l + 4 <= Ln)
      return s = tt(h, l + 4, d).times(0.25), s.s = c.s, s;
  } else {
    if (!c.s) return new h(NaN);
    if (l + 4 <= Ln)
      return s = tt(h, l + 4, d).times(0.5), s.s = c.s, s;
  }
  for (h.precision = a = l + 10, h.rounding = 1, n = Math.min(28, a / J + 2 | 0), e = n; e; --e) c = c.div(c.times(c).plus(1).sqrt().plus(1));
  for (ee = !1, t = Math.ceil(a / J), r = 1, u = c.times(c), s = new h(c), i = c; e !== -1; )
    if (i = i.times(u), o = s.minus(i.div(r += 2)), i = i.times(u), s = o.plus(i.div(r += 2)), s.d[t] !== void 0) for (e = t; s.d[e] === o.d[e] && e--; ) ;
  return n && (s = s.times(2 << n - 1)), ee = !0, W(s, h.precision = l, h.rounding = d, !0);
};
L.isFinite = function() {
  return !!this.d;
};
L.isInteger = L.isInt = function() {
  return !!this.d && ke(this.e / J) > this.d.length - 2;
};
L.isNaN = function() {
  return !this.s;
};
L.isNegative = L.isNeg = function() {
  return this.s < 0;
};
L.isPositive = L.isPos = function() {
  return this.s > 0;
};
L.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
L.lessThan = L.lt = function(e) {
  return this.cmp(e) < 0;
};
L.lessThanOrEqualTo = L.lte = function(e) {
  return this.cmp(e) < 1;
};
L.logarithm = L.log = function(e) {
  var t, n, r, i, o, s, a, u, c = this, h = c.constructor, l = h.precision, d = h.rounding, m = 5;
  if (e == null)
    e = new h(10), t = !0;
  else {
    if (e = new h(e), n = e.d, e.s < 0 || !n || !n[0] || e.eq(1)) return new h(NaN);
    t = e.eq(10);
  }
  if (n = c.d, c.s < 0 || !n || !n[0] || c.eq(1))
    return new h(n && !n[0] ? -1 / 0 : c.s != 1 ? NaN : n ? 0 : 1 / 0);
  if (t)
    if (n.length > 1)
      o = !0;
    else {
      for (i = n[0]; i % 10 === 0; ) i /= 10;
      o = i !== 1;
    }
  if (ee = !1, a = l + m, s = ht(c, a), r = t ? un(h, a + 10) : ht(e, a), u = ve(s, r, a, 1), $t(u.d, i = l, d))
    do
      if (a += 10, s = ht(c, a), r = t ? un(h, a + 10) : ht(e, a), u = ve(s, r, a, 1), !o) {
        +Le(u.d).slice(i + 1, i + 15) + 1 == 1e14 && (u = W(u, l + 1, 0));
        break;
      }
    while ($t(u.d, i += 10, d));
  return ee = !0, W(u, l, d);
};
L.minus = L.sub = function(e) {
  var t, n, r, i, o, s, a, u, c, h, l, d, m = this, v = m.constructor;
  if (e = new v(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new v(NaN) : m.d ? e.s = -e.s : e = new v(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (c = m.d, d = e.d, a = v.precision, u = v.rounding, !c[0] || !d[0]) {
    if (d[0]) e.s = -e.s;
    else if (c[0]) e = new v(m);
    else return new v(u === 3 ? -0 : 0);
    return ee ? W(e, a, u) : e;
  }
  if (n = ke(e.e / J), h = ke(m.e / J), c = c.slice(), o = h - n, o) {
    for (l = o < 0, l ? (t = c, o = -o, s = d.length) : (t = d, n = h, s = c.length), r = Math.max(Math.ceil(a / J), s) + 2, o > r && (o = r, t.length = 1), t.reverse(), r = o; r--; ) t.push(0);
    t.reverse();
  } else {
    for (r = c.length, s = d.length, l = r < s, l && (s = r), r = 0; r < s; r++)
      if (c[r] != d[r]) {
        l = c[r] < d[r];
        break;
      }
    o = 0;
  }
  for (l && (t = c, c = d, d = t, e.s = -e.s), s = c.length, r = d.length - s; r > 0; --r) c[s++] = 0;
  for (r = d.length; r > o; ) {
    if (c[--r] < d[r]) {
      for (i = r; i && c[--i] === 0; ) c[i] = Qe - 1;
      --c[i], c[r] += Qe;
    }
    c[r] -= d[r];
  }
  for (; c[--s] === 0; ) c.pop();
  for (; c[0] === 0; c.shift()) --n;
  return c[0] ? (e.d = c, e.e = Dn(c, n), ee ? W(e, a, u) : e) : new v(u === 3 ? -0 : 0);
};
L.modulo = L.mod = function(e) {
  var t, n = this, r = n.constructor;
  return e = new r(e), !n.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || n.d && !n.d[0] ? W(new r(n), r.precision, r.rounding) : (ee = !1, r.modulo == 9 ? (t = ve(n, e.abs(), 0, 3, 1), t.s *= e.s) : t = ve(n, e, 0, r.modulo, 1), t = t.times(e), ee = !0, n.minus(t));
};
L.naturalExponential = L.exp = function() {
  return In(this);
};
L.naturalLogarithm = L.ln = function() {
  return ht(this);
};
L.negated = L.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, W(e);
};
L.plus = L.add = function(e) {
  var t, n, r, i, o, s, a, u, c, h, l = this, d = l.constructor;
  if (e = new d(e), !l.d || !e.d)
    return !l.s || !e.s ? e = new d(NaN) : l.d || (e = new d(e.d || l.s === e.s ? l : NaN)), e;
  if (l.s != e.s)
    return e.s = -e.s, l.minus(e);
  if (c = l.d, h = e.d, a = d.precision, u = d.rounding, !c[0] || !h[0])
    return h[0] || (e = new d(l)), ee ? W(e, a, u) : e;
  if (o = ke(l.e / J), r = ke(e.e / J), c = c.slice(), i = o - r, i) {
    for (i < 0 ? (n = c, i = -i, s = h.length) : (n = h, r = o, s = c.length), o = Math.ceil(a / J), s = o > s ? o + 1 : s + 1, i > s && (i = s, n.length = 1), n.reverse(); i--; ) n.push(0);
    n.reverse();
  }
  for (s = c.length, i = h.length, s - i < 0 && (i = s, n = h, h = c, c = n), t = 0; i; )
    t = (c[--i] = c[i] + h[i] + t) / Qe | 0, c[i] %= Qe;
  for (t && (c.unshift(t), ++r), s = c.length; c[--s] == 0; ) c.pop();
  return e.d = c, e.e = Dn(c, r), ee ? W(e, a, u) : e;
};
L.precision = L.sd = function(e) {
  var t, n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(gt + e);
  return n.d ? (t = Yi(n.d), e && n.e + 1 > t && (t = n.e + 1)) : t = NaN, t;
};
L.round = function() {
  var e = this, t = e.constructor;
  return W(new t(e), e.e + 1, t.rounding);
};
L.sine = L.sin = function() {
  var e, t, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + J, r.rounding = 1, n = Xu(r, Zi(r, n)), r.precision = e, r.rounding = t, W(at > 2 ? n.neg() : n, e, t, !0)) : new r(NaN);
};
L.squareRoot = L.sqrt = function() {
  var e, t, n, r, i, o, s = this, a = s.d, u = s.e, c = s.s, h = s.constructor;
  if (c !== 1 || !a || !a[0])
    return new h(!c || c < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
  for (ee = !1, c = Math.sqrt(+s), c == 0 || c == 1 / 0 ? (t = Le(a), (t.length + u) % 2 == 0 && (t += "0"), c = Math.sqrt(t), u = ke((u + 1) / 2) - (u < 0 || u % 2), c == 1 / 0 ? t = "5e" + u : (t = c.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + u), r = new h(t)) : r = new h(c.toString()), n = (u = h.precision) + 3; ; )
    if (o = r, r = o.plus(ve(s, o, n + 2, 1)).times(0.5), Le(o.d).slice(0, n) === (t = Le(r.d)).slice(0, n))
      if (t = t.slice(n - 3, n + 1), t == "9999" || !i && t == "4999") {
        if (!i && (W(o, u + 1, 0), o.times(o).eq(s))) {
          r = o;
          break;
        }
        n += 4, i = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (W(r, u + 1, 1), e = !r.times(r).eq(s));
        break;
      }
  return ee = !0, W(r, u, h.rounding, e);
};
L.tangent = L.tan = function() {
  var e, t, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 10, r.rounding = 1, n = n.sin(), n.s = 1, n = ve(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0), r.precision = e, r.rounding = t, W(at == 2 || at == 4 ? n.neg() : n, e, t, !0)) : new r(NaN);
};
L.times = L.mul = function(e) {
  var t, n, r, i, o, s, a, u, c, h = this, l = h.constructor, d = h.d, m = (e = new l(e)).d;
  if (e.s *= h.s, !d || !d[0] || !m || !m[0])
    return new l(!e.s || d && !d[0] && !m || m && !m[0] && !d ? NaN : !d || !m ? e.s / 0 : e.s * 0);
  for (n = ke(h.e / J) + ke(e.e / J), u = d.length, c = m.length, u < c && (o = d, d = m, m = o, s = u, u = c, c = s), o = [], s = u + c, r = s; r--; ) o.push(0);
  for (r = c; --r >= 0; ) {
    for (t = 0, i = u + r; i > r; )
      a = o[i] + m[r] * d[i - r - 1] + t, o[i--] = a % Qe | 0, t = a / Qe | 0;
    o[i] = (o[i] + t) % Qe | 0;
  }
  for (; !o[--s]; ) o.pop();
  return t ? ++n : o.shift(), e.d = o, e.e = Dn(o, n), ee ? W(e, l.precision, l.rounding) : e;
};
L.toBinary = function(e, t) {
  return qn(this, 2, e, t);
};
L.toDecimalPlaces = L.toDP = function(e, t) {
  var n = this, r = n.constructor;
  return n = new r(n), e === void 0 ? n : (je(e, 0, vt), t === void 0 ? t = r.rounding : je(t, 0, 8), W(n, e + n.e + 1, t));
};
L.toExponential = function(e, t) {
  var n, r = this, i = r.constructor;
  return e === void 0 ? n = nt(r, !0) : (je(e, 0, vt), t === void 0 ? t = i.rounding : je(t, 0, 8), r = W(new i(r), e + 1, t), n = nt(r, !0, e + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
};
L.toFixed = function(e, t) {
  var n, r, i = this, o = i.constructor;
  return e === void 0 ? n = nt(i) : (je(e, 0, vt), t === void 0 ? t = o.rounding : je(t, 0, 8), r = W(new o(i), e + i.e + 1, t), n = nt(r, !1, e + r.e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n;
};
L.toFraction = function(e) {
  var t, n, r, i, o, s, a, u, c, h, l, d, m = this, v = m.d, f = m.constructor;
  if (!v) return new f(m);
  if (c = n = new f(1), r = u = new f(0), t = new f(r), o = t.e = Yi(v) - m.e - 1, s = o % J, t.d[0] = Fe(10, s < 0 ? J + s : s), e == null)
    e = o > 0 ? t : c;
  else {
    if (a = new f(e), !a.isInt() || a.lt(c)) throw Error(gt + a);
    e = a.gt(t) ? o > 0 ? t : c : a;
  }
  for (ee = !1, a = new f(Le(v)), h = f.precision, f.precision = o = v.length * J * 2; l = ve(a, t, 0, 1, 1), i = n.plus(l.times(r)), i.cmp(e) != 1; )
    n = r, r = i, i = c, c = u.plus(l.times(i)), u = i, i = t, t = a.minus(l.times(i)), a = i;
  return i = ve(e.minus(n), r, 0, 1, 1), u = u.plus(i.times(c)), n = n.plus(i.times(r)), u.s = c.s = m.s, d = ve(c, r, o, 1).minus(m).abs().cmp(ve(u, n, o, 1).minus(m).abs()) < 1 ? [c, r] : [u, n], f.precision = h, ee = !0, d;
};
L.toHexadecimal = L.toHex = function(e, t) {
  return qn(this, 16, e, t);
};
L.toNearest = function(e, t) {
  var n = this, r = n.constructor;
  if (n = new r(n), e == null) {
    if (!n.d) return n;
    e = new r(1), t = r.rounding;
  } else {
    if (e = new r(e), t === void 0 ? t = r.rounding : je(t, 0, 8), !n.d) return e.s ? n : e;
    if (!e.d)
      return e.s && (e.s = n.s), e;
  }
  return e.d[0] ? (ee = !1, n = ve(n, e, 0, t, 1).times(e), ee = !0, W(n)) : (e.s = n.s, n = e), n;
};
L.toNumber = function() {
  return +this;
};
L.toOctal = function(e, t) {
  return qn(this, 8, e, t);
};
L.toPower = L.pow = function(e) {
  var t, n, r, i, o, s, a = this, u = a.constructor, c = +(e = new u(e));
  if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new u(Fe(+a, c));
  if (a = new u(a), a.eq(1)) return a;
  if (r = u.precision, o = u.rounding, e.eq(1)) return W(a, r, o);
  if (t = ke(e.e / J), t >= e.d.length - 1 && (n = c < 0 ? -c : c) <= $u)
    return i = Ki(u, a, n, r), e.s < 0 ? new u(1).div(i) : W(i, r, o);
  if (s = a.s, s < 0) {
    if (t < e.d.length - 1) return new u(NaN);
    if (e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
      return a.s = s, a;
  }
  return n = Fe(+a, c), t = n == 0 || !isFinite(n) ? ke(c * (Math.log("0." + Le(a.d)) / Math.LN10 + a.e + 1)) : new u(n + "").e, t > u.maxE + 1 || t < u.minE - 1 ? new u(t > 0 ? s / 0 : 0) : (ee = !1, u.rounding = a.s = 1, n = Math.min(12, (t + "").length), i = In(e.times(ht(a, r + n)), r), i.d && (i = W(i, r + 5, 1), $t(i.d, r, o) && (t = r + 10, i = W(In(e.times(ht(a, t + n)), t), t + 5, 1), +Le(i.d).slice(r + 1, r + 15) + 1 == 1e14 && (i = W(i, r + 1, 0)))), i.s = s, ee = !0, u.rounding = o, W(i, r, o));
};
L.toPrecision = function(e, t) {
  var n, r = this, i = r.constructor;
  return e === void 0 ? n = nt(r, r.e <= i.toExpNeg || r.e >= i.toExpPos) : (je(e, 1, vt), t === void 0 ? t = i.rounding : je(t, 0, 8), r = W(new i(r), e, t), n = nt(r, e <= r.e || r.e <= i.toExpNeg, e)), r.isNeg() && !r.isZero() ? "-" + n : n;
};
L.toSignificantDigits = L.toSD = function(e, t) {
  var n = this, r = n.constructor;
  return e === void 0 ? (e = r.precision, t = r.rounding) : (je(e, 1, vt), t === void 0 ? t = r.rounding : je(t, 0, 8)), W(new r(n), e, t);
};
L.toString = function() {
  var e = this, t = e.constructor, n = nt(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + n : n;
};
L.truncated = L.trunc = function() {
  return W(new this.constructor(this), this.e + 1, 1);
};
L.valueOf = L.toJSON = function() {
  var e = this, t = e.constructor, n = nt(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + n : n;
};
function Le(e) {
  var t, n, r, i = e.length - 1, o = "", s = e[0];
  if (i > 0) {
    for (o += s, t = 1; t < i; t++)
      r = e[t] + "", n = J - r.length, n && (o += lt(n)), o += r;
    s = e[t], r = s + "", n = J - r.length, n && (o += lt(n));
  } else if (s === 0)
    return "0";
  for (; s % 10 === 0; ) s /= 10;
  return o + s;
}
function je(e, t, n) {
  if (e !== ~~e || e < t || e > n)
    throw Error(gt + e);
}
function $t(e, t, n, r) {
  var i, o, s, a;
  for (o = e[0]; o >= 10; o /= 10) --t;
  return --t < 0 ? (t += J, i = 0) : (i = Math.ceil((t + 1) / J), t %= J), o = Fe(10, J - t), a = e[i] % o | 0, r == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = n < 4 && a == 99999 || n > 3 && a == 49999 || a == 5e4 || a == 0) : s = (n < 4 && a + 1 == o || n > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == Fe(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1e3 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (r || n < 4) && a == 9999 || !r && n > 3 && a == 4999) : s = ((r || n < 4) && a + 1 == o || !r && n > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == Fe(10, t - 3) - 1, s;
}
function Wt(e, t, n) {
  for (var r, i = [0], o, s = 0, a = e.length; s < a; ) {
    for (o = i.length; o--; ) i[o] *= t;
    for (i[0] += Nn.indexOf(e.charAt(s++)), r = 0; r < i.length; r++)
      i[r] > n - 1 && (i[r + 1] === void 0 && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n);
  }
  return i.reverse();
}
function Hu(e, t) {
  var n, r, i;
  if (t.isZero()) return t;
  r = t.d.length, r < 32 ? (n = Math.ceil(r / 3), i = (1 / En(4, n)).toString()) : (n = 16, i = "2.3283064365386962890625e-10"), e.precision += n, t = Mt(e, 1, t.times(i), new e(1));
  for (var o = n; o--; ) {
    var s = t.times(t);
    t = s.times(s).minus(s).times(8).plus(1);
  }
  return e.precision -= n, t;
}
var ve = /* @__PURE__ */ function() {
  function e(r, i, o) {
    var s, a = 0, u = r.length;
    for (r = r.slice(); u--; )
      s = r[u] * i + a, r[u] = s % o | 0, a = s / o | 0;
    return a && r.unshift(a), r;
  }
  function t(r, i, o, s) {
    var a, u;
    if (o != s)
      u = o > s ? 1 : -1;
    else
      for (a = u = 0; a < o; a++)
        if (r[a] != i[a]) {
          u = r[a] > i[a] ? 1 : -1;
          break;
        }
    return u;
  }
  function n(r, i, o, s) {
    for (var a = 0; o--; )
      r[o] -= a, a = r[o] < i[o] ? 1 : 0, r[o] = a * s + r[o] - i[o];
    for (; !r[0] && r.length > 1; ) r.shift();
  }
  return function(r, i, o, s, a, u) {
    var c, h, l, d, m, v, f, y, C, E, p, w, g, D, A, _, b, T, S, M, j = r.constructor, $ = r.s == i.s ? 1 : -1, X = r.d, I = i.d;
    if (!X || !X[0] || !I || !I[0])
      return new j(
        // Return NaN if either NaN, or both Infinity or 0.
        !r.s || !i.s || (X ? I && X[0] == I[0] : !I) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          X && X[0] == 0 || !I ? $ * 0 : $ / 0
        )
      );
    for (u ? (m = 1, h = r.e - i.e) : (u = Qe, m = J, h = ke(r.e / m) - ke(i.e / m)), S = I.length, b = X.length, C = new j($), E = C.d = [], l = 0; I[l] == (X[l] || 0); l++) ;
    if (I[l] > (X[l] || 0) && h--, o == null ? (D = o = j.precision, s = j.rounding) : a ? D = o + (r.e - i.e) + 1 : D = o, D < 0)
      E.push(1), v = !0;
    else {
      if (D = D / m + 2 | 0, l = 0, S == 1) {
        for (d = 0, I = I[0], D++; (l < b || d) && D--; l++)
          A = d * u + (X[l] || 0), E[l] = A / I | 0, d = A % I | 0;
        v = d || l < b;
      } else {
        for (d = u / (I[0] + 1) | 0, d > 1 && (I = e(I, d, u), X = e(X, d, u), S = I.length, b = X.length), _ = S, p = X.slice(0, S), w = p.length; w < S; ) p[w++] = 0;
        M = I.slice(), M.unshift(0), T = I[0], I[1] >= u / 2 && ++T;
        do
          d = 0, c = t(I, p, S, w), c < 0 ? (g = p[0], S != w && (g = g * u + (p[1] || 0)), d = g / T | 0, d > 1 ? (d >= u && (d = u - 1), f = e(I, d, u), y = f.length, w = p.length, c = t(f, p, y, w), c == 1 && (d--, n(f, S < y ? M : I, y, u))) : (d == 0 && (c = d = 1), f = I.slice()), y = f.length, y < w && f.unshift(0), n(p, f, w, u), c == -1 && (w = p.length, c = t(I, p, S, w), c < 1 && (d++, n(p, S < w ? M : I, w, u))), w = p.length) : c === 0 && (d++, p = [0]), E[l++] = d, c && p[0] ? p[w++] = X[_] || 0 : (p = [X[_]], w = 1);
        while ((_++ < b || p[0] !== void 0) && D--);
        v = p[0] !== void 0;
      }
      E[0] || E.shift();
    }
    if (m == 1)
      C.e = h, Hi = v;
    else {
      for (l = 1, d = E[0]; d >= 10; d /= 10) l++;
      C.e = l + h * m - 1, W(C, a ? o + C.e + 1 : o, s, v);
    }
    return C;
  };
}();
function W(e, t, n, r) {
  var i, o, s, a, u, c, h, l, d, m = e.constructor;
  e: if (t != null) {
    if (l = e.d, !l) return e;
    for (i = 1, a = l[0]; a >= 10; a /= 10) i++;
    if (o = t - i, o < 0)
      o += J, s = t, h = l[d = 0], u = h / Fe(10, i - s - 1) % 10 | 0;
    else if (d = Math.ceil((o + 1) / J), a = l.length, d >= a)
      if (r) {
        for (; a++ <= d; ) l.push(0);
        h = u = 0, i = 1, o %= J, s = o - J + 1;
      } else
        break e;
    else {
      for (h = a = l[d], i = 1; a >= 10; a /= 10) i++;
      o %= J, s = o - J + i, u = s < 0 ? 0 : h / Fe(10, i - s - 1) % 10 | 0;
    }
    if (r = r || t < 0 || l[d + 1] !== void 0 || (s < 0 ? h : h % Fe(10, i - s - 1)), c = n < 4 ? (u || r) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (n == 4 || r || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
    (o > 0 ? s > 0 ? h / Fe(10, i - s) : 0 : l[d - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !l[0])
      return l.length = 0, c ? (t -= e.e + 1, l[0] = Fe(10, (J - t % J) % J), e.e = -t || 0) : l[0] = e.e = 0, e;
    if (o == 0 ? (l.length = d, a = 1, d--) : (l.length = d + 1, a = Fe(10, J - o), l[d] = s > 0 ? (h / Fe(10, i - s) % Fe(10, s) | 0) * a : 0), c)
      for (; ; )
        if (d == 0) {
          for (o = 1, s = l[0]; s >= 10; s /= 10) o++;
          for (s = l[0] += a, a = 1; s >= 10; s /= 10) a++;
          o != a && (e.e++, l[0] == Qe && (l[0] = 1));
          break;
        } else {
          if (l[d] += a, l[d] != Qe) break;
          l[d--] = 0, a = 1;
        }
    for (o = l.length; l[--o] === 0; ) l.pop();
  }
  return ee && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function nt(e, t, n) {
  if (!e.isFinite()) return Wi(e);
  var r, i = e.e, o = Le(e.d), s = o.length;
  return t ? (n && (r = n - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + lt(r) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + lt(-i - 1) + o, n && (r = n - s) > 0 && (o += lt(r))) : i >= s ? (o += lt(i + 1 - s), n && (r = n - i - 1) > 0 && (o = o + "." + lt(r))) : ((r = i + 1) < s && (o = o.slice(0, r) + "." + o.slice(r)), n && (r = n - s) > 0 && (i + 1 === s && (o += "."), o += lt(r))), o;
}
function Dn(e, t) {
  var n = e[0];
  for (t *= J; n >= 10; n /= 10) t++;
  return t;
}
function un(e, t, n) {
  if (t > zu)
    throw ee = !0, n && (e.precision = n), Error(Vi);
  return W(new e(sn), t, 1, !0);
}
function tt(e, t, n) {
  if (t > Ln) throw Error(Vi);
  return W(new e(an), t, n, !0);
}
function Yi(e) {
  var t = e.length - 1, n = t * J + 1;
  if (t = e[t], t) {
    for (; t % 10 == 0; t /= 10) n--;
    for (t = e[0]; t >= 10; t /= 10) n++;
  }
  return n;
}
function lt(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Ki(e, t, n, r) {
  var i, o = new e(1), s = Math.ceil(r / J + 4);
  for (ee = !1; ; ) {
    if (n % 2 && (o = o.times(t), Ar(o.d, s) && (i = !0)), n = ke(n / 2), n === 0) {
      n = o.d.length - 1, i && o.d[n] === 0 && ++o.d[n];
      break;
    }
    t = t.times(t), Ar(t.d, s);
  }
  return ee = !0, o;
}
function _r(e) {
  return e.d[e.d.length - 1] & 1;
}
function qi(e, t, n) {
  for (var r, i, o = new e(t[0]), s = 0; ++s < t.length; ) {
    if (i = new e(t[s]), !i.s) {
      o = i;
      break;
    }
    r = o.cmp(i), (r === n || r === 0 && o.s === n) && (o = i);
  }
  return o;
}
function In(e, t) {
  var n, r, i, o, s, a, u, c = 0, h = 0, l = 0, d = e.constructor, m = d.rounding, v = d.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (t == null ? (ee = !1, u = v) : u = t, a = new d(0.03125); e.e > -2; )
    e = e.times(a), l += 5;
  for (r = Math.log(Fe(2, l)) / Math.LN10 * 2 + 5 | 0, u += r, n = o = s = new d(1), d.precision = u; ; ) {
    if (o = W(o.times(e), u, 1), n = n.times(++h), a = s.plus(ve(o, n, u, 1)), Le(a.d).slice(0, u) === Le(s.d).slice(0, u)) {
      for (i = l; i--; ) s = W(s.times(s), u, 1);
      if (t == null)
        if (c < 3 && $t(s.d, u - r, m, c))
          d.precision = u += 10, n = o = a = new d(1), h = 0, c++;
        else
          return W(s, d.precision = v, m, ee = !0);
      else
        return d.precision = v, s;
    }
    s = a;
  }
}
function ht(e, t) {
  var n, r, i, o, s, a, u, c, h, l, d, m = 1, v = 10, f = e, y = f.d, C = f.constructor, E = C.rounding, p = C.precision;
  if (f.s < 0 || !y || !y[0] || !f.e && y[0] == 1 && y.length == 1)
    return new C(y && !y[0] ? -1 / 0 : f.s != 1 ? NaN : y ? 0 : f);
  if (t == null ? (ee = !1, h = p) : h = t, C.precision = h += v, n = Le(y), r = n.charAt(0), Math.abs(o = f.e) < 15e14) {
    for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3; )
      f = f.times(e), n = Le(f.d), r = n.charAt(0), m++;
    o = f.e, r > 1 ? (f = new C("0." + n), o++) : f = new C(r + "." + n.slice(1));
  } else
    return c = un(C, h + 2, p).times(o + ""), f = ht(new C(r + "." + n.slice(1)), h - v).plus(c), C.precision = p, t == null ? W(f, p, E, ee = !0) : f;
  for (l = f, u = s = f = ve(f.minus(1), f.plus(1), h, 1), d = W(f.times(f), h, 1), i = 3; ; ) {
    if (s = W(s.times(d), h, 1), c = u.plus(ve(s, new C(i), h, 1)), Le(c.d).slice(0, h) === Le(u.d).slice(0, h))
      if (u = u.times(2), o !== 0 && (u = u.plus(un(C, h + 2, p).times(o + ""))), u = ve(u, new C(m), h, 1), t == null)
        if ($t(u.d, h - v, E, a))
          C.precision = h += v, c = s = f = ve(l.minus(1), l.plus(1), h, 1), d = W(f.times(f), h, 1), i = a = 1;
        else
          return W(u, C.precision = p, E, ee = !0);
      else
        return C.precision = p, u;
    u = c, i += 2;
  }
}
function Wi(e) {
  return String(e.s * e.s / 0);
}
function Zt(e, t) {
  var n, r, i;
  for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charCodeAt(r) === 48; r++) ;
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i) ;
  if (t = t.slice(r, i), t) {
    if (i -= r, e.e = n = n - r - 1, e.d = [], r = (n + 1) % J, n < 0 && (r += J), r < i) {
      for (r && e.d.push(+t.slice(0, r)), i -= J; r < i; ) e.d.push(+t.slice(r, r += J));
      t = t.slice(r), r = J - t.length;
    } else
      r -= i;
    for (; r--; ) t += "0";
    e.d.push(+t), ee && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function Vu(e, t) {
  var n, r, i, o, s, a, u, c, h;
  if (t.indexOf("_") > -1) {
    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), Gi.test(t)) return Zt(e, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (ku.test(t))
    n = 16, t = t.toLowerCase();
  else if (Uu.test(t))
    n = 2;
  else if (Ou.test(t))
    n = 8;
  else
    throw Error(gt + t);
  for (o = t.search(/p/i), o > 0 ? (u = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, r = e.constructor, s && (t = t.replace(".", ""), a = t.length, o = a - o, i = Ki(r, new r(n), o, o * 2)), c = Wt(t, n, Qe), h = c.length - 1, o = h; c[o] === 0; --o) c.pop();
  return o < 0 ? new r(e.s * 0) : (e.e = Dn(c, h), e.d = c, ee = !1, s && (e = ve(e, i, a * 4)), u && (e = e.times(Math.abs(u) < 54 ? Fe(2, u) : Nt.pow(2, u))), ee = !0, e);
}
function Xu(e, t) {
  var n, r = t.d.length;
  if (r < 3)
    return t.isZero() ? t : Mt(e, 2, t, t);
  n = 1.4 * Math.sqrt(r), n = n > 16 ? 16 : n | 0, t = t.times(1 / En(5, n)), t = Mt(e, 2, t, t);
  for (var i, o = new e(5), s = new e(16), a = new e(20); n--; )
    i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a))));
  return t;
}
function Mt(e, t, n, r, i) {
  var o, s, a, u, c = e.precision, h = Math.ceil(c / J);
  for (ee = !1, u = n.times(n), a = new e(r); ; ) {
    if (s = ve(a.times(u), new e(t++ * t++), c, 1), a = i ? r.plus(s) : r.minus(s), r = ve(s.times(u), new e(t++ * t++), c, 1), s = a.plus(r), s.d[h] !== void 0) {
      for (o = h; s.d[o] === a.d[o] && o--; ) ;
      if (o == -1) break;
    }
    o = a, a = r, r = s, s = o;
  }
  return ee = !0, s.d.length = h + 1, s;
}
function En(e, t) {
  for (var n = e; --t; ) n *= e;
  return n;
}
function Zi(e, t) {
  var n, r = t.s < 0, i = tt(e, e.precision, 1), o = i.times(0.5);
  if (t = t.abs(), t.lte(o))
    return at = r ? 4 : 1, t;
  if (n = t.divToInt(i), n.isZero())
    at = r ? 3 : 2;
  else {
    if (t = t.minus(n.times(i)), t.lte(o))
      return at = _r(n) ? r ? 2 : 3 : r ? 4 : 1, t;
    at = _r(n) ? r ? 1 : 4 : r ? 3 : 2;
  }
  return t.minus(i).abs();
}
function qn(e, t, n, r) {
  var i, o, s, a, u, c, h, l, d, m = e.constructor, v = n !== void 0;
  if (v ? (je(n, 1, vt), r === void 0 ? r = m.rounding : je(r, 0, 8)) : (n = m.precision, r = m.rounding), !e.isFinite())
    h = Wi(e);
  else {
    for (h = nt(e), s = h.indexOf("."), v ? (i = 2, t == 16 ? n = n * 4 - 3 : t == 8 && (n = n * 3 - 2)) : i = t, s >= 0 && (h = h.replace(".", ""), d = new m(1), d.e = h.length - s, d.d = Wt(nt(d), 10, i), d.e = d.d.length), l = Wt(h, 10, i), o = u = l.length; l[--u] == 0; ) l.pop();
    if (!l[0])
      h = v ? "0p+0" : "0";
    else {
      if (s < 0 ? o-- : (e = new m(e), e.d = l, e.e = o, e = ve(e, d, n, r, 0, i), l = e.d, o = e.e, c = Hi), s = l[n], a = i / 2, c = c || l[n + 1] !== void 0, c = r < 4 ? (s !== void 0 || c) && (r === 0 || r === (e.s < 0 ? 3 : 2)) : s > a || s === a && (r === 4 || c || r === 6 && l[n - 1] & 1 || r === (e.s < 0 ? 8 : 7)), l.length = n, c)
        for (; ++l[--n] > i - 1; )
          l[n] = 0, n || (++o, l.unshift(1));
      for (u = l.length; !l[u - 1]; --u) ;
      for (s = 0, h = ""; s < u; s++) h += Nn.charAt(l[s]);
      if (v) {
        if (u > 1)
          if (t == 16 || t == 8) {
            for (s = t == 16 ? 4 : 3, --u; u % s; u++) h += "0";
            for (l = Wt(h, i, t), u = l.length; !l[u - 1]; --u) ;
            for (s = 1, h = "1."; s < u; s++) h += Nn.charAt(l[s]);
          } else
            h = h.charAt(0) + "." + h.slice(1);
        h = h + (o < 0 ? "p" : "p+") + o;
      } else if (o < 0) {
        for (; ++o; ) h = "0" + h;
        h = "0." + h;
      } else if (++o > u) for (o -= u; o--; ) h += "0";
      else o < u && (h = h.slice(0, o) + "." + h.slice(o));
    }
    h = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + h;
  }
  return e.s < 0 ? "-" + h : h;
}
function Ar(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function ju(e) {
  return new this(e).abs();
}
function Gu(e) {
  return new this(e).acos();
}
function Yu(e) {
  return new this(e).acosh();
}
function Ku(e, t) {
  return new this(e).plus(t);
}
function qu(e) {
  return new this(e).asin();
}
function Wu(e) {
  return new this(e).asinh();
}
function Zu(e) {
  return new this(e).atan();
}
function Ju(e) {
  return new this(e).atanh();
}
function Qu(e, t) {
  e = new this(e), t = new this(t);
  var n, r = this.precision, i = this.rounding, o = r + 4;
  return !e.s || !t.s ? n = new this(NaN) : !e.d && !t.d ? (n = tt(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), n.s = e.s) : !t.d || e.isZero() ? (n = t.s < 0 ? tt(this, r, i) : new this(0), n.s = e.s) : !e.d || t.isZero() ? (n = tt(this, o, 1).times(0.5), n.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, n = this.atan(ve(e, t, o, 1)), t = tt(this, o, 1), this.precision = r, this.rounding = i, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(ve(e, t, o, 1)), n;
}
function ec(e) {
  return new this(e).cbrt();
}
function tc(e) {
  return W(e = new this(e), e.e + 1, 2);
}
function nc(e, t, n) {
  return new this(e).clamp(t, n);
}
function rc(e) {
  if (!e || typeof e != "object") throw Error(vn + "Object expected");
  var t, n, r, i = e.defaults === !0, o = [
    "precision",
    1,
    vt,
    "rounding",
    0,
    8,
    "toExpNeg",
    -St,
    0,
    "toExpPos",
    0,
    St,
    "maxE",
    0,
    St,
    "minE",
    -St,
    0,
    "modulo",
    0,
    9
  ];
  for (t = 0; t < o.length; t += 3)
    if (n = o[t], i && (this[n] = Pn[n]), (r = e[n]) !== void 0)
      if (ke(r) === r && r >= o[t + 1] && r <= o[t + 2]) this[n] = r;
      else throw Error(gt + n + ": " + r);
  if (n = "crypto", i && (this[n] = Pn[n]), (r = e[n]) !== void 0)
    if (r === !0 || r === !1 || r === 0 || r === 1)
      if (r)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[n] = !0;
        else
          throw Error(Xi);
      else
        this[n] = !1;
    else
      throw Error(gt + n + ": " + r);
  return this;
}
function ic(e) {
  return new this(e).cos();
}
function oc(e) {
  return new this(e).cosh();
}
function Ji(e) {
  var t, n, r;
  function i(o) {
    var s, a, u, c = this;
    if (!(c instanceof i)) return new i(o);
    if (c.constructor = i, Tr(o)) {
      c.s = o.s, ee ? !o.d || o.e > i.maxE ? (c.e = NaN, c.d = null) : o.e < i.minE ? (c.e = 0, c.d = [0]) : (c.e = o.e, c.d = o.d.slice()) : (c.e = o.e, c.d = o.d ? o.d.slice() : o.d);
      return;
    }
    if (u = typeof o, u === "number") {
      if (o === 0) {
        c.s = 1 / o < 0 ? -1 : 1, c.e = 0, c.d = [0];
        return;
      }
      if (o < 0 ? (o = -o, c.s = -1) : c.s = 1, o === ~~o && o < 1e7) {
        for (s = 0, a = o; a >= 10; a /= 10) s++;
        ee ? s > i.maxE ? (c.e = NaN, c.d = null) : s < i.minE ? (c.e = 0, c.d = [0]) : (c.e = s, c.d = [o]) : (c.e = s, c.d = [o]);
        return;
      }
      if (o * 0 !== 0) {
        o || (c.s = NaN), c.e = NaN, c.d = null;
        return;
      }
      return Zt(c, o.toString());
    }
    if (u === "string")
      return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), c.s = -1) : (a === 43 && (o = o.slice(1)), c.s = 1), Gi.test(o) ? Zt(c, o) : Vu(c, o);
    if (u === "bigint")
      return o < 0 ? (o = -o, c.s = -1) : c.s = 1, Zt(c, o.toString());
    throw Error(gt + o);
  }
  if (i.prototype = L, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = rc, i.clone = Ji, i.isDecimal = Tr, i.abs = ju, i.acos = Gu, i.acosh = Yu, i.add = Ku, i.asin = qu, i.asinh = Wu, i.atan = Zu, i.atanh = Ju, i.atan2 = Qu, i.cbrt = ec, i.ceil = tc, i.clamp = nc, i.cos = ic, i.cosh = oc, i.div = sc, i.exp = ac, i.floor = uc, i.hypot = cc, i.ln = lc, i.log = fc, i.log10 = dc, i.log2 = hc, i.max = pc, i.min = mc, i.mod = gc, i.mul = vc, i.pow = Dc, i.random = Ec, i.round = yc, i.sign = wc, i.sin = Cc, i.sinh = bc, i.sqrt = Fc, i.sub = _c, i.sum = Ac, i.tan = Tc, i.tanh = xc, i.trunc = Sc, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < r.length; ) e.hasOwnProperty(n = r[t++]) || (e[n] = this[n]);
  return i.config(e), i;
}
function sc(e, t) {
  return new this(e).div(t);
}
function ac(e) {
  return new this(e).exp();
}
function uc(e) {
  return W(e = new this(e), e.e + 1, 3);
}
function cc() {
  var e, t, n = new this(0);
  for (ee = !1, e = 0; e < arguments.length; )
    if (t = new this(arguments[e++]), t.d)
      n.d && (n = n.plus(t.times(t)));
    else {
      if (t.s)
        return ee = !0, new this(1 / 0);
      n = t;
    }
  return ee = !0, n.sqrt();
}
function Tr(e) {
  return e instanceof Nt || e && e.toStringTag === ji || !1;
}
function lc(e) {
  return new this(e).ln();
}
function fc(e, t) {
  return new this(e).log(t);
}
function hc(e) {
  return new this(e).log(2);
}
function dc(e) {
  return new this(e).log(10);
}
function pc() {
  return qi(this, arguments, -1);
}
function mc() {
  return qi(this, arguments, 1);
}
function gc(e, t) {
  return new this(e).mod(t);
}
function vc(e, t) {
  return new this(e).mul(t);
}
function Dc(e, t) {
  return new this(e).pow(t);
}
function Ec(e) {
  var t, n, r, i, o = 0, s = new this(1), a = [];
  if (e === void 0 ? e = this.precision : je(e, 1, vt), r = Math.ceil(e / J), this.crypto)
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(r)); o < r; )
        i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes(r *= 4); o < r; )
        i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4);
      o = r / 4;
    } else
      throw Error(Xi);
  else for (; o < r; ) a[o++] = Math.random() * 1e7 | 0;
  for (r = a[--o], e %= J, r && e && (i = Fe(10, J - e), a[o] = (r / i | 0) * i); a[o] === 0; o--) a.pop();
  if (o < 0)
    n = 0, a = [0];
  else {
    for (n = -1; a[0] === 0; n -= J) a.shift();
    for (r = 1, i = a[0]; i >= 10; i /= 10) r++;
    r < J && (n -= J - r);
  }
  return s.e = n, s.d = a, s;
}
function yc(e) {
  return W(e = new this(e), e.e + 1, this.rounding);
}
function wc(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Cc(e) {
  return new this(e).sin();
}
function bc(e) {
  return new this(e).sinh();
}
function Fc(e) {
  return new this(e).sqrt();
}
function _c(e, t) {
  return new this(e).sub(t);
}
function Ac() {
  var e = 0, t = arguments, n = new this(t[e]);
  for (ee = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
  return ee = !0, W(n, this.precision, this.rounding);
}
function Tc(e) {
  return new this(e).tan();
}
function xc(e) {
  return new this(e).tanh();
}
function Sc(e) {
  return W(e = new this(e), e.e + 1, 1);
}
L[Symbol.for("nodejs.util.inspect.custom")] = L.toString;
L[Symbol.toStringTag] = "Decimal";
var Nt = L.constructor = Ji(Pn);
sn = new Nt(sn);
an = new Nt(an);
var Bc = "BigNumber", Rc = ["?on", "config"], Mc = /* @__PURE__ */ ie(Bc, Rc, (e) => {
  var {
    on: t,
    config: n
  } = e, r = Nt.clone({
    precision: n.precision,
    modulo: Nt.EUCLID
  });
  return r.prototype = Object.create(r.prototype), r.prototype.type = "BigNumber", r.prototype.isBigNumber = !0, r.prototype.toJSON = function() {
    return {
      mathjs: "BigNumber",
      value: this.toString()
    };
  }, r.fromJSON = function(i) {
    return new r(i.value);
  }, t && t("config", function(i, o) {
    i.precision !== o.precision && r.config({
      precision: i.precision
    });
  }), r;
}, {
  isClass: !0
});
const Ue = Math.cosh || function(e) {
  return Math.abs(e) < 1e-9 ? 1 - e : (Math.exp(e) + Math.exp(-e)) * 0.5;
}, We = Math.sinh || function(e) {
  return Math.abs(e) < 1e-9 ? e : (Math.exp(e) - Math.exp(-e)) * 0.5;
}, Nc = (e) => {
  const t = Math.sin(0.5 * e);
  return -2 * t * t;
}, Tn = function(e, t) {
  return e = Math.abs(e), t = Math.abs(t), e < t && ([e, t] = [t, e]), e < 1e8 ? Math.sqrt(e * e + t * t) : (t /= e, e * Math.sqrt(1 + t * t));
}, Tt = function() {
  throw SyntaxError("Invalid Param");
};
function xn(e, t) {
  const n = Math.abs(e), r = Math.abs(t);
  return e === 0 ? Math.log(r) : t === 0 ? Math.log(n) : n < 3e3 && r < 3e3 ? Math.log(e * e + t * t) * 0.5 : (e = e * 0.5, t = t * 0.5, 0.5 * Math.log(e * e + t * t) + Math.LN2);
}
const Pc = { re: 0, im: 0 }, Dt = function(e, t) {
  const n = Pc;
  if (e == null)
    n.re = n.im = 0;
  else if (t !== void 0)
    n.re = e, n.im = t;
  else
    switch (typeof e) {
      case "object":
        if ("im" in e && "re" in e)
          n.re = e.re, n.im = e.im;
        else if ("abs" in e && "arg" in e) {
          if (!isFinite(e.abs) && isFinite(e.arg))
            return B.INFINITY;
          n.re = e.abs * Math.cos(e.arg), n.im = e.abs * Math.sin(e.arg);
        } else if ("r" in e && "phi" in e) {
          if (!isFinite(e.r) && isFinite(e.phi))
            return B.INFINITY;
          n.re = e.r * Math.cos(e.phi), n.im = e.r * Math.sin(e.phi);
        } else e.length === 2 ? (n.re = e[0], n.im = e[1]) : Tt();
        break;
      case "string":
        n.im = /* void */
        n.re = 0;
        const r = e.replace(/_/g, "").match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g);
        let i = 1, o = 0;
        r === null && Tt();
        for (let s = 0; s < r.length; s++) {
          const a = r[s];
          a === " " || a === "	" || a === `
` || (a === "+" ? i++ : a === "-" ? o++ : a === "i" || a === "I" ? (i + o === 0 && Tt(), r[s + 1] !== " " && !isNaN(r[s + 1]) ? (n.im += parseFloat((o % 2 ? "-" : "") + r[s + 1]), s++) : n.im += parseFloat((o % 2 ? "-" : "") + "1"), i = o = 0) : ((i + o === 0 || isNaN(a)) && Tt(), r[s + 1] === "i" || r[s + 1] === "I" ? (n.im += parseFloat((o % 2 ? "-" : "") + a), s++) : n.re += parseFloat((o % 2 ? "-" : "") + a), i = o = 0));
        }
        i + o > 0 && Tt();
        break;
      case "number":
        n.im = 0, n.re = e;
        break;
      default:
        Tt();
    }
  return isNaN(n.re) || isNaN(n.im), n;
};
function B(e, t) {
  if (!(this instanceof B))
    return new B(e, t);
  const n = Dt(e, t);
  this.re = n.re, this.im = n.im;
}
B.prototype = {
  re: 0,
  im: 0,
  /**
   * Calculates the sign of a complex number, which is a normalized complex
   *
   * @returns {Complex}
   */
  sign: function() {
    const e = Tn(this.re, this.im);
    return new B(
      this.re / e,
      this.im / e
    );
  },
  /**
   * Adds two complex numbers
   *
   * @returns {Complex}
   */
  add: function(e, t) {
    const n = Dt(e, t), r = this.isInfinite(), i = !(isFinite(n.re) && isFinite(n.im));
    return r || i ? r && i ? B.NAN : B.INFINITY : new B(
      this.re + n.re,
      this.im + n.im
    );
  },
  /**
   * Subtracts two complex numbers
   *
   * @returns {Complex}
   */
  sub: function(e, t) {
    const n = Dt(e, t), r = this.isInfinite(), i = !(isFinite(n.re) && isFinite(n.im));
    return r || i ? r && i ? B.NAN : B.INFINITY : new B(
      this.re - n.re,
      this.im - n.im
    );
  },
  /**
   * Multiplies two complex numbers
   *
   * @returns {Complex}
   */
  mul: function(e, t) {
    const n = Dt(e, t), r = this.isInfinite(), i = !(isFinite(n.re) && isFinite(n.im)), o = this.re === 0 && this.im === 0, s = n.re === 0 && n.im === 0;
    return r && s || i && o ? B.NAN : r || i ? B.INFINITY : n.im === 0 && this.im === 0 ? new B(this.re * n.re, 0) : new B(
      this.re * n.re - this.im * n.im,
      this.re * n.im + this.im * n.re
    );
  },
  /**
   * Divides two complex numbers
   *
   * @returns {Complex}
   */
  div: function(e, t) {
    const n = Dt(e, t), r = this.isInfinite(), i = !(isFinite(n.re) && isFinite(n.im)), o = this.re === 0 && this.im === 0, s = n.re === 0 && n.im === 0;
    if (o && s || r && i)
      return B.NAN;
    if (s || r)
      return B.INFINITY;
    if (o || i)
      return B.ZERO;
    if (n.im === 0)
      return new B(this.re / n.re, this.im / n.re);
    if (Math.abs(n.re) < Math.abs(n.im)) {
      const a = n.re / n.im, u = n.re * a + n.im;
      return new B(
        (this.re * a + this.im) / u,
        (this.im * a - this.re) / u
      );
    } else {
      const a = n.im / n.re, u = n.im * a + n.re;
      return new B(
        (this.re + this.im * a) / u,
        (this.im - this.re * a) / u
      );
    }
  },
  /**
   * Calculate the power of two complex numbers
   *
   * @returns {Complex}
   */
  pow: function(e, t) {
    const n = Dt(e, t), r = this.re === 0 && this.im === 0;
    if (n.re === 0 && n.im === 0)
      return B.ONE;
    if (n.im === 0) {
      if (this.im === 0 && this.re > 0)
        return new B(Math.pow(this.re, n.re), 0);
      if (this.re === 0)
        switch ((n.re % 4 + 4) % 4) {
          case 0:
            return new B(Math.pow(this.im, n.re), 0);
          case 1:
            return new B(0, Math.pow(this.im, n.re));
          case 2:
            return new B(-Math.pow(this.im, n.re), 0);
          case 3:
            return new B(0, -Math.pow(this.im, n.re));
        }
    }
    if (r && n.re > 0)
      return B.ZERO;
    const o = Math.atan2(this.im, this.re), s = xn(this.re, this.im);
    let a = Math.exp(n.re * s - n.im * o), u = n.im * s + n.re * o;
    return new B(
      a * Math.cos(u),
      a * Math.sin(u)
    );
  },
  /**
   * Calculate the complex square root
   *
   * @returns {Complex}
   */
  sqrt: function() {
    const e = this.re, t = this.im;
    if (t === 0)
      return e >= 0 ? new B(Math.sqrt(e), 0) : new B(0, Math.sqrt(-e));
    const n = Tn(e, t);
    let r = Math.sqrt(0.5 * (n + Math.abs(e))), i = Math.abs(t) / (2 * r);
    return e >= 0 ? new B(r, t < 0 ? -i : i) : new B(i, t < 0 ? -r : r);
  },
  /**
   * Calculate the complex exponent
   *
   * @returns {Complex}
   */
  exp: function() {
    const e = Math.exp(this.re);
    return this.im === 0 ? new B(e, 0) : new B(
      e * Math.cos(this.im),
      e * Math.sin(this.im)
    );
  },
  /**
   * Calculate the complex exponent and subtracts one.
   *
   * This may be more accurate than `Complex(x).exp().sub(1)` if
   * `x` is small.
   *
   * @returns {Complex}
   */
  expm1: function() {
    const e = this.re, t = this.im;
    return new B(
      Math.expm1(e) * Math.cos(t) + Nc(t),
      Math.exp(e) * Math.sin(t)
    );
  },
  /**
   * Calculate the natural log
   *
   * @returns {Complex}
   */
  log: function() {
    const e = this.re, t = this.im;
    return t === 0 && e > 0 ? new B(Math.log(e), 0) : new B(
      xn(e, t),
      Math.atan2(t, e)
    );
  },
  /**
   * Calculate the magnitude of the complex number
   *
   * @returns {number}
   */
  abs: function() {
    return Tn(this.re, this.im);
  },
  /**
   * Calculate the angle of the complex number
   *
   * @returns {number}
   */
  arg: function() {
    return Math.atan2(this.im, this.re);
  },
  /**
   * Calculate the sine of the complex number
   *
   * @returns {Complex}
   */
  sin: function() {
    const e = this.re, t = this.im;
    return new B(
      Math.sin(e) * Ue(t),
      Math.cos(e) * We(t)
    );
  },
  /**
   * Calculate the cosine
   *
   * @returns {Complex}
   */
  cos: function() {
    const e = this.re, t = this.im;
    return new B(
      Math.cos(e) * Ue(t),
      -Math.sin(e) * We(t)
    );
  },
  /**
   * Calculate the tangent
   *
   * @returns {Complex}
   */
  tan: function() {
    const e = 2 * this.re, t = 2 * this.im, n = Math.cos(e) + Ue(t);
    return new B(
      Math.sin(e) / n,
      We(t) / n
    );
  },
  /**
   * Calculate the cotangent
   *
   * @returns {Complex}
   */
  cot: function() {
    const e = 2 * this.re, t = 2 * this.im, n = Math.cos(e) - Ue(t);
    return new B(
      -Math.sin(e) / n,
      We(t) / n
    );
  },
  /**
   * Calculate the secant
   *
   * @returns {Complex}
   */
  sec: function() {
    const e = this.re, t = this.im, n = 0.5 * Ue(2 * t) + 0.5 * Math.cos(2 * e);
    return new B(
      Math.cos(e) * Ue(t) / n,
      Math.sin(e) * We(t) / n
    );
  },
  /**
   * Calculate the cosecans
   *
   * @returns {Complex}
   */
  csc: function() {
    const e = this.re, t = this.im, n = 0.5 * Ue(2 * t) - 0.5 * Math.cos(2 * e);
    return new B(
      Math.sin(e) * Ue(t) / n,
      -Math.cos(e) * We(t) / n
    );
  },
  /**
   * Calculate the complex arcus sinus
   *
   * @returns {Complex}
   */
  asin: function() {
    const e = this.re, t = this.im, n = new B(
      t * t - e * e + 1,
      -2 * e * t
    ).sqrt(), r = new B(
      n.re - t,
      n.im + e
    ).log();
    return new B(r.im, -r.re);
  },
  /**
   * Calculate the complex arcus cosinus
   *
   * @returns {Complex}
   */
  acos: function() {
    const e = this.re, t = this.im, n = new B(
      t * t - e * e + 1,
      -2 * e * t
    ).sqrt(), r = new B(
      n.re - t,
      n.im + e
    ).log();
    return new B(Math.PI / 2 - r.im, r.re);
  },
  /**
   * Calculate the complex arcus tangent
   *
   * @returns {Complex}
   */
  atan: function() {
    const e = this.re, t = this.im;
    if (e === 0) {
      if (t === 1)
        return new B(0, 1 / 0);
      if (t === -1)
        return new B(0, -1 / 0);
    }
    const n = e * e + (1 - t) * (1 - t), r = new B(
      (1 - t * t - e * e) / n,
      -2 * e / n
    ).log();
    return new B(-0.5 * r.im, 0.5 * r.re);
  },
  /**
   * Calculate the complex arcus cotangent
   *
   * @returns {Complex}
   */
  acot: function() {
    const e = this.re, t = this.im;
    if (t === 0)
      return new B(Math.atan2(1, e), 0);
    const n = e * e + t * t;
    return n !== 0 ? new B(
      e / n,
      -t / n
    ).atan() : new B(
      e !== 0 ? e / 0 : 0,
      t !== 0 ? -t / 0 : 0
    ).atan();
  },
  /**
   * Calculate the complex arcus secant
   *
   * @returns {Complex}
   */
  asec: function() {
    const e = this.re, t = this.im;
    if (e === 0 && t === 0)
      return new B(0, 1 / 0);
    const n = e * e + t * t;
    return n !== 0 ? new B(
      e / n,
      -t / n
    ).acos() : new B(
      e !== 0 ? e / 0 : 0,
      t !== 0 ? -t / 0 : 0
    ).acos();
  },
  /**
   * Calculate the complex arcus cosecans
   *
   * @returns {Complex}
   */
  acsc: function() {
    const e = this.re, t = this.im;
    if (e === 0 && t === 0)
      return new B(Math.PI / 2, 1 / 0);
    const n = e * e + t * t;
    return n !== 0 ? new B(
      e / n,
      -t / n
    ).asin() : new B(
      e !== 0 ? e / 0 : 0,
      t !== 0 ? -t / 0 : 0
    ).asin();
  },
  /**
   * Calculate the complex sinh
   *
   * @returns {Complex}
   */
  sinh: function() {
    const e = this.re, t = this.im;
    return new B(
      We(e) * Math.cos(t),
      Ue(e) * Math.sin(t)
    );
  },
  /**
   * Calculate the complex cosh
   *
   * @returns {Complex}
   */
  cosh: function() {
    const e = this.re, t = this.im;
    return new B(
      Ue(e) * Math.cos(t),
      We(e) * Math.sin(t)
    );
  },
  /**
   * Calculate the complex tanh
   *
   * @returns {Complex}
   */
  tanh: function() {
    const e = 2 * this.re, t = 2 * this.im, n = Ue(e) + Math.cos(t);
    return new B(
      We(e) / n,
      Math.sin(t) / n
    );
  },
  /**
   * Calculate the complex coth
   *
   * @returns {Complex}
   */
  coth: function() {
    const e = 2 * this.re, t = 2 * this.im, n = Ue(e) - Math.cos(t);
    return new B(
      We(e) / n,
      -Math.sin(t) / n
    );
  },
  /**
   * Calculate the complex csch
   *
   * @returns {Complex}
   */
  csch: function() {
    const e = this.re, t = this.im, n = Math.cos(2 * t) - Ue(2 * e);
    return new B(
      -2 * We(e) * Math.cos(t) / n,
      2 * Ue(e) * Math.sin(t) / n
    );
  },
  /**
   * Calculate the complex sech
   *
   * @returns {Complex}
   */
  sech: function() {
    const e = this.re, t = this.im, n = Math.cos(2 * t) + Ue(2 * e);
    return new B(
      2 * Ue(e) * Math.cos(t) / n,
      -2 * We(e) * Math.sin(t) / n
    );
  },
  /**
   * Calculate the complex asinh
   *
   * @returns {Complex}
   */
  asinh: function() {
    const e = this.re, t = this.im;
    if (t === 0) {
      if (e === 0)
        return new B(0, 0);
      const o = Math.abs(e), s = Math.log(o + Math.sqrt(o * o + 1));
      return new B(e < 0 ? -s : s, 0);
    }
    const n = e * e - t * t + 1, r = 2 * e * t, i = new B(n, r).sqrt();
    return new B(e + i.re, t + i.im).log();
  },
  /**
   * Calculate the complex acosh
   *
   * @returns {Complex}
   */
  acosh: function() {
    const e = this.re, t = this.im;
    if (t === 0) {
      if (e > 1)
        return new B(
          Math.log(e + Math.sqrt(e - 1) * Math.sqrt(e + 1)),
          0
        );
      if (e < -1) {
        const i = Math.sqrt(e * e - 1);
        return new B(Math.log(-e + i), Math.PI);
      }
      return new B(0, Math.acos(e));
    }
    const n = new B(e - 1, t).sqrt(), r = new B(e + 1, t).sqrt();
    return new B(
      e + n.re * r.re - n.im * r.im,
      t + n.re * r.im + n.im * r.re
    ).log();
  },
  /**
   * Calculate the complex atanh
   *
   * @returns {Complex}
   */
  atanh: function() {
    const e = this.re, t = this.im;
    if (t === 0) {
      if (e === 0)
        return new B(0, 0);
      if (e === 1)
        return new B(1 / 0, 0);
      if (e === -1)
        return new B(-1 / 0, 0);
      if (-1 < e && e < 1)
        return new B(
          0.5 * Math.log((1 + e) / (1 - e)),
          0
        );
      if (e > 1) {
        const u = (e + 1) / (e - 1);
        return new B(
          0.5 * Math.log(u),
          -Math.PI / 2
        );
      }
      const a = (1 + e) / (1 - e);
      return new B(
        0.5 * Math.log(-a),
        // log((1 - a)/(1 + a))
        Math.PI / 2
      );
    }
    const n = 1 - e, r = 1 + e, i = n * n + t * t;
    if (i === 0)
      return new B(
        e !== -1 ? e / 0 : 0,
        t !== 0 ? t / 0 : 0
      );
    const o = (r * n - t * t) / i, s = (t * n + r * t) / i;
    return new B(
      xn(o, s) / 2,
      Math.atan2(s, o) / 2
    );
  },
  /**
   * Calculate the complex acoth
   *
   * @returns {Complex}
   */
  acoth: function() {
    const e = this.re, t = this.im;
    if (e === 0 && t === 0)
      return new B(0, Math.PI / 2);
    const n = e * e + t * t;
    return n !== 0 ? new B(e / n, -t / n).atanh() : new B(
      e !== 0 ? e / 0 : 0,
      t !== 0 ? -t / 0 : 0
    ).atanh();
  },
  /**
   * Calculate the complex acsch
   *
   * @returns {Complex}
   */
  acsch: function() {
    const e = this.re, t = this.im;
    if (t === 0) {
      if (e === 0)
        return new B(1 / 0, 0);
      const r = 1 / e;
      return new B(
        Math.log(r + Math.sqrt(r * r + 1)),
        0
      );
    }
    const n = e * e + t * t;
    return n !== 0 ? new B(e / n, -t / n).asinh() : new B(
      e !== 0 ? e / 0 : 0,
      t !== 0 ? -t / 0 : 0
    ).asinh();
  },
  /**
   * Calculate the complex asech
   *
   * @returns {Complex}
   */
  asech: function() {
    const e = this.re, t = this.im;
    if (this.isZero())
      return B.INFINITY;
    const n = e * e + t * t;
    return n !== 0 ? new B(e / n, -t / n).acosh() : new B(
      e !== 0 ? e / 0 : 0,
      t !== 0 ? -t / 0 : 0
    ).acosh();
  },
  /**
   * Calculate the complex inverse 1/z
   *
   * @returns {Complex}
   */
  inverse: function() {
    if (this.isZero())
      return B.INFINITY;
    if (this.isInfinite())
      return B.ZERO;
    const e = this.re, t = this.im, n = e * e + t * t;
    return new B(e / n, -t / n);
  },
  /**
   * Returns the complex conjugate
   *
   * @returns {Complex}
   */
  conjugate: function() {
    return new B(this.re, -this.im);
  },
  /**
   * Gets the negated complex number
   *
   * @returns {Complex}
   */
  neg: function() {
    return new B(-this.re, -this.im);
  },
  /**
   * Ceils the actual complex number
   *
   * @returns {Complex}
   */
  ceil: function(e) {
    return e = Math.pow(10, e || 0), new B(
      Math.ceil(this.re * e) / e,
      Math.ceil(this.im * e) / e
    );
  },
  /**
   * Floors the actual complex number
   *
   * @returns {Complex}
   */
  floor: function(e) {
    return e = Math.pow(10, e || 0), new B(
      Math.floor(this.re * e) / e,
      Math.floor(this.im * e) / e
    );
  },
  /**
   * Ceils the actual complex number
   *
   * @returns {Complex}
   */
  round: function(e) {
    return e = Math.pow(10, e || 0), new B(
      Math.round(this.re * e) / e,
      Math.round(this.im * e) / e
    );
  },
  /**
   * Compares two complex numbers
   *
   * **Note:** new Complex(Infinity).equals(Infinity) === false
   *
   * @returns {boolean}
   */
  equals: function(e, t) {
    const n = Dt(e, t);
    return Math.abs(n.re - this.re) <= B.EPSILON && Math.abs(n.im - this.im) <= B.EPSILON;
  },
  /**
   * Clones the actual object
   *
   * @returns {Complex}
   */
  clone: function() {
    return new B(this.re, this.im);
  },
  /**
   * Gets a string of the actual complex number
   *
   * @returns {string}
   */
  toString: function() {
    let e = this.re, t = this.im, n = "";
    return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(e) < B.EPSILON && (e = 0), Math.abs(t) < B.EPSILON && (t = 0), t === 0 ? n + e : (e !== 0 ? (n += e, n += " ", t < 0 ? (t = -t, n += "-") : n += "+", n += " ") : t < 0 && (t = -t, n += "-"), t !== 1 && (n += t), n + "i"));
  },
  /**
   * Returns the actual number as a vector
   *
   * @returns {Array}
   */
  toVector: function() {
    return [this.re, this.im];
  },
  /**
   * Returns the actual real value of the current object
   *
   * @returns {number|null}
   */
  valueOf: function() {
    return this.im === 0 ? this.re : null;
  },
  /**
   * Determines whether a complex number is not on the Riemann sphere.
   *
   * @returns {boolean}
   */
  isNaN: function() {
    return isNaN(this.re) || isNaN(this.im);
  },
  /**
   * Determines whether or not a complex number is at the zero pole of the
   * Riemann sphere.
   *
   * @returns {boolean}
   */
  isZero: function() {
    return this.im === 0 && this.re === 0;
  },
  /**
   * Determines whether a complex number is not at the infinity pole of the
   * Riemann sphere.
   *
   * @returns {boolean}
   */
  isFinite: function() {
    return isFinite(this.re) && isFinite(this.im);
  },
  /**
   * Determines whether or not a complex number is at the infinity pole of the
   * Riemann sphere.
   *
   * @returns {boolean}
   */
  isInfinite: function() {
    return !this.isFinite();
  }
};
B.ZERO = new B(0, 0);
B.ONE = new B(1, 0);
B.I = new B(0, 1);
B.PI = new B(Math.PI, 0);
B.E = new B(Math.E, 0);
B.INFINITY = new B(1 / 0, 1 / 0);
B.NAN = new B(NaN, NaN);
B.EPSILON = 1e-15;
var Lc = "Complex", Ic = [], Uc = /* @__PURE__ */ ie(Lc, Ic, () => (Object.defineProperty(B, "name", {
  value: "Complex"
}), B.prototype.constructor = B, B.prototype.type = "Complex", B.prototype.isComplex = !0, B.prototype.toJSON = function() {
  return {
    mathjs: "Complex",
    re: this.re,
    im: this.im
  };
}, B.prototype.toPolar = function() {
  return {
    r: this.abs(),
    phi: this.arg()
  };
}, B.prototype.format = function(e) {
  var t = "", n = this.im, r = this.re, i = Mn(this.re, e), o = Mn(this.im, e), s = ce(e) ? e : e ? e.precision : null;
  if (s !== null) {
    var a = Math.pow(10, -s);
    Math.abs(r / n) < a && (r = 0), Math.abs(n / r) < a && (n = 0);
  }
  return n === 0 ? t = i : r === 0 ? n === 1 ? t = "i" : n === -1 ? t = "-i" : t = o + "i" : n < 0 ? n === -1 ? t = i + " - i" : t = i + " - " + o.substring(1) + "i" : n === 1 ? t = i + " + i" : t = i + " + " + o + "i", t;
}, B.fromPolar = function(e) {
  switch (arguments.length) {
    case 1: {
      var t = arguments[0];
      if (typeof t == "object")
        return B(t);
      throw new TypeError("Input has to be an object with r and phi keys.");
    }
    case 2: {
      var n = arguments[0], r = arguments[1];
      if (ce(n)) {
        if (Ui(r) && r.hasBase("ANGLE") && (r = r.toNumber("rad")), ce(r))
          return new B({
            r: n,
            phi: r
          });
        throw new TypeError("Phi is not a number nor an angle unit.");
      } else
        throw new TypeError("Radius r is not a number.");
    }
    default:
      throw new SyntaxError("Wrong number of arguments in function fromPolar");
  }
}, B.prototype.valueOf = B.prototype.toString, B.fromJSON = function(e) {
  return new B(e);
}, B.compare = function(e, t) {
  return e.re > t.re ? 1 : e.re < t.re ? -1 : e.im > t.im ? 1 : e.im < t.im ? -1 : 0;
}, B), {
  isClass: !0
});
typeof BigInt > "u" && (BigInt = function(e) {
  if (isNaN(e)) throw new Error("");
  return e;
});
const K = BigInt(0), re = BigInt(1), Se = BigInt(2), kt = BigInt(3), Bt = BigInt(5), Ve = BigInt(10);
BigInt(Number.MAX_SAFE_INTEGER);
const kc = 2e3, V = {
  s: re,
  n: K,
  d: re
};
function ot(e, t) {
  try {
    e = BigInt(e);
  } catch {
    throw ct();
  }
  return e * t;
}
function Je(e) {
  return typeof e == "bigint" ? e : Math.floor(e);
}
function De(e, t) {
  if (t === K)
    throw Wn();
  const n = Object.create(Ze.prototype);
  n.s = e < K ? -re : re, e = e < K ? -e : e;
  const r = Et(e, t);
  return n.n = e / r, n.d = t / r, n;
}
const Oc = [Se * Se, Se, Se * Se, Se, Se * Se, Se * kt, Se, Se * kt];
function xt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  if (e <= re)
    return t[e] = re, t;
  const n = (r) => {
    t[r] = (t[r] || K) + re;
  };
  for (; e % Se === K; )
    n(Se), e /= Se;
  for (; e % kt === K; )
    n(kt), e /= kt;
  for (; e % Bt === K; )
    n(Bt), e /= Bt;
  for (let r = 0, i = Se + Bt; i * i <= e; ) {
    for (; e % i === K; )
      n(i), e /= i;
    i += Oc[r], r = r + 1 & 7;
  }
  return e > re && n(e), t;
}
const xe = function(e, t) {
  let n = K, r = re, i = re;
  if (e != null) if (t !== void 0) {
    if (typeof e == "bigint")
      n = e;
    else {
      if (isNaN(e))
        throw ct();
      if (e % 1 !== 0)
        throw xr();
      n = BigInt(e);
    }
    if (typeof t == "bigint")
      r = t;
    else {
      if (isNaN(t))
        throw ct();
      if (t % 1 !== 0)
        throw xr();
      r = BigInt(t);
    }
    i = n * r;
  } else if (typeof e == "object") {
    if ("d" in e && "n" in e)
      n = BigInt(e.n), r = BigInt(e.d), "s" in e && (n *= BigInt(e.s));
    else if (0 in e)
      n = BigInt(e[0]), 1 in e && (r = BigInt(e[1]));
    else if (typeof e == "bigint")
      n = e;
    else
      throw ct();
    i = n * r;
  } else if (typeof e == "number") {
    if (isNaN(e))
      throw ct();
    if (e < 0 && (i = -re, e = -e), e % 1 === 0)
      n = BigInt(e);
    else {
      let o = 1, s = 0, a = 1, u = 1, c = 1, h = 1e7;
      for (e >= 1 && (o = 10 ** Math.floor(1 + Math.log10(e)), e /= o); a <= h && c <= h; ) {
        let l = (s + u) / (a + c);
        if (e === l) {
          a + c <= h ? (n = s + u, r = a + c) : c > a ? (n = u, r = c) : (n = s, r = a);
          break;
        } else
          e > l ? (s += u, a += c) : (u += s, c += a), a > h ? (n = u, r = c) : (n = s, r = a);
      }
      n = BigInt(n) * BigInt(o), r = BigInt(r);
    }
  } else if (typeof e == "string") {
    let o = 0, s = K, a = K, u = K, c = re, h = re, l = e.replace(/_/g, "").match(/\d+|./g);
    if (l === null)
      throw ct();
    if (l[o] === "-" ? (i = -re, o++) : l[o] === "+" && o++, l.length === o + 1 ? a = ot(l[o++], i) : l[o + 1] === "." || l[o] === "." ? (l[o] !== "." && (s = ot(l[o++], i)), o++, (o + 1 === l.length || l[o + 1] === "(" && l[o + 3] === ")" || l[o + 1] === "'" && l[o + 3] === "'") && (a = ot(l[o], i), c = Ve ** BigInt(l[o].length), o++), (l[o] === "(" && l[o + 2] === ")" || l[o] === "'" && l[o + 2] === "'") && (u = ot(l[o + 1], i), h = Ve ** BigInt(l[o + 1].length) - re, o += 3)) : l[o + 1] === "/" || l[o + 1] === ":" ? (a = ot(l[o], i), c = ot(l[o + 2], re), o += 3) : l[o + 3] === "/" && l[o + 1] === " " && (s = ot(l[o], i), a = ot(l[o + 2], i), c = ot(l[o + 4], re), o += 5), l.length <= o)
      r = c * h, i = /* void */
      n = u + r * s + h * a;
    else
      throw ct();
  } else if (typeof e == "bigint")
    n = e, i = e, r = re;
  else
    throw ct();
  if (r === K)
    throw Wn();
  V.s = i < K ? -re : re, V.n = n < K ? -n : n, V.d = r < K ? -r : r;
};
function $c(e, t, n) {
  let r = re;
  for (; t > K; e = e * e % n, t >>= re)
    t & re && (r = r * e % n);
  return r;
}
function zc(e, t) {
  for (; t % Se === K; t /= Se)
    ;
  for (; t % Bt === K; t /= Bt)
    ;
  if (t === re)
    return K;
  let n = Ve % t, r = 1;
  for (; n !== re; r++)
    if (n = n * Ve % t, r > kc)
      return K;
  return BigInt(r);
}
function Hc(e, t, n) {
  let r = re, i = $c(Ve, n, t);
  for (let o = 0; o < 300; o++) {
    if (r === i)
      return BigInt(o);
    r = r * Ve % t, i = i * Ve % t;
  }
  return 0;
}
function Et(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  for (; ; ) {
    if (e %= t, !e)
      return t;
    if (t %= e, !t)
      return e;
  }
}
function Ze(e, t) {
  if (xe(e, t), this instanceof Ze)
    e = Et(V.d, V.n), this.s = V.s, this.n = V.n / e, this.d = V.d / e;
  else
    return De(V.s * V.n, V.d);
}
const Wn = function() {
  return new Error("Division by Zero");
}, ct = function() {
  return new Error("Invalid argument");
}, xr = function() {
  return new Error("Parameters must be integer");
};
Ze.prototype = {
  s: re,
  n: K,
  d: re,
  /**
   * Calculates the absolute value
   *
   * Ex: new Fraction(-4).abs() => 4
   **/
  abs: function() {
    return De(this.n, this.d);
  },
  /**
   * Inverts the sign of the current fraction
   *
   * Ex: new Fraction(-4).neg() => 4
   **/
  neg: function() {
    return De(-this.s * this.n, this.d);
  },
  /**
   * Adds two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
   **/
  add: function(e, t) {
    return xe(e, t), De(
      this.s * this.n * V.d + V.s * this.d * V.n,
      this.d * V.d
    );
  },
  /**
   * Subtracts two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
   **/
  sub: function(e, t) {
    return xe(e, t), De(
      this.s * this.n * V.d - V.s * this.d * V.n,
      this.d * V.d
    );
  },
  /**
   * Multiplies two rational numbers
   *
   * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
   **/
  mul: function(e, t) {
    return xe(e, t), De(
      this.s * V.s * this.n * V.n,
      this.d * V.d
    );
  },
  /**
   * Divides two rational numbers
   *
   * Ex: new Fraction("-17.(345)").inverse().div(3)
   **/
  div: function(e, t) {
    return xe(e, t), De(
      this.s * V.s * this.n * V.d,
      this.d * V.n
    );
  },
  /**
   * Clones the actual object
   *
   * Ex: new Fraction("-17.(345)").clone()
   **/
  clone: function() {
    return De(this.s * this.n, this.d);
  },
  /**
   * Calculates the modulo of two rational numbers - a more precise fmod
   *
   * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
   * Ex: new Fraction(20, 10).mod().equals(0) ? "is Integer"
   **/
  mod: function(e, t) {
    if (e === void 0)
      return De(this.s * this.n % this.d, re);
    if (xe(e, t), K === V.n * this.d)
      throw Wn();
    return De(
      this.s * (V.d * this.n) % (V.n * this.d),
      V.d * this.d
    );
  },
  /**
   * Calculates the fractional gcd of two rational numbers
   *
   * Ex: new Fraction(5,8).gcd(3,7) => 1/56
   */
  gcd: function(e, t) {
    return xe(e, t), De(Et(V.n, this.n) * Et(V.d, this.d), V.d * this.d);
  },
  /**
   * Calculates the fractional lcm of two rational numbers
   *
   * Ex: new Fraction(5,8).lcm(3,7) => 15
   */
  lcm: function(e, t) {
    return xe(e, t), V.n === K && this.n === K ? De(K, re) : De(V.n * this.n, Et(V.n, this.n) * Et(V.d, this.d));
  },
  /**
   * Gets the inverse of the fraction, means numerator and denominator are exchanged
   *
   * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
   **/
  inverse: function() {
    return De(this.s * this.d, this.n);
  },
  /**
   * Calculates the fraction to some integer exponent
   *
   * Ex: new Fraction(-1,2).pow(-3) => -8
   */
  pow: function(e, t) {
    if (xe(e, t), V.d === re)
      return V.s < K ? De((this.s * this.d) ** V.n, this.n ** V.n) : De((this.s * this.n) ** V.n, this.d ** V.n);
    if (this.s < K) return null;
    let n = xt(this.n), r = xt(this.d), i = re, o = re;
    for (let s in n)
      if (s !== "1") {
        if (s === "0") {
          i = K;
          break;
        }
        if (n[s] *= V.n, n[s] % V.d === K)
          n[s] /= V.d;
        else return null;
        i *= BigInt(s) ** n[s];
      }
    for (let s in r)
      if (s !== "1") {
        if (r[s] *= V.n, r[s] % V.d === K)
          r[s] /= V.d;
        else return null;
        o *= BigInt(s) ** r[s];
      }
    return V.s < K ? De(o, i) : De(i, o);
  },
  /**
   * Calculates the logarithm of a fraction to a given rational base
   *
   * Ex: new Fraction(27, 8).log(9, 4) => 3/2
   */
  log: function(e, t) {
    if (xe(e, t), this.s <= K || V.s <= K) return null;
    const n = /* @__PURE__ */ Object.create(null), r = xt(V.n), i = xt(V.d), o = xt(this.n), s = xt(this.d);
    for (const c in i)
      r[c] = (r[c] || K) - i[c];
    for (const c in s)
      o[c] = (o[c] || K) - s[c];
    for (const c in r)
      c !== "1" && (n[c] = !0);
    for (const c in o)
      c !== "1" && (n[c] = !0);
    let a = null, u = null;
    for (const c in n) {
      const h = r[c] || K, l = o[c] || K;
      if (h === K) {
        if (l !== K)
          return null;
        continue;
      }
      let d = l, m = h;
      const v = Et(d, m);
      if (d /= v, m /= v, a === null && u === null)
        a = d, u = m;
      else if (d * u !== a * m)
        return null;
    }
    return a !== null && u !== null ? De(a, u) : null;
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  equals: function(e, t) {
    return xe(e, t), this.s * this.n * V.d === V.s * V.n * this.d;
  },
  /**
   * Check if this rational number is less than another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  lt: function(e, t) {
    return xe(e, t), this.s * this.n * V.d < V.s * V.n * this.d;
  },
  /**
   * Check if this rational number is less than or equal another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  lte: function(e, t) {
    return xe(e, t), this.s * this.n * V.d <= V.s * V.n * this.d;
  },
  /**
   * Check if this rational number is greater than another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  gt: function(e, t) {
    return xe(e, t), this.s * this.n * V.d > V.s * V.n * this.d;
  },
  /**
   * Check if this rational number is greater than or equal another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  gte: function(e, t) {
    return xe(e, t), this.s * this.n * V.d >= V.s * V.n * this.d;
  },
  /**
   * Compare two rational numbers
   * < 0 iff this < that
   * > 0 iff this > that
   * = 0 iff this = that
   *
   * Ex: new Fraction(19.6).compare([98, 5]);
   **/
  compare: function(e, t) {
    xe(e, t);
    let n = this.s * this.n * V.d - V.s * V.n * this.d;
    return (K < n) - (n < K);
  },
  /**
   * Calculates the ceil of a rational number
   *
   * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
   **/
  ceil: function(e) {
    return e = Ve ** BigInt(e || 0), De(
      Je(this.s * e * this.n / this.d) + (e * this.n % this.d > K && this.s >= K ? re : K),
      e
    );
  },
  /**
   * Calculates the floor of a rational number
   *
   * Ex: new Fraction('4.(3)').floor() => (4 / 1)
   **/
  floor: function(e) {
    return e = Ve ** BigInt(e || 0), De(
      Je(this.s * e * this.n / this.d) - (e * this.n % this.d > K && this.s < K ? re : K),
      e
    );
  },
  /**
   * Rounds a rational numbers
   *
   * Ex: new Fraction('4.(3)').round() => (4 / 1)
   **/
  round: function(e) {
    return e = Ve ** BigInt(e || 0), De(
      Je(this.s * e * this.n / this.d) + this.s * ((this.s >= K ? re : K) + Se * (e * this.n % this.d) > this.d ? re : K),
      e
    );
  },
  /**
    * Rounds a rational number to a multiple of another rational number
    *
    * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
    **/
  roundTo: function(e, t) {
    xe(e, t);
    const n = this.n * V.d, r = this.d * V.n, i = n % r;
    let o = Je(n / r);
    return i + i >= r && o++, De(this.s * o * V.n, V.d);
  },
  /**
   * Check if two rational numbers are divisible
   *
   * Ex: new Fraction(19.6).divisible(1.5);
   */
  divisible: function(e, t) {
    return xe(e, t), V.n === K ? !1 : this.n * V.d % (V.n * this.d) === K;
  },
  /**
   * Returns a decimal representation of the fraction
   *
   * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
   **/
  valueOf: function() {
    return Number(this.s * this.n) / Number(this.d);
  },
  /**
   * Creates a string representation of a fraction with all digits
   *
   * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
   **/
  toString: function(e = 15) {
    let t = this.n, n = this.d, r = zc(t, n), i = Hc(t, n, r), o = this.s < K ? "-" : "";
    if (o += Je(t / n), t %= n, t *= Ve, t && (o += "."), r) {
      for (let s = i; s--; )
        o += Je(t / n), t %= n, t *= Ve;
      o += "(";
      for (let s = r; s--; )
        o += Je(t / n), t %= n, t *= Ve;
      o += ")";
    } else
      for (let s = e; t && s--; )
        o += Je(t / n), t %= n, t *= Ve;
    return o;
  },
  /**
   * Returns a string-fraction representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toFraction() => "4 1/3"
   **/
  toFraction: function(e = !1) {
    let t = this.n, n = this.d, r = this.s < K ? "-" : "";
    if (n === re)
      r += t;
    else {
      const i = Je(t / n);
      e && i > K && (r += i, r += " ", t %= n), r += t, r += "/", r += n;
    }
    return r;
  },
  /**
   * Returns a latex representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
   **/
  toLatex: function(e = !1) {
    let t = this.n, n = this.d, r = this.s < K ? "-" : "";
    if (n === re)
      r += t;
    else {
      const i = Je(t / n);
      e && i > K && (r += i, t %= n), r += "\\frac{", r += t, r += "}{", r += n, r += "}";
    }
    return r;
  },
  /**
   * Returns an array of continued fraction elements
   *
   * Ex: new Fraction("7/8").toContinued() => [0,1,7]
   */
  toContinued: function() {
    let e = this.n, t = this.d;
    const n = [];
    for (; t; ) {
      n.push(Je(e / t));
      const r = e % t;
      e = t, t = r;
    }
    return n;
  },
  simplify: function(e = 1e-3) {
    const t = BigInt(Math.ceil(1 / e)), n = this.abs(), r = n.toContinued();
    for (let i = 1; i < r.length; i++) {
      let o = De(r[i - 1], re);
      for (let a = i - 2; a >= 0; a--)
        o = o.inverse().add(r[a]);
      let s = o.sub(n);
      if (s.n * t < s.d)
        return o.mul(this.s);
    }
    return this;
  }
};
var Vc = "Fraction", Xc = [], jc = /* @__PURE__ */ ie(Vc, Xc, () => (Object.defineProperty(Ze, "name", {
  value: "Fraction"
}), Ze.prototype.constructor = Ze, Ze.prototype.type = "Fraction", Ze.prototype.isFraction = !0, Ze.prototype.toJSON = function() {
  return {
    mathjs: "Fraction",
    n: String(this.s * this.n),
    d: String(this.d)
  };
}, Ze.fromJSON = function(e) {
  return new Ze(e);
}, Ze), {
  isClass: !0
}), Gc = "Matrix", Yc = [], Kc = /* @__PURE__ */ ie(Gc, Yc, () => {
  function e() {
    if (!(this instanceof e))
      throw new SyntaxError("Constructor must be called with the new operator");
  }
  return e.prototype.type = "Matrix", e.prototype.isMatrix = !0, e.prototype.storage = function() {
    throw new Error("Cannot invoke storage on a Matrix interface");
  }, e.prototype.datatype = function() {
    throw new Error("Cannot invoke datatype on a Matrix interface");
  }, e.prototype.create = function(t, n) {
    throw new Error("Cannot invoke create on a Matrix interface");
  }, e.prototype.subset = function(t, n, r) {
    throw new Error("Cannot invoke subset on a Matrix interface");
  }, e.prototype.get = function(t) {
    throw new Error("Cannot invoke get on a Matrix interface");
  }, e.prototype.set = function(t, n, r) {
    throw new Error("Cannot invoke set on a Matrix interface");
  }, e.prototype.resize = function(t, n) {
    throw new Error("Cannot invoke resize on a Matrix interface");
  }, e.prototype.reshape = function(t, n) {
    throw new Error("Cannot invoke reshape on a Matrix interface");
  }, e.prototype.clone = function() {
    throw new Error("Cannot invoke clone on a Matrix interface");
  }, e.prototype.size = function() {
    throw new Error("Cannot invoke size on a Matrix interface");
  }, e.prototype.map = function(t, n) {
    throw new Error("Cannot invoke map on a Matrix interface");
  }, e.prototype.forEach = function(t) {
    throw new Error("Cannot invoke forEach on a Matrix interface");
  }, e.prototype[Symbol.iterator] = function() {
    throw new Error("Cannot iterate a Matrix interface");
  }, e.prototype.toArray = function() {
    throw new Error("Cannot invoke toArray on a Matrix interface");
  }, e.prototype.valueOf = function() {
    throw new Error("Cannot invoke valueOf on a Matrix interface");
  }, e.prototype.format = function(t) {
    throw new Error("Cannot invoke format on a Matrix interface");
  }, e.prototype.toString = function() {
    throw new Error("Cannot invoke toString on a Matrix interface");
  }, e;
}, {
  isClass: !0
});
function Sn(e, t, n) {
  var r = e.constructor, i = new r(2), o = "";
  if (n) {
    if (n < 1)
      throw new Error("size must be in greater than 0");
    if (!Me(n))
      throw new Error("size must be an integer");
    if (e.greaterThan(i.pow(n - 1).sub(1)) || e.lessThan(i.pow(n - 1).mul(-1)))
      throw new Error("Value must be in range [-2^".concat(n - 1, ", 2^").concat(n - 1, "-1]"));
    if (!e.isInteger())
      throw new Error("Value must be an integer");
    e.lessThan(0) && (e = e.add(i.pow(n))), o = "i".concat(n);
  }
  switch (t) {
    case 2:
      return "".concat(e.toBinary()).concat(o);
    case 8:
      return "".concat(e.toOctal()).concat(o);
    case 16:
      return "".concat(e.toHexadecimal()).concat(o);
    default:
      throw new Error("Base ".concat(t, " not supported "));
  }
}
function qc(e, t) {
  if (typeof t == "function")
    return t(e);
  if (!e.isFinite())
    return e.isNaN() ? "NaN" : e.gt(0) ? "Infinity" : "-Infinity";
  var {
    notation: n,
    precision: r,
    wordSize: i
  } = Oi(t);
  switch (n) {
    case "fixed":
      return Zc(e, r);
    case "exponential":
      return Sr(e, r);
    case "engineering":
      return Wc(e, r);
    case "bin":
      return Sn(e, 2, i);
    case "oct":
      return Sn(e, 8, i);
    case "hex":
      return Sn(e, 16, i);
    case "auto": {
      var o = Br(t == null ? void 0 : t.lowerExp, -3), s = Br(t == null ? void 0 : t.upperExp, 5);
      if (e.isZero()) return "0";
      var a, u = e.toSignificantDigits(r), c = u.e;
      return c >= o && c < s ? a = u.toFixed() : a = Sr(e, r), a.replace(/((\.\d*?)(0+))($|e)/, function() {
        var h = arguments[2], l = arguments[4];
        return h !== "." ? h + l : l;
      });
    }
    default:
      throw new Error('Unknown notation "' + n + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
  }
}
function Wc(e, t) {
  var n = e.e, r = n % 3 === 0 ? n : n < 0 ? n - 3 - n % 3 : n - n % 3, i = e.mul(Math.pow(10, -r)), o = i.toPrecision(t);
  if (o.includes("e")) {
    var s = e.constructor;
    o = new s(o).toFixed();
  }
  return o + "e" + (n >= 0 ? "+" : "") + r.toString();
}
function Sr(e, t) {
  return t !== void 0 ? e.toExponential(t - 1) : e.toExponential();
}
function Zc(e, t) {
  return e.toFixed(t);
}
function Br(e, t) {
  return ce(e) ? e : Ne(e) ? e.toNumber() : t;
}
function He(e, t) {
  var n = Jc(e, t);
  return t && typeof t == "object" && "truncate" in t && n.length > t.truncate ? n.substring(0, t.truncate - 3) + "..." : n;
}
function Jc(e, t) {
  if (typeof e == "number")
    return Mn(e, t);
  if (Ne(e))
    return qc(e, t);
  if (Qc(e))
    return !t || t.fraction !== "decimal" ? "".concat(e.s * e.n, "/").concat(e.d) : e.toString();
  if (Array.isArray(e))
    return Qi(e, t);
  if (et(e))
    return Rr(e);
  if (typeof e == "function")
    return e.syntax ? String(e.syntax) : "function";
  if (e && typeof e == "object") {
    if (typeof e.format == "function")
      return e.format(t);
    if (e && e.toString(t) !== {}.toString())
      return e.toString(t);
    var n = Object.keys(e).map((r) => Rr(r) + ": " + He(e[r], t));
    return "{" + n.join(", ") + "}";
  }
  return String(e);
}
function Rr(e) {
  for (var t = String(e), n = "", r = 0; r < t.length; ) {
    var i = t.charAt(r);
    n += i in Mr ? Mr[i] : i, r++;
  }
  return '"' + n + '"';
}
var Mr = {
  '"': '\\"',
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t"
};
function Qi(e, t) {
  if (Array.isArray(e)) {
    for (var n = "[", r = e.length, i = 0; i < r; i++)
      i !== 0 && (n += ", "), n += Qi(e[i], t);
    return n += "]", n;
  } else
    return He(e, t);
}
function Qc(e) {
  return e && typeof e == "object" && typeof e.s == "bigint" && typeof e.n == "bigint" && typeof e.d == "bigint" || !1;
}
function he(e, t, n) {
  if (!(this instanceof he))
    throw new SyntaxError("Constructor must be called with the new operator");
  this.actual = e, this.expected = t, this.relation = n, this.message = "Dimension mismatch (" + (Array.isArray(e) ? "[" + e.join(", ") + "]" : e) + " " + (this.relation || "!=") + " " + (Array.isArray(t) ? "[" + t.join(", ") + "]" : t) + ")", this.stack = new Error().stack;
}
he.prototype = new RangeError();
he.prototype.constructor = RangeError;
he.prototype.name = "DimensionError";
he.prototype.isDimensionError = !0;
function wt(e, t, n) {
  if (!(this instanceof wt))
    throw new SyntaxError("Constructor must be called with the new operator");
  this.index = e, arguments.length < 3 ? (this.min = 0, this.max = t) : (this.min = t, this.max = n), this.min !== void 0 && this.index < this.min ? this.message = "Index out of range (" + this.index + " < " + this.min + ")" : this.max !== void 0 && this.index >= this.max ? this.message = "Index out of range (" + this.index + " > " + (this.max - 1) + ")" : this.message = "Index out of range (" + this.index + ")", this.stack = new Error().stack;
}
wt.prototype = new RangeError();
wt.prototype.constructor = RangeError;
wt.prototype.name = "IndexError";
wt.prototype.isIndexError = !0;
function Xe(e) {
  for (var t = []; Array.isArray(e); )
    t.push(e.length), e = e[0];
  return t;
}
function eo(e, t, n) {
  var r, i = e.length;
  if (i !== t[n])
    throw new he(i, t[n]);
  if (n < t.length - 1) {
    var o = n + 1;
    for (r = 0; r < i; r++) {
      var s = e[r];
      if (!Array.isArray(s))
        throw new he(t.length - 1, t.length, "<");
      eo(e[r], t, o);
    }
  } else
    for (r = 0; r < i; r++)
      if (Array.isArray(e[r]))
        throw new he(t.length + 1, t.length, ">");
}
function Nr(e, t) {
  var n = t.length === 0;
  if (n) {
    if (Array.isArray(e))
      throw new he(e.length, 0);
  } else
    eo(e, t, 0);
}
function Ee(e, t) {
  if (e !== void 0) {
    if (!ce(e) || !Me(e))
      throw new TypeError("Index must be an integer (value: " + e + ")");
    if (e < 0 || typeof t == "number" && e >= t)
      throw new wt(e, t);
  }
}
function Pr(e, t, n) {
  if (!Array.isArray(t))
    throw new TypeError("Array expected");
  if (t.length === 0)
    throw new Error("Resizing to scalar is not supported");
  t.forEach(function(i) {
    if (!ce(i) || !Me(i) || i < 0)
      throw new TypeError("Invalid size, must contain positive integers (size: " + He(t) + ")");
  }), (ce(e) || Ne(e)) && (e = [e]);
  var r = n !== void 0 ? n : 0;
  return Un(e, t, 0, r), e;
}
function Un(e, t, n, r) {
  var i, o, s = e.length, a = t[n], u = Math.min(s, a);
  if (e.length = a, n < t.length - 1) {
    var c = n + 1;
    for (i = 0; i < u; i++)
      o = e[i], Array.isArray(o) || (o = [o], e[i] = o), Un(o, t, c, r);
    for (i = u; i < a; i++)
      o = [], e[i] = o, Un(o, t, c, r);
  } else {
    for (i = 0; i < u; i++)
      for (; Array.isArray(e[i]); )
        e[i] = e[i][0];
    for (i = u; i < a; i++)
      e[i] = r;
  }
}
function to(e, t) {
  var n = tl(e, !0), r = n.length;
  if (!Array.isArray(e) || !Array.isArray(t))
    throw new TypeError("Array expected");
  if (t.length === 0)
    throw new he(0, r, "!=");
  t = Zn(t, r);
  var i = no(t);
  if (r !== i)
    throw new he(i, r, "!=");
  try {
    return el(n, t);
  } catch (o) {
    throw o instanceof he ? new he(i, r, "!=") : o;
  }
}
function Zn(e, t) {
  var n = no(e), r = e.slice(), i = -1, o = e.indexOf(i), s = e.indexOf(i, o + 1) >= 0;
  if (s)
    throw new Error("More than one wildcard in sizes");
  var a = o >= 0, u = t % n === 0;
  if (a)
    if (u)
      r[o] = -t / n;
    else
      throw new Error("Could not replace wildcard, since " + t + " is no multiple of " + -n);
  return r;
}
function no(e) {
  return e.reduce((t, n) => t * n, 1);
}
function el(e, t) {
  for (var n = e, r, i = t.length - 1; i > 0; i--) {
    var o = t[i];
    r = [];
    for (var s = n.length / o, a = 0; a < s; a++)
      r.push(n.slice(a * o, (a + 1) * o));
    n = r;
  }
  return n;
}
function ro(e, t, n, r) {
  var i = r || Xe(e);
  if (n)
    for (var o = 0; o < n; o++)
      e = [e], i.unshift(1);
  for (e = io(e, t, 0); i.length < t; )
    i.push(1);
  return e;
}
function io(e, t, n) {
  var r, i;
  if (Array.isArray(e)) {
    var o = n + 1;
    for (r = 0, i = e.length; r < i; r++)
      e[r] = io(e[r], t, o);
  } else
    for (var s = n; s < t; s++)
      e = [e];
  return e;
}
function tl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (!Array.isArray(e))
    return e;
  if (typeof t != "boolean")
    throw new TypeError("Boolean expected for second argument of flatten");
  var n = [];
  return t ? i(e) : r(e), n;
  function r(o) {
    for (var s = 0; s < o.length; s++) {
      var a = o[s];
      Array.isArray(a) ? r(a) : n.push(a);
    }
  }
  function i(o) {
    if (Array.isArray(o[0]))
      for (var s = 0; s < o.length; s++)
        i(o[s]);
    else
      for (var a = 0; a < o.length; a++)
        n.push(o[a]);
  }
}
function Jn(e, t) {
  for (var n, r = 0, i = 0; i < e.length; i++) {
    var o = e[i], s = Array.isArray(o);
    if (i === 0 && s && (r = o.length), s && o.length !== r)
      return;
    var a = s ? Jn(o, t) : t(o);
    if (n === void 0)
      n = a;
    else if (n !== a)
      return "mixed";
  }
  return n;
}
function oo(e, t, n, r) {
  if (r < n) {
    if (e.length !== t.length)
      throw new he(e.length, t.length);
    for (var i = [], o = 0; o < e.length; o++)
      i[o] = oo(e[o], t[o], n, r + 1);
    return i;
  } else
    return e.concat(t);
}
function so() {
  var e = Array.prototype.slice.call(arguments, 0, -1), t = Array.prototype.slice.call(arguments, -1);
  if (e.length === 1)
    return e[0];
  if (e.length > 1)
    return e.slice(1).reduce(function(n, r) {
      return oo(n, r, t, 0);
    }, e[0]);
  throw new Error("Wrong number of arguments in function concat");
}
function ao() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  for (var r = t.map((d) => d.length), i = Math.max(...r), o = new Array(i).fill(null), s = 0; s < t.length; s++)
    for (var a = t[s], u = r[s], c = 0; c < u; c++) {
      var h = i - u + c;
      a[c] > o[h] && (o[h] = a[c]);
    }
  for (var l = 0; l < t.length; l++)
    uo(t[l], o);
  return o;
}
function uo(e, t) {
  for (var n = t.length, r = e.length, i = 0; i < r; i++) {
    var o = n - r + i;
    if (e[i] < t[o] && e[i] > 1 || e[i] > t[o])
      throw new Error("shape mismatch: mismatch is found in arg with shape (".concat(e, ") not possible to broadcast dimension ").concat(r, " with size ").concat(e[i], " to size ").concat(t[o]));
  }
}
function kn(e, t) {
  var n = Xe(e);
  if (mt(n, t))
    return e;
  uo(n, t);
  var r = ao(n, t), i = r.length, o = [...Array(i - n.length).fill(1), ...n], s = rl(e);
  n.length < i && (s = to(s, o), n = Xe(s));
  for (var a = 0; a < i; a++)
    n[a] < r[a] && (s = nl(s, r[a], a), n = Xe(s));
  return s;
}
function nl(e, t, n) {
  return so(...Array(t).fill(e), n);
}
function co(e, t) {
  if (!Array.isArray(e))
    throw new Error("Array expected");
  if (!Array.isArray(t))
    throw new Error("Array expected for index");
  var n = Xe(e);
  if (t.length !== n.length)
    throw new he(t.length, n.length);
  for (var r = 0; r < t.length; r++)
    Ee(t[r], n[r]);
  return t.reduce((i, o) => i[o], e);
}
function Lr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  if (e.length === 0)
    return [];
  if (n)
    return o(e);
  var r = [];
  return i(e, 0);
  function i(s, a) {
    if (Array.isArray(s)) {
      for (var u = s.length, c = Array(u), h = 0; h < u; h++)
        r[a] = h, c[h] = i(s[h], a + 1);
      return c;
    } else
      return t(s, r.slice(0, a), e);
  }
  function o(s) {
    if (Array.isArray(s)) {
      for (var a = s.length, u = Array(a), c = 0; c < a; c++)
        u[c] = o(s[c]);
      return u;
    } else
      return t(s);
  }
}
function rl(e) {
  return en([], e);
}
function cn(e, t, n, r) {
  if (rn.isTypedFunction(e)) {
    var i;
    if (r)
      i = 1;
    else {
      var o = t.isMatrix ? t.size() : Xe(t), s = o.length ? o[o.length - 1] === 0 : !0;
      if (s)
        return {
          isUnary: r,
          fn: e
        };
      var a = o.map(() => 0), u = t.isMatrix ? t.get(a) : co(t, a);
      i = sl(e, u, a, t);
    }
    var c;
    if (t.isMatrix && t.dataType !== "mixed" && t.dataType !== void 0) {
      var h = il(e, i);
      c = h !== void 0 ? h : e;
    } else
      c = e;
    return i >= 1 && i <= 3 ? {
      isUnary: i === 1,
      fn: function() {
        for (var d = arguments.length, m = new Array(d), v = 0; v < d; v++)
          m[v] = arguments[v];
        return Ir(c, m.slice(0, i), n, e.name);
      }
    } : {
      isUnary: !1,
      fn: function() {
        for (var d = arguments.length, m = new Array(d), v = 0; v < d; v++)
          m[v] = arguments[v];
        return Ir(c, m, n, e.name);
      }
    };
  }
  return r === void 0 ? {
    isUnary: ol(e),
    fn: e
  } : {
    isUnary: r,
    fn: e
  };
}
function il(e, t) {
  var n = [];
  if (Object.entries(e.signatures).forEach((r) => {
    var [i, o] = r;
    i.split(",").length === t && n.push(o);
  }), n.length === 1)
    return n[0];
}
function ol(e) {
  if (e.length !== 1) return !1;
  var t = e.toString();
  if (/arguments/.test(t)) return !1;
  var n = t.match(/\(.*?\)/);
  return !/\.\.\./.test(n);
}
function sl(e, t, n, r) {
  for (var i = [t, n, r], o = 3; o > 0; o--) {
    var s = i.slice(0, o);
    if (rn.resolve(e, s) !== null)
      return o;
  }
}
function Ir(e, t, n, r) {
  try {
    return e(...t);
  } catch (i) {
    al(i, t, n, r);
  }
}
function al(e, t, n, r) {
  var i;
  if (e instanceof TypeError && ((i = e.data) === null || i === void 0 ? void 0 : i.category) === "wrongType") {
    var o = [];
    throw o.push("value: ".concat(yt(t[0]))), t.length >= 2 && o.push("index: ".concat(yt(t[1]))), t.length >= 3 && o.push("array: ".concat(yt(t[2]))), new TypeError("Function ".concat(n, " cannot apply callback arguments ") + "".concat(r, "(").concat(o.join(", "), ") at index ").concat(JSON.stringify(t[1])));
  } else
    throw new TypeError("Function ".concat(n, " cannot apply callback arguments ") + "to function ".concat(r, ": ").concat(e.message));
}
var ul = "DenseMatrix", cl = ["Matrix", "config"], ll = /* @__PURE__ */ ie(ul, cl, (e) => {
  var {
    Matrix: t,
    config: n
  } = e;
  function r(l, d) {
    if (!(this instanceof r))
      throw new SyntaxError("Constructor must be called with the new operator");
    if (d && !et(d))
      throw new Error("Invalid datatype: " + d);
    if (Pe(l))
      l.type === "DenseMatrix" ? (this._data = Be(l._data), this._size = Be(l._size), this._datatype = d || l._datatype) : (this._data = l.toArray(), this._size = l.size(), this._datatype = d || l._datatype);
    else if (l && be(l.data) && be(l.size))
      this._data = l.data, this._size = l.size, Nr(this._data, this._size), this._datatype = d || l.datatype;
    else if (be(l))
      this._data = h(l), this._size = Xe(this._data), Nr(this._data, this._size), this._datatype = d;
    else {
      if (l)
        throw new TypeError("Unsupported type of data (" + yt(l) + ")");
      this._data = [], this._size = [0], this._datatype = d;
    }
  }
  r.prototype = new t(), r.prototype.createDenseMatrix = function(l, d) {
    return new r(l, d);
  }, Object.defineProperty(r, "name", {
    value: "DenseMatrix"
  }), r.prototype.constructor = r, r.prototype.type = "DenseMatrix", r.prototype.isDenseMatrix = !0, r.prototype.getDataType = function() {
    return Jn(this._data, yt);
  }, r.prototype.storage = function() {
    return "dense";
  }, r.prototype.datatype = function() {
    return this._datatype;
  }, r.prototype.create = function(l, d) {
    return new r(l, d);
  }, r.prototype.subset = function(l, d, m) {
    switch (arguments.length) {
      case 1:
        return i(this, l);
      case 2:
      case 3:
        return s(this, l, d, m);
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  }, r.prototype.get = function(l) {
    return co(this._data, l);
  }, r.prototype.set = function(l, d, m) {
    if (!be(l))
      throw new TypeError("Array expected");
    if (l.length < this._size.length)
      throw new he(l.length, this._size.length, "<");
    var v, f, y, C = l.map(function(p) {
      return p + 1;
    });
    c(this, C, m);
    var E = this._data;
    for (v = 0, f = l.length - 1; v < f; v++)
      y = l[v], Ee(y, E.length), E = E[y];
    return y = l[l.length - 1], Ee(y, E.length), E[y] = d, this;
  };
  function i(l, d) {
    if (!Gn(d))
      throw new TypeError("Invalid index");
    var m = n.legacySubset ? d.size().every((g) => g === 1) : d.isScalar();
    if (m)
      return l.get(d.min());
    var v = d.size();
    if (v.length !== l._size.length)
      throw new he(v.length, l._size.length);
    for (var f = d.min(), y = d.max(), C = 0, E = l._size.length; C < E; C++)
      Ee(f[C], l._size[C]), Ee(y[C], l._size[C]);
    var p = new r(), w = o(l._data, d);
    return p._size = w.size, p._datatype = l._datatype, p._data = w.data, n.legacySubset ? p.reshape(d.size()) : p;
  }
  function o(l, d) {
    var m = d.size().length - 1, v = Array(m);
    return {
      data: f(l),
      size: v.filter((y) => y !== null)
    };
    function f(y) {
      var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, E = d.dimension(C);
      function p(w, g) {
        return ce(w) ? g(w) : w.map(g).valueOf();
      }
      return ce(E) ? v[C] = null : v[C] = E.size()[0], C < m ? p(E, (w) => (Ee(w, y.length), f(y[w], C + 1))) : p(E, (w) => (Ee(w, y.length), y[w]));
    }
  }
  function s(l, d, m, v) {
    if (!d || d.isIndex !== !0)
      throw new TypeError("Invalid index");
    var f = d.size(), y = d.isScalar(), C;
    if (Pe(m) ? (C = m.size(), m = m.valueOf()) : C = Xe(m), y) {
      if (C.length !== 0)
        throw new TypeError("Scalar expected");
      l.set(d.min(), m, v);
    } else {
      if (!mt(C, f)) {
        if (C.length === 0)
          m = kn([m], f);
        else
          try {
            m = kn(m, f);
          } catch {
          }
        C = Xe(m);
      }
      if (f.length < l._size.length)
        throw new he(f.length, l._size.length, "<");
      if (C.length < f.length) {
        for (var E = 0, p = 0; f[E] === 1 && C[E] === 1; )
          E++;
        for (; f[E] === 1; )
          p++, E++;
        m = ro(m, f.length, p, C);
      }
      if (!mt(f, C))
        throw new he(f, C, ">");
      var w = d.max().map(function(g) {
        return g + 1;
      });
      c(l, w, v), a(l._data, d, m);
    }
    return l;
  }
  function a(l, d, m) {
    var v = d.size().length - 1;
    f(l, m);
    function f(y, C) {
      var E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, p = d.dimension(E), w = (D, A) => {
        Ee(D, y.length), f(y[D], C[A[0]], E + 1);
      }, g = (D, A) => {
        Ee(D, y.length), y[D] = C[A[0]];
      };
      E < v ? ce(p) ? w(p, [0]) : p.forEach(w) : ce(p) ? g(p, [0]) : p.forEach(g);
    }
  }
  r.prototype.resize = function(l, d, m) {
    if (!nn(l))
      throw new TypeError("Array or Matrix expected");
    var v = l.valueOf().map((y) => Array.isArray(y) && y.length === 1 ? y[0] : y), f = m ? this.clone() : this;
    return u(f, v, d);
  };
  function u(l, d, m) {
    if (d.length === 0) {
      for (var v = l._data; be(v); )
        v = v[0];
      return v;
    }
    return l._size = d.slice(0), l._data = Pr(l._data, l._size, m), l;
  }
  r.prototype.reshape = function(l, d) {
    var m = d ? this.clone() : this;
    m._data = to(m._data, l);
    var v = m._size.reduce((f, y) => f * y);
    return m._size = Zn(l, v), m;
  };
  function c(l, d, m) {
    for (var v = l._size.slice(0), f = !1; v.length < d.length; )
      v.push(0), f = !0;
    for (var y = 0, C = d.length; y < C; y++)
      d[y] > v[y] && (v[y] = d[y], f = !0);
    f && u(l, v, m);
  }
  r.prototype.clone = function() {
    var l = new r({
      data: Be(this._data),
      size: Be(this._size),
      datatype: this._datatype
    });
    return l;
  }, r.prototype.size = function() {
    return this._size.slice(0);
  }, r.prototype.map = function(l) {
    var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, m = this, v = m._size.length - 1;
    if (v < 0) return m.clone();
    var f = cn(l, m, "map", d), y = f.fn, C = m.create(void 0, m._datatype);
    if (C._size = m._size, d || f.isUnary)
      return C._data = A(m._data), C;
    if (v === 0) {
      for (var E = m.valueOf(), p = Array(E.length), w = 0; w < E.length; w++)
        p[w] = y(E[w], [w], m);
      return C._data = p, C;
    }
    var g = [];
    return C._data = D(m._data), C;
    function D(_) {
      var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, T = Array(_.length);
      if (b < v)
        for (var S = 0; S < _.length; S++)
          g[b] = S, T[S] = D(_[S], b + 1);
      else
        for (var M = 0; M < _.length; M++)
          g[b] = M, T[M] = y(_[M], g.slice(), m);
      return T;
    }
    function A(_) {
      var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, T = Array(_.length);
      if (b < v)
        for (var S = 0; S < _.length; S++)
          T[S] = A(_[S], b + 1);
      else
        for (var M = 0; M < _.length; M++)
          T[M] = y(_[M]);
      return T;
    }
  }, r.prototype.forEach = function(l) {
    var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, m = this, v = m._size.length - 1;
    if (v < 0) return;
    var f = cn(l, m, "map", d), y = f.fn;
    if (d || f.isUnary) {
      w(m._data);
      return;
    }
    if (v === 0) {
      for (var C = 0; C < m._data.length; C++)
        y(m._data[C], [C], m);
      return;
    }
    var E = [];
    p(m._data);
    function p(g) {
      var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      if (D < v)
        for (var A = 0; A < g.length; A++)
          E[D] = A, p(g[A], D + 1);
      else
        for (var _ = 0; _ < g.length; _++)
          E[D] = _, y(g[_], E.slice(), m);
    }
    function w(g) {
      var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      if (D < v)
        for (var A = 0; A < g.length; A++)
          w(g[A], D + 1);
      else
        for (var _ = 0; _ < g.length; _++)
          y(g[_]);
    }
  }, r.prototype[Symbol.iterator] = function* () {
    var l = this._size.length - 1;
    if (!(l < 0)) {
      if (l === 0) {
        for (var d = 0; d < this._data.length; d++)
          yield {
            value: this._data[d],
            index: [d]
          };
        return;
      }
      for (var m = Array(l + 1).fill(0), v = this._size.reduce((p, w) => p * w, 1), f = 0; f < v; f++) {
        for (var y = this._data, C = 0; C < l; C++)
          y = y[m[C]];
        yield {
          value: y[m[l]],
          index: m.slice()
        };
        for (var E = l; E >= 0 && (m[E]++, !(m[E] < this._size[E])); E--)
          m[E] = 0;
      }
    }
  }, r.prototype.rows = function() {
    var l = [], d = this.size();
    if (d.length !== 2)
      throw new TypeError("Rows can only be returned for a 2D matrix.");
    var m = this._data;
    for (var v of m)
      l.push(new r([v], this._datatype));
    return l;
  }, r.prototype.columns = function() {
    var l = this, d = [], m = this.size();
    if (m.length !== 2)
      throw new TypeError("Rows can only be returned for a 2D matrix.");
    for (var v = this._data, f = function(E) {
      var p = v.map((w) => [w[E]]);
      d.push(new r(p, l._datatype));
    }, y = 0; y < m[1]; y++)
      f(y);
    return d;
  }, r.prototype.toArray = function() {
    return Be(this._data);
  }, r.prototype.valueOf = function() {
    return this._data;
  }, r.prototype.format = function(l) {
    return He(this._data, l);
  }, r.prototype.toString = function() {
    return He(this._data);
  }, r.prototype.toJSON = function() {
    return {
      mathjs: "DenseMatrix",
      data: this._data,
      size: this._size,
      datatype: this._datatype
    };
  }, r.prototype.diagonal = function(l) {
    if (l) {
      if (Ne(l) && (l = l.toNumber()), !ce(l) || !Me(l))
        throw new TypeError("The parameter k must be an integer number");
    } else
      l = 0;
    for (var d = l > 0 ? l : 0, m = l < 0 ? -l : 0, v = this._size[0], f = this._size[1], y = Math.min(v - m, f - d), C = [], E = 0; E < y; E++)
      C[E] = this._data[E + m][E + d];
    return new r({
      data: C,
      size: [y],
      datatype: this._datatype
    });
  }, r.diagonal = function(l, d, m, v) {
    if (!be(l))
      throw new TypeError("Array expected, size parameter");
    if (l.length !== 2)
      throw new Error("Only two dimensions matrix are supported");
    if (l = l.map(function(_) {
      if (Ne(_) && (_ = _.toNumber()), !ce(_) || !Me(_) || _ < 1)
        throw new Error("Size values must be positive integers");
      return _;
    }), m) {
      if (Ne(m) && (m = m.toNumber()), !ce(m) || !Me(m))
        throw new TypeError("The parameter k must be an integer number");
    } else
      m = 0;
    var f = m > 0 ? m : 0, y = m < 0 ? -m : 0, C = l[0], E = l[1], p = Math.min(C - y, E - f), w;
    if (be(d)) {
      if (d.length !== p)
        throw new Error("Invalid value array length");
      w = function(b) {
        return d[b];
      };
    } else if (Pe(d)) {
      var g = d.size();
      if (g.length !== 1 || g[0] !== p)
        throw new Error("Invalid matrix length");
      w = function(b) {
        return d.get([b]);
      };
    } else
      w = function() {
        return d;
      };
    v || (v = Ne(w(0)) ? w(0).mul(0) : 0);
    var D = [];
    if (l.length > 0) {
      D = Pr(D, l, v);
      for (var A = 0; A < p; A++)
        D[A + y][A + f] = w(A);
    }
    return new r({
      data: D,
      size: [C, E]
    });
  }, r.fromJSON = function(l) {
    return new r(l);
  }, r.prototype.swapRows = function(l, d) {
    if (!ce(l) || !Me(l) || !ce(d) || !Me(d))
      throw new Error("Row index must be positive integers");
    if (this._size.length !== 2)
      throw new Error("Only two dimensional matrix is supported");
    return Ee(l, this._size[0]), Ee(d, this._size[0]), r._swapRows(l, d, this._data), this;
  }, r._swapRows = function(l, d, m) {
    var v = m[l];
    m[l] = m[d], m[d] = v;
  };
  function h(l) {
    return Pe(l) ? h(l.valueOf()) : be(l) ? l.map(h) : l;
  }
  return r;
}, {
  isClass: !0
});
function Qn(e, t, n) {
  if (!n)
    return Pe(e) ? e.map((i) => t(i), !1, !0) : Lr(e, t, !0);
  var r = (i) => i === 0 ? i : t(i);
  return Pe(e) ? e.map((i) => r(i), !1, !0) : Lr(e, r, !0);
}
var Ur = "isInteger", fl = ["typed", "equal"], hl = /* @__PURE__ */ ie(Ur, fl, (e) => {
  var {
    typed: t,
    equal: n
  } = e;
  return t(Ur, {
    number: (r) => Number.isFinite(r) ? n(r, Math.round(r)) : !1,
    BigNumber: (r) => r.isFinite() ? n(r.round(), r) : !1,
    bigint: (r) => !0,
    Fraction: (r) => r.d === 1n,
    "Array | Matrix": t.referToSelf((r) => (i) => Qn(i, r))
  });
}), dl = "number", er = "number, number";
function lo(e, t) {
  return e + t;
}
lo.signature = er;
function fo(e, t) {
  return e - t;
}
fo.signature = er;
function ho(e, t) {
  return e * t;
}
ho.signature = er;
function po(e) {
  return -e;
}
po.signature = dl;
function pl(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1e-9, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  if (n <= 0)
    throw new Error("Relative tolerance must be greater than 0");
  if (r < 0)
    throw new Error("Absolute tolerance must be at least 0");
  return e.isNaN() || t.isNaN() ? !1 : !e.isFinite() || !t.isFinite() ? e.eq(t) : e.eq(t) ? !0 : e.minus(t).abs().lte(e.constructor.max(e.constructor.max(e.abs(), t.abs()).mul(n), r));
}
function ml(e, t, n, r) {
  return on(e.re, t.re, n, r) && on(e.im, t.im, n, r);
}
var gl = /* @__PURE__ */ ie("compareUnits", ["typed"], (e) => {
  var {
    typed: t
  } = e;
  return {
    "Unit, Unit": t.referToSelf((n) => (r, i) => {
      if (!r.equalBase(i))
        throw new Error("Cannot compare units with different base");
      return t.find(n, [r.valueType(), i.valueType()])(r.value, i.value);
    })
  };
}), ln = "equalScalar", vl = ["typed", "config"], Dl = /* @__PURE__ */ ie(ln, vl, (e) => {
  var {
    typed: t,
    config: n
  } = e, r = gl({
    typed: t
  });
  return t(ln, {
    "boolean, boolean": function(o, s) {
      return o === s;
    },
    "number, number": function(o, s) {
      return on(o, s, n.relTol, n.absTol);
    },
    "BigNumber, BigNumber": function(o, s) {
      return o.eq(s) || pl(o, s, n.relTol, n.absTol);
    },
    "bigint, bigint": function(o, s) {
      return o === s;
    },
    "Fraction, Fraction": function(o, s) {
      return o.equals(s);
    },
    "Complex, Complex": function(o, s) {
      return ml(o, s, n.relTol, n.absTol);
    }
  }, r);
});
ie(ln, ["typed", "config"], (e) => {
  var {
    typed: t,
    config: n
  } = e;
  return t(ln, {
    "number, number": function(i, o) {
      return on(i, o, n.relTol, n.absTol);
    }
  });
});
var El = "SparseMatrix", yl = ["typed", "equalScalar", "Matrix"], wl = /* @__PURE__ */ ie(El, yl, (e) => {
  var {
    typed: t,
    equalScalar: n,
    Matrix: r
  } = e;
  function i(f, y) {
    if (!(this instanceof i))
      throw new SyntaxError("Constructor must be called with the new operator");
    if (y && !et(y))
      throw new Error("Invalid datatype: " + y);
    if (Pe(f))
      o(this, f, y);
    else if (f && be(f.index) && be(f.ptr) && be(f.size))
      this._values = f.values, this._index = f.index, this._ptr = f.ptr, this._size = f.size, this._datatype = y || f.datatype;
    else if (be(f))
      s(this, f, y);
    else {
      if (f)
        throw new TypeError("Unsupported type of data (" + yt(f) + ")");
      this._values = [], this._index = [], this._ptr = [0], this._size = [0, 0], this._datatype = y;
    }
  }
  function o(f, y, C) {
    y.type === "SparseMatrix" ? (f._values = y._values ? Be(y._values) : void 0, f._index = Be(y._index), f._ptr = Be(y._ptr), f._size = Be(y._size), f._datatype = C || y._datatype) : s(f, y.valueOf(), C || y._datatype);
  }
  function s(f, y, C) {
    f._values = [], f._index = [], f._ptr = [], f._datatype = C;
    var E = y.length, p = 0, w = n, g = 0;
    if (et(C) && (w = t.find(n, [C, C]) || n, g = t.convert(0, C)), E > 0) {
      var D = 0;
      do {
        f._ptr.push(f._index.length);
        for (var A = 0; A < E; A++) {
          var _ = y[A];
          if (be(_)) {
            if (D === 0 && p < _.length && (p = _.length), D < _.length) {
              var b = _[D];
              w(b, g) || (f._values.push(b), f._index.push(A));
            }
          } else
            D === 0 && p < 1 && (p = 1), w(_, g) || (f._values.push(_), f._index.push(A));
        }
        D++;
      } while (D < p);
    }
    for (; f._ptr.length <= p; )
      f._ptr.push(f._index.length);
    f._size = [E, p];
  }
  i.prototype = new r(), i.prototype.createSparseMatrix = function(f, y) {
    return new i(f, y);
  }, Object.defineProperty(i, "name", {
    value: "SparseMatrix"
  }), i.prototype.constructor = i, i.prototype.type = "SparseMatrix", i.prototype.isSparseMatrix = !0, i.prototype.getDataType = function() {
    return Jn(this._values, yt);
  }, i.prototype.storage = function() {
    return "sparse";
  }, i.prototype.datatype = function() {
    return this._datatype;
  }, i.prototype.create = function(f, y) {
    return new i(f, y);
  }, i.prototype.density = function() {
    var f = this._size[0], y = this._size[1];
    return f !== 0 && y !== 0 ? this._index.length / (f * y) : 0;
  }, i.prototype.subset = function(f, y, C) {
    if (!this._values)
      throw new Error("Cannot invoke subset on a Pattern only matrix");
    switch (arguments.length) {
      case 1:
        return a(this, f);
      case 2:
      case 3:
        return u(this, f, y, C);
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  };
  function a(f, y) {
    if (!Gn(y))
      throw new TypeError("Invalid index");
    var C = y.isScalar();
    if (C)
      return f.get(y.min());
    var E = y.size();
    if (E.length !== f._size.length)
      throw new he(E.length, f._size.length);
    var p, w, g, D, A = y.min(), _ = y.max();
    for (p = 0, w = f._size.length; p < w; p++)
      Ee(A[p], f._size[p]), Ee(_[p], f._size[p]);
    var b = f._values, T = f._index, S = f._ptr, M = y.dimension(0), j = y.dimension(1), $ = [], X = [];
    function I(ne, te) {
      X[ne] = te[0], $[ne] = !0;
    }
    Number.isInteger(M) ? I(M, [0]) : M.forEach(I);
    var q = b ? [] : void 0, H = [], Y = [];
    function Z(ne) {
      for (Y.push(H.length), g = S[ne], D = S[ne + 1]; g < D; g++)
        p = T[g], $[p] === !0 && (H.push(X[p]), q && q.push(b[g]));
    }
    return Number.isInteger(j) ? Z(j) : j.forEach(Z), Y.push(H.length), new i({
      values: q,
      index: H,
      ptr: Y,
      size: E,
      datatype: f._datatype
    });
  }
  function u(f, y, C, E) {
    if (!y || y.isIndex !== !0)
      throw new TypeError("Invalid index");
    var p = y.size(), w = y.isScalar(), g;
    if (Pe(C) ? (g = C.size(), C = C.toArray()) : g = Xe(C), w) {
      if (g.length !== 0)
        throw new TypeError("Scalar expected");
      f.set(y.min(), C, E);
    } else {
      if (p.length !== 1 && p.length !== 2)
        throw new he(p.length, f._size.length, "<");
      if (g.length < p.length) {
        for (var D = 0, A = 0; p[D] === 1 && g[D] === 1; )
          D++;
        for (; p[D] === 1; )
          A++, D++;
        C = ro(C, p.length, A, g);
      }
      if (!mt(p, g))
        throw new he(p, g, ">");
      if (p.length === 1) {
        var _ = y.dimension(0);
        S(_, (M, j) => {
          Ee(M), f.set([M, 0], C[j[0]], E);
        });
      } else {
        var b = y.dimension(0), T = y.dimension(1);
        S(b, (M, j) => {
          Ee(M), S(T, ($, X) => {
            Ee($), f.set([M, $], C[j[0]][X[0]], E);
          });
        });
      }
    }
    return f;
    function S(M, j) {
      ce(M) ? j(M, [0]) : M.forEach(j);
    }
  }
  i.prototype.get = function(f) {
    if (!be(f))
      throw new TypeError("Array expected");
    if (f.length !== this._size.length)
      throw new he(f.length, this._size.length);
    if (!this._values)
      throw new Error("Cannot invoke get on a Pattern only matrix");
    var y = f[0], C = f[1];
    Ee(y, this._size[0]), Ee(C, this._size[1]);
    var E = c(y, this._ptr[C], this._ptr[C + 1], this._index);
    return E < this._ptr[C + 1] && this._index[E] === y ? this._values[E] : 0;
  }, i.prototype.set = function(f, y, C) {
    if (!be(f))
      throw new TypeError("Array expected");
    if (f.length !== this._size.length)
      throw new he(f.length, this._size.length);
    if (!this._values)
      throw new Error("Cannot invoke set on a Pattern only matrix");
    var E = f[0], p = f[1], w = this._size[0], g = this._size[1], D = n, A = 0;
    et(this._datatype) && (D = t.find(n, [this._datatype, this._datatype]) || n, A = t.convert(0, this._datatype)), (E > w - 1 || p > g - 1) && (d(this, Math.max(E + 1, w), Math.max(p + 1, g), C), w = this._size[0], g = this._size[1]), Ee(E, w), Ee(p, g);
    var _ = c(E, this._ptr[p], this._ptr[p + 1], this._index);
    return _ < this._ptr[p + 1] && this._index[_] === E ? D(y, A) ? h(_, p, this._values, this._index, this._ptr) : this._values[_] = y : D(y, A) || l(_, E, p, y, this._values, this._index, this._ptr), this;
  };
  function c(f, y, C, E) {
    if (C - y === 0)
      return C;
    for (var p = y; p < C; p++)
      if (E[p] === f)
        return p;
    return y;
  }
  function h(f, y, C, E, p) {
    C.splice(f, 1), E.splice(f, 1);
    for (var w = y + 1; w < p.length; w++)
      p[w]--;
  }
  function l(f, y, C, E, p, w, g) {
    p.splice(f, 0, E), w.splice(f, 0, y);
    for (var D = C + 1; D < g.length; D++)
      g[D]++;
  }
  i.prototype.resize = function(f, y, C) {
    if (!nn(f))
      throw new TypeError("Array or Matrix expected");
    var E = f.valueOf().map((w) => Array.isArray(w) && w.length === 1 ? w[0] : w);
    if (E.length !== 2)
      throw new Error("Only two dimensions matrix are supported");
    E.forEach(function(w) {
      if (!ce(w) || !Me(w) || w < 0)
        throw new TypeError("Invalid size, must contain positive integers (size: " + He(E) + ")");
    });
    var p = C ? this.clone() : this;
    return d(p, E[0], E[1], y);
  };
  function d(f, y, C, E) {
    var p = E || 0, w = n, g = 0;
    et(f._datatype) && (w = t.find(n, [f._datatype, f._datatype]) || n, g = t.convert(0, f._datatype), p = t.convert(p, f._datatype));
    var D = !w(p, g), A = f._size[0], _ = f._size[1], b, T, S;
    if (C > _) {
      for (T = _; T < C; T++)
        if (f._ptr[T] = f._values.length, D)
          for (b = 0; b < A; b++)
            f._values.push(p), f._index.push(b);
      f._ptr[C] = f._values.length;
    } else C < _ && (f._ptr.splice(C + 1, _ - C), f._values.splice(f._ptr[C], f._values.length), f._index.splice(f._ptr[C], f._index.length));
    if (_ = C, y > A) {
      if (D) {
        var M = 0;
        for (T = 0; T < _; T++) {
          f._ptr[T] = f._ptr[T] + M, S = f._ptr[T + 1] + M;
          var j = 0;
          for (b = A; b < y; b++, j++)
            f._values.splice(S + j, 0, p), f._index.splice(S + j, 0, b), M++;
        }
        f._ptr[_] = f._values.length;
      }
    } else if (y < A) {
      var $ = 0;
      for (T = 0; T < _; T++) {
        f._ptr[T] = f._ptr[T] - $;
        var X = f._ptr[T], I = f._ptr[T + 1] - $;
        for (S = X; S < I; S++)
          b = f._index[S], b > y - 1 && (f._values.splice(S, 1), f._index.splice(S, 1), $++);
      }
      f._ptr[T] = f._values.length;
    }
    return f._size[0] = y, f._size[1] = C, f;
  }
  i.prototype.reshape = function(f, y) {
    if (!be(f))
      throw new TypeError("Array expected");
    if (f.length !== 2)
      throw new Error("Sparse matrices can only be reshaped in two dimensions");
    f.forEach(function(Y) {
      if (!ce(Y) || !Me(Y) || Y <= -2 || Y === 0)
        throw new TypeError("Invalid size, must contain positive integers or -1 (size: " + He(f) + ")");
    });
    var C = this._size[0] * this._size[1];
    f = Zn(f, C);
    var E = f[0] * f[1];
    if (C !== E)
      throw new Error("Reshaping sparse matrix will result in the wrong number of elements");
    var p = y ? this.clone() : this;
    if (this._size[0] === f[0] && this._size[1] === f[1])
      return p;
    for (var w = [], g = 0; g < p._ptr.length; g++)
      for (var D = 0; D < p._ptr[g + 1] - p._ptr[g]; D++)
        w.push(g);
    for (var A = p._values.slice(), _ = p._index.slice(), b = 0; b < p._index.length; b++) {
      var T = _[b], S = w[b], M = T * p._size[1] + S;
      w[b] = M % f[1], _[b] = Math.floor(M / f[1]);
    }
    p._values.length = 0, p._index.length = 0, p._ptr.length = f[1] + 1, p._size = f.slice();
    for (var j = 0; j < p._ptr.length; j++)
      p._ptr[j] = 0;
    for (var $ = 0; $ < A.length; $++) {
      var X = _[$], I = w[$], q = A[$], H = c(X, p._ptr[I], p._ptr[I + 1], p._index);
      l(H, X, I, q, p._values, p._index, p._ptr);
    }
    return p;
  }, i.prototype.clone = function() {
    var f = new i({
      values: this._values ? Be(this._values) : void 0,
      index: Be(this._index),
      ptr: Be(this._ptr),
      size: Be(this._size),
      datatype: this._datatype
    });
    return f;
  }, i.prototype.size = function() {
    return this._size.slice(0);
  }, i.prototype.map = function(f, y) {
    if (!this._values)
      throw new Error("Cannot invoke map on a Pattern only matrix");
    var C = this, E = this._size[0], p = this._size[1], w = cn(f, C, "map"), g = function(A, _, b) {
      return w.fn(A, [_, b], C);
    };
    return m(this, 0, E - 1, 0, p - 1, g, y);
  };
  function m(f, y, C, E, p, w, g) {
    var D = [], A = [], _ = [], b = n, T = 0;
    et(f._datatype) && (b = t.find(n, [f._datatype, f._datatype]) || n, T = t.convert(0, f._datatype));
    for (var S = function(oe, de, me) {
      var ge = w(oe, de, me);
      b(ge, T) || (D.push(ge), A.push(de));
    }, M = E; M <= p; M++) {
      _.push(D.length);
      var j = f._ptr[M], $ = f._ptr[M + 1];
      if (g)
        for (var X = j; X < $; X++) {
          var I = f._index[X];
          I >= y && I <= C && S(f._values[X], I - y, M - E);
        }
      else {
        for (var q = {}, H = j; H < $; H++) {
          var Y = f._index[H];
          q[Y] = f._values[H];
        }
        for (var Z = y; Z <= C; Z++) {
          var ne = Z in q ? q[Z] : 0;
          S(ne, Z - y, M - E);
        }
      }
    }
    return _.push(D.length), new i({
      values: D,
      index: A,
      ptr: _,
      size: [C - y + 1, p - E + 1]
    });
  }
  i.prototype.forEach = function(f, y) {
    if (!this._values)
      throw new Error("Cannot invoke forEach on a Pattern only matrix");
    for (var C = this, E = this._size[0], p = this._size[1], w = cn(f, C, "forEach"), g = 0; g < p; g++) {
      var D = this._ptr[g], A = this._ptr[g + 1];
      if (y)
        for (var _ = D; _ < A; _++) {
          var b = this._index[_];
          w.fn(this._values[_], [b, g], C);
        }
      else {
        for (var T = {}, S = D; S < A; S++) {
          var M = this._index[S];
          T[M] = this._values[S];
        }
        for (var j = 0; j < E; j++) {
          var $ = j in T ? T[j] : 0;
          w.fn($, [j, g], C);
        }
      }
    }
  }, i.prototype[Symbol.iterator] = function* () {
    if (!this._values)
      throw new Error("Cannot iterate a Pattern only matrix");
    for (var f = this._size[1], y = 0; y < f; y++)
      for (var C = this._ptr[y], E = this._ptr[y + 1], p = C; p < E; p++) {
        var w = this._index[p];
        yield {
          value: this._values[p],
          index: [w, y]
        };
      }
  }, i.prototype.toArray = function() {
    return v(this._values, this._index, this._ptr, this._size, !0);
  }, i.prototype.valueOf = function() {
    return v(this._values, this._index, this._ptr, this._size, !1);
  };
  function v(f, y, C, E, p) {
    var w = E[0], g = E[1], D = [], A, _;
    for (A = 0; A < w; A++)
      for (D[A] = [], _ = 0; _ < g; _++)
        D[A][_] = 0;
    for (_ = 0; _ < g; _++)
      for (var b = C[_], T = C[_ + 1], S = b; S < T; S++)
        A = y[S], D[A][_] = f ? p ? Be(f[S]) : f[S] : 1;
    return D;
  }
  return i.prototype.format = function(f) {
    for (var y = this._size[0], C = this._size[1], E = this.density(), p = "Sparse Matrix [" + He(y, f) + " x " + He(C, f) + "] density: " + He(E, f) + `
`, w = 0; w < C; w++)
      for (var g = this._ptr[w], D = this._ptr[w + 1], A = g; A < D; A++) {
        var _ = this._index[A];
        p += `
    (` + He(_, f) + ", " + He(w, f) + ") ==> " + (this._values ? He(this._values[A], f) : "X");
      }
    return p;
  }, i.prototype.toString = function() {
    return He(this.toArray());
  }, i.prototype.toJSON = function() {
    return {
      mathjs: "SparseMatrix",
      values: this._values,
      index: this._index,
      ptr: this._ptr,
      size: this._size,
      datatype: this._datatype
    };
  }, i.prototype.diagonal = function(f) {
    if (f) {
      if (Ne(f) && (f = f.toNumber()), !ce(f) || !Me(f))
        throw new TypeError("The parameter k must be an integer number");
    } else
      f = 0;
    var y = f > 0 ? f : 0, C = f < 0 ? -f : 0, E = this._size[0], p = this._size[1], w = Math.min(E - C, p - y), g = [], D = [], A = [];
    A[0] = 0;
    for (var _ = y; _ < p && g.length < w; _++)
      for (var b = this._ptr[_], T = this._ptr[_ + 1], S = b; S < T; S++) {
        var M = this._index[S];
        if (M === _ - y + C) {
          g.push(this._values[S]), D[g.length - 1] = M - C;
          break;
        }
      }
    return A.push(g.length), new i({
      values: g,
      index: D,
      ptr: A,
      size: [w, 1]
    });
  }, i.fromJSON = function(f) {
    return new i(f);
  }, i.diagonal = function(f, y, C, E, p) {
    if (!be(f))
      throw new TypeError("Array expected, size parameter");
    if (f.length !== 2)
      throw new Error("Only two dimensions matrix are supported");
    if (f = f.map(function(Y) {
      if (Ne(Y) && (Y = Y.toNumber()), !ce(Y) || !Me(Y) || Y < 1)
        throw new Error("Size values must be positive integers");
      return Y;
    }), C) {
      if (Ne(C) && (C = C.toNumber()), !ce(C) || !Me(C))
        throw new TypeError("The parameter k must be an integer number");
    } else
      C = 0;
    var w = n, g = 0;
    et(p) && (w = t.find(n, [p, p]) || n, g = t.convert(0, p));
    var D = C > 0 ? C : 0, A = C < 0 ? -C : 0, _ = f[0], b = f[1], T = Math.min(_ - A, b - D), S;
    if (be(y)) {
      if (y.length !== T)
        throw new Error("Invalid value array length");
      S = function(Z) {
        return y[Z];
      };
    } else if (Pe(y)) {
      var M = y.size();
      if (M.length !== 1 || M[0] !== T)
        throw new Error("Invalid matrix length");
      S = function(Z) {
        return y.get([Z]);
      };
    } else
      S = function() {
        return y;
      };
    for (var j = [], $ = [], X = [], I = 0; I < b; I++) {
      X.push(j.length);
      var q = I - D;
      if (q >= 0 && q < T) {
        var H = S(q);
        w(H, g) || ($.push(q + A), j.push(H));
      }
    }
    return X.push(j.length), new i({
      values: j,
      index: $,
      ptr: X,
      size: [_, b]
    });
  }, i.prototype.swapRows = function(f, y) {
    if (!ce(f) || !Me(f) || !ce(y) || !Me(y))
      throw new Error("Row index must be positive integers");
    if (this._size.length !== 2)
      throw new Error("Only two dimensional matrix is supported");
    return Ee(f, this._size[0]), Ee(y, this._size[0]), i._swapRows(f, y, this._size[1], this._values, this._index, this._ptr), this;
  }, i._forEachRow = function(f, y, C, E, p) {
    for (var w = E[f], g = E[f + 1], D = w; D < g; D++)
      p(C[D], y[D]);
  }, i._swapRows = function(f, y, C, E, p, w) {
    for (var g = 0; g < C; g++) {
      var D = w[g], A = w[g + 1], _ = c(f, D, A, p), b = c(y, D, A, p);
      if (_ < A && b < A && p[_] === f && p[b] === y) {
        if (E) {
          var T = E[_];
          E[_] = E[b], E[b] = T;
        }
        continue;
      }
      if (_ < A && p[_] === f && (b >= A || p[b] !== y)) {
        var S = E ? E[_] : void 0;
        p.splice(b, 0, y), E && E.splice(b, 0, S), p.splice(b <= _ ? _ + 1 : _, 1), E && E.splice(b <= _ ? _ + 1 : _, 1);
        continue;
      }
      if (b < A && p[b] === y && (_ >= A || p[_] !== f)) {
        var M = E ? E[b] : void 0;
        p.splice(_, 0, f), E && E.splice(_, 0, M), p.splice(_ <= b ? b + 1 : b, 1), E && E.splice(_ <= b ? b + 1 : b, 1);
      }
    }
  }, i;
}, {
  isClass: !0
}), kr = "matrix", Cl = ["typed", "Matrix", "DenseMatrix", "SparseMatrix"], bl = /* @__PURE__ */ ie(kr, Cl, (e) => {
  var {
    typed: t,
    Matrix: n,
    DenseMatrix: r,
    SparseMatrix: i
  } = e;
  return t(kr, {
    "": function() {
      return o([]);
    },
    string: function(a) {
      return o([], a);
    },
    "string, string": function(a, u) {
      return o([], a, u);
    },
    Array: function(a) {
      return o(a);
    },
    Matrix: function(a) {
      return o(a, a.storage());
    },
    "Array | Matrix, string": o,
    "Array | Matrix, string, string": o
  });
  function o(s, a, u) {
    if (a === "dense" || a === "default" || a === void 0)
      return new r(s, u);
    if (a === "sparse")
      return new i(s, u);
    throw new TypeError("Unknown matrix type " + JSON.stringify(a) + ".");
  }
}), Or = "unaryMinus", Fl = ["typed"], _l = /* @__PURE__ */ ie(Or, Fl, (e) => {
  var {
    typed: t
  } = e;
  return t(Or, {
    number: po,
    "Complex | BigNumber | Fraction": (n) => n.neg(),
    bigint: (n) => -n,
    Unit: t.referToSelf((n) => (r) => {
      var i = r.clone();
      return i.value = t.find(n, i.valueType())(r.value), i;
    }),
    // deep map collection, skip zeros since unaryMinus(0) = 0
    "Array | Matrix": t.referToSelf((n) => (r) => Qn(r, n, !0))
    // TODO: add support for string
  });
}), $r = "addScalar", Al = ["typed"], Tl = /* @__PURE__ */ ie($r, Al, (e) => {
  var {
    typed: t
  } = e;
  return t($r, {
    "number, number": lo,
    "Complex, Complex": function(r, i) {
      return r.add(i);
    },
    "BigNumber, BigNumber": function(r, i) {
      return r.plus(i);
    },
    "bigint, bigint": function(r, i) {
      return r + i;
    },
    "Fraction, Fraction": function(r, i) {
      return r.add(i);
    },
    "Unit, Unit": t.referToSelf((n) => (r, i) => {
      if (r.value === null || r.value === void 0)
        throw new Error("Parameter x contains a unit with undefined value");
      if (i.value === null || i.value === void 0)
        throw new Error("Parameter y contains a unit with undefined value");
      if (!r.equalBase(i)) throw new Error("Units do not match");
      var o = r.clone();
      return o.value = t.find(n, [o.valueType(), i.valueType()])(o.value, i.value), o.fixPrefix = !1, o;
    })
  });
}), zr = "subtractScalar", xl = ["typed"], Sl = /* @__PURE__ */ ie(zr, xl, (e) => {
  var {
    typed: t
  } = e;
  return t(zr, {
    "number, number": fo,
    "Complex, Complex": function(r, i) {
      return r.sub(i);
    },
    "BigNumber, BigNumber": function(r, i) {
      return r.minus(i);
    },
    "bigint, bigint": function(r, i) {
      return r - i;
    },
    "Fraction, Fraction": function(r, i) {
      return r.sub(i);
    },
    "Unit, Unit": t.referToSelf((n) => (r, i) => {
      if (r.value === null || r.value === void 0)
        throw new Error("Parameter x contains a unit with undefined value");
      if (i.value === null || i.value === void 0)
        throw new Error("Parameter y contains a unit with undefined value");
      if (!r.equalBase(i)) throw new Error("Units do not match");
      var o = r.clone();
      return o.value = t.find(n, [o.valueType(), i.valueType()])(o.value, i.value), o.fixPrefix = !1, o;
    })
  });
}), Bl = "matAlgo11xS0s", Rl = ["typed", "equalScalar"], Ml = /* @__PURE__ */ ie(Bl, Rl, (e) => {
  var {
    typed: t,
    equalScalar: n
  } = e;
  return function(i, o, s, a) {
    var u = i._values, c = i._index, h = i._ptr, l = i._size, d = i._datatype;
    if (!u)
      throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var m = l[0], v = l[1], f, y = n, C = 0, E = s;
    typeof d == "string" && (f = d, y = t.find(n, [f, f]), C = t.convert(0, f), o = t.convert(o, f), E = t.find(s, [f, f]));
    for (var p = [], w = [], g = [], D = 0; D < v; D++) {
      g[D] = w.length;
      for (var A = h[D], _ = h[D + 1], b = A; b < _; b++) {
        var T = c[b], S = a ? E(o, u[b]) : E(u[b], o);
        y(S, C) || (w.push(T), p.push(S));
      }
    }
    return g[v] = w.length, i.createSparseMatrix({
      values: p,
      index: w,
      ptr: g,
      size: [m, v],
      datatype: f
    });
  };
}), Nl = "matAlgo12xSfs", Pl = ["typed", "DenseMatrix"], mo = /* @__PURE__ */ ie(Nl, Pl, (e) => {
  var {
    typed: t,
    DenseMatrix: n
  } = e;
  return function(i, o, s, a) {
    var u = i._values, c = i._index, h = i._ptr, l = i._size, d = i._datatype;
    if (!u)
      throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var m = l[0], v = l[1], f, y = s;
    typeof d == "string" && (f = d, o = t.convert(o, f), y = t.find(s, [f, f]));
    for (var C = [], E = [], p = [], w = 0; w < v; w++) {
      for (var g = w + 1, D = h[w], A = h[w + 1], _ = D; _ < A; _++) {
        var b = c[_];
        E[b] = u[_], p[b] = g;
      }
      for (var T = 0; T < m; T++)
        w === 0 && (C[T] = []), p[T] === g ? C[T][w] = a ? y(o, E[T]) : y(E[T], o) : C[T][w] = a ? y(o, 0) : y(0, o);
    }
    return new n({
      data: C,
      size: [m, v],
      datatype: f
    });
  };
}), Ll = "matAlgo14xDs", Il = ["typed"], go = /* @__PURE__ */ ie(Ll, Il, (e) => {
  var {
    typed: t
  } = e;
  return function(i, o, s, a) {
    var u = i._data, c = i._size, h = i._datatype, l, d = s;
    typeof h == "string" && (l = h, o = t.convert(o, l), d = t.find(s, [l, l]));
    var m = c.length > 0 ? n(d, 0, c, c[0], u, o, a) : [];
    return i.createDenseMatrix({
      data: m,
      size: Be(c),
      datatype: l
    });
  };
  function n(r, i, o, s, a, u, c) {
    var h = [];
    if (i === o.length - 1)
      for (var l = 0; l < s; l++)
        h[l] = c ? r(u, a[l]) : r(a[l], u);
    else
      for (var d = 0; d < s; d++)
        h[d] = n(r, i + 1, o, o[i + 1], a[d], u, c);
    return h;
  }
}), Ul = "matAlgo03xDSf", kl = ["typed"], vo = /* @__PURE__ */ ie(Ul, kl, (e) => {
  var {
    typed: t
  } = e;
  return function(r, i, o, s) {
    var a = r._data, u = r._size, c = r._datatype || r.getDataType(), h = i._values, l = i._index, d = i._ptr, m = i._size, v = i._datatype || i._data === void 0 ? i._datatype : i.getDataType();
    if (u.length !== m.length)
      throw new he(u.length, m.length);
    if (u[0] !== m[0] || u[1] !== m[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + u + ") must match Matrix B (" + m + ")");
    if (!h)
      throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
    var f = u[0], y = u[1], C, E = 0, p = o;
    typeof c == "string" && c === v && c !== "mixed" && (C = c, E = t.convert(0, C), p = t.find(o, [C, C]));
    for (var w = [], g = 0; g < f; g++)
      w[g] = [];
    for (var D = [], A = [], _ = 0; _ < y; _++) {
      for (var b = _ + 1, T = d[_], S = d[_ + 1], M = T; M < S; M++) {
        var j = l[M];
        D[j] = s ? p(h[M], a[j][_]) : p(a[j][_], h[M]), A[j] = b;
      }
      for (var $ = 0; $ < f; $++)
        A[$] === b ? w[$][_] = D[$] : w[$][_] = s ? p(E, a[$][_]) : p(a[$][_], E);
    }
    return r.createDenseMatrix({
      data: w,
      size: [f, y],
      datatype: c === r._datatype && v === i._datatype ? C : void 0
    });
  };
}), Ol = "matAlgo05xSfSf", $l = ["typed", "equalScalar"], zl = /* @__PURE__ */ ie(Ol, $l, (e) => {
  var {
    typed: t,
    equalScalar: n
  } = e;
  return function(i, o, s) {
    var a = i._values, u = i._index, c = i._ptr, h = i._size, l = i._datatype || i._data === void 0 ? i._datatype : i.getDataType(), d = o._values, m = o._index, v = o._ptr, f = o._size, y = o._datatype || o._data === void 0 ? o._datatype : o.getDataType();
    if (h.length !== f.length)
      throw new he(h.length, f.length);
    if (h[0] !== f[0] || h[1] !== f[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + h + ") must match Matrix B (" + f + ")");
    var C = h[0], E = h[1], p, w = n, g = 0, D = s;
    typeof l == "string" && l === y && l !== "mixed" && (p = l, w = t.find(n, [p, p]), g = t.convert(0, p), D = t.find(s, [p, p]));
    var A = a && d ? [] : void 0, _ = [], b = [], T = A ? [] : void 0, S = A ? [] : void 0, M = [], j = [], $, X, I, q;
    for (X = 0; X < E; X++) {
      b[X] = _.length;
      var H = X + 1;
      for (I = c[X], q = c[X + 1]; I < q; I++)
        $ = u[I], _.push($), M[$] = H, T && (T[$] = a[I]);
      for (I = v[X], q = v[X + 1]; I < q; I++)
        $ = m[I], M[$] !== H && _.push($), j[$] = H, S && (S[$] = d[I]);
      if (A)
        for (I = b[X]; I < _.length; ) {
          $ = _[I];
          var Y = M[$], Z = j[$];
          if (Y === H || Z === H) {
            var ne = Y === H ? T[$] : g, te = Z === H ? S[$] : g, oe = D(ne, te);
            w(oe, g) ? _.splice(I, 1) : (A.push(oe), I++);
          }
        }
    }
    return b[E] = _.length, i.createSparseMatrix({
      values: A,
      index: _,
      ptr: b,
      size: [C, E],
      datatype: l === i._datatype && y === o._datatype ? p : void 0
    });
  };
}), Hl = "matAlgo13xDD", Vl = ["typed"], Xl = /* @__PURE__ */ ie(Hl, Vl, (e) => {
  var {
    typed: t
  } = e;
  return function(i, o, s) {
    var a = i._data, u = i._size, c = i._datatype, h = o._data, l = o._size, d = o._datatype, m = [];
    if (u.length !== l.length)
      throw new he(u.length, l.length);
    for (var v = 0; v < u.length; v++) {
      if (u[v] !== l[v])
        throw new RangeError("Dimension mismatch. Matrix A (" + u + ") must match Matrix B (" + l + ")");
      m[v] = u[v];
    }
    var f, y = s;
    typeof c == "string" && c === d && (f = c, y = t.find(s, [f, f]));
    var C = m.length > 0 ? n(y, 0, m, m[0], a, h) : [];
    return i.createDenseMatrix({
      data: C,
      size: m,
      datatype: f
    });
  };
  function n(r, i, o, s, a, u) {
    var c = [];
    if (i === o.length - 1)
      for (var h = 0; h < s; h++)
        c[h] = r(a[h], u[h]);
    else
      for (var l = 0; l < s; l++)
        c[l] = n(r, i + 1, o, o[i + 1], a[l], u[l]);
    return c;
  }
});
function Te(e, t) {
  if (mt(e.size(), t.size()))
    return [e, t];
  var n = ao(e.size(), t.size());
  return [e, t].map((r) => jl(r, n));
}
function jl(e, t) {
  return mt(e.size(), t) ? e : e.create(kn(e.valueOf(), t), e.datatype());
}
var Gl = "matrixAlgorithmSuite", Yl = ["typed", "matrix"], Do = /* @__PURE__ */ ie(Gl, Yl, (e) => {
  var {
    typed: t,
    matrix: n
  } = e, r = Xl({
    typed: t
  }), i = go({
    typed: t
  });
  return function(s) {
    var a = s.elop, u = s.SD || s.DS, c;
    a ? (c = {
      "DenseMatrix, DenseMatrix": (m, v) => r(...Te(m, v), a),
      "Array, Array": (m, v) => r(...Te(n(m), n(v)), a).valueOf(),
      "Array, DenseMatrix": (m, v) => r(...Te(n(m), v), a),
      "DenseMatrix, Array": (m, v) => r(...Te(m, n(v)), a)
    }, s.SS && (c["SparseMatrix, SparseMatrix"] = (m, v) => s.SS(...Te(m, v), a, !1)), s.DS && (c["DenseMatrix, SparseMatrix"] = (m, v) => s.DS(...Te(m, v), a, !1), c["Array, SparseMatrix"] = (m, v) => s.DS(...Te(n(m), v), a, !1)), u && (c["SparseMatrix, DenseMatrix"] = (m, v) => u(...Te(v, m), a, !0), c["SparseMatrix, Array"] = (m, v) => u(...Te(n(v), m), a, !0))) : (c = {
      "DenseMatrix, DenseMatrix": t.referToSelf((m) => (v, f) => r(...Te(v, f), m)),
      "Array, Array": t.referToSelf((m) => (v, f) => r(...Te(n(v), n(f)), m).valueOf()),
      "Array, DenseMatrix": t.referToSelf((m) => (v, f) => r(...Te(n(v), f), m)),
      "DenseMatrix, Array": t.referToSelf((m) => (v, f) => r(...Te(v, n(f)), m))
    }, s.SS && (c["SparseMatrix, SparseMatrix"] = t.referToSelf((m) => (v, f) => s.SS(...Te(v, f), m, !1))), s.DS && (c["DenseMatrix, SparseMatrix"] = t.referToSelf((m) => (v, f) => s.DS(...Te(v, f), m, !1)), c["Array, SparseMatrix"] = t.referToSelf((m) => (v, f) => s.DS(...Te(n(v), f), m, !1))), u && (c["SparseMatrix, DenseMatrix"] = t.referToSelf((m) => (v, f) => u(...Te(f, v), m, !0)), c["SparseMatrix, Array"] = t.referToSelf((m) => (v, f) => u(...Te(n(f), v), m, !0))));
    var h = s.scalar || "any", l = s.Ds || s.Ss;
    l && (a ? (c["DenseMatrix," + h] = (m, v) => i(m, v, a, !1), c[h + ", DenseMatrix"] = (m, v) => i(v, m, a, !0), c["Array," + h] = (m, v) => i(n(m), v, a, !1).valueOf(), c[h + ", Array"] = (m, v) => i(n(v), m, a, !0).valueOf()) : (c["DenseMatrix," + h] = t.referToSelf((m) => (v, f) => i(v, f, m, !1)), c[h + ", DenseMatrix"] = t.referToSelf((m) => (v, f) => i(f, v, m, !0)), c["Array," + h] = t.referToSelf((m) => (v, f) => i(n(v), f, m, !1).valueOf()), c[h + ", Array"] = t.referToSelf((m) => (v, f) => i(n(f), v, m, !0).valueOf())));
    var d = s.sS !== void 0 ? s.sS : s.Ss;
    return a ? (s.Ss && (c["SparseMatrix," + h] = (m, v) => s.Ss(m, v, a, !1)), d && (c[h + ", SparseMatrix"] = (m, v) => d(v, m, a, !0))) : (s.Ss && (c["SparseMatrix," + h] = t.referToSelf((m) => (v, f) => s.Ss(v, f, m, !1))), d && (c[h + ", SparseMatrix"] = t.referToSelf((m) => (v, f) => d(f, v, m, !0)))), a && a.signatures && bu(c, a.signatures), c;
  };
}), Kl = "matAlgo01xDSid", ql = ["typed"], Wl = /* @__PURE__ */ ie(Kl, ql, (e) => {
  var {
    typed: t
  } = e;
  return function(r, i, o, s) {
    var a = r._data, u = r._size, c = r._datatype || r.getDataType(), h = i._values, l = i._index, d = i._ptr, m = i._size, v = i._datatype || i._data === void 0 ? i._datatype : i.getDataType();
    if (u.length !== m.length)
      throw new he(u.length, m.length);
    if (u[0] !== m[0] || u[1] !== m[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + u + ") must match Matrix B (" + m + ")");
    if (!h)
      throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
    var f = u[0], y = u[1], C = typeof c == "string" && c !== "mixed" && c === v ? c : void 0, E = C ? t.find(o, [C, C]) : o, p, w, g = [];
    for (p = 0; p < f; p++)
      g[p] = [];
    var D = [], A = [];
    for (w = 0; w < y; w++) {
      for (var _ = w + 1, b = d[w], T = d[w + 1], S = b; S < T; S++)
        p = l[S], D[p] = s ? E(h[S], a[p][w]) : E(a[p][w], h[S]), A[p] = _;
      for (p = 0; p < f; p++)
        A[p] === _ ? g[p][w] = D[p] : g[p][w] = a[p][w];
    }
    return r.createDenseMatrix({
      data: g,
      size: [f, y],
      datatype: c === r._datatype && v === i._datatype ? C : void 0
    });
  };
}), Zl = "matAlgo10xSids", Jl = ["typed", "DenseMatrix"], Ql = /* @__PURE__ */ ie(Zl, Jl, (e) => {
  var {
    typed: t,
    DenseMatrix: n
  } = e;
  return function(i, o, s, a) {
    var u = i._values, c = i._index, h = i._ptr, l = i._size, d = i._datatype;
    if (!u)
      throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var m = l[0], v = l[1], f, y = s;
    typeof d == "string" && (f = d, o = t.convert(o, f), y = t.find(s, [f, f]));
    for (var C = [], E = [], p = [], w = 0; w < v; w++) {
      for (var g = w + 1, D = h[w], A = h[w + 1], _ = D; _ < A; _++) {
        var b = c[_];
        E[b] = u[_], p[b] = g;
      }
      for (var T = 0; T < m; T++)
        w === 0 && (C[T] = []), p[T] === g ? C[T][w] = a ? y(o, E[T]) : y(E[T], o) : C[T][w] = o;
    }
    return new n({
      data: C,
      size: [m, v],
      datatype: f
    });
  };
}), ef = "multiplyScalar", tf = ["typed"], nf = /* @__PURE__ */ ie(ef, tf, (e) => {
  var {
    typed: t
  } = e;
  return t("multiplyScalar", {
    "number, number": ho,
    "Complex, Complex": function(r, i) {
      return r.mul(i);
    },
    "BigNumber, BigNumber": function(r, i) {
      return r.times(i);
    },
    "bigint, bigint": function(r, i) {
      return r * i;
    },
    "Fraction, Fraction": function(r, i) {
      return r.mul(i);
    },
    "number | Fraction | BigNumber | Complex, Unit": (n, r) => r.multiply(n),
    "Unit, number | Fraction | BigNumber | Complex | Unit": (n, r) => n.multiply(r)
  });
}), Hr = "multiply", rf = ["typed", "matrix", "addScalar", "multiplyScalar", "equalScalar", "dot"], of = /* @__PURE__ */ ie(Hr, rf, (e) => {
  var {
    typed: t,
    matrix: n,
    addScalar: r,
    multiplyScalar: i,
    equalScalar: o,
    dot: s
  } = e, a = Ml({
    typed: t,
    equalScalar: o
  }), u = go({
    typed: t
  });
  function c(g, D) {
    switch (g.length) {
      case 1:
        switch (D.length) {
          case 1:
            if (g[0] !== D[0])
              throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");
            break;
          case 2:
            if (g[0] !== D[0])
              throw new RangeError("Dimension mismatch in multiplication. Vector length (" + g[0] + ") must match Matrix rows (" + D[0] + ")");
            break;
          default:
            throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + D.length + " dimensions)");
        }
        break;
      case 2:
        switch (D.length) {
          case 1:
            if (g[1] !== D[0])
              throw new RangeError("Dimension mismatch in multiplication. Matrix columns (" + g[1] + ") must match Vector length (" + D[0] + ")");
            break;
          case 2:
            if (g[1] !== D[0])
              throw new RangeError("Dimension mismatch in multiplication. Matrix A columns (" + g[1] + ") must match Matrix B rows (" + D[0] + ")");
            break;
          default:
            throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + D.length + " dimensions)");
        }
        break;
      default:
        throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has " + g.length + " dimensions)");
    }
  }
  function h(g, D, A) {
    if (A === 0)
      throw new Error("Cannot multiply two empty vectors");
    return s(g, D);
  }
  function l(g, D) {
    if (D.storage() !== "dense")
      throw new Error("Support for SparseMatrix not implemented");
    return d(g, D);
  }
  function d(g, D) {
    var A = g._data, _ = g._size, b = g._datatype || g.getDataType(), T = D._data, S = D._size, M = D._datatype || D.getDataType(), j = _[0], $ = S[1], X, I = r, q = i;
    b && M && b === M && typeof b == "string" && b !== "mixed" && (X = b, I = t.find(r, [X, X]), q = t.find(i, [X, X]));
    for (var H = [], Y = 0; Y < $; Y++) {
      for (var Z = q(A[0], T[0][Y]), ne = 1; ne < j; ne++)
        Z = I(Z, q(A[ne], T[ne][Y]));
      H[Y] = Z;
    }
    return g.createDenseMatrix({
      data: H,
      size: [$],
      datatype: b === g._datatype && M === D._datatype ? X : void 0
    });
  }
  var m = t("_multiplyMatrixVector", {
    "DenseMatrix, any": f,
    "SparseMatrix, any": E
  }), v = t("_multiplyMatrixMatrix", {
    "DenseMatrix, DenseMatrix": y,
    "DenseMatrix, SparseMatrix": C,
    "SparseMatrix, DenseMatrix": p,
    "SparseMatrix, SparseMatrix": w
  });
  function f(g, D) {
    var A = g._data, _ = g._size, b = g._datatype || g.getDataType(), T = D._data, S = D._datatype || D.getDataType(), M = _[0], j = _[1], $, X = r, I = i;
    b && S && b === S && typeof b == "string" && b !== "mixed" && ($ = b, X = t.find(r, [$, $]), I = t.find(i, [$, $]));
    for (var q = [], H = 0; H < M; H++) {
      for (var Y = A[H], Z = I(Y[0], T[0]), ne = 1; ne < j; ne++)
        Z = X(Z, I(Y[ne], T[ne]));
      q[H] = Z;
    }
    return g.createDenseMatrix({
      data: q,
      size: [M],
      datatype: b === g._datatype && S === D._datatype ? $ : void 0
    });
  }
  function y(g, D) {
    var A = g._data, _ = g._size, b = g._datatype || g.getDataType(), T = D._data, S = D._size, M = D._datatype || D.getDataType(), j = _[0], $ = _[1], X = S[1], I, q = r, H = i;
    b && M && b === M && typeof b == "string" && b !== "mixed" && b !== "mixed" && (I = b, q = t.find(r, [I, I]), H = t.find(i, [I, I]));
    for (var Y = [], Z = 0; Z < j; Z++) {
      var ne = A[Z];
      Y[Z] = [];
      for (var te = 0; te < X; te++) {
        for (var oe = H(ne[0], T[0][te]), de = 1; de < $; de++)
          oe = q(oe, H(ne[de], T[de][te]));
        Y[Z][te] = oe;
      }
    }
    return g.createDenseMatrix({
      data: Y,
      size: [j, X],
      datatype: b === g._datatype && M === D._datatype ? I : void 0
    });
  }
  function C(g, D) {
    var A = g._data, _ = g._size, b = g._datatype || g.getDataType(), T = D._values, S = D._index, M = D._ptr, j = D._size, $ = D._datatype || D._data === void 0 ? D._datatype : D.getDataType();
    if (!T)
      throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");
    var X = _[0], I = j[1], q, H = r, Y = i, Z = o, ne = 0;
    b && $ && b === $ && typeof b == "string" && b !== "mixed" && (q = b, H = t.find(r, [q, q]), Y = t.find(i, [q, q]), Z = t.find(o, [q, q]), ne = t.convert(0, q));
    for (var te = [], oe = [], de = [], me = D.createSparseMatrix({
      values: te,
      index: oe,
      ptr: de,
      size: [X, I],
      datatype: b === g._datatype && $ === D._datatype ? q : void 0
    }), ge = 0; ge < I; ge++) {
      de[ge] = oe.length;
      var le = M[ge], we = M[ge + 1];
      if (we > le)
        for (var fe = 0, se = 0; se < X; se++) {
          for (var Re = se + 1, Ce = void 0, ae = le; ae < we; ae++) {
            var Ae = S[ae];
            fe !== Re ? (Ce = Y(A[se][Ae], T[ae]), fe = Re) : Ce = H(Ce, Y(A[se][Ae], T[ae]));
          }
          fe === Re && !Z(Ce, ne) && (oe.push(se), te.push(Ce));
        }
    }
    return de[I] = oe.length, me;
  }
  function E(g, D) {
    var A = g._values, _ = g._index, b = g._ptr, T = g._datatype || g._data === void 0 ? g._datatype : g.getDataType();
    if (!A)
      throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
    var S = D._data, M = D._datatype || D.getDataType(), j = g._size[0], $ = D._size[0], X = [], I = [], q = [], H, Y = r, Z = i, ne = o, te = 0;
    T && M && T === M && typeof T == "string" && T !== "mixed" && (H = T, Y = t.find(r, [H, H]), Z = t.find(i, [H, H]), ne = t.find(o, [H, H]), te = t.convert(0, H));
    var oe = [], de = [];
    q[0] = 0;
    for (var me = 0; me < $; me++) {
      var ge = S[me];
      if (!ne(ge, te))
        for (var le = b[me], we = b[me + 1], fe = le; fe < we; fe++) {
          var se = _[fe];
          de[se] ? oe[se] = Y(oe[se], Z(ge, A[fe])) : (de[se] = !0, I.push(se), oe[se] = Z(ge, A[fe]));
        }
    }
    for (var Re = I.length, Ce = 0; Ce < Re; Ce++) {
      var ae = I[Ce];
      X[Ce] = oe[ae];
    }
    return q[1] = I.length, g.createSparseMatrix({
      values: X,
      index: I,
      ptr: q,
      size: [j, 1],
      datatype: T === g._datatype && M === D._datatype ? H : void 0
    });
  }
  function p(g, D) {
    var A = g._values, _ = g._index, b = g._ptr, T = g._datatype || g._data === void 0 ? g._datatype : g.getDataType();
    if (!A)
      throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
    var S = D._data, M = D._datatype || D.getDataType(), j = g._size[0], $ = D._size[0], X = D._size[1], I, q = r, H = i, Y = o, Z = 0;
    T && M && T === M && typeof T == "string" && T !== "mixed" && (I = T, q = t.find(r, [I, I]), H = t.find(i, [I, I]), Y = t.find(o, [I, I]), Z = t.convert(0, I));
    for (var ne = [], te = [], oe = [], de = g.createSparseMatrix({
      values: ne,
      index: te,
      ptr: oe,
      size: [j, X],
      datatype: T === g._datatype && M === D._datatype ? I : void 0
    }), me = [], ge = [], le = 0; le < X; le++) {
      oe[le] = te.length;
      for (var we = le + 1, fe = 0; fe < $; fe++) {
        var se = S[fe][le];
        if (!Y(se, Z))
          for (var Re = b[fe], Ce = b[fe + 1], ae = Re; ae < Ce; ae++) {
            var Ae = _[ae];
            ge[Ae] !== we ? (ge[Ae] = we, te.push(Ae), me[Ae] = H(se, A[ae])) : me[Ae] = q(me[Ae], H(se, A[ae]));
          }
      }
      for (var Ge = oe[le], rt = te.length, it = Ge; it < rt; it++) {
        var Ct = te[it];
        ne[it] = me[Ct];
      }
    }
    return oe[X] = te.length, de;
  }
  function w(g, D) {
    var A = g._values, _ = g._index, b = g._ptr, T = g._datatype || g._data === void 0 ? g._datatype : g.getDataType(), S = D._values, M = D._index, j = D._ptr, $ = D._datatype || D._data === void 0 ? D._datatype : D.getDataType(), X = g._size[0], I = D._size[1], q = A && S, H, Y = r, Z = i;
    T && $ && T === $ && typeof T == "string" && T !== "mixed" && (H = T, Y = t.find(r, [H, H]), Z = t.find(i, [H, H]));
    for (var ne = q ? [] : void 0, te = [], oe = [], de = g.createSparseMatrix({
      values: ne,
      index: te,
      ptr: oe,
      size: [X, I],
      datatype: T === g._datatype && $ === D._datatype ? H : void 0
    }), me = q ? [] : void 0, ge = [], le, we, fe, se, Re, Ce, ae, Ae, Ge = 0; Ge < I; Ge++) {
      oe[Ge] = te.length;
      var rt = Ge + 1;
      for (Re = j[Ge], Ce = j[Ge + 1], se = Re; se < Ce; se++)
        if (Ae = M[se], q)
          for (we = b[Ae], fe = b[Ae + 1], le = we; le < fe; le++)
            ae = _[le], ge[ae] !== rt ? (ge[ae] = rt, te.push(ae), me[ae] = Z(S[se], A[le])) : me[ae] = Y(me[ae], Z(S[se], A[le]));
        else
          for (we = b[Ae], fe = b[Ae + 1], le = we; le < fe; le++)
            ae = _[le], ge[ae] !== rt && (ge[ae] = rt, te.push(ae));
      if (q)
        for (var it = oe[Ge], Ct = te.length, bt = it; bt < Ct; bt++) {
          var Cn = te[bt];
          ne[bt] = me[Cn];
        }
    }
    return oe[I] = te.length, de;
  }
  return t(Hr, i, {
    // we extend the signatures of multiplyScalar with signatures dealing with matrices
    "Array, Array": t.referTo("Matrix, Matrix", (g) => (D, A) => {
      c(Xe(D), Xe(A));
      var _ = g(n(D), n(A));
      return Pe(_) ? _.valueOf() : _;
    }),
    "Matrix, Matrix": function(D, A) {
      var _ = D.size(), b = A.size();
      return c(_, b), _.length === 1 ? b.length === 1 ? h(D, A, _[0]) : l(D, A) : b.length === 1 ? m(D, A) : v(D, A);
    },
    "Matrix, Array": t.referTo("Matrix,Matrix", (g) => (D, A) => g(D, n(A))),
    "Array, Matrix": t.referToSelf((g) => (D, A) => g(n(D, A.storage()), A)),
    "SparseMatrix, any": function(D, A) {
      return a(D, A, i, !1);
    },
    "DenseMatrix, any": function(D, A) {
      return u(D, A, i, !1);
    },
    "any, SparseMatrix": function(D, A) {
      return a(A, D, i, !0);
    },
    "any, DenseMatrix": function(D, A) {
      return u(A, D, i, !0);
    },
    "Array, any": function(D, A) {
      return u(n(D), A, i, !1).valueOf();
    },
    "any, Array": function(D, A) {
      return u(n(A), D, i, !0).valueOf();
    },
    "any, any": i,
    "any, any, ...any": t.referToSelf((g) => (D, A, _) => {
      for (var b = g(D, A), T = 0; T < _.length; T++)
        b = g(b, _[T]);
      return b;
    })
  });
}), Vr = "subtract", sf = ["typed", "matrix", "equalScalar", "subtractScalar", "unaryMinus", "DenseMatrix", "concat"], af = /* @__PURE__ */ ie(Vr, sf, (e) => {
  var {
    typed: t,
    matrix: n,
    equalScalar: r,
    subtractScalar: i,
    unaryMinus: o,
    DenseMatrix: s,
    concat: a
  } = e, u = Wl({
    typed: t
  }), c = vo({
    typed: t
  }), h = zl({
    typed: t,
    equalScalar: r
  }), l = Ql({
    typed: t,
    DenseMatrix: s
  }), d = mo({
    typed: t,
    DenseMatrix: s
  }), m = Do({
    typed: t,
    matrix: n,
    concat: a
  });
  return t(Vr, {
    "any, any": i
  }, m({
    elop: i,
    SS: h,
    DS: u,
    SD: c,
    Ss: d,
    sS: l
  }));
}), uf = "matAlgo07xSSf", cf = ["typed", "SparseMatrix"], lf = /* @__PURE__ */ ie(uf, cf, (e) => {
  var {
    typed: t,
    SparseMatrix: n
  } = e;
  return function(o, s, a) {
    var u = o._size, c = o._datatype || o._data === void 0 ? o._datatype : o.getDataType(), h = s._size, l = s._datatype || s._data === void 0 ? s._datatype : s.getDataType();
    if (u.length !== h.length)
      throw new he(u.length, h.length);
    if (u[0] !== h[0] || u[1] !== h[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + u + ") must match Matrix B (" + h + ")");
    var d = u[0], m = u[1], v, f = 0, y = a;
    typeof c == "string" && c === l && c !== "mixed" && (v = c, f = t.convert(0, v), y = t.find(a, [v, v]));
    for (var C = [], E = [], p = new Array(m + 1).fill(0), w = [], g = [], D = [], A = [], _ = 0; _ < m; _++) {
      var b = _ + 1, T = 0;
      r(o, _, D, w, b), r(s, _, A, g, b);
      for (var S = 0; S < d; S++) {
        var M = D[S] === b ? w[S] : f, j = A[S] === b ? g[S] : f, $ = y(M, j);
        $ !== 0 && $ !== !1 && (E.push(S), C.push($), T++);
      }
      p[_ + 1] = p[_] + T;
    }
    return new n({
      values: C,
      index: E,
      ptr: p,
      size: [d, m],
      datatype: c === o._datatype && l === s._datatype ? v : void 0
    });
  };
  function r(i, o, s, a, u) {
    for (var c = i._values, h = i._index, l = i._ptr, d = l[o], m = l[o + 1]; d < m; d++) {
      var v = h[d];
      s[v] = u, a[v] = c[d];
    }
  }
}), Xr = "conj", ff = ["typed"], hf = /* @__PURE__ */ ie(Xr, ff, (e) => {
  var {
    typed: t
  } = e;
  return t(Xr, {
    "number | BigNumber | Fraction": (n) => n,
    Complex: (n) => n.conjugate(),
    Unit: t.referToSelf((n) => (r) => new r.constructor(n(r.toNumeric()), r.formatUnits())),
    "Array | Matrix": t.referToSelf((n) => (r) => Qn(r, n))
  });
}), jr = "concat", df = ["typed", "matrix", "isInteger"], pf = /* @__PURE__ */ ie(jr, df, (e) => {
  var {
    typed: t,
    matrix: n,
    isInteger: r
  } = e;
  return t(jr, {
    // TODO: change signature to '...Array | Matrix, dim?' when supported
    "...Array | Matrix | number | BigNumber": function(o) {
      var s, a = o.length, u = -1, c, h = !1, l = [];
      for (s = 0; s < a; s++) {
        var d = o[s];
        if (Pe(d) && (h = !0), ce(d) || Ne(d)) {
          if (s !== a - 1)
            throw new Error("Dimension must be specified as last argument");
          if (c = u, u = d.valueOf(), !r(u))
            throw new TypeError("Integer number expected for dimension");
          if (u < 0 || s > 0 && u > c)
            throw new wt(u, c + 1);
        } else {
          var m = Be(d).valueOf(), v = Xe(m);
          if (l[s] = m, c = u, u = v.length - 1, s > 0 && u !== c)
            throw new he(c + 1, u + 1);
        }
      }
      if (l.length === 0)
        throw new SyntaxError("At least one matrix expected");
      for (var f = l.shift(); l.length; )
        f = so(f, l.shift(), u);
      return h ? n(f) : f;
    },
    "...string": function(o) {
      return o.join("");
    }
  });
}), Gr = "size", mf = ["typed"], gf = /* @__PURE__ */ ie(Gr, mf, (e) => {
  var {
    typed: t
  } = e;
  return t(Gr, {
    Matrix: (n) => n.size(),
    Array: Xe,
    string: (n) => [n.length],
    // scalar
    "number | Complex | BigNumber | Unit | boolean | null": (n) => []
  });
}), fn = "equal", vf = ["typed", "matrix", "equalScalar", "DenseMatrix", "SparseMatrix"], Df = /* @__PURE__ */ ie(fn, vf, (e) => {
  var {
    typed: t,
    matrix: n,
    equalScalar: r,
    DenseMatrix: i,
    concat: o,
    SparseMatrix: s
  } = e, a = vo({
    typed: t
  }), u = lf({
    typed: t,
    SparseMatrix: s
  }), c = mo({
    typed: t,
    DenseMatrix: i
  }), h = Do({
    typed: t,
    matrix: n
  });
  return t(fn, Ef({
    typed: t,
    equalScalar: r
  }), h({
    elop: r,
    SS: u,
    DS: a,
    Ss: c
  }));
}), Ef = ie(fn, ["typed", "equalScalar"], (e) => {
  var {
    typed: t,
    equalScalar: n
  } = e;
  return t(fn, {
    "any, any": function(i, o) {
      return i === null ? o === null : o === null ? i === null : i === void 0 ? o === void 0 : o === void 0 ? i === void 0 : n(i, o);
    }
  });
}), Yr = "dot", yf = ["typed", "addScalar", "multiplyScalar", "conj", "size"], wf = /* @__PURE__ */ ie(Yr, yf, (e) => {
  var {
    typed: t,
    addScalar: n,
    multiplyScalar: r,
    conj: i,
    size: o
  } = e;
  return t(Yr, {
    "Array | DenseMatrix, Array | DenseMatrix": a,
    "SparseMatrix, SparseMatrix": u
  });
  function s(c, h) {
    var l = o(c), d = o(h), m, v;
    if (l.length === 1)
      m = l[0];
    else if (l.length === 2 && l[1] === 1)
      m = l[0];
    else
      throw new RangeError("Expected a column vector, instead got a matrix of size (" + l.join(", ") + ")");
    if (d.length === 1)
      v = d[0];
    else if (d.length === 2 && d[1] === 1)
      v = d[0];
    else
      throw new RangeError("Expected a column vector, instead got a matrix of size (" + d.join(", ") + ")");
    if (m !== v) throw new RangeError("Vectors must have equal length (" + m + " != " + v + ")");
    if (m === 0) throw new RangeError("Cannot calculate the dot product of empty vectors");
    return m;
  }
  function a(c, h) {
    var l = s(c, h), d = Pe(c) ? c._data : c, m = Pe(c) ? c._datatype || c.getDataType() : void 0, v = Pe(h) ? h._data : h, f = Pe(h) ? h._datatype || h.getDataType() : void 0, y = o(c).length === 2, C = o(h).length === 2, E = n, p = r;
    if (m && f && m === f && typeof m == "string" && m !== "mixed") {
      var w = m;
      E = t.find(n, [w, w]), p = t.find(r, [w, w]);
    }
    if (!y && !C) {
      for (var g = p(i(d[0]), v[0]), D = 1; D < l; D++)
        g = E(g, p(i(d[D]), v[D]));
      return g;
    }
    if (!y && C) {
      for (var A = p(i(d[0]), v[0][0]), _ = 1; _ < l; _++)
        A = E(A, p(i(d[_]), v[_][0]));
      return A;
    }
    if (y && !C) {
      for (var b = p(i(d[0][0]), v[0]), T = 1; T < l; T++)
        b = E(b, p(i(d[T][0]), v[T]));
      return b;
    }
    if (y && C) {
      for (var S = p(i(d[0][0]), v[0][0]), M = 1; M < l; M++)
        S = E(S, p(i(d[M][0]), v[M][0]));
      return S;
    }
  }
  function u(c, h) {
    s(c, h);
    for (var l = c._index, d = c._values, m = h._index, v = h._values, f = 0, y = n, C = r, E = 0, p = 0; E < l.length && p < m.length; ) {
      var w = l[E], g = m[p];
      if (w < g) {
        E++;
        continue;
      }
      if (w > g) {
        p++;
        continue;
      }
      w === g && (f = y(f, C(d[E], v[p])), E++, p++);
    }
    return f;
  }
}), Cf = /* @__PURE__ */ Mc({
  config: pn
}), bf = /* @__PURE__ */ Uc({}), Ff = /* @__PURE__ */ jc({}), tr = /* @__PURE__ */ Kc({}), yn = /* @__PURE__ */ ll({
  Matrix: tr,
  config: pn
}), Oe = /* @__PURE__ */ Lu({
  BigNumber: Cf,
  Complex: bf,
  DenseMatrix: yn,
  Fraction: Ff
}), Eo = /* @__PURE__ */ Tl({
  typed: Oe
}), _f = /* @__PURE__ */ hf({
  typed: Oe
}), wn = /* @__PURE__ */ Dl({
  config: pn,
  typed: Oe
}), yo = /* @__PURE__ */ nf({
  typed: Oe
}), Af = /* @__PURE__ */ gf({
  typed: Oe
}), wo = /* @__PURE__ */ wl({
  Matrix: tr,
  equalScalar: wn,
  typed: Oe
}), Tf = /* @__PURE__ */ Sl({
  typed: Oe
}), On = /* @__PURE__ */ wf({
  addScalar: Eo,
  conj: _f,
  multiplyScalar: yo,
  size: Af,
  typed: Oe
}), ut = /* @__PURE__ */ bl({
  DenseMatrix: yn,
  Matrix: tr,
  SparseMatrix: wo,
  typed: Oe
}), $n = /* @__PURE__ */ of({
  addScalar: Eo,
  dot: On,
  equalScalar: wn,
  matrix: ut,
  multiplyScalar: yo,
  typed: Oe
}), xf = /* @__PURE__ */ Df({
  DenseMatrix: yn,
  SparseMatrix: wo,
  equalScalar: wn,
  matrix: ut,
  typed: Oe
}), Sf = /* @__PURE__ */ hl({
  equal: xf,
  typed: Oe
}), Bf = /* @__PURE__ */ _l({
  typed: Oe
}), Rf = /* @__PURE__ */ pf({
  isInteger: Sf,
  matrix: ut,
  typed: Oe
}), Mf = /* @__PURE__ */ af({
  DenseMatrix: yn,
  concat: Rf,
  equalScalar: wn,
  matrix: ut,
  subtractScalar: Tf,
  typed: Oe,
  unaryMinus: Bf
});
function zn(e) {
  return !e || !e.trim() ? [] : e.split(/[\s,]+/).map((t) => parseInt(t, 10)).filter((t) => !isNaN(t));
}
function Nf(e) {
  if (e.length === 0) return 0;
  let t = e[e.length - 1];
  for (let n = e.length - 2; n >= 0; n--)
    t = e[n] + 1 / t;
  return t;
}
function Pf(e, t) {
  if (t.length === 0) return Nf(e);
  let n = [[1, 0], [0, 1]];
  for (const u of t)
    n = [
      [u * n[0][0] + n[0][1], n[0][0]],
      [u * n[1][0] + n[1][1], n[1][0]]
    ];
  const r = n[1][0], i = n[1][1] - n[0][0], o = -n[0][1], s = i * i - 4 * r * o;
  if (s < 0) throw new Error("quadraticCF: negative discriminant");
  let a = (-i + Math.sqrt(s)) / (2 * r);
  for (let u = e.length - 1; u >= 0; u--)
    a = e[u] + 1 / a;
  return a;
}
function Kr(e, t) {
  return Pf(zn(e), zn(t));
}
function Lf(e) {
  return zn(e).reverse().join(", ");
}
let dt = [1, 1.618033988749895], pt = [-1.618033988749895, 1], If = null, Hn = !1;
function Uf(e) {
  console.log("checkPeriodSnap called, flow:", e, "p1:", If);
}
function Co(e, t) {
  e = ut(e), t = ut(t);
  const n = (r) => On(r, r);
  for (n(e) > n(t) && ([e, t] = [t, e]); ; ) {
    const r = Math.round(On(e, t) / n(e));
    if (t = Mf(t, $n(r, e)), n(t) >= n(e)) break;
    [e, t] = [t, e];
  }
  return [e.toArray(), t.toArray()];
}
const hn = 60;
function kf(e) {
  return ut([
    [Math.exp(e / (3 * hn)), 0],
    [0, Math.exp(-e / (3 * hn))]
  ]);
}
function Of(e) {
  return ut([
    [1, 0],
    [e / hn, 1]
  ]);
}
function $f(e) {
  return ut([
    [1, e / hn],
    [0, 1]
  ]);
}
function zf(e, t) {
  const n = Kr(e.cfPrefix ?? "", e.cfPeriod ?? "0");
  dt = [1, Kr("", Lf(e.cfPeriod) ?? "0")], pt = [-n, 1], [dt, pt] = Co(dt, pt), Hn = !0;
}
function Hf(e) {
  dt = [1, 1.618033988749895], pt = [-1.618033988749895, 1];
}
function Vf(e, t, n, r) {
  const i = e.getUniformValue("uFlow"), o = e.getUniformValue("uSpeed");
  let s;
  switch (i) {
    case 1:
      s = Of(o);
      break;
    case 2:
      s = $f(o);
      break;
    default:
      s = kf(o * 2);
  }
  const a = $n(s, dt), u = $n(s, pt);
  [dt, pt] = Co(a, u), Uf(i), e.setUniformValue("uLattice", [dt[0], dt[1], pt[0], pt[1]]), e.setUniformValue("uNewLattice", Hn), Hn = !1;
}
const Bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onFrame: Vf,
  onSetLattice: zf,
  setup: Hf
}, Symbol.toStringTag, { value: "Module" }));
export {
  Xf as mount
};
