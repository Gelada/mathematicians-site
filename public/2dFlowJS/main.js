(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode('[data-theme=auto]{--font-mono: monospace;--font-ui: inherit;--bg-primary: transparent;--bg-secondary: transparent;--bg-tertiary: transparent;--bg-canvas: #000000;--text-primary: currentColor;--text-secondary: color-mix(in srgb, currentColor 80%, transparent);--text-muted: color-mix(in srgb, currentColor 60%, transparent);--text-disabled: color-mix(in srgb, currentColor 40%, transparent);--border-primary: color-mix(in srgb, currentColor 15%, transparent);--border-secondary: color-mix(in srgb, currentColor 25%, transparent);--accent-primary: #4a9eff;--accent-primary-hover: #3a8eef;--accent-primary-active: #2a7edf;--accent-secondary: #7c4dff;--error-bg: rgba(204, 0, 0, .08);--error-text: #cc0000;--error-border: rgba(204, 0, 0, .2);--success-bg: rgba(76, 175, 80, .08);--success-text: #4caf50;--success-border: rgba(76, 175, 80, .2);--overlay-bg: rgba(0, 0, 0, .75);--overlay-backdrop: rgba(0, 0, 0, .95);--shadow-sm: none;--shadow-md: none;--shadow-lg: none;--code-bg: #fafafa;--code-text: #1e1e1e;--code-line-number: #999999;--code-line-border: #e0e0e0;--code-selection: rgba(173, 214, 255, .4);--syntax-comment: #6a9955;--syntax-keyword: #0000ff;--syntax-string: #a31515;--syntax-number: #098658;--syntax-operator: #1e1e1e;--syntax-function: #795e26;--syntax-class: #267f99;--syntax-punctuation: #1e1e1e;--tab-bg: transparent;--tab-text: color-mix(in srgb, currentColor 60%, transparent);--tab-text-hover: color-mix(in srgb, currentColor 80%, transparent);--tab-text-active: currentColor;--tab-border-active: currentColor;--button-bg: transparent;--button-border: color-mix(in srgb, currentColor 25%, transparent);--button-text: currentColor;--button-bg-hover: color-mix(in srgb, currentColor 10%, transparent);--button-border-hover: color-mix(in srgb, currentColor 40%, transparent);--button-text-hover: currentColor;--recompile-bg: color-mix(in srgb, currentColor 10%, transparent);--recompile-text: currentColor;--recompile-bg-hover: color-mix(in srgb, currentColor 15%, transparent);--recompile-bg-active: color-mix(in srgb, currentColor 20%, transparent);--image-viewer-bg: transparent;--pane-radius: 0;--pane-shadow: none}@media (prefers-color-scheme: dark){[data-theme=auto]{--error-bg: rgba(255, 107, 107, .1);--error-text: #ff6b6b;--error-border: rgba(255, 107, 107, .25);--success-bg: rgba(107, 207, 107, .1);--success-text: #6bcf6b;--success-border: rgba(107, 207, 107, .25);--code-bg: #1e1e1e;--code-text: #d4d4d4;--code-line-number: #858585;--code-line-border: #3a3a3a;--code-selection: rgba(38, 79, 120, .6);--syntax-comment: #6a9955;--syntax-keyword: #569cd6;--syntax-string: #ce9178;--syntax-number: #b5cea8;--syntax-operator: #d4d4d4;--syntax-function: #dcdcaa;--syntax-class: #4ec9b0;--syntax-punctuation: #d4d4d4}}[data-theme=light]{--font-mono: "Monaco", "Menlo", "Courier New", monospace;--font-ui: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--bg-primary: #f5f5f5;--bg-secondary: #ffffff;--bg-tertiary: #f8f8f8;--bg-canvas: #000000;--text-primary: #000000;--text-secondary: #333333;--text-muted: #666666;--text-disabled: #999999;--border-primary: #e0e0e0;--border-secondary: #cccccc;--accent-primary: #4a9eff;--accent-primary-hover: #3a8eef;--accent-primary-active: #2a7edf;--accent-secondary: #7c4dff;--error-bg: #fff0f0;--error-text: #cc0000;--error-border: #ffcccc;--success-bg: #e8f5e9;--success-text: #4caf50;--success-border: #4caf50;--overlay-bg: rgba(0, 0, 0, .75);--overlay-backdrop: rgba(0, 0, 0, .95);--shadow-sm: 0 2px 8px rgba(0, 0, 0, .1);--shadow-md: 0 10px 30px rgba(0, 0, 0, .2);--shadow-lg: 0 20px 60px rgba(0, 0, 0, .25);--code-bg: #ffffff;--code-text: #000000;--code-line-number: #999999;--code-line-border: #e0e0e0;--code-selection: rgba(173, 214, 255, .4);--syntax-comment: #6a9955;--syntax-keyword: #0000ff;--syntax-string: #a31515;--syntax-number: #098658;--syntax-operator: #000000;--syntax-function: #795e26;--syntax-class: #267f99;--syntax-punctuation: #000000;--tab-bg: #f8f8f8;--tab-text: #666666;--tab-text-hover: #333333;--tab-text-active: #000000;--tab-border-active: #4a9eff;--button-bg: transparent;--button-border: #cccccc;--button-text: #666666;--button-bg-hover: #f0f0f0;--button-border-hover: #999999;--button-text-hover: #333333;--recompile-bg: #e8e8e8;--recompile-text: #333333;--recompile-bg-hover: #d8d8d8;--recompile-bg-active: #c8c8c8;--image-viewer-bg: #f5f5f5;--pane-radius: 8px;--pane-shadow: var(--shadow-lg), var(--shadow-sm)}[data-theme=dark]{--font-mono: "Monaco", "Menlo", "Courier New", monospace;--font-ui: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--bg-primary: #1a1a1a;--bg-secondary: #252525;--bg-tertiary: #2a2a2a;--bg-canvas: #000000;--text-primary: #ffffff;--text-secondary: #e0e0e0;--text-muted: #a0a0a0;--text-disabled: #666666;--border-primary: #3a3a3a;--border-secondary: #4a4a4a;--accent-primary: #4a9eff;--accent-primary-hover: #5aadff;--accent-primary-active: #3a8eef;--accent-secondary: #9c7cff;--error-bg: #3a1a1a;--error-text: #ff6b6b;--error-border: #5a2a2a;--success-bg: #1a3a1a;--success-text: #6bcf6b;--success-border: #2a5a2a;--overlay-bg: rgba(0, 0, 0, .85);--overlay-backdrop: rgba(0, 0, 0, .98);--shadow-sm: 0 2px 8px rgba(0, 0, 0, .3);--shadow-md: 0 10px 30px rgba(0, 0, 0, .4);--shadow-lg: 0 20px 60px rgba(0, 0, 0, .5);--code-bg: #1e1e1e;--code-text: #d4d4d4;--code-line-number: #858585;--code-line-border: #3a3a3a;--code-selection: rgba(38, 79, 120, .6);--syntax-comment: #6a9955;--syntax-keyword: #569cd6;--syntax-string: #ce9178;--syntax-number: #b5cea8;--syntax-operator: #d4d4d4;--syntax-function: #dcdcaa;--syntax-class: #4ec9b0;--syntax-punctuation: #d4d4d4;--tab-bg: #2a2a2a;--tab-text: #a0a0a0;--tab-text-hover: #d0d0d0;--tab-text-active: #ffffff;--tab-border-active: #4a9eff;--button-bg: transparent;--button-border: #4a4a4a;--button-text: #a0a0a0;--button-bg-hover: #3a3a3a;--button-border-hover: #5a5a5a;--button-text-hover: #e0e0e0;--recompile-bg: #3a3a3a;--recompile-text: #e0e0e0;--recompile-bg-hover: #4a4a4a;--recompile-bg-active: #5a5a5a;--image-viewer-bg: #2a2a2a;--pane-radius: 8px;--pane-shadow: var(--shadow-lg), var(--shadow-sm)}[data-theme=system]{--font-mono: "Monaco", "Menlo", "Courier New", monospace;--font-ui: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--bg-primary: #f5f5f5;--bg-secondary: #ffffff;--bg-tertiary: #f8f8f8;--bg-canvas: #000000;--text-primary: #000000;--text-secondary: #333333;--text-muted: #666666;--text-disabled: #999999;--border-primary: #e0e0e0;--border-secondary: #cccccc;--accent-primary: #4a9eff;--accent-primary-hover: #3a8eef;--accent-primary-active: #2a7edf;--accent-secondary: #7c4dff;--error-bg: #fff0f0;--error-text: #cc0000;--error-border: #ffcccc;--success-bg: #e8f5e9;--success-text: #4caf50;--success-border: #4caf50;--overlay-bg: rgba(0, 0, 0, .75);--overlay-backdrop: rgba(0, 0, 0, .95);--shadow-sm: 0 2px 8px rgba(0, 0, 0, .1);--shadow-md: 0 10px 30px rgba(0, 0, 0, .2);--shadow-lg: 0 20px 60px rgba(0, 0, 0, .25);--code-bg: #ffffff;--code-text: #000000;--code-line-number: #999999;--code-line-border: #e0e0e0;--code-selection: rgba(173, 214, 255, .4);--syntax-comment: #6a9955;--syntax-keyword: #0000ff;--syntax-string: #a31515;--syntax-number: #098658;--syntax-operator: #000000;--syntax-function: #795e26;--syntax-class: #267f99;--syntax-punctuation: #000000;--tab-bg: #f8f8f8;--tab-text: #666666;--tab-text-hover: #333333;--tab-text-active: #000000;--tab-border-active: #4a9eff;--button-bg: transparent;--button-border: #cccccc;--button-text: #666666;--button-bg-hover: #f0f0f0;--button-border-hover: #999999;--button-text-hover: #333333;--recompile-bg: #e8e8e8;--recompile-text: #333333;--recompile-bg-hover: #d8d8d8;--recompile-bg-active: #c8c8c8;--image-viewer-bg: #f5f5f5;--pane-radius: 8px;--pane-shadow: var(--shadow-lg), var(--shadow-sm)}@media (prefers-color-scheme: dark){[data-theme=system]{--bg-primary: #1a1a1a;--bg-secondary: #252525;--bg-tertiary: #2a2a2a;--bg-canvas: #000000;--text-primary: #ffffff;--text-secondary: #e0e0e0;--text-muted: #a0a0a0;--text-disabled: #666666;--border-primary: #3a3a3a;--border-secondary: #4a4a4a;--accent-primary: #4a9eff;--accent-primary-hover: #5aadff;--accent-primary-active: #3a8eef;--accent-secondary: #9c7cff;--error-bg: #3a1a1a;--error-text: #ff6b6b;--error-border: #5a2a2a;--success-bg: #1a3a1a;--success-text: #6bcf6b;--success-border: #2a5a2a;--overlay-bg: rgba(0, 0, 0, .85);--overlay-backdrop: rgba(0, 0, 0, .98);--shadow-sm: 0 2px 8px rgba(0, 0, 0, .3);--shadow-md: 0 10px 30px rgba(0, 0, 0, .4);--shadow-lg: 0 20px 60px rgba(0, 0, 0, .5);--code-bg: #1e1e1e;--code-text: #d4d4d4;--code-line-number: #858585;--code-line-border: #3a3a3a;--code-selection: rgba(38, 79, 120, .6);--syntax-comment: #6a9955;--syntax-keyword: #569cd6;--syntax-string: #ce9178;--syntax-number: #b5cea8;--syntax-operator: #d4d4d4;--syntax-function: #dcdcaa;--syntax-class: #4ec9b0;--syntax-punctuation: #d4d4d4;--tab-bg: #2a2a2a;--tab-text: #a0a0a0;--tab-text-hover: #d0d0d0;--tab-text-active: #ffffff;--tab-border-active: #4a9eff;--button-bg: transparent;--button-border: #4a4a4a;--button-text: #a0a0a0;--button-bg-hover: #3a3a3a;--button-border-hover: #5a5a5a;--button-text-hover: #e0e0e0;--recompile-bg: #3a3a3a;--recompile-text: #e0e0e0;--recompile-bg-hover: #4a4a4a;--recompile-bg-active: #5a5a5a;--image-viewer-bg: #2a2a2a;--pane-radius: 8px;--pane-shadow: var(--shadow-lg), var(--shadow-sm)}}.unstyled{--pane-radius: 0 !important;--pane-shadow: none !important}:root{--glass-bg: rgba(30, 30, 35, .65);--glass-bg-hover: rgba(30, 30, 35, .8);--glass-border: 1px solid rgba(255, 255, 255, .1);--glass-shadow: 0 4px 16px rgba(0, 0, 0, .25), 0 2px 4px rgba(0, 0, 0, .15), inset 0 1px 0 rgba(255, 255, 255, .1);--glass-shadow-sm: 0 2px 8px rgba(0, 0, 0, .25), inset 0 1px 0 rgba(255, 255, 255, .08);--glass-blur: blur(20px);--glass-radius: 6px;--glass-radius-sm: 6px;--glass-text: rgba(255, 255, 255, .9);--glass-text-muted: rgba(255, 255, 255, .6)}.stats-container{position:absolute;bottom:12px;left:12px;z-index:1000;display:flex;flex-direction:column;align-items:flex-start;gap:6px}.fps-counter{padding:6px 10px;background:var(--glass-bg);color:var(--glass-text);font-family:var(--font-mono);font-size:11px;font-weight:500;border-radius:var(--glass-radius-sm);border:var(--glass-border);cursor:pointer;-webkit-user-select:none;user-select:none;backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);transition:all .2s ease}.fps-counter:hover{background:var(--glass-bg-hover)}.stats-grid{display:flex;flex-direction:row;gap:6px;opacity:0;visibility:hidden;transform:translateY(8px);transition:opacity .2s ease,transform .2s ease,visibility .2s;pointer-events:none}.stats-grid.open{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto}.stat-item{padding:6px 10px;background:var(--glass-bg);border-radius:var(--glass-radius-sm);border:var(--glass-border);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);display:flex;flex-direction:column;align-items:center;gap:2px;min-width:48px}.stat-value{color:var(--glass-text);font-family:var(--font-mono);font-size:11px;font-weight:600;white-space:nowrap}.stat-label{color:var(--glass-text-muted);font-family:var(--font-ui);font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:.5px}.playback-controls{position:absolute;bottom:12px;right:12px;z-index:1000}.controls-menu-button{padding:6px 8px;background:var(--glass-bg);color:var(--glass-text);border:var(--glass-border);border-radius:var(--glass-radius-sm);cursor:pointer;backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);transition:all .2s ease;display:flex;align-items:center;justify-content:center;width:44px;height:44px;font-size:20px;font-weight:300;line-height:1}.controls-menu-button:hover{background:var(--glass-bg-hover);transform:scale(1.05)}.controls-menu-button:active{transform:scale(.95)}.controls-grid{position:absolute;bottom:0;right:0;display:grid;grid-template-columns:44px 44px 44px 44px;grid-template-rows:44px 44px;gap:6px;opacity:0;visibility:hidden;transform:scale(.8);transform-origin:bottom right;transition:opacity .2s ease,transform .2s ease,visibility .2s;pointer-events:none}.controls-grid.open{opacity:1;visibility:visible;transform:scale(1);pointer-events:auto}.control-button{padding:6px 8px;background:var(--glass-bg);color:var(--glass-text);border:var(--glass-border);border-radius:var(--glass-radius-sm);cursor:pointer;backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);transition:all .2s ease;display:flex;align-items:center;justify-content:center;width:44px;height:44px}.control-button:hover{background:var(--glass-bg-hover);transform:scale(1.05)}.control-button:active{transform:scale(.95)}.control-button svg{width:16px;height:16px;fill:currentColor}.playback-controls .controls-menu-button{position:relative;z-index:1}.playback-controls.open>.controls-menu-button{opacity:0;pointer-events:none}.shader-error-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:#000000f2;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:2000;padding:60px;overflow-y:auto}.error-overlay-content{background:#1a1a1a;border-radius:6px;max-width:900px;width:100%;display:flex;flex-direction:column;box-shadow:0 20px 60px #000c,0 0 1px #ffffff1a;border:1px solid #2a2a2a;max-height:calc(100vh - 120px)}.error-header{display:flex;align-items:center;justify-content:space-between;padding:18px 24px;background:linear-gradient(135deg,#c62828,#b71c1c);color:#fff;border-radius:6px 6px 0 0;border-bottom:1px solid rgba(0,0,0,.3);box-shadow:0 2px 8px #0003}.error-title{font-size:15px;font-weight:600;font-family:var(--font-ui);display:flex;align-items:center;gap:8px;letter-spacing:-.01em}.error-close{background:transparent;border:none;color:#ffffffe6;font-size:24px;line-height:1;cursor:pointer;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:all .2s ease;opacity:.8}.error-close:hover{background:#ffffff26;opacity:1;transform:scale(1.05)}.error-body{padding:24px;overflow-y:auto;flex:1}.error-section{margin-bottom:24px}.error-section:last-child{margin-bottom:0}.error-pass-name{font-size:13px;font-weight:600;color:#ffa726;font-family:var(--font-mono);margin-bottom:10px;padding-bottom:6px;border-bottom:1px solid #2a2a2a;letter-spacing:.02em}.error-content{margin:0;padding:14px 16px;background:#0f0f0f;border-radius:4px;color:#ff6b6b;font-size:13px;font-family:var(--font-mono);line-height:1.6;overflow-x:auto;border:1px solid #2a2a2a;white-space:pre-wrap;word-break:break-word}.error-code-context{margin:12px 0 0;padding:14px 16px;background:#0d0d0d;border-radius:4px;color:#b0b0b0;font-size:12px;font-family:var(--font-mono);line-height:1.6;overflow-x:auto;border:1px solid #2a2a2a;white-space:pre}.error-code-context .context-line{color:#666;display:block}.error-code-context .error-line-highlight{color:#fff;background:#c6282840;display:block;font-weight:600;border-left:3px solid #c62828;margin-left:-16px;padding-left:13px}.context-lost-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:#000000e6;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:3000}.context-lost-content{text-align:center;color:#fff;padding:40px}.context-lost-icon{margin-bottom:16px;opacity:.8}.context-lost-spinner{width:48px;height:48px;border:3px solid rgba(255,255,255,.2);border-top-color:#fff;border-radius:50%;margin:0 auto 16px;animation:context-lost-spin 1s linear infinite}@keyframes context-lost-spin{to{transform:rotate(360deg)}}.context-lost-title{font-size:18px;font-weight:600;margin-bottom:8px;font-family:var(--font-ui)}.context-lost-message{font-size:14px;opacity:.7;margin-bottom:20px;font-family:var(--font-ui)}.context-lost-reload{background:#fff;color:#000;border:none;padding:10px 24px;border-radius:6px;font-size:14px;font-weight:500;cursor:pointer;transition:transform .2s,box-shadow .2s;font-family:var(--font-ui)}.context-lost-reload:hover{transform:scale(1.02);box-shadow:0 4px 12px #fff3}.context-lost-reload:active{transform:scale(.98)}.recording-indicator{position:absolute;top:12px;right:12px;z-index:1000;display:flex;align-items:center;gap:6px;padding:6px 10px;background:#dc2626d9;border-radius:var(--glass-radius-sm);border:1px solid rgba(255,100,100,.3);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm)}.recording-dot{width:8px;height:8px;background:#fff;border-radius:50%;animation:recording-pulse 1s ease-in-out infinite}@keyframes recording-pulse{0%,to{opacity:1}50%{opacity:.4}}.recording-text{color:#fff;font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.5px}.control-button.recording{background:#dc2626b3;border-color:#ff64644d}.control-button.recording:hover{background:#dc2626d9}.control-button.recording svg{fill:#fff}.media-permission-banner{position:absolute;bottom:48px;left:50%;transform:translate(-50%);background:var(--glass-bg);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:var(--glass-border);box-shadow:var(--glass-shadow);color:#ffffffe6;padding:8px 16px;border-radius:6px;font-size:13px;font-family:var(--font-ui);display:flex;align-items:center;gap:12px;z-index:100;white-space:nowrap}.media-banner-button{background:#4a9effcc;color:#fff;border:none;padding:4px 12px;border-radius:4px;cursor:pointer;font-size:13px;font-family:inherit}.media-banner-button:hover{background:#4a9eff}.script-error-overlay{position:absolute;bottom:48px;left:12px;right:12px;z-index:1500;pointer-events:auto}.script-error-content{background:#1a1a1a;border-radius:6px;box-shadow:0 8px 32px #0009,0 0 1px #ffffff1a;border:1px solid #2a2a2a;overflow:hidden}.script-error-header{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:linear-gradient(135deg,#e65100,#bf360c);color:#fff;border-bottom:1px solid rgba(0,0,0,.3)}.script-error-header.disabled{background:linear-gradient(135deg,#6d4c41,#4e342e)}.script-error-header.warning{background:linear-gradient(135deg,#f9a825,#f57f17);color:#1a1a1a}.script-error-header.warning .script-error-close{color:#000000b3}.script-error-header.warning .script-error-close:hover{background:#00000026;color:#000000e6}.script-error-title{font-size:13px;font-weight:600;font-family:var(--font-mono);display:flex;align-items:center;gap:6px}.script-error-close{background:transparent;border:none;color:#ffffffe6;font-size:20px;line-height:1;cursor:pointer;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;opacity:.8;transition:all .2s ease}.script-error-close:hover{background:#ffffff26;opacity:1}.script-error-message{margin:0;padding:10px 14px;color:#ffab91;font-size:12px;font-family:var(--font-mono);line-height:1.5;white-space:pre-wrap;word-break:break-word;max-height:80px;overflow-y:auto}.script-error-stack{margin:0;padding:6px 14px 10px;color:#888;font-size:11px;font-family:var(--font-mono);line-height:1.4;white-space:pre-wrap;word-break:break-word;max-height:60px;overflow-y:auto;border-top:1px solid #2a2a2a}.script-overlay{position:absolute;z-index:500;padding:6px 10px;background:var(--glass-bg);color:var(--glass-text);font-family:var(--font-mono);font-size:11px;border-radius:var(--glass-radius-sm);border:var(--glass-border);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);pointer-events:none;white-space:pre;max-width:calc(100% - 24px);overflow:hidden;text-overflow:ellipsis}.script-overlay.hidden{display:none}.script-overlay.top-left{top:12px;left:12px}.script-overlay.top-right{top:12px;right:12px}.script-overlay.bottom-left{bottom:12px;left:12px}.script-overlay.bottom-right{bottom:12px;right:12px}@media (prefers-reduced-motion: reduce){*,*:before,*:after{transition-duration:.01ms!important;animation-duration:.01ms!important;animation-iteration-count:1!important}}@media (max-width: 428px){.stats-container{bottom:8px;left:8px}.playback-controls{bottom:8px;right:8px}.script-error-overlay{left:8px;right:8px;bottom:40px}.script-overlay.top-left{top:8px;left:8px}.script-overlay.top-right{top:8px;right:8px}.script-overlay.bottom-left{bottom:8px;left:8px}.script-overlay.bottom-right{bottom:8px;right:8px}}.uniforms-panel-wrapper{position:absolute;top:16px;right:16px;z-index:100;display:flex;flex-direction:column;align-items:flex-end}.uniforms-toggle-button{width:44px;height:44px;padding:6px;background:var(--glass-bg);border:var(--glass-border);border-radius:var(--glass-radius-sm);color:var(--glass-text);cursor:pointer;backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);transition:all .2s ease,opacity .15s ease;display:flex;align-items:center;justify-content:center}.uniforms-toggle-button:hover{background:var(--glass-bg-hover);transform:scale(1.05)}.uniforms-toggle-button:active{transform:scale(.95)}.uniforms-toggle-button svg{width:16px;height:16px}.uniforms-toggle-button.hidden{opacity:0;transform:scale(.8);pointer-events:none;position:absolute}.uniforms-panel{width:175px;max-height:calc(100vh - 100px);background:var(--glass-bg);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);border-radius:var(--glass-radius);border:var(--glass-border);box-shadow:var(--glass-shadow);overflow:hidden;display:flex;flex-direction:column;transform-origin:top right;transition:opacity .2s ease,transform .2s ease,max-height .2s ease}.uniforms-panel.closed{opacity:0;transform:scale(.25) translate(0);transform-origin:top right;pointer-events:none;max-height:0;padding:0}.uniforms-panel-header{padding:10px 14px;font-family:var(--font-ui);font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--glass-text-muted);background:#ffffff08;border-bottom:1px solid rgba(255,255,255,.06);flex-shrink:0;display:flex;justify-content:space-between;align-items:center}.uniforms-panel-close{background:transparent;border:none;color:var(--glass-text-muted);font-size:18px;line-height:1;cursor:pointer;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:all .15s ease}.uniforms-panel-close:hover{background:#ffffff1a;color:var(--glass-text)}.uniforms-panel-content{flex:1;overflow-y:auto;overflow-x:hidden}.uniforms-panel .uniform-controls{padding:12px;gap:12px;background:transparent}.uniforms-panel .uniform-controls-header{display:none}.uniforms-panel .uniform-controls-list{gap:14px}.uniforms-panel .uniform-control{gap:6px}.uniforms-panel .uniform-control-label{font-size:11px;color:var(--glass-text)}.uniforms-panel .uniform-control-value{font-size:10px;padding:1px 4px;min-width:40px;color:var(--glass-text-muted);background:#0003;border-radius:3px}.uniforms-panel .uniform-control-slider{height:4px;background:#ffffff26}.uniforms-panel .uniform-control-slider::-webkit-slider-runnable-track{height:4px;background:#ffffff26}.uniforms-panel .uniform-control-slider::-webkit-slider-thumb{width:12px;height:12px;margin-top:-4px;background:#ffffffe6;box-shadow:0 1px 4px #0000004d}.uniforms-panel .uniform-control-slider::-moz-range-track{height:4px;background:#ffffff26}.uniforms-panel .uniform-control-slider::-moz-range-thumb{width:12px;height:12px;background:#ffffffe6;box-shadow:0 1px 4px #0000004d}.uniforms-panel .uniform-control-toggle{width:34px;height:18px}.uniforms-panel .uniform-control-toggle-slider{border-radius:18px}.uniforms-panel .uniform-control-toggle-slider:before{width:12px;height:12px;left:3px;bottom:3px}.uniforms-panel .uniform-control-toggle input:checked+.uniform-control-toggle-slider:before{transform:translate(16px)}.uniforms-panel .uniform-control-xy-pad{height:100px}.uniforms-panel .uniform-control-xy-handle{width:12px;height:12px}.uniforms-panel .uniform-control-color-swatch{height:28px}.uniforms-panel .uniform-control-vec-slider-row{gap:6px}.uniforms-panel .uniform-control-vec-component{font-size:9px;width:12px;color:var(--glass-text-muted)}.uniforms-panel .uniform-control-vec-value{font-size:9px;min-width:32px;color:var(--glass-text-muted);background:#0003;border-radius:3px}.uniforms-panel .uniform-control-xy-pad{background:#00000040;border:1px solid rgba(255,255,255,.1)}.uniforms-panel .uniform-control-xy-handle{background:#ffffffe6;box-shadow:0 1px 4px #0006}.uniforms-panel-content::-webkit-scrollbar{width:6px}.uniforms-panel-content::-webkit-scrollbar-track{background:transparent}.uniforms-panel-content::-webkit-scrollbar-thumb{background:#fff3;border-radius:3px}.uniforms-panel-content::-webkit-scrollbar-thumb:hover{background:#ffffff59}.uniform-controls{display:flex;flex-direction:column;gap:16px;padding:16px;height:100%;overflow-y:auto;background:var(--bg-secondary)}.uniform-controls-empty{color:var(--text-muted);font-size:13px;text-align:center;padding:20px}.uniform-controls-header{display:flex;justify-content:flex-end;padding-bottom:8px;border-bottom:1px solid var(--border-primary);margin-bottom:8px}.uniform-controls-reset{font-family:inherit;font-size:11px;padding:4px 10px;background:var(--bg-tertiary);color:var(--text-secondary);border:1px solid var(--border-primary);border-radius:4px;cursor:pointer;transition:background .15s ease,color .15s ease}.uniform-controls-reset:hover{background:var(--border-primary);color:var(--text-primary)}.uniform-controls-reset:active{transform:translateY(1px)}.uniform-controls-list{display:flex;flex-direction:column;gap:16px}.uniform-control{display:flex;flex-direction:column;gap:8px}.uniform-control-label-row{display:flex;justify-content:space-between;align-items:center}.uniform-control-label{font-family:var(--font-mono);font-size:12px;font-weight:500;color:var(--text-primary)}.uniform-control-value{font-family:var(--font-mono);font-size:11px;color:var(--text-muted);background:var(--bg-tertiary);padding:2px 6px;border-radius:3px;min-width:50px;text-align:right}.uniform-control-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:6px;background:var(--border-primary);border-radius:3px;outline:none;cursor:pointer}.uniform-control-slider::-webkit-slider-runnable-track{height:6px;background:var(--border-primary);border-radius:3px}.uniform-control-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:14px;height:14px;background:var(--accent-primary);border-radius:50%;cursor:pointer;margin-top:-4px;transition:transform .15s ease,box-shadow .15s ease}.uniform-control-slider::-webkit-slider-thumb:hover{transform:scale(1.1);box-shadow:0 2px 6px #0003}.uniform-control-slider::-webkit-slider-thumb:active{transform:scale(.95)}.uniform-control-slider::-moz-range-track{height:6px;background:var(--border-primary);border-radius:3px}.uniform-control-slider::-moz-range-thumb{width:14px;height:14px;background:var(--accent-primary);border:none;border-radius:50%;cursor:pointer;transition:transform .15s ease,box-shadow .15s ease}.uniform-control-slider::-moz-range-thumb:hover{transform:scale(1.1);box-shadow:0 2px 6px #0003}.uniform-control-slider::-moz-range-thumb:active{transform:scale(.95)}.uniform-control-slider:focus{outline:none}.uniform-control-slider:focus::-webkit-slider-thumb{box-shadow:0 0 0 3px var(--code-selection)}.uniform-control-slider:focus::-moz-range-thumb{box-shadow:0 0 0 3px var(--code-selection)}.uniform-control-toggle{position:relative;display:inline-block;width:40px;height:22px;cursor:pointer}.uniform-control-toggle input{opacity:0;width:0;height:0}.uniform-control-toggle-slider{position:absolute;top:0;left:0;right:0;bottom:0;background:var(--border-primary);border-radius:22px;transition:background .2s ease}.uniform-control-toggle-slider:before{content:"";position:absolute;width:16px;height:16px;left:3px;bottom:3px;background:var(--text-muted);border-radius:50%;transition:transform .2s ease,background .2s ease}.uniform-control-toggle input:checked+.uniform-control-toggle-slider{background:var(--accent-primary)}.uniform-control-toggle input:checked+.uniform-control-toggle-slider:before{transform:translate(18px);background:#fff}.uniform-control-toggle input:focus+.uniform-control-toggle-slider{box-shadow:0 0 0 2px var(--code-selection)}.uniform-control-xy-pad{position:relative;width:100%;height:120px;background:var(--bg-tertiary);border:1px solid var(--border-primary);border-radius:4px;cursor:crosshair;overflow:hidden}.uniform-control-xy-pad:before,.uniform-control-xy-pad:after{content:"";position:absolute;background:var(--border-primary);opacity:.5}.uniform-control-xy-pad:before{left:50%;top:0;bottom:0;width:1px}.uniform-control-xy-pad:after{top:50%;left:0;right:0;height:1px}.uniform-control-xy-handle{position:absolute;width:14px;height:14px;background:var(--accent-primary);border:2px solid white;border-radius:50%;transform:translate(-50%,-50%);box-shadow:0 2px 4px #0000004d;pointer-events:none;z-index:1}.uniform-control-color-wrapper{display:flex;align-items:center;gap:8px}.uniform-control-color-swatch{width:100%;height:32px;border-radius:4px;border:1px solid var(--border-primary);cursor:pointer;transition:box-shadow .15s ease}.uniform-control-color-swatch:hover{box-shadow:0 0 0 2px var(--accent-primary)}.uniform-control-color-input{position:absolute;width:0;height:0;opacity:0;pointer-events:none}.uniform-control-vec3{gap:6px}.uniform-control-vec-slider-row{display:flex;align-items:center;gap:8px}.uniform-control-vec-component{font-family:var(--font-mono);font-size:10px;font-weight:600;color:var(--text-muted);width:14px;text-align:center}.uniform-control-vec-slider{flex:1}.uniform-control-vec-value{min-width:40px;font-size:10px}.render-dialog-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;background:#000000b3;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:4000}.render-dialog{background:#1a1a1f;border:1px solid rgba(255,255,255,.1);border-radius:10px;box-shadow:0 20px 60px #0009;width:360px;max-width:calc(100% - 32px);overflow:hidden;font-family:var(--font-ui);color:#e0e0e0}.render-dialog-header{display:flex;align-items:center;justify-content:space-between;padding:14px 18px;background:linear-gradient(135deg,#1565c0,#0d47a1);color:#fff;border-bottom:1px solid rgba(0,0,0,.3)}.render-dialog-title{font-size:14px;font-weight:600;display:flex;align-items:center;gap:8px}.render-dialog-close{background:transparent;border:none;color:#fffc;font-size:20px;line-height:1;cursor:pointer;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:all .15s ease}.render-dialog-close:hover{background:#ffffff26;color:#fff}.render-dialog-body{padding:18px;display:flex;flex-direction:column;gap:14px}.render-field{display:flex;flex-direction:column;gap:5px}.render-field-label{font-size:12px;font-weight:500;color:#fff9;text-transform:uppercase;letter-spacing:.5px}.render-field-row{display:flex;gap:8px;align-items:center}.render-field-row span{color:#fff6;font-size:13px}.render-input{flex:1;background:#0f0f14;border:1px solid rgba(255,255,255,.1);border-radius:5px;color:#e0e0e0;font-family:var(--font-mono);font-size:13px;padding:7px 10px;outline:none;transition:border-color .15s}.render-input:focus{border-color:#648cff80}.render-input[type=number]{-moz-appearance:textfield}.render-input[type=number]::-webkit-inner-spin-button,.render-input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.render-format-group{display:flex;gap:8px}.render-format-option{flex:1;position:relative}.render-format-option input[type=radio]{position:absolute;opacity:0;pointer-events:none}.render-format-option label{display:block;text-align:center;padding:8px 12px;background:#0f0f14;border:1px solid rgba(255,255,255,.1);border-radius:5px;font-size:12px;font-weight:500;cursor:pointer;transition:all .15s}.render-format-option input[type=radio]:checked+label{background:#648cff26;border-color:#648cff80;color:#8ab4ff}.render-format-option label:hover{border-color:#fff3}.render-estimate{font-size:11px;color:#fff6;font-family:var(--font-mono);text-align:center;padding:4px 0}.render-dialog-actions{display:flex;gap:8px;padding:0 18px 18px}.render-btn{flex:1;padding:9px 16px;border-radius:6px;font-size:13px;font-weight:500;cursor:pointer;border:none;transition:all .15s;font-family:inherit}.render-btn-primary{background:linear-gradient(135deg,#1565c0,#0d47a1);color:#fff}.render-btn-primary:hover{filter:brightness(1.1)}.render-btn-primary:disabled{opacity:.5;cursor:not-allowed;filter:none}.render-btn-cancel{background:#ffffff14;color:#ffffffb3;border:1px solid rgba(255,255,255,.1)}.render-btn-cancel:hover{background:#ffffff1f}.render-progress{display:none;flex-direction:column;gap:8px;padding:18px}.render-progress.active{display:flex}.render-progress-bar-bg{height:6px;background:#0f0f14;border-radius:3px;overflow:hidden}.render-progress-bar{height:100%;background:linear-gradient(90deg,#1565c0,#42a5f5);border-radius:3px;width:0%;transition:width .1s ease}.render-progress-text{font-size:12px;color:#ffffff80;font-family:var(--font-mono);text-align:center}.multi-view-controls-wrapper{position:absolute;top:16px;right:16px;z-index:100;display:flex;flex-direction:column;align-items:flex-end}.multi-view-controls-toggle{width:44px;height:44px;padding:6px;background:var(--glass-bg);border:var(--glass-border);border-radius:var(--glass-radius-sm);color:var(--glass-text);cursor:pointer;backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);transition:all .2s ease,opacity .15s ease;display:flex;align-items:center;justify-content:center}.multi-view-controls-toggle:hover{background:var(--glass-bg-hover);transform:scale(1.05)}.multi-view-controls-toggle:active{transform:scale(.95)}.multi-view-controls-toggle svg{width:16px;height:16px}.multi-view-controls-toggle.hidden{opacity:0;transform:scale(.8);pointer-events:none;position:absolute}.multi-view-controls-panel{width:175px;max-height:calc(100vh - 100px);background:var(--glass-bg);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);border-radius:var(--glass-radius);border:var(--glass-border);box-shadow:var(--glass-shadow);overflow:hidden;display:flex;flex-direction:column;transform-origin:top right;transition:opacity .2s ease,transform .2s ease,max-height .2s ease}.multi-view-controls-panel.closed{opacity:0;transform:scale(.25) translate(0);transform-origin:top right;pointer-events:none;max-height:0;padding:0}.multi-view-controls-header{padding:10px 14px;font-family:var(--font-ui);font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--glass-text-muted);background:#ffffff08;border-bottom:1px solid rgba(255,255,255,.06);flex-shrink:0;display:flex;justify-content:space-between;align-items:center}.multi-view-controls-close{background:transparent;border:none;color:var(--glass-text-muted);font-size:18px;line-height:1;cursor:pointer;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:all .15s ease}.multi-view-controls-close:hover{background:#ffffff1a;color:var(--glass-text)}.controls-section{display:flex;flex-direction:column;gap:8px;padding:12px}.controls-section+.controls-section{padding-top:0}.section-label{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--glass-text-muted);padding-bottom:6px;border-bottom:1px solid rgba(255,255,255,.06);margin-bottom:4px}.playback-controls{flex-direction:row;gap:8px;padding:12px}.control-btn{width:44px;height:44px;border:none;border-radius:var(--glass-radius-sm);background:#ffffff1a;color:var(--glass-text);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s ease}.control-btn:hover{background:#fff3}.control-btn:active{transform:scale(.95)}.control-btn svg{width:16px;height:16px}.uniforms-section{border-top:1px solid rgba(255,255,255,.06)}.uniforms-container{display:flex;flex-direction:column;gap:8px}.multi-view-controls-panel .uniform-controls{padding:0;gap:12px;background:transparent}.multi-view-controls-panel .uniform-controls-header{display:none}.multi-view-controls-panel .uniform-controls-list{gap:14px}.multi-view-controls-panel .uniform-control{gap:6px}.multi-view-controls-panel .uniform-control-label{font-size:11px;color:var(--glass-text)}.multi-view-controls-panel .uniform-control-value{font-size:10px;padding:1px 4px;min-width:40px;color:var(--glass-text-muted);background:#0003;border-radius:3px}.multi-view-controls-panel .uniform-control-slider{height:4px;background:#ffffff26}.multi-view-controls-panel .uniform-control-slider::-webkit-slider-runnable-track{height:4px;background:#ffffff26}.multi-view-controls-panel .uniform-control-slider::-webkit-slider-thumb{width:12px;height:12px;margin-top:-4px;background:#ffffffe6;box-shadow:0 1px 4px #0000004d}.multi-view-controls-panel .uniform-control-slider::-moz-range-track{height:4px;background:#ffffff26}.multi-view-controls-panel .uniform-control-slider::-moz-range-thumb{width:12px;height:12px;background:#ffffffe6;box-shadow:0 1px 4px #0000004d}.multi-view-controls-panel .uniform-control-toggle{width:34px;height:18px}.multi-view-controls-panel .uniform-control-toggle-slider{border-radius:18px}.multi-view-controls-panel .uniform-control-toggle-slider:before{width:12px;height:12px;left:3px;bottom:3px}.multi-view-controls-panel .uniform-control-toggle input:checked+.uniform-control-toggle-slider:before{transform:translate(16px)}.layout-fullscreen{width:100%;height:100%}.layout-fullscreen .canvas-container{position:relative;width:100%;height:100%;background:#000}.layout-default{width:100%;height:100%}.layout-default .canvas-container{position:relative;width:100%;height:100%;background:var(--bg-canvas);border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.layout-split{width:100%;height:100%;display:flex;gap:24px}.layout-split .canvas-container{position:relative;flex:1;background:var(--bg-canvas);border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.layout-split .code-panel{position:relative;flex:1;display:flex;flex-direction:column;background:var(--bg-secondary);border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.tab-bar{display:flex;background:var(--tab-bg);border-bottom:1px solid var(--border-primary);padding:8px 8px 0;gap:4px}.tab-button{padding:8px 16px;background:transparent;border:none;border-radius:6px 6px 0 0;font-size:13px;font-family:var(--font-mono);cursor:pointer;transition:background .2s,color .2s;color:var(--tab-text)}.tab-button:hover{background:var(--button-bg-hover);color:var(--tab-text-hover)}.tab-button.active{background:var(--bg-secondary);color:var(--tab-text-active);font-weight:500}.copy-button{position:absolute;top:12px;right:12px;padding:6px;background:var(--button-bg);border:none;border-radius:4px;color:var(--button-text);cursor:pointer;transition:all .2s;z-index:10;display:flex;align-items:center;justify-content:center}.copy-button:hover{background:var(--button-bg-hover);color:var(--button-text-hover)}.copy-button:active{transform:scale(.9)}.copy-button.copied{color:var(--success-text)}.code-viewer{flex:1;min-height:0;overflow:auto;position:relative;background:var(--code-bg)}.code-viewer pre{margin:0;padding:16px;font-size:13px;line-height:1.5;font-family:var(--font-mono);background:var(--code-bg);color:var(--code-text)}.code-viewer code{font-family:inherit;font-size:inherit}.token.comment{color:var(--syntax-comment)}.token.keyword{color:var(--syntax-keyword)}.token.string{color:var(--syntax-string)}.token.number{color:var(--syntax-number)}.token.operator{color:var(--syntax-operator)}.token.function{color:var(--syntax-function)}.token.class-name{color:var(--syntax-class)}.token.punctuation{color:var(--syntax-punctuation)}.tab-button.image-tab,.tab-button.image-tab.active{color:var(--accent-secondary)}.image-viewer{display:flex;align-items:center;justify-content:center;height:100%;padding:16px;background:var(--image-viewer-bg)}.image-viewer img{max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;box-shadow:var(--shadow-sm)}@media (max-width: 800px){.layout-split{flex-direction:column}}.layout-tabbed{width:100%;height:100%;display:flex;flex-direction:column;box-sizing:border-box}.tabbed-wrapper{display:flex;flex-direction:column;width:100%;height:100%;border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.tabbed-toolbar{display:flex;align-items:center;flex-shrink:0;background:var(--tab-bg);border-bottom:1px solid var(--border-primary);padding-right:8px}.tabbed-tab-bar{display:flex;flex:1;gap:4px;overflow-x:auto;overflow-y:hidden;scrollbar-width:thin}.tabbed-tab-bar::-webkit-scrollbar{height:4px}.tabbed-tab-bar::-webkit-scrollbar-thumb{background:var(--border-secondary);border-radius:2px}.tabbed-tab-button{padding:10px 16px;background:transparent;border:none;border-bottom:2px solid transparent;font-size:12px;font-family:var(--font-mono);cursor:pointer;transition:color .15s,border-color .15s;color:var(--tab-text);white-space:nowrap;flex-shrink:0}.tabbed-tab-button:hover{color:var(--tab-text-hover)}.tabbed-tab-button.active{color:var(--tab-text-active);border-bottom-color:var(--tab-border-active)}.tabbed-tab-button.shader-tab{font-family:var(--font-ui)}.tabbed-tab-button.image-tab{color:var(--accent-secondary)}.tabbed-tab-button.image-tab.active{color:var(--accent-secondary);border-bottom-color:var(--accent-secondary)}.tabbed-tab-button.uniforms-tab{color:var(--accent-tertiary, var(--accent-primary));padding:8px 12px}.tabbed-tab-button.uniforms-tab.active{color:var(--accent-tertiary, var(--accent-primary));border-bottom-color:var(--accent-tertiary, var(--accent-primary))}.tabbed-tab-button .uniforms-icon{width:18px;height:18px;display:block}.tabbed-content{flex:1;min-height:0;position:relative;background:var(--bg-canvas);overflow:hidden}.tabbed-canvas-container{position:absolute;top:0;left:0;width:100%;height:100%}.tabbed-code-viewer{position:absolute;top:0;left:0;width:100%;height:100%;overflow:auto;background:var(--code-bg)}.tabbed-code-viewer pre{margin:0;padding:16px 16px 16px 0;font-size:13px;line-height:1.6;font-family:var(--font-mono);background:var(--code-bg);color:var(--code-text);display:flex}.tabbed-code-viewer code{font-family:inherit;font-size:inherit}.tabbed-line-numbers{text-align:right;padding-right:16px;margin-right:16px;border-right:1px solid var(--code-line-border);color:var(--code-line-number);-webkit-user-select:none;user-select:none;flex-shrink:0;padding-left:16px}.tabbed-code-content{flex:1;overflow-x:auto}.tabbed-image-viewer{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--image-viewer-bg);padding:20px;box-sizing:border-box}.tabbed-image-viewer img{max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;box-shadow:var(--shadow-sm)}.tabbed-code-viewer .token.comment{color:var(--syntax-comment)}.tabbed-code-viewer .token.keyword{color:var(--syntax-keyword)}.tabbed-code-viewer .token.string{color:var(--syntax-string)}.tabbed-code-viewer .token.number{color:var(--syntax-number)}.tabbed-code-viewer .token.operator{color:var(--syntax-operator)}.tabbed-code-viewer .token.function{color:var(--syntax-function)}.tabbed-code-viewer .token.class-name{color:var(--syntax-class)}.tabbed-code-viewer .token.punctuation{color:var(--syntax-punctuation)}@media (max-width: 600px){.tabbed-tab-button{padding:8px 12px;font-size:12px}}.tabbed-editor-container{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;background:var(--code-bg)}.tabbed-button-container{display:flex;align-items:center;gap:6px;flex-shrink:0}.tabbed-copy-button{display:flex;align-items:center;justify-content:center;background:var(--button-bg);border:1px solid var(--button-border);color:var(--button-text);width:44px;height:44px;border-radius:4px;cursor:pointer;transition:background .15s,border-color .15s,color .15s}.tabbed-copy-button:hover{background:var(--button-bg-hover);border-color:var(--button-border-hover);color:var(--button-text-hover)}.tabbed-copy-button:active{background:var(--button-bg-hover)}.tabbed-copy-button.copied{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}.tabbed-recompile-button{display:flex;align-items:center;gap:6px;background:var(--recompile-bg);border:none;color:var(--recompile-text);padding:6px 12px;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;transition:background .15s,color .15s}.tabbed-recompile-button:hover{background:var(--recompile-bg-hover)}.tabbed-recompile-button:active{background:var(--recompile-bg-active)}.tabbed-recompile-button svg{flex-shrink:0}.tabbed-error-display{position:absolute;bottom:0;left:0;right:0;background:var(--error-bg);color:var(--error-text);padding:10px 14px;font-family:var(--font-mono);font-size:12px;white-space:pre-wrap;overflow:auto;max-height:120px;border-top:1px solid var(--error-border);z-index:10}.tabbed-fallback-textarea{width:100%;height:100%;background:var(--code-bg);color:var(--code-text);border:none;padding:12px;font-family:var(--font-mono);font-size:13px;resize:none;outline:none}.tabbed-uniforms-container{position:absolute;top:0;left:0;width:100%;height:100%;overflow-y:auto;background:#00000080;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:flex;justify-content:center;padding:20px;box-sizing:border-box}.tabbed-uniforms-container .uniform-controls{max-width:400px;width:100%;background:#1e1e23f2;border-radius:12px;padding:20px;box-shadow:0 4px 20px #0006;height:fit-content}.tabbed-uniforms-container .uniform-control-label{color:#e0e0e0}.tabbed-uniforms-container .uniform-control-value{color:#a0a0a0;background:#0000004d}.tabbed-uniforms-container .uniform-controls-header{color:#909090;border-bottom-color:#ffffff1a}.tabbed-uniforms-container .uniform-control-slider{background:#ffffff1a}.tabbed-uniforms-container .uniform-control-slider::-webkit-slider-thumb{background:#fff}.tabbed-uniforms-container .uniform-control-slider::-moz-range-thumb{background:#fff}.tabbed-uniforms-container .uniform-control-vec-component{color:#909090}.tabbed-uniforms-container .uniform-control-vec-value{color:#a0a0a0;background:#0000004d}.layout-multi-view{position:relative;width:100%;height:100%;box-sizing:border-box;background:var(--bg-primary)}.multi-view-canvas{position:relative;background:var(--bg-canvas);border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.multi-view-label{position:absolute;top:12px;left:12px;padding:4px 10px;background:#0009;color:#fff;font-family:var(--font-mono);font-size:12px;font-weight:500;border-radius:4px;text-transform:capitalize;z-index:5;pointer-events:none}.multi-view-info{position:absolute;bottom:12px;left:12px;padding:6px 10px;background:#0009;color:#fff;font-family:var(--font-mono);font-size:11px;border-radius:4px;z-index:5;pointer-events:none}.layout-grid-view{display:grid;gap:16px}.layout-grid-view .multi-view-canvas{min-height:0;min-width:0}.layout-grid-view[data-view-count="2"].grid-horizontal{grid-template-columns:1fr 1fr;grid-template-rows:1fr}.layout-grid-view[data-view-count="2"].grid-vertical{grid-template-columns:1fr;grid-template-rows:1fr 1fr}.layout-grid-view[data-view-count="3"].grid-horizontal{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.layout-grid-view[data-view-count="3"].grid-horizontal .multi-view-canvas:last-child{grid-column:1 / -1}.layout-grid-view[data-view-count="3"].grid-vertical{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.layout-grid-view[data-view-count="3"].grid-vertical .multi-view-canvas:first-child{grid-column:1 / -1}.layout-grid-view[data-view-count="4"]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.layout-inset-view .multi-view-canvas.inset-main{width:100%;height:100%}.layout-inset-view .multi-view-canvas.inset-overlay{position:absolute;bottom:40px;right:40px;width:25%;min-width:200px;aspect-ratio:16 / 9;z-index:10;transition:all .2s ease}.layout-inset-view .multi-view-canvas.inset-overlay.minimized{width:48px;height:48px;min-width:unset;aspect-ratio:unset;cursor:pointer;opacity:.8}.layout-inset-view .multi-view-canvas.inset-overlay.minimized:hover{opacity:1}.inset-minimize-btn{position:absolute;top:8px;right:8px;width:24px;height:24px;border:none;border-radius:4px;background:#00000080;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px;z-index:11;transition:background .2s}.inset-minimize-btn:hover{background:#000000b3}.editor-toolbar{display:flex;align-items:center;background:var(--tab-bg);border-bottom:1px solid var(--border-primary);padding-right:8px}.editor-tab-bar{display:flex;flex:1;overflow-x:auto;scrollbar-width:thin}.editor-tab-button{background:transparent;border:none;color:var(--tab-text);padding:10px 16px;cursor:pointer;font-family:var(--font-mono);font-size:12px;white-space:nowrap;border-bottom:2px solid transparent;transition:color .15s,border-color .15s}.editor-tab-button:hover{color:var(--tab-text-hover)}.editor-tab-button.active{color:var(--tab-text-active);border-bottom-color:var(--tab-border-active)}.editor-tab-button.image-tab{color:var(--accent-secondary)}.editor-tab-button.image-tab.active{color:var(--accent-secondary);border-bottom-color:var(--accent-secondary)}.editor-tab-button.uniforms-tab{color:var(--accent-tertiary, var(--accent-primary));padding:8px 12px}.editor-tab-button.uniforms-tab.active{color:var(--accent-tertiary, var(--accent-primary));border-bottom-color:var(--accent-tertiary, var(--accent-primary))}.editor-tab-button .uniforms-icon{width:18px;height:18px;display:block}.editor-copy-button{display:flex;align-items:center;justify-content:center;background:var(--button-bg);border:1px solid var(--button-border);color:var(--button-text);width:32px;height:32px;border-radius:4px;cursor:pointer;transition:background .15s,border-color .15s,color .15s;flex-shrink:0;margin-right:6px}.editor-copy-button:hover{background:var(--button-bg-hover);border-color:var(--button-border-hover);color:var(--button-text-hover)}.editor-copy-button:active{background:var(--button-bg-hover)}.editor-copy-button.copied{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}.editor-copy-button svg{flex-shrink:0}.editor-recompile-button{display:flex;align-items:center;gap:6px;background:var(--recompile-bg);border:none;color:var(--recompile-text);padding:6px 12px;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;transition:background .15s,color .15s;flex-shrink:0}.editor-recompile-button:hover{background:var(--recompile-bg-hover)}.editor-recompile-button:active{background:var(--recompile-bg-active)}.editor-recompile-button svg{flex-shrink:0}.editor-content-area{flex:1;overflow:hidden;position:relative;background:var(--code-bg)}.editor-prism-container{height:100%;width:100%}.editor-fallback-textarea{width:100%;height:100%;background:var(--code-bg);color:var(--code-text);border:none;padding:12px;font-family:var(--font-mono);font-size:13px;resize:none;outline:none}.editor-image-viewer{display:flex;align-items:center;justify-content:center;height:100%;background:var(--image-viewer-bg);padding:20px}.editor-uniforms-container{height:100%;overflow-y:auto;background:var(--bg-secondary)}.editor-image-viewer img{max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;box-shadow:var(--shadow-sm)}.editor-error-display{background:var(--error-bg);color:var(--error-text);padding:10px 14px;font-family:var(--font-mono);font-size:12px;white-space:pre-wrap;overflow:auto;max-height:120px;border-top:1px solid var(--error-border)}.prism-editor-wrapper{display:flex;height:100%;background:var(--code-bg);font-family:var(--font-mono);font-size:13px;line-height:1.6}.prism-editor-line-numbers{flex-shrink:0;padding:16px 12px 16px 16px;text-align:right;color:var(--code-line-number);border-right:1px solid var(--code-line-border);-webkit-user-select:none;user-select:none;overflow:hidden}.prism-editor-line-numbers span{display:block}.prism-editor-area{flex:1;position:relative;overflow:hidden}.prism-editor-textarea,.prism-editor-highlight{position:absolute;top:0;left:0;width:100%;height:100%;padding:16px;margin:0;border:none;outline:none;font-family:inherit;font-size:inherit;line-height:inherit;white-space:pre-wrap;word-wrap:break-word;overflow:auto;box-sizing:border-box;tab-size:2;-moz-tab-size:2;letter-spacing:normal;word-spacing:normal}.prism-editor-textarea{background:transparent;color:transparent;caret-color:var(--code-text);resize:none;z-index:1;-webkit-text-fill-color:transparent}.prism-editor-textarea::selection{background:var(--code-selection)}.prism-editor-textarea::-moz-selection{background:var(--code-selection)}.prism-editor-highlight{background:var(--code-bg);color:var(--code-text);pointer-events:none;z-index:0}.prism-editor-highlight code{font-family:inherit;font-size:inherit;line-height:inherit;background:none;padding:0;margin:0;border:none;display:block;white-space:inherit;word-wrap:inherit;-moz-tab-size:2;tab-size:2}.prism-editor-highlight code[class*=language-],.prism-editor-highlight[class*=language-]{padding:0;margin:0;background:none;border:none;text-shadow:none}.prism-editor-highlight .token.comment{color:var(--syntax-comment)}.prism-editor-highlight .token.keyword{color:var(--syntax-keyword)}.prism-editor-highlight .token.string{color:var(--syntax-string)}.prism-editor-highlight .token.number{color:var(--syntax-number)}.prism-editor-highlight .token.operator{color:var(--syntax-operator)}.prism-editor-highlight .token.function{color:var(--syntax-function)}.prism-editor-highlight .token.class-name{color:var(--syntax-class)}.prism-editor-highlight .token.punctuation{color:var(--syntax-punctuation)}')),document.head.appendChild(r)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
function _e(t) {
  return "count" in t && typeof t.count == "number";
}
function zn(t) {
  return !_e(t) && !t.hidden;
}
function Bs(t) {
  return "views" in t && Array.isArray(t.views);
}
function Xr(t) {
  return "views" in t && Array.isArray(t.views);
}
function tr(t, e, n) {
  const r = t.createShader(e);
  if (!r)
    throw new Error("Failed to create shader object");
  if (t.shaderSource(r, n), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) {
    const s = t.getShaderInfoLog(r);
    throw t.deleteShader(r), new Error(`Shader compilation failed:
${s}`);
  }
  return r;
}
function nr(t, e, n) {
  const r = tr(t, t.VERTEX_SHADER, e), i = tr(t, t.FRAGMENT_SHADER, n), s = t.createProgram();
  if (!s)
    throw new Error("Failed to create program object");
  if (t.attachShader(s, r), t.attachShader(s, i), t.linkProgram(s), !t.getProgramParameter(s, t.LINK_STATUS)) {
    const a = t.getProgramInfoLog(s);
    throw t.deleteProgram(s), t.deleteShader(r), t.deleteShader(i), new Error(`Program linking failed:
${a}`);
  }
  return t.detachShader(s, r), t.detachShader(s, i), t.deleteShader(r), t.deleteShader(i), s;
}
function Ms(t) {
  const e = t.createVertexArray();
  if (!e)
    throw new Error("Failed to create VAO");
  t.bindVertexArray(e);
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
  ]), r = t.createBuffer();
  if (!r)
    throw new Error("Failed to create VBO");
  return t.bindBuffer(t.ARRAY_BUFFER, r), t.bufferData(t.ARRAY_BUFFER, n, t.STATIC_DRAW), t.enableVertexAttribArray(0), t.vertexAttribPointer(
    0,
    // attribute location
    2,
    // size (vec2)
    t.FLOAT,
    // type
    !1,
    // normalized
    0,
    // stride
    0
    // offset
  ), t.bindVertexArray(null), t.bindBuffer(t.ARRAY_BUFFER, null), e;
}
function Xt(t, e, n) {
  const r = t.createTexture();
  if (!r)
    throw new Error("Failed to create texture");
  return t.bindTexture(t.TEXTURE_2D, r), t.texImage2D(
    t.TEXTURE_2D,
    0,
    // mip level
    t.RGBA32F,
    // internal format (32-bit float per channel)
    e,
    n,
    0,
    // border (must be 0)
    t.RGBA,
    // format
    t.FLOAT,
    // type
    null
    // no data (allocate only)
  ), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.bindTexture(t.TEXTURE_2D, null), r;
}
function rr(t, e) {
  const n = t.createFramebuffer();
  if (!n)
    throw new Error("Failed to create framebuffer");
  t.bindFramebuffer(t.FRAMEBUFFER, n), t.framebufferTexture2D(
    t.FRAMEBUFFER,
    t.COLOR_ATTACHMENT0,
    t.TEXTURE_2D,
    e,
    0
    // mip level
  );
  const r = t.checkFramebufferStatus(t.FRAMEBUFFER);
  if (r !== t.FRAMEBUFFER_COMPLETE)
    throw t.deleteFramebuffer(n), new Error(`Framebuffer incomplete: ${ks(t, r)}`);
  return t.bindFramebuffer(t.FRAMEBUFFER, null), n;
}
function Rs(t) {
  const e = t.createTexture();
  if (!e)
    throw new Error("Failed to create black texture");
  t.bindTexture(t.TEXTURE_2D, e);
  const n = new Float32Array([0, 0, 0, 1]);
  return t.texImage2D(t.TEXTURE_2D, 0, t.RGBA32F, 1, 1, 0, t.RGBA, t.FLOAT, n), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.bindTexture(t.TEXTURE_2D, null), e;
}
function Ns(t) {
  const e = t.createTexture();
  if (!e)
    throw new Error("Failed to create keyboard texture");
  t.bindTexture(t.TEXTURE_2D, e);
  const n = 256, r = 3, i = new Float32Array(n * r * 4);
  return t.texImage2D(t.TEXTURE_2D, 0, t.RGBA32F, n, r, 0, t.RGBA, t.FLOAT, i), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.bindTexture(t.TEXTURE_2D, null), e;
}
function Ps(t, e, n, r) {
  const o = new Float32Array(3072);
  for (let a = 0; a < 256; a++) {
    const u = n.get(a) || !1, c = r.get(a) || 0, h = (0 * 256 + a) * 4;
    o[h + 0] = u ? 1 : 0, o[h + 1] = u ? 1 : 0, o[h + 2] = u ? 1 : 0, o[h + 3] = 1;
    const l = (2 * 256 + a) * 4;
    o[l + 0] = c, o[l + 1] = c, o[l + 2] = c, o[l + 3] = 1;
  }
  t.bindTexture(t.TEXTURE_2D, e), t.texSubImage2D(
    t.TEXTURE_2D,
    0,
    0,
    0,
    // x, y offset
    256,
    3,
    t.RGBA,
    t.FLOAT,
    o
  ), t.bindTexture(t.TEXTURE_2D, null);
}
function Ls(t) {
  const e = t.createTexture();
  if (!e)
    throw new Error("Failed to create audio texture");
  t.bindTexture(t.TEXTURE_2D, e);
  const n = 512, r = 2, i = new Uint8Array(n * r);
  return t.texImage2D(t.TEXTURE_2D, 0, t.R8, n, r, 0, t.RED, t.UNSIGNED_BYTE, i), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.bindTexture(t.TEXTURE_2D, null), e;
}
function Is(t, e, n, r) {
  t.bindTexture(t.TEXTURE_2D, e), t.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, 512, 1, t.RED, t.UNSIGNED_BYTE, n), t.texSubImage2D(t.TEXTURE_2D, 0, 0, 1, 512, 1, t.RED, t.UNSIGNED_BYTE, r), t.bindTexture(t.TEXTURE_2D, null);
}
function ir(t) {
  const e = t.createTexture();
  if (!e)
    throw new Error("Failed to create video texture");
  return t.bindTexture(t.TEXTURE_2D, e), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255])), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.bindTexture(t.TEXTURE_2D, null), e;
}
function Us(t, e, n) {
  t.bindTexture(t.TEXTURE_2D, e), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !0), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, n), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1), t.bindTexture(t.TEXTURE_2D, null);
}
function Os(t, e, n, r, i) {
  const s = e ?? t.createTexture();
  if (!s)
    throw new Error("Failed to create script texture");
  return t.bindTexture(t.TEXTURE_2D, s), i instanceof Float32Array ? t.texImage2D(t.TEXTURE_2D, 0, t.RGBA32F, n, r, 0, t.RGBA, t.FLOAT, i) : t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, n, r, 0, t.RGBA, t.UNSIGNED_BYTE, i), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.bindTexture(t.TEXTURE_2D, null), s;
}
function ks(t, e) {
  switch (e) {
    case t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
      return "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";
    case t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
      return "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";
    case t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
      return "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";
    case t.FRAMEBUFFER_UNSUPPORTED:
      return "FRAMEBUFFER_UNSUPPORTED";
    case t.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE:
      return "FRAMEBUFFER_INCOMPLETE_MULTISAMPLE";
    default:
      return `Unknown status: ${e}`;
  }
}
const jr = {
  float: 1,
  vec2: 2,
  vec3: 3,
  vec4: 4,
  mat3: 9,
  mat4: 16
}, Vn = {
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
function Ut(t, e) {
  return jr[t] * e;
}
function $s(t, e) {
  return Vn[t] * e * 4;
}
function zs(t, e) {
  return Vn[t] * e;
}
function Vs(t, e, n, r) {
  const i = jr[t], s = Vn[t];
  if (i === s)
    return n;
  const o = s * e, a = r && r.length >= o ? r : new Float32Array(o);
  if (t === "mat3")
    for (let u = 0; u < e; u++) {
      const c = u * 9, h = u * 12;
      a[h + 0] = n[c + 0], a[h + 1] = n[c + 1], a[h + 2] = n[c + 2], a[h + 3] = 0, a[h + 4] = n[c + 3], a[h + 5] = n[c + 4], a[h + 6] = n[c + 5], a[h + 7] = 0, a[h + 8] = n[c + 6], a[h + 9] = n[c + 7], a[h + 10] = n[c + 8], a[h + 11] = 0;
    }
  else
    for (let u = 0; u < e; u++) {
      const c = u * i, h = u * 4;
      for (let l = 0; l < i; l++)
        a[h + l] = n[c + l];
      for (let l = i; l < 4; l++)
        a[h + l] = 0;
    }
  return a;
}
const sr = `#version 300 es
precision highp float;

layout(location = 0) in vec2 position;

void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`, Hs = `#version 300 es
precision highp float;

// Shadertoy compatibility: equirectangular texture sampling
const float ST_PI = 3.14159265359;
const float ST_TWOPI = 6.28318530718;
vec2 _st_dirToEquirect(vec3 dir) {
  float phi = atan(dir.z, dir.x);
  float theta = asin(dir.y);
  return vec2(phi / ST_TWOPI + 0.5, theta / ST_PI + 0.5);
}
`, Xs = `// --- Keyboard helpers (auto-injected) ---
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
function js(t, e, n) {
  const r = [Hs];
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
    r.push(""), n.namedSamplers.has("keyboard") && (r.push(Xs), r.push(""));
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
      const g = d.type === "bool" ? "bool" : d.type;
      r.push(`uniform ${g} ${l};`);
    }
    r.push("");
  }
  const s = Ys(t, e);
  r.push("// User shader code"), r.push(s), r.push(""), r.push(`// Main wrapper
out vec4 fragColor;

void main() {
  mainImage(fragColor, gl_FragCoord.xy);
}`);
  const o = r.join(`
`), a = o.split(`
`);
  let u = 0, c = 0, h = 0;
  for (let l = 0; l < a.length; l++)
    a[l] === "// Common code" && (u = l + 2, c = n.commonSource ? n.commonSource.split(`
`).length : 0), a[l] === "// User shader code" && (h = l + 2);
  return {
    source: o,
    lineMapping: { commonStartLine: u, commonLines: c, userCodeStartLine: h }
  };
}
function Ys(t, e) {
  const n = /* @__PURE__ */ new Set();
  if (e.forEach((i, s) => {
    i.kind === "texture" && i.cubemap && n.add(`iChannel${s}`);
  }), n.size === 0)
    return t;
  const r = /texture\s*\(\s*(iChannel[0-3])\s*,\s*([^)]+)\)/g;
  return t.replace(r, (i, s, o) => n.has(s) ? `texture(${s}, _st_dirToEquirect(${o}))` : i);
}
class Gs {
  constructor(e, n) {
    this._audioTexture = null, this._needsAudio = !1, this._videoTextures = [];
    const r = this.getAllChannelSources(n);
    r.some((i) => i.kind === "audio") && (this._needsAudio = !0, this._audioTexture = {
      texture: Ls(e),
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
      i.kind === "webcam" ? this._videoTextures.find((o) => o.kind === "webcam") || this._videoTextures.push({
        texture: ir(e),
        video: null,
        stream: null,
        width: 1,
        height: 1,
        ready: !1,
        kind: "webcam"
      }) : i.kind === "video" && (this._videoTextures.find((o) => o.kind === "video" && o.src === i.src) || this._videoTextures.push({
        texture: ir(e),
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
    return this._videoTextures.some((e) => e.kind === "webcam");
  }
  get videoSources() {
    return this._videoTextures.filter((e) => e.kind === "video" && !e.ready && e.src).map((e) => e.src);
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
        const e = await navigator.mediaDevices.getUserMedia({ audio: !0 }), n = new AudioContext(), r = n.createMediaStreamSource(e), i = n.createAnalyser();
        i.fftSize = 1024, i.smoothingTimeConstant = 0.8, r.connect(i), this._audioTexture.audioContext = n, this._audioTexture.analyser = i, this._audioTexture.stream = e, this._audioTexture.initialized = !0;
      } catch (e) {
        console.warn("Failed to initialize audio input:", e);
      }
  }
  async initWebcam() {
    const e = this._videoTextures.find((n) => n.kind === "webcam" && !n.ready);
    if (e)
      try {
        const n = await navigator.mediaDevices.getUserMedia({ video: !0 }), r = document.createElement("video");
        r.srcObject = n, r.muted = !0, r.playsInline = !0, await r.play(), e.video = r, e.stream = n, e.width = r.videoWidth, e.height = r.videoHeight, r.addEventListener("loadedmetadata", () => {
          e.width = r.videoWidth, e.height = r.videoHeight;
        }), e.ready = !0;
      } catch (n) {
        console.warn("Failed to initialize webcam:", n);
      }
  }
  async initVideo(e) {
    const n = this._videoTextures.find((i) => i.kind === "video" && i.src === e && !i.ready);
    if (!n)
      return;
    const r = document.createElement("video");
    r.src = e, r.muted = !0, r.loop = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", () => {
      n.width = r.videoWidth, n.height = r.videoHeight;
    });
    try {
      await r.play(), n.video = r, n.ready = !0;
    } catch (i) {
      console.warn(`Failed to play video '${e}':`, i);
    }
  }
  // ===========================================================================
  // Per-frame updates
  // ===========================================================================
  updateAudioTexture(e) {
    var n;
    (n = this._audioTexture) != null && n.analyser && (this._audioTexture.analyser.getByteFrequencyData(this._audioTexture.frequencyData), this._audioTexture.analyser.getByteTimeDomainData(this._audioTexture.waveformData), Is(e, this._audioTexture.texture, this._audioTexture.frequencyData, this._audioTexture.waveformData));
  }
  updateVideoTextures(e) {
    for (const n of this._videoTextures)
      !n.ready || !n.video || n.video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || (Us(e, n.texture, n.video), n.video.videoWidth > 0 && (n.width = n.video.videoWidth, n.height = n.video.videoHeight));
  }
  // ===========================================================================
  // Cleanup
  // ===========================================================================
  dispose(e) {
    var n, r, i, s;
    this._audioTexture && ((n = this._audioTexture.stream) == null || n.getTracks().forEach((o) => o.stop()), (r = this._audioTexture.audioContext) == null || r.close(), e.deleteTexture(this._audioTexture.texture));
    for (const o of this._videoTextures)
      (i = o.stream) == null || i.getTracks().forEach((a) => a.stop()), (s = o.video) == null || s.pause(), e.deleteTexture(o.texture);
    this._audioTexture = null, this._videoTextures = [];
  }
  // ===========================================================================
  // Helpers
  // ===========================================================================
  getAllChannelSources(e) {
    const n = [], r = e.passes;
    for (const i of [r.Image, r.BufferA, r.BufferB, r.BufferC, r.BufferD])
      i && (n.push(...i.channels), i.namedSamplers && n.push(...i.namedSamplers.values()));
    return n;
  }
}
class Ks {
  constructor(e) {
    this.values = {}, this.definitions = e, this.initializeDefaults();
  }
  /**
   * Initialize all values to their definition defaults.
   */
  initializeDefaults() {
    for (const [e, n] of Object.entries(this.definitions))
      _e(n) ? this.values[e] = new Float32Array(Ut(n.type, n.count)) : this.values[e] = this.cloneValue(n.value);
  }
  /**
   * Clone a value to avoid mutation of arrays.
   */
  cloneValue(e) {
    return e instanceof Float32Array ? e.slice() : Array.isArray(e) ? [...e] : e;
  }
  /**
   * Get the definition for a uniform.
   */
  getDefinition(e) {
    return this.definitions[e];
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
  has(e) {
    return e in this.definitions;
  }
  /**
   * Get the current value of a uniform.
   */
  get(e) {
    const n = this.values[e];
    return n !== void 0 ? this.cloneValue(n) : void 0;
  }
  /**
   * Get all current values (returns a shallow copy).
   */
  getAll() {
    const e = {};
    for (const [n, r] of Object.entries(this.values))
      e[n] = this.cloneValue(r);
    return e;
  }
  /**
   * Set the value of a uniform.
   * Returns true if the value was set, false if the uniform doesn't exist.
   */
  set(e, n) {
    return this.has(e) ? (this.values[e] = this.cloneValue(n), !0) : !1;
  }
  /**
   * Set multiple values at once.
   */
  setAll(e) {
    for (const [n, r] of Object.entries(e))
      r !== void 0 && this.set(n, r);
  }
  /**
   * Reset a single uniform to its default value.
   */
  reset(e) {
    const n = this.definitions[e];
    return n ? (_e(n) ? this.values[e] = new Float32Array(Ut(n.type, n.count)) : this.values[e] = this.cloneValue(n.value), !0) : !1;
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
  getDefault(e) {
    const n = this.definitions[e];
    if (n)
      return _e(n) ? new Float32Array(Ut(n.type, n.count)) : this.cloneValue(n.value);
  }
  /**
   * Iterate over all uniforms (name, definition, current value).
   */
  *entries() {
    for (const [e, n] of Object.entries(this.definitions))
      yield [e, n, this.values[e]];
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
class qs {
  constructor(e, n) {
    this._ubos = [], this._dirtyScalars = /* @__PURE__ */ new Set(), this._uniforms = n, this._store = new Ks(n), this.initUBOs(e);
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
  get(e) {
    return this._store.get(e);
  }
  getAll() {
    return this._store.getAll();
  }
  /**
   * Set the value of a custom uniform.
   * Validates type, packs UBO data for arrays, marks scalars dirty.
   */
  set(e, n) {
    const r = this._uniforms[e];
    if (!r) {
      console.warn(`setUniformValue('${e}'): uniform not defined in config`);
      return;
    }
    if (!_e(r)) {
      const i = r.type;
      if ((i === "float" || i === "int") && typeof n != "number") {
        console.warn(`setUniformValue('${e}'): expected number for ${i}, got ${typeof n}`);
        return;
      }
      if (i === "bool" && typeof n != "boolean") {
        console.warn(`setUniformValue('${e}'): expected boolean, got ${typeof n}`);
        return;
      }
      if (i === "vec2" || i === "vec3" || i === "vec4") {
        if (!Array.isArray(n)) {
          console.warn(`setUniformValue('${e}'): expected array for ${i}, got ${typeof n}`);
          return;
        }
        const s = i === "vec2" ? 2 : i === "vec3" ? 3 : 4;
        if (n.length !== s) {
          console.warn(`setUniformValue('${e}'): expected array of length ${s} for ${i}, got ${n.length}`);
          return;
        }
      }
    }
    if (this._store.set(e, n), _e(r)) {
      const i = this._ubos.find((s) => s.name === e);
      if (i) {
        const s = n, o = Ut(r.type, r.count), a = Ut(r.type, 1);
        if (s.length > o) {
          console.warn(`setUniformValue('${e}'): Float32Array length ${s.length} exceeds max ${o} (${r.count} × ${r.type})`);
          return;
        }
        if (s.length % a !== 0) {
          console.warn(`setUniformValue('${e}'): Float32Array length ${s.length} is not a multiple of ${a} (components per ${r.type})`);
          return;
        }
        const u = s.length / a, c = Vs(r.type, u, s, i.paddedData);
        c !== i.paddedData && i.paddedData.set(c);
        const h = zs(r.type, u), l = i.paddedData.length;
        h < l && i.paddedData.fill(0, h), i.activeCount = u, i.dirty = !0;
      }
    } else
      this._dirtyScalars.add(e);
  }
  setMultiple(e) {
    for (const [n, r] of Object.entries(e))
      r !== void 0 && this.set(n, r);
  }
  // ===========================================================================
  // GL Binding
  // ===========================================================================
  /**
   * Bind custom uniform values to the current program.
   * Uploads dirty UBOs and re-binds changed scalar uniforms.
   */
  bindToProgram(e, n) {
    for (const r of this._ubos) {
      r.dirty && (e.bindBuffer(e.UNIFORM_BUFFER, r.buffer), e.bufferSubData(e.UNIFORM_BUFFER, 0, r.paddedData), r.dirty = !1);
      const i = n.custom.get(`${r.name}_count`);
      i && e.uniform1i(i, r.activeCount);
    }
    for (const r of this._dirtyScalars) {
      const i = this._uniforms[r];
      if (!i || _e(i))
        continue;
      const s = this._store.get(r);
      if (s === void 0)
        continue;
      const o = n.custom.get(r);
      if (o)
        switch (i.type) {
          case "float":
            e.uniform1f(o, s);
            break;
          case "int":
            e.uniform1i(o, s);
            break;
          case "bool":
            e.uniform1i(o, s ? 1 : 0);
            break;
          case "vec2": {
            const a = s;
            e.uniform2f(o, a[0], a[1]);
            break;
          }
          case "vec3": {
            const a = s;
            e.uniform3f(o, a[0], a[1], a[2]);
            break;
          }
          case "vec4": {
            const a = s;
            e.uniform4f(o, a[0], a[1], a[2], a[3]);
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
    for (const [e, n] of Object.entries(this._uniforms))
      _e(n) || this._dirtyScalars.add(e);
  }
  /**
   * Bind UBO block indices for a newly compiled program.
   * Also caches _count uniform locations.
   */
  bindUBOsToProgram(e, n, r) {
    for (const i of this._ubos) {
      const s = e.getUniformBlockIndex(n, `_ub_${i.name}`);
      s !== e.INVALID_INDEX && e.uniformBlockBinding(n, s, i.bindingPoint), r.set(`${i.name}_count`, e.getUniformLocation(n, `${i.name}_count`));
    }
  }
  // ===========================================================================
  // Cleanup
  // ===========================================================================
  dispose(e) {
    for (const n of this._ubos)
      e.deleteBuffer(n.buffer);
    this._ubos = [];
  }
  // ===========================================================================
  // Initialization
  // ===========================================================================
  initUBOs(e) {
    const n = e.getParameter(e.MAX_UNIFORM_BLOCK_SIZE), r = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
    let i = 0;
    for (const [s, o] of Object.entries(this._uniforms)) {
      if (!_e(o))
        continue;
      const a = $s(o.type, o.count);
      if (a > n)
        throw new Error(`Array uniform '${s}' requires ${a} bytes but GL MAX_UNIFORM_BLOCK_SIZE is ${n}`);
      const u = e.createBuffer();
      if (!u)
        throw new Error(`Failed to create UBO buffer for '${s}'`);
      if (e.bindBuffer(e.UNIFORM_BUFFER, u), e.bufferData(e.UNIFORM_BUFFER, a, e.DYNAMIC_DRAW), e.bindBuffer(e.UNIFORM_BUFFER, null), i >= r)
        throw new Error(`Too many array uniforms: binding point ${i} exceeds GL MAX_UNIFORM_BUFFER_BINDINGS (${r})`);
      e.bindBufferBase(e.UNIFORM_BUFFER, i, u);
      const c = new Float32Array(a / 4);
      this._ubos.push({
        name: s,
        def: o,
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
class or {
  constructor(e) {
    this._frame = 0, this._time = 0, this._lastStepTime = null, this._passes = [], this._textures = [], this._keyboardTexture = null, this._blackTexture = null, this._keyStates = /* @__PURE__ */ new Map(), this._toggleStates = /* @__PURE__ */ new Map(), this._compilationErrors = [], this._scriptTextures = /* @__PURE__ */ new Map(), this._sharedVAO = null, this._disposed = !1, this._viewNames = [], this.gl = e.gl, this.project = e.project, this._onAssetError = e.onAssetError, this._width = this.gl.drawingBufferWidth, this._height = this.gl.drawingBufferHeight, this.initExtensions(), this._blackTexture = Rs(this.gl);
    const n = Ns(this.gl);
    this._keyboardTexture = {
      texture: n,
      width: 256,
      height: 3
    }, this.initProjectTextures(), this._media = new Gs(this.gl, e.project), this._uniformMgr = new qs(this.gl, e.project.uniforms), e.viewNames && e.viewNames.length > 1 && (this._viewNames = e.viewNames), this.initRuntimePasses();
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
  async initVideo(e) {
    return this._media.initVideo(e);
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
  updateTexture(e, n, r, i) {
    const s = this._scriptTextures.get(e), o = i instanceof Float32Array;
    if (s && s.width === n && s.height === r && s.isFloat === o) {
      const a = this.gl;
      a.bindTexture(a.TEXTURE_2D, s.texture), o ? a.texSubImage2D(a.TEXTURE_2D, 0, 0, 0, n, r, a.RGBA, a.FLOAT, i) : a.texSubImage2D(a.TEXTURE_2D, 0, 0, 0, n, r, a.RGBA, a.UNSIGNED_BYTE, i), a.bindTexture(a.TEXTURE_2D, null);
    } else {
      const a = Os(this.gl, (s == null ? void 0 : s.texture) ?? null, n, r, i);
      this._scriptTextures.set(e, { texture: a, width: n, height: r, isFloat: o });
    }
  }
  /**
   * Read pixels from a buffer pass (reads previous frame's data).
   */
  readPixels(e, n, r, i, s) {
    const o = this._passes.find((c) => c.name === e);
    if (!o)
      return console.warn(`readPixels: pass '${e}' not found`), new Uint8Array(i * s * 4);
    const a = this.gl;
    a.bindFramebuffer(a.FRAMEBUFFER, o.framebuffer), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, o.previousTexture, 0);
    const u = new Uint8Array(i * s * 4);
    return a.readPixels(n, r, i, s, a.RGBA, a.UNSIGNED_BYTE, u), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, o.currentTexture, 0), a.bindFramebuffer(a.FRAMEBUFFER, null), u;
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
    const e = this._lastStepTime === null ? 0 : this._time - this._lastStepTime;
    return {
      frame: this._frame,
      time: this._time,
      deltaTime: e,
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
  getUniformValue(e) {
    return this._uniformMgr.get(e);
  }
  getUniformValues() {
    return this._uniformMgr.getAll();
  }
  setUniformValue(e, n) {
    this._uniformMgr.set(e, n);
  }
  setUniformValues(e) {
    this._uniformMgr.setMultiple(e);
  }
  /** Export UBO data for HTML export (copies current padded data). */
  getUBOExportData() {
    return this._uniformMgr.ubos.map((e) => ({
      name: e.name,
      type: e.def.type,
      count: e.def.count,
      bindingPoint: e.bindingPoint,
      paddedData: new Float32Array(e.paddedData)
    }));
  }
  /**
   * Get the framebuffer for the Image pass (for presenting to screen).
   */
  getImageFramebuffer() {
    const e = this._passes.find((n) => n.name === "Image");
    return (e == null ? void 0 : e.framebuffer) ?? null;
  }
  /**
   * Bind the Image pass output as the READ_FRAMEBUFFER for blitting to screen.
   *
   * After the ping-pong swap, the rendered output is in previousTexture,
   * but the framebuffer is attached to currentTexture. This method temporarily
   * attaches previousTexture so blitFramebuffer reads the correct data.
   */
  bindImageForRead() {
    const e = this.gl, n = this._passes.find((r) => r.name === "Image");
    return n ? (e.bindFramebuffer(e.READ_FRAMEBUFFER, n.framebuffer), e.framebufferTexture2D(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, n.previousTexture, 0), !0) : !1;
  }
  /**
   * Restore the Image pass framebuffer to its normal state (attached to currentTexture).
   * Call after blitting to screen.
   */
  unbindImageForRead() {
    const e = this.gl, n = this._passes.find((r) => r.name === "Image");
    n && (e.framebufferTexture2D(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, n.currentTexture, 0), e.bindFramebuffer(e.READ_FRAMEBUFFER, null));
  }
  /**
   * Run one full frame of all passes.
   *
   * @param timeSeconds - global time in seconds (monotone, from App)
   * @param mouse - iMouse as [x, y, clickX, clickY]
   * @param touch - optional touch state for touch uniforms
   */
  step(e, n, r, i, s) {
    const o = this.gl, a = this._lastStepTime === null ? 0 : e - this._lastStepTime;
    this._lastStepTime = e, this._time = e;
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
      crossViewStates: s
    };
    o.viewport(0, 0, this._width, this._height);
    const l = ["BufferA", "BufferB", "BufferC", "BufferD", "Image"];
    for (const d of l) {
      const g = this._passes.find((E) => E.name === d);
      g && (this.executePass(g, h), this.swapPassTextures(g));
    }
    this._uniformMgr.clearDirty(), this._frame += 1;
  }
  /**
   * Resize all internal render targets to new width/height.
   * Does not reset time or frame count.
   */
  resize(e, n) {
    this._width = e, this._height = n;
    const r = this.gl;
    for (const i of this._passes)
      r.deleteTexture(i.currentTexture), r.deleteTexture(i.previousTexture), r.deleteFramebuffer(i.framebuffer), i.currentTexture = Xt(r, e, n), i.previousTexture = Xt(r, e, n), i.framebuffer = rr(r, i.currentTexture);
  }
  /**
   * Reset frame counter and clear all render targets.
   * Used for playback controls to restart shader from frame 0.
   */
  reset() {
    this._frame = 0;
    const e = this.gl;
    for (const n of this._passes)
      e.bindFramebuffer(e.FRAMEBUFFER, n.framebuffer), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, n.previousTexture, 0), e.clear(e.COLOR_BUFFER_BIT), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, n.currentTexture, 0);
    e.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  /**
   * Update keyboard key state (called from App on keydown/keyup events).
   *
   * @param keycode ASCII keycode (e.g., 65 for 'A')
   * @param isDown true if key pressed, false if released
   */
  updateKeyState(e, n) {
    const r = this._keyStates.get(e) || !1;
    if (this._keyStates.set(e, n), n && !r) {
      const i = this._toggleStates.get(e) || 0;
      this._toggleStates.set(e, i === 0 ? 1 : 0);
    }
  }
  /**
   * Update keyboard texture with current key states.
   * Should be called once per frame before rendering.
   */
  updateKeyboardTexture() {
    this._keyboardTexture && Ps(this.gl, this._keyboardTexture.texture, this._keyStates, this._toggleStates);
  }
  /**
   * Recompile a single pass with new GLSL source code.
   * Used for live editing - keeps the old shader running if compilation fails.
   *
   * @param passName - Name of the pass to recompile ('Image', 'BufferA', etc.)
   * @param newSource - New GLSL source code for the pass
   * @returns Object with success status and error message if failed
   */
  recompilePass(e, n) {
    const r = this.gl, i = this._passes.find((a) => a.name === e);
    if (!i)
      return { success: !1, error: `Pass '${e}' not found` };
    const s = this.project.passes[e];
    if (!s)
      return { success: !1, error: `Project pass '${e}' not found` };
    const { source: o } = this.buildFragmentShader(n, s.channels, s.namedSamplers);
    try {
      const a = nr(r, sr, o);
      return r.deleteProgram(i.uniforms.program), i.uniforms = this.cacheUniformLocations(a, s.namedSamplers), s.glslSource = n, this._compilationErrors = this._compilationErrors.filter((u) => u.passName !== e), this._uniformMgr.markAllScalarsDirty(), { success: !0 };
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
  recompileCommon(e) {
    const n = this.project.commonSource;
    this.project.commonSource = e;
    const r = [], i = ["BufferA", "BufferB", "BufferC", "BufferD", "Image"];
    for (const s of i) {
      const o = this.project.passes[s];
      if (!o)
        continue;
      const a = this.recompilePass(s, o.glslSource);
      a.success || r.push({ passName: s, error: a.error || "Unknown error" });
    }
    if (r.length > 0) {
      this.project.commonSource = n;
      for (const s of i) {
        const o = this.project.passes[s];
        if (!o || r.some((u) => u.passName === s))
          continue;
        const a = this.recompilePass(s, o.glslSource);
        a.success || (console.error(`Failed to revert ${s} to old common source:`, a.error), r.push({ passName: s, error: `Revert failed: ${a.error}` }));
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
    const e = this.gl;
    for (const n of this._passes)
      e.deleteProgram(n.uniforms.program), e.deleteFramebuffer(n.framebuffer), e.deleteTexture(n.currentTexture), e.deleteTexture(n.previousTexture);
    this._sharedVAO && (e.deleteVertexArray(this._sharedVAO), this._sharedVAO = null);
    for (const n of this._textures)
      e.deleteTexture(n.texture);
    this._keyboardTexture && e.deleteTexture(this._keyboardTexture.texture), this._blackTexture && e.deleteTexture(this._blackTexture);
    for (const [, n] of this._scriptTextures)
      e.deleteTexture(n.texture);
    this._scriptTextures.clear(), this._uniformMgr.dispose(e), this._media.dispose(e), this._passes = [], this._textures = [], this._keyboardTexture = null, this._blackTexture = null;
  }
  // ===========================================================================
  // Initialization Helpers
  // ===========================================================================
  initExtensions() {
    const e = this.gl;
    if (!e.getExtension("EXT_color_buffer_float"))
      throw new Error("EXT_color_buffer_float not supported. WebGL2 with float rendering is required.");
    e.getExtension("OES_texture_float_linear");
  }
  /**
   * Cache uniform locations for a compiled program.
   * Returns a PassUniformLocations object with all standard and custom uniform locations.
   */
  cacheUniformLocations(e, n) {
    const r = this.gl, i = /* @__PURE__ */ new Map();
    for (const [s, o] of Object.entries(this.project.uniforms))
      _e(o) || i.set(s, r.getUniformLocation(e, s));
    return this._uniformMgr.bindUBOsToProgram(r, e, i), {
      program: e,
      iResolution: r.getUniformLocation(e, "iResolution"),
      iTime: r.getUniformLocation(e, "iTime"),
      iTimeDelta: r.getUniformLocation(e, "iTimeDelta"),
      iFrame: r.getUniformLocation(e, "iFrame"),
      iMouse: r.getUniformLocation(e, "iMouse"),
      iMousePressed: r.getUniformLocation(e, "iMousePressed"),
      iDate: r.getUniformLocation(e, "iDate"),
      iFrameRate: r.getUniformLocation(e, "iFrameRate"),
      iChannel: [
        r.getUniformLocation(e, "iChannel0"),
        r.getUniformLocation(e, "iChannel1"),
        r.getUniformLocation(e, "iChannel2"),
        r.getUniformLocation(e, "iChannel3")
      ],
      iChannelResolution: [
        r.getUniformLocation(e, "iChannelResolution[0]"),
        r.getUniformLocation(e, "iChannelResolution[1]"),
        r.getUniformLocation(e, "iChannelResolution[2]"),
        r.getUniformLocation(e, "iChannelResolution[3]")
      ],
      // Touch uniforms
      iTouchCount: r.getUniformLocation(e, "iTouchCount"),
      iTouch: [
        r.getUniformLocation(e, "iTouch0"),
        r.getUniformLocation(e, "iTouch1"),
        r.getUniformLocation(e, "iTouch2")
      ],
      iPinch: r.getUniformLocation(e, "iPinch"),
      iPinchDelta: r.getUniformLocation(e, "iPinchDelta"),
      iPinchCenter: r.getUniformLocation(e, "iPinchCenter"),
      custom: i,
      namedSamplers: (() => {
        const s = /* @__PURE__ */ new Map();
        if (n)
          for (const [o] of n)
            s.set(o, r.getUniformLocation(e, o));
        return s;
      })(),
      namedSamplerResolutions: (() => {
        const s = /* @__PURE__ */ new Map();
        if (n)
          for (const [o] of n)
            s.set(o, r.getUniformLocation(e, `${o}_resolution`));
        return s;
      })(),
      // Cross-view uniforms for multi-view projects
      crossViewMouse: (() => {
        const s = /* @__PURE__ */ new Map();
        if (this._viewNames.length > 1)
          for (const o of this._viewNames)
            s.set(o, r.getUniformLocation(e, `iMouse_${o}`));
        return s;
      })(),
      crossViewResolution: (() => {
        const s = /* @__PURE__ */ new Map();
        if (this._viewNames.length > 1)
          for (const o of this._viewNames)
            s.set(o, r.getUniformLocation(e, `iResolution_${o}`));
        return s;
      })(),
      crossViewMousePressed: (() => {
        const s = /* @__PURE__ */ new Map();
        if (this._viewNames.length > 1)
          for (const o of this._viewNames)
            s.set(o, r.getUniformLocation(e, `iMousePressed_${o}`));
        return s;
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
    const e = this.gl;
    this._textures = [];
    for (const n of this.project.textures) {
      const r = e.createTexture();
      if (!r)
        throw new Error("Failed to create texture");
      e.bindTexture(e.TEXTURE_2D, r), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255]));
      const i = {
        name: n.name,
        texture: r,
        width: 1,
        height: 1
      };
      this._textures.push(i);
      const s = new Image();
      s.crossOrigin = "anonymous", s.onload = () => {
        if (this._disposed || e.isContextLost())
          return;
        e.bindTexture(e.TEXTURE_2D, r), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !0), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, s), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1);
        const o = n.filter !== "nearest";
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, o ? e.LINEAR : e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, o ? e.LINEAR_MIPMAP_LINEAR : e.NEAREST);
        const a = n.wrap === "clamp" ? e.CLAMP_TO_EDGE : e.REPEAT;
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, a), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, a), o && e.generateMipmap(e.TEXTURE_2D), i.width = s.width, i.height = s.height, console.log(`Loaded texture '${n.name}': ${s.width}x${s.height}`);
      }, s.onerror = () => {
        var o;
        console.error(`Failed to load texture '${n.name}' from ${n.source}`), (o = this._onAssetError) == null || o.call(this, { type: "texture", name: n.name, detail: n.source });
      }, s.src = n.source;
    }
  }
  /**
   * Compile shaders, create VAOs/FBOs/textures, and build RuntimePass array.
   */
  initRuntimePasses() {
    const e = this.gl, n = this.project, r = Ms(e);
    this._sharedVAO = r;
    const i = ["BufferA", "BufferB", "BufferC", "BufferD", "Image"];
    for (const s of i) {
      const o = n.passes[s];
      if (!o)
        continue;
      const { source: a, lineMapping: u } = this.buildFragmentShader(o.glslSource, o.channels, o.namedSamplers);
      try {
        const c = nr(e, sr, a), h = this.cacheUniformLocations(c, o.namedSamplers), l = Xt(e, this._width, this._height), d = Xt(e, this._width, this._height), g = rr(e, l), E = {
          name: s,
          projectChannels: o.channels,
          vao: r,
          uniforms: h,
          framebuffer: g,
          currentTexture: l,
          previousTexture: d,
          namedSamplers: o.namedSamplers
        };
        this._passes.push(E);
      } catch (c) {
        const h = c instanceof Error ? c.message : String(c), l = h.match(/ERROR:\s*\d+:(\d+):/);
        let d = !1, g = null;
        if (l) {
          const E = parseInt(l[1], 10);
          if (u.commonStartLine > 0 && u.commonLines > 0) {
            const f = u.commonStartLine + u.commonLines - 1;
            E >= u.commonStartLine && E <= f && (d = !0, g = E - u.commonStartLine + 1);
          }
          !d && u.userCodeStartLine > 0 && E >= u.userCodeStartLine && (g = E - u.userCodeStartLine + 1);
        }
        this._compilationErrors.push({
          passName: s,
          error: h,
          source: a,
          isFromCommon: d,
          originalLine: g,
          lineMapping: u
        }), console.error(`Failed to compile ${s}:`, h);
      }
    }
  }
  /**
   * Build complete fragment shader source with Shadertoy boilerplate.
   */
  buildFragmentShader(e, n, r) {
    return js(e, n, {
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
  setViewNames(e) {
    this._viewNames = e;
  }
  // ===========================================================================
  // Pass Execution
  // ===========================================================================
  executePass(e, n) {
    const r = this.gl;
    r.bindFramebuffer(r.FRAMEBUFFER, e.framebuffer), r.useProgram(e.uniforms.program), r.bindVertexArray(e.vao), this.bindBuiltinUniforms(e.uniforms, n), this._uniformMgr.bindToProgram(r, e.uniforms), e.namedSamplers && e.namedSamplers.size > 0 ? this.bindNamedSamplers(e) : this.bindChannelTextures(e), r.drawArrays(r.TRIANGLES, 0, 3), r.bindVertexArray(null), r.useProgram(null), r.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  bindBuiltinUniforms(e, n) {
    const r = this.gl;
    e.iResolution && r.uniform3f(e.iResolution, n.iResolution[0], n.iResolution[1], n.iResolution[2]), e.iTime && r.uniform1f(e.iTime, n.iTime), e.iTimeDelta && r.uniform1f(e.iTimeDelta, n.iTimeDelta), e.iFrame && r.uniform1i(e.iFrame, n.iFrame), e.iMouse && r.uniform4f(e.iMouse, n.iMouse[0], n.iMouse[1], n.iMouse[2], n.iMouse[3]), e.iMousePressed && r.uniform1i(e.iMousePressed, n.iMousePressed ? 1 : 0), e.iDate && r.uniform4f(e.iDate, n.iDate[0], n.iDate[1], n.iDate[2], n.iDate[3]), e.iFrameRate && r.uniform1f(e.iFrameRate, n.iFrameRate), e.iTouchCount && r.uniform1i(e.iTouchCount, n.iTouchCount);
    for (let i = 0; i < 3; i++) {
      const s = e.iTouch[i];
      if (s) {
        const o = n.iTouch[i];
        r.uniform4f(s, o[0], o[1], o[2], o[3]);
      }
    }
    if (e.iPinch && r.uniform1f(e.iPinch, n.iPinch), e.iPinchDelta && r.uniform1f(e.iPinchDelta, n.iPinchDelta), e.iPinchCenter && r.uniform2f(e.iPinchCenter, n.iPinchCenter[0], n.iPinchCenter[1]), n.crossViewStates)
      for (const [i, s] of n.crossViewStates) {
        const o = e.crossViewMouse.get(i);
        o && r.uniform4f(o, s.mouse[0], s.mouse[1], s.mouse[2], s.mouse[3]);
        const a = e.crossViewResolution.get(i);
        a && r.uniform3f(a, s.resolution[0], s.resolution[1], s.resolution[2]);
        const u = e.crossViewMousePressed.get(i);
        u && r.uniform1i(u, s.mousePressed ? 1 : 0);
      }
  }
  bindChannelTextures(e) {
    const n = this.gl;
    for (let r = 0; r < 4; r++) {
      const i = e.projectChannels[r], s = this.resolveChannelTexture(i), o = this.resolveChannelResolution(i);
      n.activeTexture(n.TEXTURE0 + r), n.bindTexture(n.TEXTURE_2D, s);
      const a = e.uniforms.iChannel[r];
      a && n.uniform1i(a, r);
      const u = e.uniforms.iChannelResolution[r];
      u && n.uniform3f(u, o[0], o[1], 1);
    }
  }
  /**
   * Bind named samplers (standard mode).
   * Each named sampler gets its own texture unit.
   */
  bindNamedSamplers(e) {
    const n = this.gl;
    let r = 0;
    for (const [i, s] of e.namedSamplers) {
      const o = this.resolveChannelTexture(s), a = this.resolveChannelResolution(s);
      n.activeTexture(n.TEXTURE0 + r), n.bindTexture(n.TEXTURE_2D, o);
      const u = e.uniforms.namedSamplers.get(i);
      u && n.uniform1i(u, r);
      const c = e.uniforms.namedSamplerResolutions.get(i);
      c && n.uniform3f(c, a[0], a[1], 1), r++;
    }
  }
  /**
   * Resolve a ChannelSource to an actual WebGLTexture to bind.
   */
  resolveChannelTexture(e) {
    switch (e.kind) {
      case "none":
        if (!this._blackTexture)
          throw new Error("Black texture not initialized");
        return this._blackTexture;
      case "buffer": {
        const n = this._passes.find((r) => r.name === e.buffer);
        return n ? e.current ? n.currentTexture : n.previousTexture : (console.warn(`resolveChannelTexture: buffer '${e.buffer}' not found, using black`), this._blackTexture);
      }
      case "texture": {
        const n = this._textures.find((r) => r.name === e.name);
        return n ? n.texture : (console.warn(`resolveChannelTexture: texture '${e.name}' not found, using black`), this._blackTexture);
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
        const n = this._media.videoTextures.find((r) => r.kind === "video" && r.src === e.src);
        return (n == null ? void 0 : n.texture) ?? this._blackTexture;
      }
      case "script": {
        const n = this._scriptTextures.get(e.name);
        return (n == null ? void 0 : n.texture) ?? this._blackTexture;
      }
    }
  }
  /**
   * Resolve a ChannelSource to its resolution [width, height].
   * Returns [0, 0] for unused channels.
   */
  resolveChannelResolution(e) {
    switch (e.kind) {
      case "none":
        return [0, 0];
      case "buffer":
        return [this._width, this._height];
      case "texture": {
        const n = this._textures.find((r) => r.name === e.name);
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
        const n = this._media.videoTextures.find((r) => r.kind === "video" && r.src === e.src);
        return n ? [n.width, n.height] : [0, 0];
      }
      case "script": {
        const n = this._scriptTextures.get(e.name);
        return n ? [n.width, n.height] : [0, 0];
      }
    }
  }
  /**
   * Swap current and previous textures for a pass (ping-pong).
   * Also reattach framebuffer to new current texture.
   */
  swapPassTextures(e) {
    const n = this.gl, r = e.currentTexture;
    e.currentTexture = e.previousTexture, e.previousTexture = r, n.bindFramebuffer(n.FRAMEBUFFER, e.framebuffer), n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, e.currentTexture, 0), n.bindFramebuffer(n.FRAMEBUFFER, null);
  }
}
class Ws {
  constructor(e) {
    this.overlay = null, this.container = e;
  }
  /**
   * Display shader compilation errors in an overlay.
   */
  show(e, n) {
    this.overlay || (this.overlay = document.createElement("div"), this.overlay.className = "shader-error-overlay", this.container.appendChild(this.overlay));
    const r = e.filter((h) => h.isFromCommon), i = e.filter((h) => !h.isFromCommon), u = [...r.length > 0 ? [r[0]] : [], ...i].map(({ passName: h, error: l, isFromCommon: d, originalLine: g, lineMapping: E }) => {
      const f = l.replace(`Shader compilation failed:
`, ""), w = g;
      let C = f;
      w !== null && (C = f.replace(/ERROR:\s*\d+:(\d+):/g, `ERROR: 0:${w}:`));
      let D = null;
      if (d)
        D = n.commonSource;
      else {
        const p = n.passes[h];
        D = (p == null ? void 0 : p.glslSource) ?? null;
      }
      return {
        passName: d ? "common.glsl" : h,
        error: Zs(C, E, d),
        codeContext: w !== null && D ? Qs(D, w) : null
      };
    }).map(({ passName: h, error: l, codeContext: d }) => `
      <div class="error-section">
        <div class="error-pass-name">${h}</div>
        <pre class="error-content">${Yr(l)}</pre>
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
function Zs(t, e, n) {
  return t.split(`
`).map((r) => {
    const i = r.match(/^ERROR:\s*(\d+):(\d+):\s*(.+)$/);
    if (i) {
      const [, , s, o] = i, a = parseInt(s, 10);
      let u = a;
      return n && e.commonStartLine > 0 ? u = a - e.commonStartLine + 1 : e.userCodeStartLine > 0 && a >= e.userCodeStartLine && (u = a - e.userCodeStartLine + 1), `Line ${u}: ${Js(o)}`;
    }
    return r;
  }).join(`
`);
}
function Js(t) {
  return t.includes("no matching overloaded function found") ? t + " (check function name spelling and argument types)" : t.includes("undeclared identifier") ? t + " (variable not declared — check spelling)" : t.includes("syntax error") ? t + " (check for missing semicolons, brackets, or commas)" : t.includes("is not a function") ? t + " (identifier exists but is not callable)" : t.includes("wrong operand types") ? t + " (type mismatch — check vec/float/int types)" : t;
}
function Qs(t, e) {
  const n = t.split(`
`);
  if (e < 1 || e > n.length)
    return null;
  const r = 3, i = Math.max(0, e - r - 1), s = Math.min(n.length, e + r);
  return n.slice(i, s).map((a, u) => {
    const c = i + u + 1, h = c === e, l = String(c).padStart(4, " "), d = Yr(a);
    return h ? `<span class="error-line-highlight">${l} │ ${d}</span>` : `<span class="context-line">${l} │ ${d}</span>`;
  }).join("");
}
function Yr(t) {
  const e = document.createElement("div");
  return e.textContent = t, e.innerHTML;
}
class kt {
  constructor(e) {
    this.overlay = null, this.autoHideTimer = null, this.container = e;
  }
  /**
   * Show an error from setup() or onFrame().
   */
  showError(e, n) {
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
            script.js ${e}() error
          </span>
          <button class="script-error-close" title="Dismiss">×</button>
        </div>
        <pre class="script-error-message">${jt(r)}</pre>
        ${i ? `<pre class="script-error-stack">${jt(i)}</pre>` : ""}
      </div>
    `, this.wireClose(), this.autoHideTimer = setTimeout(() => this.hide(), kt.AUTO_HIDE_MS);
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
  showWarning(e, n) {
    this.clearAutoHide(), this.ensureOverlay(), this.overlay.innerHTML = `
      <div class="script-error-content">
        <div class="script-error-header warning">
          <span class="script-error-title">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style="vertical-align: text-bottom;">
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            ${jt(e)}
          </span>
          <button class="script-error-close" title="Dismiss">×</button>
        </div>
        <pre class="script-error-message">${jt(n)}</pre>
      </div>
    `, this.wireClose(), this.autoHideTimer = setTimeout(() => this.hide(), kt.AUTO_HIDE_MS);
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
    const e = (n = this.overlay) == null ? void 0 : n.querySelector(".script-error-close");
    e && e.addEventListener("click", () => this.hide());
  }
  clearAutoHide() {
    this.autoHideTimer !== null && (clearTimeout(this.autoHideTimer), this.autoHideTimer = null);
  }
}
kt.AUTO_HIDE_MS = 5e3;
function jt(t) {
  const e = document.createElement("div");
  return e.textContent = t, e.innerHTML;
}
const zt = {};
for (let t = 0; t < 26; t++)
  zt[`Key${String.fromCharCode(65 + t)}`] = 65 + t;
for (let t = 0; t < 10; t++)
  zt[`Digit${t}`] = 48 + t;
for (let t = 1; t <= 12; t++)
  zt[`F${t}`] = 111 + t;
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
function ar(t) {
  const e = zt[t.code];
  return e !== void 0 && e >= 0 && e < 256 ? e : null;
}
class eo {
  constructor(e, n, r) {
    this.mouse = [0, 0, 0, 0], this.isMouseDown = !1, this.touchState = {
      count: 0,
      touches: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      pinch: 1,
      pinchDelta: 0,
      pinchCenter: [0, 0]
    }, this.onFirstGesture = null, this.activePointers = /* @__PURE__ */ new Map(), this.gestureTriggered = !1, this.keyEvents = [], this.canvasListeners = [], this.canvas = e, this.pixelRatio = n, this.keyboardTarget = r ?? document, this.setupMouseTracking(), this.setupTouchTracking(), this.keydownHandler = (i) => {
      const s = ar(i);
      s !== null && this.keyEvents.push({ keycode: s, down: !0 });
    }, this.keyupHandler = (i) => {
      const s = ar(i);
      s !== null && this.keyEvents.push({ keycode: s, down: !1 });
    }, this.keyboardTarget.addEventListener("keydown", this.keydownHandler), this.keyboardTarget.addEventListener("keyup", this.keyupHandler);
  }
  /**
   * Drain and return accumulated key events since last call.
   */
  getAndClearKeyEvents() {
    const e = this.keyEvents;
    return this.keyEvents = [], e;
  }
  /**
   * Clean up all event listeners.
   */
  dispose() {
    this.keyboardTarget.removeEventListener("keydown", this.keydownHandler), this.keyboardTarget.removeEventListener("keyup", this.keyupHandler);
    for (const { event: e, handler: n } of this.canvasListeners)
      this.canvas.removeEventListener(e, n);
    this.canvasListeners = [];
  }
  triggerGesture() {
    var e;
    this.gestureTriggered || (this.gestureTriggered = !0, (e = this.onFirstGesture) == null || e.call(this));
  }
  setupMouseTracking() {
    const e = (s) => {
      const o = this.canvas.getBoundingClientRect(), a = (s.clientX - o.left) * this.pixelRatio, u = (o.height - (s.clientY - o.top)) * this.pixelRatio;
      return [a, u];
    }, n = (s) => {
      const [o, a] = e(s);
      this.isMouseDown = !0, this.mouse[0] = o, this.mouse[1] = a, this.mouse[2] = o, this.mouse[3] = a, this.triggerGesture();
    }, r = (s) => {
      if (!this.isMouseDown)
        return;
      const [o, a] = e(s);
      this.mouse[0] = o, this.mouse[1] = a;
    }, i = () => {
      this.isMouseDown = !1, this.mouse[2] = -Math.abs(this.mouse[2]), this.mouse[3] = -Math.abs(this.mouse[3]);
    };
    this.canvas.addEventListener("mousedown", n), this.canvas.addEventListener("mousemove", r), this.canvas.addEventListener("mouseup", i), this.canvasListeners.push({ event: "mousedown", handler: n }, { event: "mousemove", handler: r }, { event: "mouseup", handler: i });
  }
  setupTouchTracking() {
    this.canvas.style.touchAction = "pan-y";
    const e = (o, a) => {
      const u = this.canvas.getBoundingClientRect(), c = (o - u.left) * this.pixelRatio, h = (u.height - (a - u.top)) * this.pixelRatio;
      return [c, h];
    }, n = (o) => {
      if (o.pointerType === "mouse")
        return;
      const [a, u] = e(o.clientX, o.clientY);
      this.activePointers.set(o.pointerId, {
        id: o.pointerId,
        x: a,
        y: u,
        startX: a,
        startY: u
      }), this.canvas.setPointerCapture(o.pointerId), this.updateTouchState(), this.activePointers.size === 1 && (this.isMouseDown = !0, this.mouse[0] = a, this.mouse[1] = u, this.mouse[2] = a, this.mouse[3] = u);
    }, r = (o) => {
      if (o.pointerType === "mouse")
        return;
      const a = this.activePointers.get(o.pointerId);
      if (!a)
        return;
      const [u, c] = e(o.clientX, o.clientY);
      a.x = u, a.y = c, this.updateTouchState(), this.activePointers.size === 1 && (this.mouse[0] = u, this.mouse[1] = c), o.preventDefault();
    }, i = (o) => {
      o.pointerType !== "mouse" && (this.activePointers.delete(o.pointerId), this.canvas.releasePointerCapture(o.pointerId), this.activePointers.size === 0 && (this.isMouseDown = !1, this.mouse[2] = -Math.abs(this.mouse[2]), this.mouse[3] = -Math.abs(this.mouse[3])), this.updateTouchState());
    }, s = (o) => {
      i(o);
    };
    this.canvas.addEventListener("pointerdown", n), this.canvas.addEventListener("pointermove", r), this.canvas.addEventListener("pointerup", i), this.canvas.addEventListener("pointercancel", s), this.canvasListeners.push({ event: "pointerdown", handler: n }, { event: "pointermove", handler: r }, { event: "pointerup", handler: i }, { event: "pointercancel", handler: s });
  }
  updateTouchState() {
    const e = Array.from(this.activePointers.values()), n = e.length;
    this.touchState.count = n;
    for (let r = 0; r < 3; r++)
      if (r < e.length) {
        const i = e[r];
        this.touchState.touches[r] = [i.x, i.y, i.startX, i.startY];
      } else
        this.touchState.touches[r] = [0, 0, 0, 0];
    if (n >= 2) {
      const r = e[0], i = e[1], s = i.x - r.x, o = i.y - r.y, a = Math.sqrt(s * s + o * o), u = i.startX - r.startX, c = i.startY - r.startY, h = Math.sqrt(u * u + c * c);
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
class ur {
  get engine() {
    return this._engine;
  }
  get isContextLost() {
    return this._isContextLost;
  }
  constructor(e) {
    this._resizeDebounceTimer = null, this._contextLostOverlay = null, this._isContextLost = !1, this._mediaBanner = null, this._mediaInitialized = !1, this._overlays = /* @__PURE__ */ new Map(), this.onResize = null, this.onContextRestored = null, this.container = e.container, this._project = e.project, this._pixelRatio = e.pixelRatio, this._viewNames = e.viewNames, this.canvas = document.createElement("canvas"), this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.display = "block", this.container.appendChild(this.canvas), this.errorOverlay = new Ws(this.container), this.runtimeErrorOverlay = new kt(this.container);
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
    this.gl = n, this.setupContextLossHandling(), this.updateCanvasSize(), this._engine = new or({
      gl: this.gl,
      project: e.project,
      viewNames: e.viewNames,
      onAssetError: (r) => {
        const i = r.type === "texture" ? `Texture '${r.name}' failed to load` : `Framebuffer '${r.name}' error`;
        this.runtimeErrorOverlay.showWarning(i, r.detail);
      }
    }), this._engine.hasErrors() && this.errorOverlay.show(this._engine.getCompilationErrors(), this._project), (this._engine.needsAudio || this._engine.needsWebcam) && this.showMediaBanner(), this._resizeObserver = new ResizeObserver(() => {
      this.updateCanvasSize(), this._resizeDebounceTimer !== null && clearTimeout(this._resizeDebounceTimer), this._resizeDebounceTimer = setTimeout(() => {
        var r;
        this._resizeDebounceTimer = null, this._engine.resize(this.canvas.width, this.canvas.height), this._engine.reset(), (r = this.onResize) == null || r.call(this, this.canvas.width, this.canvas.height);
      }, 150);
    }), this._resizeObserver.observe(this.container), this.input = new eo(this.canvas, this._pixelRatio, e.keyboardTarget), this.input.onFirstGesture = () => this.initMediaOnGesture(), this.initVideoFiles();
  }
  // ===========================================================================
  // Per-Frame Rendering
  // ===========================================================================
  /**
   * Step this view for one frame: forward input, run engine, blit to screen.
   */
  step(e, n) {
    if (!this._isContextLost) {
      for (const r of this.input.getAndClearKeyEvents())
        this._engine.updateKeyState(r.keycode, r.down);
      this._engine.updateKeyboardTexture(), this._engine.updateAudioTexture(), this._engine.updateVideoTextures(), this._engine.step(e, this.input.mouse, this.input.isMouseDown, {
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
    const e = this.gl;
    this._engine.bindImageForRead() && (e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), e.blitFramebuffer(0, 0, this.canvas.width, this.canvas.height, 0, 0, this.canvas.width, this.canvas.height, e.COLOR_BUFFER_BIT, e.NEAREST), this._engine.unbindImageForRead());
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
  setOverlay(e, n) {
    let r = this._overlays.get(e);
    if (n === null) {
      r && r.classList.add("hidden");
      return;
    }
    r || (r = document.createElement("div"), r.className = `script-overlay ${e}`, this.container.appendChild(r), this._overlays.set(e, r)), r.textContent = n, r.classList.remove("hidden");
  }
  // ===========================================================================
  // Lifecycle
  // ===========================================================================
  dispose() {
    this.input.dispose(), this._resizeObserver.disconnect(), this._resizeDebounceTimer !== null && clearTimeout(this._resizeDebounceTimer), this._engine.dispose(), this.errorOverlay.hide(), this.runtimeErrorOverlay.dispose(), this.hideMediaBanner(), this.hideContextLostOverlay();
    for (const n of this._overlays.values())
      n.remove();
    this._overlays.clear();
    const e = this.gl.getExtension("WEBGL_lose_context");
    e && e.loseContext(), this.container.removeChild(this.canvas);
  }
  // ===========================================================================
  // Canvas Sizing
  // ===========================================================================
  updateCanvasSize() {
    const e = this.container.getBoundingClientRect(), n = Math.floor(e.width * this._pixelRatio), r = Math.floor(e.height * this._pixelRatio);
    (this.canvas.width !== n || this.canvas.height !== r) && (this.canvas.width = n, this.canvas.height = r);
  }
  // ===========================================================================
  // Context Loss Handling
  // ===========================================================================
  setupContextLossHandling() {
    this.canvas.addEventListener("webglcontextlost", (e) => {
      e.preventDefault(), this.handleContextLost();
    }), this.canvas.addEventListener("webglcontextrestored", () => {
      this.handleContextRestored();
    });
  }
  handleContextLost() {
    this._isContextLost = !0, this.showContextLostOverlay(), console.warn("WebGL context lost. Waiting for restoration...");
  }
  handleContextRestored() {
    var e;
    console.log("WebGL context restored. Reinitializing...");
    try {
      this._engine.dispose(), this._engine = new or({
        gl: this.gl,
        project: this._project,
        viewNames: this._viewNames,
        onAssetError: (n) => {
          const r = n.type === "texture" ? `Texture '${n.name}' failed to load` : `Framebuffer '${n.name}' error`;
          this.runtimeErrorOverlay.showWarning(r, n.detail);
        }
      }), this._engine.hasErrors() && this.errorOverlay.show(this._engine.getCompilationErrors(), this._project), this._engine.resize(this.canvas.width, this.canvas.height), this.hideContextLostOverlay(), this._isContextLost = !1, (e = this.onContextRestored) == null || e.call(this), console.log("WebGL context successfully restored");
    } catch (n) {
      console.error("Failed to restore WebGL context:", n), this.showContextLostOverlay(!0);
    }
  }
  showContextLostOverlay(e = !1) {
    this._contextLostOverlay || (this._contextLostOverlay = document.createElement("div"), this._contextLostOverlay.className = "context-lost-overlay", this.container.appendChild(this._contextLostOverlay)), e ? this._contextLostOverlay.innerHTML = `
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
    for (const e of this._engine.videoSources)
      this._engine.initVideo(e);
  }
  showMediaBanner() {
    this._mediaBanner = document.createElement("div"), this._mediaBanner.className = "media-permission-banner";
    const e = [];
    this._engine.needsAudio && e.push("microphone"), this._engine.needsWebcam && e.push("webcam"), this._mediaBanner.innerHTML = `
      <span class="media-banner-text">This shader uses ${e.join(" and ")}</span>
      <button class="media-banner-button">Click to enable</button>
    `, this._mediaBanner.querySelector(".media-banner-button").addEventListener("click", () => {
      this.initMediaOnGesture();
    }), this.container.appendChild(this._mediaBanner);
  }
  hideMediaBanner() {
    this._mediaBanner && (this._mediaBanner.remove(), this._mediaBanner = null);
  }
}
class Gr {
  constructor(e) {
    var n;
    this.values = {}, this.updaters = /* @__PURE__ */ new Map(), this.documentListeners = [], this.container = e.container, this.uniforms = e.uniforms, this.onChange = e.onChange;
    for (const [r, i] of Object.entries(this.uniforms))
      _e(i) || i.hidden || (this.values[r] = ((n = e.initialValues) == null ? void 0 : n[r]) ?? i.value);
    this.render();
  }
  /**
   * Render all uniform controls.
   */
  render() {
    this.container.innerHTML = "", this.container.className = "uniform-controls";
    const e = Object.entries(this.uniforms);
    if (e.length === 0) {
      const s = document.createElement("div");
      s.className = "uniform-controls-empty", s.textContent = "No uniforms defined", this.container.appendChild(s);
      return;
    }
    const n = document.createElement("div");
    n.className = "uniform-controls-header";
    const r = document.createElement("button");
    r.className = "uniform-controls-reset", r.textContent = "Reset", r.title = "Reset all uniforms to defaults", r.addEventListener("click", () => this.resetToDefaults()), n.appendChild(r), this.container.appendChild(n);
    const i = document.createElement("div");
    i.className = "uniform-controls-list";
    for (const [s, o] of e) {
      if (_e(o) || o.hidden)
        continue;
      const a = this.createControl(s, o);
      a && (this.updaters.set(s, a.update), i.appendChild(a.element));
    }
    this.container.appendChild(i);
  }
  /**
   * Create a control element for a uniform.
   */
  createControl(e, n) {
    if (_e(n) || n.hidden)
      return null;
    switch (n.type) {
      case "float":
        return this.createFloatSlider(e, n);
      case "int":
        return this.createIntSlider(e, n);
      case "bool":
        return this.createBoolToggle(e, n);
      case "vec2":
        return this.createVec2Pad(e, n);
      case "vec3":
        return n.color ? this.createColorPicker(e, n) : this.createVecSliders(e, n, 3);
      case "vec4":
        return n.color ? this.createColorPicker4(e, n) : this.createVecSliders(e, n, 4);
      default:
        return console.warn(`Uniform '${e}': unknown type '${n.type}'`), null;
    }
  }
  // ===========================================================================
  // Shared Slider Row Helper
  // ===========================================================================
  createSliderRow(e) {
    const n = document.createElement("div");
    n.className = "uniform-control-label-row";
    const r = document.createElement("label");
    r.className = "uniform-control-label", r.textContent = e.label;
    const i = document.createElement("span");
    i.className = "uniform-control-value", i.textContent = e.format(e.value), n.appendChild(r), n.appendChild(i);
    const s = document.createElement("input");
    s.type = "range", s.className = "uniform-control-slider", s.min = String(e.min), s.max = String(e.max), s.step = String(e.step), s.value = String(e.value), s.addEventListener("input", () => {
      const u = parseFloat(s.value);
      e.onInput(u), i.textContent = e.format(u);
    });
    const o = document.createElement("div");
    return o.appendChild(n), o.appendChild(s), { element: o, update: (u) => {
      s.value = String(u), i.textContent = e.format(u);
    } };
  }
  // ===========================================================================
  // Float Slider
  // ===========================================================================
  createFloatSlider(e, n) {
    const r = n.step ?? 0.01, { element: i, update: s } = this.createSliderRow({
      label: n.label ?? e,
      min: n.min ?? 0,
      max: n.max ?? 1,
      step: r,
      value: this.values[e],
      format: (a) => this.formatNumber(a, r),
      onInput: (a) => {
        this.values[e] = a, this.onChange(e, a);
      }
    }), o = document.createElement("div");
    return o.className = "uniform-control uniform-control-float", o.appendChild(i), {
      element: o,
      update: (a) => s(a)
    };
  }
  // ===========================================================================
  // Int Slider
  // ===========================================================================
  createIntSlider(e, n) {
    const { element: r, update: i } = this.createSliderRow({
      label: n.label ?? e,
      min: n.min ?? 0,
      max: n.max ?? 10,
      step: n.step ?? 1,
      value: this.values[e],
      format: (o) => String(Math.round(o)),
      onInput: (o) => {
        const a = Math.round(o);
        this.values[e] = a, this.onChange(e, a);
      }
    }), s = document.createElement("div");
    return s.className = "uniform-control uniform-control-int", s.appendChild(r), {
      element: s,
      update: (o) => i(o)
    };
  }
  // ===========================================================================
  // Bool Toggle
  // ===========================================================================
  createBoolToggle(e, n) {
    const r = this.values[e], i = n.label ?? e, s = document.createElement("div");
    s.className = "uniform-control uniform-control-bool";
    const o = document.createElement("div");
    o.className = "uniform-control-label-row";
    const a = document.createElement("label");
    a.className = "uniform-control-label", a.textContent = i;
    const u = document.createElement("label");
    u.className = "uniform-control-toggle";
    const c = document.createElement("input");
    c.type = "checkbox", c.checked = r;
    const h = document.createElement("span");
    return h.className = "uniform-control-toggle-slider", c.addEventListener("change", () => {
      const l = c.checked;
      this.values[e] = l, this.onChange(e, l);
    }), u.appendChild(c), u.appendChild(h), o.appendChild(a), o.appendChild(u), s.appendChild(o), {
      element: s,
      update: (l) => {
        c.checked = l;
      }
    };
  }
  // ===========================================================================
  // Vec2 XY Pad
  // ===========================================================================
  createVec2Pad(e, n) {
    const r = this.values[e], i = n.min ?? [0, 0], s = n.max ?? [1, 1], o = n.label ?? e, a = document.createElement("div");
    a.className = "uniform-control uniform-control-vec2";
    const u = document.createElement("div");
    u.className = "uniform-control-label-row";
    const c = document.createElement("label");
    c.className = "uniform-control-label", c.textContent = o;
    const h = document.createElement("span");
    h.className = "uniform-control-value", h.textContent = this.formatVec2(r), u.appendChild(c), u.appendChild(h);
    const l = document.createElement("div");
    l.className = "uniform-control-xy-pad";
    const d = document.createElement("div");
    d.className = "uniform-control-xy-handle", l.appendChild(d);
    const g = (m) => {
      const v = (m[0] - i[0]) / (s[0] - i[0]) * 100, A = (1 - (m[1] - i[1]) / (s[1] - i[1])) * 100;
      d.style.left = `${v}%`, d.style.top = `${A}%`;
    };
    g(r);
    let E = !1;
    const f = (m) => {
      const v = l.getBoundingClientRect(), A = "touches" in m ? m.touches[0].clientX : m.clientX, _ = "touches" in m ? m.touches[0].clientY : m.clientY;
      let F = Math.max(0, Math.min(1, (A - v.left) / v.width)), T = Math.max(0, Math.min(1, (_ - v.top) / v.height));
      const S = i[0] + F * (s[0] - i[0]), R = i[1] + (1 - T) * (s[1] - i[1]), j = [S, R];
      this.values[e] = j, d.style.left = `${F * 100}%`, d.style.top = `${T * 100}%`, h.textContent = this.formatVec2(j), this.onChange(e, j);
    }, w = (m) => {
      E = !0, f(m), m.preventDefault();
    }, C = (m) => {
      E && f(m);
    }, D = () => {
      E = !1;
    };
    l.addEventListener("mousedown", w), document.addEventListener("mousemove", C), document.addEventListener("mouseup", D), this.documentListeners.push({ type: "mousemove", handler: C }), this.documentListeners.push({ type: "mouseup", handler: D });
    const p = (m) => {
      E = !0, f(m), m.preventDefault();
    }, y = (m) => {
      E && f(m);
    };
    return l.addEventListener("touchstart", p), document.addEventListener("touchmove", y), document.addEventListener("touchend", D), this.documentListeners.push({ type: "touchmove", handler: y }), this.documentListeners.push({ type: "touchend", handler: D }), a.appendChild(u), a.appendChild(l), {
      element: a,
      update: (m) => {
        const v = m;
        g(v), h.textContent = this.formatVec2(v);
      }
    };
  }
  // ===========================================================================
  // Vec3 Color Picker
  // ===========================================================================
  createColorPicker(e, n) {
    const r = this.values[e], i = n.label ?? e, s = document.createElement("div");
    s.className = "uniform-control uniform-control-color";
    const o = document.createElement("div");
    o.className = "uniform-control-label-row";
    const a = document.createElement("label");
    a.className = "uniform-control-label", a.textContent = i;
    const u = document.createElement("span");
    u.className = "uniform-control-value", u.textContent = this.rgbToHex(r), o.appendChild(a), o.appendChild(u);
    const c = document.createElement("div");
    c.className = "uniform-control-color-wrapper";
    const h = document.createElement("input");
    h.type = "color", h.className = "uniform-control-color-input", h.value = this.rgbToHex(r);
    const l = document.createElement("div");
    return l.className = "uniform-control-color-swatch", l.style.backgroundColor = this.rgbToHex(r), h.addEventListener("input", () => {
      const d = this.hexToRgb(h.value);
      this.values[e] = d, u.textContent = h.value, l.style.backgroundColor = h.value, this.onChange(e, d);
    }), l.addEventListener("click", () => h.click()), c.appendChild(l), c.appendChild(h), s.appendChild(o), s.appendChild(c), {
      element: s,
      update: (d) => {
        const g = this.rgbToHex(d);
        h.value = g, l.style.backgroundColor = g, u.textContent = g;
      }
    };
  }
  // ===========================================================================
  // Vec4 Color Picker (with alpha)
  // ===========================================================================
  createColorPicker4(e, n) {
    var f, w, C;
    const r = this.values[e], i = n.label ?? e, s = document.createElement("div");
    s.className = "uniform-control uniform-control-color";
    const o = document.createElement("div");
    o.className = "uniform-control-label-row";
    const a = document.createElement("label");
    a.className = "uniform-control-label", a.textContent = i;
    const u = document.createElement("span");
    u.className = "uniform-control-value", u.textContent = this.rgbToHex(r), o.appendChild(a), o.appendChild(u);
    const c = document.createElement("div");
    c.className = "uniform-control-color-wrapper";
    const h = document.createElement("input");
    h.type = "color", h.className = "uniform-control-color-input", h.value = this.rgbToHex(r);
    const l = document.createElement("div");
    l.className = "uniform-control-color-swatch", l.style.backgroundColor = this.rgbToHex(r), h.addEventListener("input", () => {
      const D = this.hexToRgb(h.value), p = this.values[e];
      p[0] = D[0], p[1] = D[1], p[2] = D[2], u.textContent = h.value, l.style.backgroundColor = h.value, this.onChange(e, [...p]);
    }), l.addEventListener("click", () => h.click()), c.appendChild(l), c.appendChild(h);
    const d = ((f = n.step) == null ? void 0 : f[3]) ?? 0.01, { element: g, update: E } = this.createSliderRow({
      label: "Alpha",
      min: ((w = n.min) == null ? void 0 : w[3]) ?? 0,
      max: ((C = n.max) == null ? void 0 : C[3]) ?? 1,
      step: d,
      value: r[3],
      format: (D) => this.formatNumber(D, d),
      onInput: (D) => {
        const p = this.values[e];
        p[3] = D, this.onChange(e, [...p]);
      }
    });
    return s.appendChild(o), s.appendChild(c), s.appendChild(g), {
      element: s,
      update: (D) => {
        const p = D, y = this.rgbToHex(p);
        h.value = y, l.style.backgroundColor = y, u.textContent = y, E(p[3]);
      }
    };
  }
  // ===========================================================================
  // Vec3/Vec4 Component Sliders
  // ===========================================================================
  createVecSliders(e, n, r) {
    const i = this.values[e], s = n.label ?? e, o = r === 3 ? ["X", "Y", "Z"] : ["X", "Y", "Z", "W"], a = document.createElement("div");
    a.className = `uniform-control uniform-control-vec${r}`;
    const u = document.createElement("div");
    u.className = "uniform-control-label", u.textContent = s, a.appendChild(u);
    const c = [];
    return o.forEach((h, l) => {
      var C, D, p;
      const d = ((C = n.step) == null ? void 0 : C[l]) ?? 0.01, { element: g, update: E } = this.createSliderRow({
        label: h,
        min: ((D = n.min) == null ? void 0 : D[l]) ?? 0,
        max: ((p = n.max) == null ? void 0 : p[l]) ?? 1,
        step: d,
        value: i[l],
        format: (y) => this.formatNumber(y, d),
        onInput: (y) => {
          const m = this.values[e];
          m[l] = y, this.onChange(e, [...m]);
        }
      }), f = g.querySelector(".uniform-control-label-row");
      if (f) {
        f.classList.add("uniform-control-vec-slider-row");
        const y = f.querySelector(".uniform-control-label");
        y && y.classList.add("uniform-control-vec-component");
        const m = f.querySelector(".uniform-control-value");
        m && m.classList.add("uniform-control-vec-value");
      }
      const w = g.querySelector(".uniform-control-slider");
      w && w.classList.add("uniform-control-vec-slider"), c.push(E), a.appendChild(g);
    }), {
      element: a,
      update: (h) => {
        const l = h;
        c.forEach((d, g) => d(l[g]));
      }
    };
  }
  // ===========================================================================
  // Utility Methods
  // ===========================================================================
  formatNumber(e, n) {
    const r = String(n), i = r.indexOf("."), s = i === -1 ? 0 : r.length - i - 1;
    return e.toFixed(s);
  }
  formatVec2(e) {
    return `(${e[0].toFixed(2)}, ${e[1].toFixed(2)})`;
  }
  rgbToHex(e) {
    const n = Math.round(e[0] * 255), r = Math.round(e[1] * 255), i = Math.round(e[2] * 255);
    return `#${n.toString(16).padStart(2, "0")}${r.toString(16).padStart(2, "0")}${i.toString(16).padStart(2, "0")}`;
  }
  hexToRgb(e) {
    const n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
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
  setValue(e, n) {
    var r;
    e in this.uniforms && (this.values[e] = n, (r = this.updaters.get(e)) == null || r(n));
  }
  /**
   * Reset all uniforms to their default values.
   */
  resetToDefaults() {
    for (const [e, n] of Object.entries(this.uniforms))
      _e(n) || n.hidden || (this.setValue(e, n.value), this.onChange(e, n.value));
  }
  /**
   * Destroy the controls and clean up.
   */
  destroy() {
    for (const { type: e, handler: n } of this.documentListeners)
      document.removeEventListener(e, n);
    this.documentListeners = [], this.container.innerHTML = "", this.updaters.clear();
  }
}
class to {
  constructor(e) {
    if (this.controls = null, this.isOpen = e.startOpen ?? !1, this.wrapper = document.createElement("div"), this.wrapper.className = "uniforms-panel-wrapper", this.toggleButton = document.createElement("button"), this.toggleButton.className = "uniforms-toggle-button", this.toggleButton.title = "Toggle Uniforms Panel", this.toggleButton.innerHTML = `
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
    `, this.toggleButton.addEventListener("click", () => this.toggle()), this.wrapper.appendChild(this.toggleButton), this.panel = document.createElement("div"), this.panel.className = "uniforms-panel", !Object.values(e.uniforms).some((a) => zn(a))) {
      this.wrapper.style.display = "none", e.container.appendChild(this.wrapper);
      return;
    }
    const r = document.createElement("div");
    r.className = "uniforms-panel-header";
    const i = document.createElement("span");
    i.textContent = "Uniforms", r.appendChild(i);
    const s = document.createElement("button");
    s.className = "uniforms-panel-close", s.innerHTML = "&times;", s.title = "Close", s.addEventListener("click", () => this.hide()), r.appendChild(s), this.panel.appendChild(r);
    const o = document.createElement("div");
    o.className = "uniforms-panel-content", this.panel.appendChild(o), this.controls = new Gr({
      container: o,
      uniforms: e.uniforms,
      initialValues: e.initialValues,
      onChange: e.onChange
    }), this.wrapper.appendChild(this.panel), this.isOpen || this.panel.classList.add("closed"), e.container.appendChild(this.wrapper);
  }
  /**
   * Update a uniform value from external source.
   */
  setValue(e, n) {
    var r;
    (r = this.controls) == null || r.setValue(e, n);
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
    var e;
    (e = this.controls) == null || e.destroy(), this.wrapper.remove();
  }
}
const Fn = (t) => t.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
function no(t, e) {
  const n = ro(t, e), r = new Blob([n], { type: "text/html" }), s = `${t.root.split("/").pop() || "shader"}.html`, o = URL.createObjectURL(r), a = document.createElement("a");
  a.href = o, a.download = s, a.click(), URL.revokeObjectURL(o), console.log(`Exported: ${s}`);
}
function ro(t, e) {
  var m, v, A, _;
  const n = t.meta.title, r = t.commonSource ?? "", i = e.getUniformValues(), s = e.getUBOExportData(), o = ["BufferA", "BufferB", "BufferC", "BufferD", "Image"], a = [];
  let u = !1, c = !1;
  for (const F of o) {
    const T = t.passes[F];
    if (!T)
      continue;
    const S = T.channels.map((R) => R.kind === "buffer" ? `buffer:${R.buffer}` : R.kind === "texture" ? "procedural" : R.kind === "keyboard" ? (u = !0, "keyboard") : R.kind === "script" ? (c = !0, `script:${R.name}`) : R.kind === "audio" || R.kind === "webcam" || R.kind === "video" ? "black" : "none");
    a.push({
      name: F,
      source: T.glslSource,
      channels: T.channels,
      channelTypes: S
    });
  }
  const h = !!((m = t.script) != null && m.setup || (v = t.script) != null && v.onFrame), l = Object.entries(t.uniforms).filter(([, F]) => !_e(F)), d = [];
  for (const [F, T] of l) {
    if (_e(T))
      continue;
    const S = i[F] ?? T.value;
    if (T.type === "float" || T.type === "int")
      d.push(`  '${F}': ${S}`);
    else if (T.type === "bool")
      d.push(`  '${F}': ${S ? 1 : 0}`);
    else if (T.type === "vec2") {
      const R = S;
      d.push(`  '${F}': [${R[0]}, ${R[1]}]`);
    } else if (T.type === "vec3") {
      const R = S;
      d.push(`  '${F}': [${R[0]}, ${R[1]}, ${R[2]}]`);
    } else if (T.type === "vec4") {
      const R = S;
      d.push(`  '${F}': [${R[0]}, ${R[1]}, ${R[2]}, ${R[3]}]`);
    }
  }
  const g = l.map(([F, T]) => `uniform ${T.type === "bool" ? "bool" : T.type} ${F};`).join(`
`), E = s.map((F) => `// Array uniform: ${F.name} (max ${F.count})
layout(std140) uniform _ub_${F.name} {
  ${F.type} ${F.name}[${F.count}];
};
uniform int ${F.name}_count;`).join(`

`), f = s.map((F) => {
    const T = Array.from(F.paddedData).map((S) => S.toFixed(6)).join(", ");
    return `  { name: '${F.name}', type: '${F.type}', count: ${F.count}, binding: ${F.bindingPoint}, data: new Float32Array([${T}]) }`;
  }).join(`,
`);
  let w = "", C = "";
  h && ((A = t.script) != null && A.setup && (w = t.script.setup.toString()), (_ = t.script) != null && _.onFrame && (C = t.script.onFrame.toString()));
  const D = u ? `
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
` : "", p = a.map((F) => `  { name: '${F.name}', source: \`${Fn(F.source)}\`, channels: ${JSON.stringify(F.channelTypes)} }`).join(`,
`), y = `#version 300 es
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

${E}
${g}
${D}`;
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

const FRAGMENT_PREAMBLE = \`${Fn(y)}\`;

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

const scriptSetup = ${w || "null"};
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
class io {
  constructor(e, n, r) {
    this.isRecording = !1, this.mediaRecorder = null, this.recordedChunks = [], this.recordingIndicator = null, this.canvas = e, this.container = n, this.projectRoot = r;
  }
  /**
   * Toggle recording on/off.
   * If paused, calls unpause callback before starting.
   */
  toggle(e, n) {
    this.isRecording ? this.stop() : this.start(e, n);
  }
  /**
   * Start recording the canvas as WebM video.
   */
  start(e, n) {
    if (!MediaRecorder.isTypeSupported("video/webm")) {
      console.error("WebM recording not supported in this browser");
      return;
    }
    e && n();
    const r = this.canvas.captureStream(60);
    this.mediaRecorder = new MediaRecorder(r, {
      mimeType: "video/webm;codecs=vp9",
      videoBitsPerSecond: 8e6
      // 8 Mbps for high quality
    }), this.recordedChunks = [], this.mediaRecorder.ondataavailable = (i) => {
      i.data.size > 0 && this.recordedChunks.push(i.data);
    }, this.mediaRecorder.onstop = () => {
      const i = new Blob(this.recordedChunks, { type: "video/webm" }), s = this.projectRoot.split("/").pop() || "shader", o = /* @__PURE__ */ new Date(), a = o.getFullYear().toString() + (o.getMonth() + 1).toString().padStart(2, "0") + o.getDate().toString().padStart(2, "0") + "-" + o.getHours().toString().padStart(2, "0") + o.getMinutes().toString().padStart(2, "0") + o.getSeconds().toString().padStart(2, "0"), u = `shadertoy-${s}-${a}.webm`, c = URL.createObjectURL(i), h = document.createElement("a");
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
class so {
  constructor(e) {
    this.frameCount = 0, this.totalFrameCount = 0, this.lastFpsUpdate = 0, this.currentFps = 0, this.isStatsOpen = !1, this.container = e, this.statsContainer = document.createElement("div"), this.statsContainer.className = "stats-container", this.fpsDisplay = document.createElement("button"), this.fpsDisplay.className = "fps-counter", this.fpsDisplay.textContent = "0 FPS", this.fpsDisplay.title = "Click to show stats", this.fpsDisplay.addEventListener("click", () => this.toggle()), this.statsGrid = document.createElement("div"), this.statsGrid.className = "stats-grid", this.timeDisplay = document.createElement("div"), this.timeDisplay.className = "stat-item", this.timeDisplay.innerHTML = '<span class="stat-value">0:00</span><span class="stat-label">time</span>', this.statsGrid.appendChild(this.timeDisplay), this.frameDisplay = document.createElement("div"), this.frameDisplay.className = "stat-item", this.frameDisplay.innerHTML = '<span class="stat-value">0</span><span class="stat-label">frame</span>', this.statsGrid.appendChild(this.frameDisplay), this.resolutionDisplay = document.createElement("div"), this.resolutionDisplay.className = "stat-item", this.resolutionDisplay.innerHTML = '<span class="stat-value">0×0</span><span class="stat-label">res</span>', this.statsGrid.appendChild(this.resolutionDisplay), this.statsContainer.appendChild(this.statsGrid), this.statsContainer.appendChild(this.fpsDisplay), this.container.appendChild(this.statsContainer);
  }
  /**
   * Update FPS counter and stats. Call once per frame.
   */
  update(e, n) {
    this.frameCount++, this.totalFrameCount++, this.isStatsOpen && this.updateFrameDisplay(), e - this.lastFpsUpdate >= 1 && (this.currentFps = this.frameCount / (e - this.lastFpsUpdate), this.fpsDisplay.textContent = `${Math.round(this.currentFps)} FPS`, this.frameCount = 0, this.lastFpsUpdate = e, this.isStatsOpen && (this.updateTimeDisplay(n), this.updateResolutionDisplay()));
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
  updateResolution(e, n) {
    this.resolutionDisplay.querySelector(".stat-value").textContent = `${e}×${n}`;
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
    let e;
    this.totalFrameCount >= 1e6 ? e = (this.totalFrameCount / 1e6).toFixed(1) + "M" : this.totalFrameCount >= 1e3 ? e = (this.totalFrameCount / 1e3).toFixed(1) + "K" : e = this.totalFrameCount.toString(), this.frameDisplay.querySelector(".stat-value").textContent = e;
  }
  updateTimeDisplay(e) {
    const n = Math.floor(e), r = Math.floor(n / 3600), i = Math.floor(n % 3600 / 60), s = n % 60;
    let o;
    r > 0 ? o = `${r}:${i.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}` : o = `${i}:${s.toString().padStart(2, "0")}`, this.timeDisplay.querySelector(".stat-value").textContent = o;
  }
  updateResolutionDisplay() {
    this.resolutionDisplay.querySelector(".stat-value").textContent || (this.resolutionDisplay.querySelector(".stat-value").textContent = "0×0");
  }
}
class oo {
  constructor(e, n) {
    this.isMenuOpen = !1, this.container = e, this.controlsContainer = document.createElement("div"), this.controlsContainer.className = "playback-controls", this.menuButton = document.createElement("button"), this.menuButton.className = "controls-menu-button", this.menuButton.title = "Controls", this.menuButton.textContent = "+", this.menuButton.addEventListener("click", () => this.toggleMenu()), this.controlsGrid = document.createElement("div"), this.controlsGrid.className = "controls-grid", this.playPauseButton = document.createElement("button"), this.playPauseButton.className = "control-button", this.playPauseButton.title = "Play/Pause (Space)", this.playPauseButton.innerHTML = `
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
    const s = document.createElement("button");
    s.className = "control-button", s.title = "Record Video", s.innerHTML = `
      <svg viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="5"/>
      </svg>
    `, s.addEventListener("click", () => n.onToggleRecording());
    const o = document.createElement("button");
    o.className = "control-button", o.title = "Export HTML", o.innerHTML = `
      <svg viewBox="0 0 16 16">
        <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
        <path d="M2 14.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
      </svg>
    `, o.addEventListener("click", () => n.onExportHTML());
    const a = document.createElement("button");
    a.className = "control-button", a.title = "Render", a.innerHTML = `
      <svg viewBox="0 0 16 16">
        <path d="M2 3h12v2H2V3zm0 4h12v2H2V7zm0 4h12v2H2v-2z"/>
      </svg>
    `, a.addEventListener("click", () => n.onRender());
    const u = document.createElement("button");
    u.className = "control-button", u.title = "Close", u.textContent = "−", u.style.fontSize = "20px", u.style.fontWeight = "300", u.addEventListener("click", () => this.toggleMenu()), this.controlsGrid.appendChild(this.playPauseButton), this.controlsGrid.appendChild(r), this.controlsGrid.appendChild(o), this.controlsGrid.appendChild(a), this.controlsGrid.appendChild(i), this.controlsGrid.appendChild(s);
    const c = document.createElement("div");
    this.controlsGrid.appendChild(c), this.controlsGrid.appendChild(u), this.controlsContainer.appendChild(this.controlsGrid), this.controlsContainer.appendChild(this.menuButton), this.container.appendChild(this.controlsContainer);
  }
  /**
   * Update the play/pause button icon.
   */
  setPaused(e) {
    e ? this.playPauseButton.innerHTML = `
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
class ao {
  constructor(e, n, r, i) {
    this.parentContainer = e, this.canvasWidth = n, this.canvasHeight = r, this.onStartRender = i, this.cancelRenderFn = null, this.backdrop = document.createElement("div"), this.backdrop.className = "render-dialog-backdrop", this.backdrop.addEventListener("click", (A) => {
      A.target === this.backdrop && this.close();
    });
    const s = document.createElement("div");
    s.className = "render-dialog";
    const o = document.createElement("div");
    o.className = "render-dialog-header", o.innerHTML = `
      <div class="render-dialog-title">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
          <path d="M2 14.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
        </svg>
        Render
      </div>
    `;
    const a = document.createElement("button");
    a.className = "render-dialog-close", a.textContent = "×", a.addEventListener("click", () => this.close()), o.appendChild(a), this.bodyEl = document.createElement("div"), this.bodyEl.className = "render-dialog-body";
    const u = this.createField("Resolution"), c = document.createElement("div");
    c.className = "render-field-row", this.widthInput = this.createNumberInput(n, 1, 7680), this.heightInput = this.createNumberInput(r, 1, 4320);
    const h = document.createElement("span");
    h.textContent = "×", c.appendChild(this.widthInput), c.appendChild(h), c.appendChild(this.heightInput), u.appendChild(c);
    const l = this.createField("FPS");
    this.fpsInput = this.createNumberInput(60, 1, 120), l.appendChild(this.fpsInput);
    const d = this.createField("Duration (seconds)");
    this.durationInput = this.createNumberInput(10, 1, 3600), d.appendChild(this.durationInput);
    const g = this.createField("Format"), E = document.createElement("div");
    E.className = "render-format-group", this.formatFrames = document.createElement("input"), this.formatFrames.type = "radio", this.formatFrames.name = "render-format", this.formatFrames.id = "render-fmt-frames", this.formatFrames.value = "frames", this.formatVideo = document.createElement("input"), this.formatVideo.type = "radio", this.formatVideo.name = "render-format", this.formatVideo.id = "render-fmt-video", this.formatVideo.value = "video", this.formatVideo.checked = !0;
    const f = document.createElement("div");
    f.className = "render-format-option";
    const w = document.createElement("label");
    w.htmlFor = "render-fmt-frames", w.textContent = "PNG Frames", f.appendChild(this.formatFrames), f.appendChild(w);
    const C = document.createElement("div");
    C.className = "render-format-option";
    const D = document.createElement("label");
    D.htmlFor = "render-fmt-video", D.textContent = "Video (WebM)", C.appendChild(this.formatVideo), C.appendChild(D), E.appendChild(C), E.appendChild(f), g.appendChild(E), this.estimateEl = document.createElement("div"), this.estimateEl.className = "render-estimate", this.bodyEl.appendChild(u), this.bodyEl.appendChild(l), this.bodyEl.appendChild(d), this.bodyEl.appendChild(g), this.bodyEl.appendChild(this.estimateEl), this.actionsEl = document.createElement("div"), this.actionsEl.className = "render-dialog-actions";
    const p = document.createElement("button");
    p.className = "render-btn render-btn-cancel", p.textContent = "Cancel", p.addEventListener("click", () => this.close());
    const y = document.createElement("button");
    y.className = "render-btn render-btn-primary", y.textContent = "Start Render", y.addEventListener("click", () => this.startRender()), this.actionsEl.appendChild(p), this.actionsEl.appendChild(y), this.progressEl = document.createElement("div"), this.progressEl.className = "render-progress", this.progressEl.innerHTML = `
      <div class="render-progress-bar-bg"><div class="render-progress-bar"></div></div>
      <div class="render-progress-text">Preparing...</div>
    `, this.progressBar = this.progressEl.querySelector(".render-progress-bar"), this.progressText = this.progressEl.querySelector(".render-progress-text");
    const m = document.createElement("button");
    m.className = "render-btn render-btn-cancel", m.textContent = "Cancel Render", m.style.marginTop = "4px", m.addEventListener("click", () => this.cancelRender()), this.progressEl.appendChild(m), s.appendChild(o), s.appendChild(this.bodyEl), s.appendChild(this.actionsEl), s.appendChild(this.progressEl), this.backdrop.appendChild(s);
    const v = () => this.updateEstimate();
    this.widthInput.addEventListener("input", v), this.heightInput.addEventListener("input", v), this.fpsInput.addEventListener("input", v), this.durationInput.addEventListener("input", v), this.formatFrames.addEventListener("change", v), this.formatVideo.addEventListener("change", v), this.updateEstimate();
  }
  open() {
    this.parentContainer.appendChild(this.backdrop);
  }
  close() {
    var e;
    (e = this.cancelRenderFn) == null || e.call(this), this.cancelRenderFn = null, this.backdrop.remove();
  }
  createField(e) {
    const n = document.createElement("div");
    n.className = "render-field";
    const r = document.createElement("div");
    return r.className = "render-field-label", r.textContent = e, n.appendChild(r), n;
  }
  createNumberInput(e, n, r) {
    const i = document.createElement("input");
    return i.type = "number", i.className = "render-input", i.value = String(Math.round(e)), i.min = String(n), i.max = String(r), i;
  }
  updateEstimate() {
    const e = parseInt(this.widthInput.value) || 0, n = parseInt(this.heightInput.value) || 0, r = parseInt(this.fpsInput.value) || 0, i = parseFloat(this.durationInput.value) || 0, s = Math.ceil(r * i);
    if (this.formatFrames.checked) {
      const a = e * n * 4 / 1048576 * s;
      this.estimateEl.textContent = `${s} frames, ~${a < 1024 ? Math.round(a) + " MB" : (a / 1024).toFixed(1) + " GB"} raw`;
    } else
      this.estimateEl.textContent = `${s} frames, ${i}s at ${r} fps`;
  }
  startRender() {
    const e = parseInt(this.widthInput.value) || this.canvasWidth, n = parseInt(this.heightInput.value) || this.canvasHeight, r = parseInt(this.fpsInput.value) || 60, i = parseFloat(this.durationInput.value) || 10, s = this.formatFrames.checked ? "frames" : "video";
    this.bodyEl.style.display = "none", this.actionsEl.style.display = "none", this.progressEl.classList.add("active"), this.progressBar.style.width = "0%", this.progressText.textContent = "Preparing...", this.cancelRenderFn = this.onStartRender({
      width: e,
      height: n,
      fps: r,
      duration: i,
      format: s,
      onProgress: (o, a) => {
        const u = o / a * 100;
        this.progressBar.style.width = `${u}%`, this.progressText.textContent = `Frame ${o} / ${a} (${Math.round(u)}%)`;
      },
      onComplete: () => {
        this.progressText.textContent = "Done!", this.progressBar.style.width = "100%", setTimeout(() => this.close(), 1500);
      },
      onError: (o) => {
        this.progressText.textContent = `Error: ${o.message}`, this.progressBar.style.background = "#c62828";
      }
    });
  }
  cancelRender() {
    var e;
    (e = this.cancelRenderFn) == null || e.call(this), this.cancelRenderFn = null, this.bodyEl.style.display = "", this.actionsEl.style.display = "", this.progressEl.classList.remove("active");
  }
}
class ot {
  constructor(e) {
    var r;
    this.views = /* @__PURE__ */ new Map(), this.animationId = null, this.startTime = 0, this.pausedElapsedTime = 0, this.disposed = !1, this.statsPanel = null, this.playbackControls = null, this.isPaused = !1, this._pauseAfterFirstFrame = !1, this.isVisible = !0, this.uniformsPanel = null, this.scriptAPI = null, this.scriptErrorCount = 0, this._lastOnFrameTime = null, this.globalKeyHandler = null, this.controlsKeyHandler = null, this.animate = (i) => {
      var a, u, c;
      if (this.disposed || (this.animationId = requestAnimationFrame(this.animate), this.isPaused || !this.isVisible))
        return;
      for (const h of this.views.values())
        if (h.isContextLost)
          return;
      const s = i / 1e3, o = s - this.startTime;
      if ((a = this.statsPanel) == null || a.update(s, o), this.runScriptOnFrame(o, ((u = this.statsPanel) == null ? void 0 : u.totalFrameCount) ?? 0), this.isMultiView) {
        const h = /* @__PURE__ */ new Map();
        for (const [l, d] of this.views)
          h.set(l, {
            mouse: d.getMouseState(),
            resolution: d.getResolution(),
            mousePressed: d.getMousePressed()
          });
        for (const l of this.views.values())
          l.step(o, h);
      } else
        this.primaryView.step(o);
      this._pauseAfterFirstFrame && (this._pauseAfterFirstFrame = !1, this.isPaused = !0, (c = this.playbackControls) == null || c.setPaused(!0));
    }, this.container = e.container, this.project = e.project, this.isMultiView = Xr(e.project), this.container.hasAttribute("tabindex") || this.container.setAttribute("tabindex", "-1"), this.container.style.outline = "none", this.container.addEventListener("mousedown", () => this.container.focus());
    const n = e.pixelRatio ?? e.project.pixelRatio ?? window.devicePixelRatio;
    if (this.isMultiView) {
      const i = e.project, s = i.views.map((o) => o.name);
      if (!e.viewContainers)
        throw new Error("viewContainers required for multi-view projects");
      for (const o of i.views) {
        const a = e.viewContainers.get(o.name);
        if (!a)
          throw new Error(`No container provided for view "${o.name}"`);
        const u = this.createViewProject(i, o), c = new ur({
          container: a,
          project: u,
          keyboardTarget: this.container,
          pixelRatio: n,
          viewNames: s
        });
        this.views.set(o.name, c);
      }
      this.primaryView = this.views.values().next().value;
    } else {
      const i = new ur({
        container: e.container,
        project: e.project,
        keyboardTarget: this.container,
        pixelRatio: n
      });
      this.views.set("default", i), this.primaryView = i;
    }
    if (this.recorder = new io(this.primaryView.canvas, this.container, this.project.root), this.project.controls !== !1 && (this.statsPanel = new so(this.container), this.statsPanel.updateResolution(this.primaryView.canvas.width, this.primaryView.canvas.height)), this.isMultiView) {
      this.primaryView.onResize = (i, s) => {
        var o;
        (o = this.statsPanel) == null || o.updateResolution(i, s);
      };
      for (const i of this.views.values())
        i.onContextRestored = () => {
          var s;
          if (this.scriptAPI && ((s = this.project.script) != null && s.setup))
            try {
              this.project.script.setup(this.scriptAPI);
            } catch (o) {
              console.error("script.js setup() threw during context restore:", o), this.primaryView.runtimeErrorOverlay.showError("setup", o);
            }
        };
    } else
      this.primaryView.onResize = (i, s) => {
        var o;
        (o = this.statsPanel) == null || o.updateResolution(i, s), this.startTime = performance.now() / 1e3, this.pausedElapsedTime = 0, this.isPaused && this.primaryView.step(0);
      }, this.primaryView.onContextRestored = () => {
        var i;
        if (this.scriptAPI && ((i = this.project.script) != null && i.setup))
          try {
            this.project.script.setup(this.scriptAPI);
          } catch (s) {
            console.error("script.js setup() threw during context restore:", s), this.primaryView.runtimeErrorOverlay.showError("setup", s);
          }
        this.reset(), this.start();
      };
    if (this.project.controls && !e.skipPlaybackControls && (this.playbackControls = new oo(this.container, {
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
    this.project.controls !== !1 && !e.skipUniformsPanel && this.project.uniforms && Object.values(this.project.uniforms).some((i) => zn(i)) && (this.uniformsPanel = new to({
      container: this.container,
      uniforms: this.project.uniforms,
      onChange: (i, s) => {
        this.setUniformValue(i, s);
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
  createViewProject(e, n) {
    return {
      mode: e.mode,
      root: e.root,
      meta: {
        ...e.meta,
        title: `${e.meta.title} - ${n.name}`
      },
      layout: "fullscreen",
      theme: e.theme,
      controls: !1,
      startPaused: e.startPaused,
      pixelRatio: e.pixelRatio,
      commonSource: e.commonSource,
      passes: n.passes,
      textures: e.textures,
      uniforms: e.uniforms,
      script: null
      // Script handled by App, not individual views
    };
  }
  // ===========================================================================
  // Script API
  // ===========================================================================
  initScriptAPI() {
    const e = this;
    this.scriptAPI = {
      setUniformValue: (n, r) => e.setUniformValue(n, r),
      getUniformValue: (n) => e.primaryView.engine.getUniformValue(n),
      updateTexture: (n, r, i, s) => e.primaryView.engine.updateTexture(n, r, i, s),
      readPixels: (n, r, i, s, o) => e.primaryView.engine.readPixels(n, r, i, s, o),
      get width() {
        return e.primaryView.engine.width;
      },
      get height() {
        return e.primaryView.engine.height;
      },
      setOverlay: (n, r, i) => {
        const s = i ? e.views.get(i) : e.primaryView;
        s == null || s.setOverlay(n, r);
      },
      // Multi-view extensions (undefined for single-view)
      getCrossViewState: e.isMultiView ? (n) => e.getCrossViewState(n) : void 0,
      viewNames: e.isMultiView ? e.project.views.map((n) => n.name) : void 0
    };
  }
  /**
   * Run script onFrame hook with error tracking.
   * Called from animate() with error tracking.
   */
  runScriptOnFrame(e, n) {
    var i;
    if (!this.scriptAPI || !((i = this.project.script) != null && i.onFrame) || this.scriptErrorCount >= ot.MAX_SCRIPT_ERRORS)
      return;
    const r = this._lastOnFrameTime !== null ? e - this._lastOnFrameTime : 0;
    try {
      this.project.script.onFrame(this.scriptAPI, e, r, n), this.scriptErrorCount = 0;
    } catch (s) {
      this.scriptErrorCount++, console.error(`script.js onFrame() threw (${this.scriptErrorCount}/${ot.MAX_SCRIPT_ERRORS}):`, s), this.primaryView.runtimeErrorOverlay.showError("onFrame", s), this.scriptErrorCount >= ot.MAX_SCRIPT_ERRORS && (console.warn("script.js onFrame() disabled after too many errors"), this.primaryView.runtimeErrorOverlay.showDisabled());
    }
    this._lastOnFrameTime = e;
  }
  // ===========================================================================
  // Public API
  // ===========================================================================
  hasErrors() {
    for (const e of this.views.values())
      if (e.hasErrors())
        return !0;
    return !1;
  }
  getEngine() {
    return this.primaryView.engine;
  }
  /**
   * Set a uniform value across all views.
   */
  setUniformValue(e, n) {
    for (const r of this.views.values())
      r.engine.setUniformValue(e, n);
  }
  /**
   * Get a uniform value from the primary view.
   */
  getUniformValue(e) {
    return this.primaryView.engine.getUniformValue(e);
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
  getCrossViewState(e) {
    const n = this.views.get(e);
    if (n)
      return {
        mouse: n.getMouseState(),
        resolution: n.getResolution(),
        mousePressed: n.getMousePressed()
      };
  }
  setOverlay(e, n) {
    this.primaryView.setOverlay(e, n);
  }
  // ===========================================================================
  // Playback Control
  // ===========================================================================
  togglePlayPause() {
    var e;
    this.isPaused ? this.startTime = performance.now() / 1e3 - this.pausedElapsedTime : this.pausedElapsedTime = performance.now() / 1e3 - this.startTime, this.isPaused = !this.isPaused, (e = this.playbackControls) == null || e.setPaused(this.isPaused);
  }
  getPaused() {
    return this.isPaused;
  }
  reset() {
    var e;
    this.startTime = performance.now() / 1e3, this.pausedElapsedTime = 0, this._lastOnFrameTime = null, (e = this.statsPanel) == null || e.reset();
    for (const n of this.views.values())
      n.engine.reset();
  }
  // ===========================================================================
  // Screenshots & Recording
  // ===========================================================================
  screenshot() {
    const e = this.project.root.split("/").pop() || "shader", n = /* @__PURE__ */ new Date(), r = n.getFullYear().toString() + (n.getMonth() + 1).toString().padStart(2, "0") + n.getDate().toString().padStart(2, "0") + "-" + n.getHours().toString().padStart(2, "0") + n.getMinutes().toString().padStart(2, "0") + n.getSeconds().toString().padStart(2, "0"), i = `shadertoy-${e}-${r}.png`;
    this.primaryView.canvas.toBlob((s) => {
      if (!s) {
        console.error("Failed to create screenshot blob");
        return;
      }
      const o = URL.createObjectURL(s), a = document.createElement("a");
      a.href = o, a.download = i, a.click(), URL.revokeObjectURL(o), console.log(`Screenshot saved: ${i}`);
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
    no(this.project, this.primaryView.engine);
  }
  openRenderDialog() {
    new ao(this.container, this.primaryView.canvas.width, this.primaryView.canvas.height, (n) => this.renderOffline(n)).open();
  }
  renderOffline(e) {
    let n = !1;
    const r = () => {
      n = !0;
    };
    return (async () => {
      var h, l;
      const s = this.primaryView.canvas, o = this.primaryView.engine, a = s.width, u = s.height, c = this.isPaused;
      try {
        this.isPaused = !0, s.width = e.width, s.height = e.height, o.resize(e.width, e.height), o.reset(), this.scriptAPI && ((h = this.project.script) != null && h.setup) && this.project.script.setup(this.scriptAPI);
        const d = Math.ceil(e.fps * e.duration);
        e.format === "video" ? await this.renderVideoFrames(d, e.fps, () => n, e.onProgress) : await this.renderPngFrames(d, e.fps, () => n, e.onProgress), n || e.onComplete();
      } catch (d) {
        n || e.onError(d instanceof Error ? d : new Error(String(d)));
      } finally {
        if (s.width = a, s.height = u, o.resize(a, u), o.reset(), this.scriptAPI && ((l = this.project.script) != null && l.setup))
          try {
            this.project.script.setup(this.scriptAPI);
          } catch {
          }
        this.isPaused = c;
      }
    })(), r;
  }
  async renderPngFrames(e, n, r, i) {
    let s = null;
    if ("showDirectoryPicker" in window)
      try {
        s = await window.showDirectoryPicker({ mode: "readwrite" });
      } catch {
      }
    for (let o = 0; o < e; o++) {
      if (r())
        return;
      this.stepForRender(o, n), this.primaryView.presentToScreen();
      const a = await new Promise((c, h) => {
        this.primaryView.canvas.toBlob((l) => l ? c(l) : h(new Error("Failed to capture frame")), "image/png");
      }), u = `frame_${String(o).padStart(5, "0")}.png`;
      if (s) {
        const h = await (await s.getFileHandle(u, { create: !0 })).createWritable();
        await h.write(a), await h.close();
      } else {
        const c = URL.createObjectURL(a), h = document.createElement("a");
        h.href = c, h.download = u, h.click(), URL.revokeObjectURL(c);
      }
      i(o + 1, e), o % 10 === 0 && await new Promise((c) => setTimeout(c, 0));
    }
  }
  async renderVideoFrames(e, n, r, i) {
    const s = this.primaryView.canvas, o = document.createElement("canvas");
    o.width = s.width, o.height = s.height;
    const a = o.getContext("2d"), u = o.captureStream(0), c = new MediaRecorder(u, {
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
    for (let f = 0; f < e; f++) {
      if (r()) {
        c.stop(), await l;
        return;
      }
      this.stepForRender(f, n), this.primaryView.presentToScreen(), a.drawImage(s, 0, 0);
      const w = u.getVideoTracks()[0];
      w != null && w.requestFrame && w.requestFrame(), i(f + 1, e), f % 10 === 0 && await new Promise((C) => setTimeout(C, 0));
    }
    c.stop(), await l;
    const d = new Blob(h, { type: "video/webm" }), g = URL.createObjectURL(d), E = document.createElement("a");
    E.href = g, E.download = `render_${s.width}x${s.height}_${n}fps.webm`, E.click(), URL.revokeObjectURL(g);
  }
  stepForRender(e, n) {
    var s;
    const r = e / n, i = 1 / n;
    if (this.scriptAPI && ((s = this.project.script) != null && s.onFrame))
      try {
        this.project.script.onFrame(this.scriptAPI, r, i, e);
      } catch {
      }
    this.primaryView.engine.step(r, [0, 0, 0, 0], !1);
  }
  // ===========================================================================
  // Keyboard Shortcuts
  // ===========================================================================
  static isTextInput(e) {
    const n = e.target;
    if (!n)
      return !1;
    const r = n.tagName;
    return r === "INPUT" || r === "TEXTAREA" || n.isContentEditable;
  }
  setupGlobalShortcuts() {
    this.globalKeyHandler = (e) => {
      ot.isTextInput(e) || e.code === "KeyS" && !e.repeat && (e.preventDefault(), this.screenshot());
    }, this.container.addEventListener("keydown", this.globalKeyHandler);
  }
  setupKeyboardShortcuts() {
    this.controlsKeyHandler = (e) => {
      ot.isTextInput(e) || (e.code === "Space" && !e.repeat && (e.preventDefault(), this.togglePlayPause()), e.code === "KeyR" && !e.repeat && (e.preventDefault(), this.reset()));
    }, this.container.addEventListener("keydown", this.controlsKeyHandler);
  }
  // ===========================================================================
  // Lifecycle
  // ===========================================================================
  dispose() {
    var e, n, r;
    this.disposed = !0, this.stop();
    for (const i of this.views.values())
      i.dispose();
    this.recorder.dispose(), (e = this.playbackControls) == null || e.dispose(), this.intersectionObserver.disconnect(), this.globalKeyHandler && this.container.removeEventListener("keydown", this.globalKeyHandler), this.controlsKeyHandler && this.container.removeEventListener("keydown", this.controlsKeyHandler), (n = this.uniformsPanel) == null || n.destroy(), (r = this.statsPanel) == null || r.dispose();
  }
}
ot.MAX_SCRIPT_ERRORS = 10;
class uo {
  constructor(e) {
    this.panel = null, this.controls = null, this.isOpen = !1, this.isPaused = !1, this.wrapper = e.wrapper, this.opts = e, this.isPaused = e.getPaused(), this.controlsWrapper = document.createElement("div"), this.controlsWrapper.className = "multi-view-controls-wrapper", this.toggleButton = document.createElement("button"), this.toggleButton.className = "multi-view-controls-toggle", this.toggleButton.title = "Toggle Controls", this.toggleButton.innerHTML = `
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
    `, this.toggleButton.addEventListener("click", () => this.toggle()), this.controlsWrapper.appendChild(this.toggleButton), this.createPanel(e.uniforms), this.wrapper.appendChild(this.controlsWrapper);
  }
  createPanel(e) {
    this.panel = document.createElement("div"), this.panel.className = "multi-view-controls-panel";
    const n = document.createElement("div");
    n.className = "multi-view-controls-header";
    const r = document.createElement("span");
    r.textContent = "Controls", n.appendChild(r);
    const i = document.createElement("button");
    i.className = "multi-view-controls-close", i.innerHTML = "&times;", i.title = "Close", i.addEventListener("click", () => this.toggle()), n.appendChild(i), this.panel.appendChild(n);
    const s = document.createElement("div");
    s.className = "controls-section playback-controls";
    const o = document.createElement("button");
    o.className = "control-btn play-pause-btn", o.title = "Play/Pause", this.updatePlayPauseIcon(o), o.addEventListener("click", () => {
      this.opts.onTogglePlayPause(), this.isPaused = this.opts.getPaused(), this.updatePlayPauseIcon(o);
    }), s.appendChild(o);
    const a = document.createElement("button");
    if (a.className = "control-btn reset-btn", a.title = "Reset", a.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
        <path d="M3 3v5h5"></path>
      </svg>
    `, a.addEventListener("click", () => {
      this.opts.onReset();
    }), s.appendChild(a), this.panel.appendChild(s), e && Object.values(e).some((u) => zn(u))) {
      const u = document.createElement("div");
      u.className = "controls-section uniforms-section";
      const c = document.createElement("div");
      c.className = "section-label", c.textContent = "Uniforms", u.appendChild(c);
      const h = document.createElement("div");
      h.className = "uniforms-container", this.controls = new Gr({
        container: h,
        uniforms: e,
        onChange: (l, d) => {
          var g, E;
          (E = (g = this.opts).onSetUniformValue) == null || E.call(g, l, d);
        }
      }), u.appendChild(h), this.panel.appendChild(u);
    }
    this.panel.classList.add("closed"), this.controlsWrapper.appendChild(this.panel);
  }
  updatePlayPauseIcon(e) {
    this.isPaused ? e.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      ` : e.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
      `;
  }
  toggle() {
    var e, n;
    this.isOpen = !this.isOpen, this.isOpen ? ((e = this.panel) == null || e.classList.remove("closed"), this.toggleButton.classList.add("hidden")) : ((n = this.panel) == null || n.classList.add("closed"), this.toggleButton.classList.remove("hidden"));
  }
  dispose() {
    var e;
    (e = this.controls) == null || e.destroy(), this.wrapper.removeChild(this.controlsWrapper);
  }
}
class co {
  constructor(e) {
    this.container = e.container, this.root = document.createElement("div"), this.root.className = "layout-fullscreen", this.canvasContainer = document.createElement("div"), this.canvasContainer.className = "canvas-container", this.root.appendChild(this.canvasContainer), this.container.appendChild(this.root);
  }
  getCanvasContainer() {
    return this.canvasContainer;
  }
  dispose() {
    this.container.innerHTML = "";
  }
}
class lo {
  constructor(e) {
    this.container = e.container, this.root = document.createElement("div"), this.root.className = "layout-default", this.canvasContainer = document.createElement("div"), this.canvasContainer.className = "canvas-container", this.root.appendChild(this.canvasContainer), this.container.appendChild(this.root);
  }
  getCanvasContainer() {
    return this.canvasContainer;
  }
  dispose() {
    this.container.innerHTML = "";
  }
}
class fo {
  constructor(e) {
    this.editorPanel = null, this.recompileHandler = null, this._disposed = !1, this.container = e.container, this.project = e.project, this.root = document.createElement("div"), this.root.className = "layout-split", this.canvasContainer = document.createElement("div"), this.canvasContainer.className = "canvas-container", this.codePanel = document.createElement("div"), this.codePanel.className = "code-panel", this.buildEditorPanel(), this.root.appendChild(this.canvasContainer), this.root.appendChild(this.codePanel), this.container.appendChild(this.root);
  }
  getCanvasContainer() {
    return this.canvasContainer;
  }
  setRecompileHandler(e) {
    this.recompileHandler = e, this.editorPanel && this.editorPanel.setRecompileHandler(e);
  }
  setUniformHandler(e) {
  }
  dispose() {
    this._disposed = !0, this.editorPanel && (this.editorPanel.dispose(), this.editorPanel = null), this.container.innerHTML = "";
  }
  /**
   * Build editor panel (dynamically loaded).
   */
  async buildEditorPanel() {
    try {
      const { EditorPanel: e } = await Promise.resolve().then(() => Go);
      if (this._disposed)
        return;
      this.editorPanel = new e(this.codePanel, this.project), this.recompileHandler && this.editorPanel.setRecompileHandler(this.recompileHandler);
    } catch (e) {
      console.error("Failed to load editor panel:", e);
    }
  }
}
class ho {
  constructor(e) {
    this.editorInstance = null, this.recompileHandler = null, this.modifiedSources = /* @__PURE__ */ new Map(), this.tabs = [], this.activeTabIndex = 0, this.keydownHandler = null, this.container = e.container, this.project = e.project, this.root = document.createElement("div"), this.root.className = "layout-tabbed";
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
  setRecompileHandler(e) {
    this.recompileHandler = e;
  }
  dispose() {
    this.keydownHandler && (this.container.removeEventListener("keydown", this.keydownHandler), this.keydownHandler = null), this.editorInstance && (this.editorInstance.destroy(), this.editorInstance = null), this.container.innerHTML = "";
  }
  setupKeyboardShortcut() {
    this.keydownHandler = (e) => {
      (e.ctrlKey || e.metaKey) && e.key === "Enter" && this.tabs[this.activeTabIndex].kind === "code" && (e.preventDefault(), this.recompile());
    }, this.container.addEventListener("keydown", this.keydownHandler);
  }
  saveCurrentEditorContent() {
    if (this.editorInstance) {
      const e = this.tabs[this.activeTabIndex];
      if (e.kind === "code") {
        const n = this.editorInstance.getSource();
        this.modifiedSources.set(e.passName, n);
      }
    }
  }
  recompile() {
    if (!this.recompileHandler) {
      console.warn("No recompile handler set");
      return;
    }
    this.saveCurrentEditorContent();
    const e = this.tabs[this.activeTabIndex];
    if (e.kind !== "code")
      return;
    const n = this.modifiedSources.get(e.passName) ?? e.source, r = this.recompileHandler(e.passName, n);
    r.success ? (this.hideError(), e.source = n) : this.showError(r.error || "Compilation failed");
  }
  showError(e) {
    this.errorDisplay && (this.errorDisplay.textContent = e, this.errorDisplay.style.display = "block");
  }
  hideError() {
    this.errorDisplay && (this.errorDisplay.style.display = "none");
  }
  async copyToClipboard() {
    const e = this.tabs[this.activeTabIndex];
    if (e.kind !== "code")
      return;
    const n = this.editorInstance ? this.editorInstance.getSource() : this.modifiedSources.get(e.passName) ?? e.source;
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
    const e = document.createElement("div");
    e.className = "tabbed-toolbar";
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
    for (const o of r) {
      const a = this.project.passes[o];
      a && this.tabs.push({
        kind: "code",
        name: `${o.toLowerCase()}.glsl`,
        passName: o,
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
    for (const o of this.project.textures)
      this.tabs.push({
        kind: "image",
        name: o.filename || o.name,
        url: o.source
      });
    const s = async (o) => {
      this.saveCurrentEditorContent();
      const a = this.tabs[o];
      if (this.activeTabIndex = o, n.querySelectorAll(".tabbed-tab-button").forEach((u, c) => {
        u.classList.toggle("active", c === o);
      }), this.canvasContainer.style.visibility = "hidden", this.imageViewer.style.visibility = "hidden", this.editorContainer.style.visibility = "hidden", this.buttonContainer.style.display = "none", this.editorInstance && (this.editorInstance.destroy(), this.editorInstance = null), a.kind === "shader")
        this.canvasContainer.style.visibility = "visible";
      else if (a.kind === "code") {
        this.editorContainer.style.visibility = "visible", this.buttonContainer.style.display = "flex";
        const u = this.modifiedSources.get(a.passName) ?? a.source;
        this.editorContainer.innerHTML = "";
        try {
          const { createEditor: c } = await Promise.resolve().then(() => si);
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
    return this.tabs.forEach((o, a) => {
      const u = document.createElement("button");
      u.className = "tabbed-tab-button", o.kind === "shader" ? u.classList.add("shader-tab") : o.kind === "image" && u.classList.add("image-tab"), u.textContent = o.name, a === 0 && u.classList.add("active"), u.addEventListener("click", () => s(a)), n.appendChild(u);
    }), e.appendChild(n), e.appendChild(this.buttonContainer), e;
  }
}
class cr {
  constructor(e) {
    this.canvasContainers = /* @__PURE__ */ new Map(), this.container = e.container;
    const n = e.viewNames.length;
    this.wrapper = document.createElement("div"), this.wrapper.className = "layout-multi-view layout-grid-view", this.wrapper.dataset.viewCount = String(n);
    for (const i of e.viewNames) {
      const s = document.createElement("div");
      s.className = "multi-view-canvas", s.setAttribute("data-view-name", i);
      const o = document.createElement("div");
      o.className = "multi-view-label", o.textContent = i, s.appendChild(o), this.canvasContainers.set(i, s), this.wrapper.appendChild(s);
    }
    this.container.appendChild(this.wrapper), this.resizeObserver = new ResizeObserver((i) => {
      for (const s of i) {
        const { width: o, height: a } = s.contentRect;
        this.updateOrientation(o, a);
      }
    }), this.resizeObserver.observe(this.wrapper);
    const r = this.wrapper.getBoundingClientRect();
    this.updateOrientation(r.width, r.height);
  }
  updateOrientation(e, n) {
    const r = e > n;
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
class po {
  constructor(e) {
    if (this.canvasContainers = /* @__PURE__ */ new Map(), this.insetContainer = null, this.minimizeBtn = null, this.isMinimized = !1, this.toggleMinimize = () => {
      this.isMinimized = !this.isMinimized, this.insetContainer && this.insetContainer.classList.toggle("minimized", this.isMinimized), this.minimizeBtn && (this.isMinimized ? (this.minimizeBtn.innerHTML = "&#x25A1;", this.minimizeBtn.title = "Restore", this.minimizeBtn.style.display = "none") : (this.minimizeBtn.innerHTML = "&#x2212;", this.minimizeBtn.title = "Minimize", this.minimizeBtn.style.display = ""));
    }, this.container = e.container, e.viewNames.length < 2)
      throw new Error("InsetViewLayout requires at least 2 views");
    this.wrapper = document.createElement("div"), this.wrapper.className = "layout-multi-view layout-inset-view";
    const n = e.viewNames[0], r = document.createElement("div");
    r.className = "multi-view-canvas inset-main", r.setAttribute("data-view-name", n), this.canvasContainers.set(n, r), this.wrapper.appendChild(r);
    const i = e.viewNames[1];
    this.insetContainer = document.createElement("div"), this.insetContainer.className = "multi-view-canvas inset-overlay", this.insetContainer.setAttribute("data-view-name", i), this.canvasContainers.set(i, this.insetContainer), this.minimizeBtn = document.createElement("button"), this.minimizeBtn.className = "inset-minimize-btn", this.minimizeBtn.innerHTML = "&#x2212;", this.minimizeBtn.title = "Minimize", this.minimizeBtn.addEventListener("click", this.toggleMinimize), this.insetContainer.appendChild(this.minimizeBtn), this.wrapper.appendChild(this.insetContainer), this.insetContainer.addEventListener("click", (s) => {
      this.isMinimized && s.target === this.insetContainer && this.toggleMinimize();
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
function mo(t, e) {
  switch (t) {
    case "fullscreen":
      return new co(e);
    case "default":
      return new lo(e);
    case "split":
      return new fo(e);
    case "tabbed":
      return new ho(e);
  }
}
function go(t, e) {
  switch (t) {
    case "split":
    case "quad":
    case "grid":
      return new cr(e);
    case "inset":
      return new po(e);
    default:
      return new cr(e);
  }
}
function vo(t, e) {
  const { styled: n = !0, pixelRatio: r = window.devicePixelRatio } = e, i = { ...e.project };
  return e.layout !== void 0 && (i.layout = e.layout), e.controls !== void 0 && (i.controls = e.controls), e.theme !== void 0 && (i.theme = e.theme), e.startPaused !== void 0 && (i.startPaused = e.startPaused), e.pixelRatio !== void 0 && (i.pixelRatio = e.pixelRatio), n || t.classList.add("unstyled"), t.setAttribute("data-theme", i.theme), Xr(i) ? Eo(t, i, r) : Do(t, i, r);
}
function Kr(t, e) {
  return {
    pause: () => {
      t.getPaused() || t.togglePlayPause();
    },
    resume: () => {
      t.getPaused() && t.togglePlayPause();
    },
    reset: () => t.reset(),
    get isPaused() {
      return t.getPaused();
    },
    setUniform: (n, r) => t.setUniformValue(n, r),
    getUniform: (n) => t.getUniformValue(n),
    destroy: e
  };
}
function Do(t, e, n) {
  const r = mo(e.layout, {
    container: t,
    project: e
  }), i = new ot({
    container: r.getCanvasContainer(),
    project: e,
    pixelRatio: n,
    skipUniformsPanel: !1,
    skipPlaybackControls: !1
  });
  return r.setRecompileHandler && r.setRecompileHandler((s, o) => {
    const a = i.getEngine();
    if (!a)
      return { success: !1, error: "Engine not initialized" };
    if (s === "common") {
      const u = a.recompileCommon(o);
      if (u.success)
        return { success: !0 };
      const c = u.errors[0];
      return {
        success: !1,
        error: c ? `${c.passName}: ${c.error}` : "Unknown error"
      };
    }
    return a.recompilePass(s, o);
  }), r.setUniformHandler && r.setUniformHandler((s, o) => {
    const a = i.getEngine();
    a && a.setUniformValue(s, o);
  }), i.hasErrors() || i.start(), Kr(i, () => {
    i.dispose(), r.dispose();
  });
}
function Eo(t, e, n) {
  const r = e.views.map((a) => a.name), i = go(e.viewLayout, {
    container: t,
    project: e,
    viewNames: r
  }), s = new ot({
    container: i.getWrapperElement(),
    project: e,
    pixelRatio: n,
    viewContainers: i.getCanvasContainers(),
    skipPlaybackControls: !0,
    skipUniformsPanel: !0
  }), o = new uo({
    wrapper: i.getWrapperElement(),
    onTogglePlayPause: () => s.togglePlayPause(),
    onReset: () => s.reset(),
    getPaused: () => s.getPaused(),
    onSetUniformValue: (a, u) => s.setUniformValue(a, u),
    uniforms: e.uniforms
  });
  return s.hasErrors() || s.start(), Kr(s, () => {
    o.dispose(), s.dispose(), i.dispose();
  });
}
function Hn(t) {
  return t === "Image" || t === "BufferA" || t === "BufferB" || t === "BufferC" || t === "BufferD";
}
function wo(t) {
  switch (t) {
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
function qr(t) {
  return typeof t == "string" ? Hn(t) ? { buffer: t } : t === "keyboard" ? { keyboard: !0 } : t === "audio" ? { audio: !0 } : t === "webcam" ? { webcam: !0 } : { texture: t } : t;
}
const Sn = ["Image", "BufferA", "BufferB", "BufferC", "BufferD"], yo = ["BufferA", "BufferB", "BufferC", "BufferD"], Wr = ["iChannel0", "iChannel1", "iChannel2", "iChannel3"], Co = "default", Zr = !0, Fo = "auto", Jr = /* @__PURE__ */ new Set([
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
]), bo = /^[a-zA-Z_][a-zA-Z0-9_]*$/, _o = /* @__PURE__ */ new Set([
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
function It(t) {
  return bo.test(t) && !_o.has(t);
}
const lr = /* @__PURE__ */ new Set(["fullscreen", "default", "split", "tabbed"]), Jt = /* @__PURE__ */ new Set(["light", "dark", "system"]), Ao = /* @__PURE__ */ new Set([
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
]), To = /* @__PURE__ */ new Set(["source", "iChannel0", "iChannel1", "iChannel2", "iChannel3"]), fr = /* @__PURE__ */ new Set(["keyboard", "audio", "webcam"]);
function xo(t, e) {
  const n = [], r = [];
  for (const s of Object.keys(t))
    Ao.has(s) || n.push(`Unknown config key '${s}'`);
  if (t.layout !== void 0 && !lr.has(t.layout) && r.push(`Invalid layout '${t.layout}'. Expected one of: ${[...lr].join(", ")}`), t.theme !== void 0 && !Jt.has(t.theme) && r.push(`Invalid theme '${t.theme}'. Expected one of: ${[...Jt].join(", ")}`), t.uniforms && typeof t.uniforms == "object")
    for (const s of Object.keys(t.uniforms))
      Jr.has(s) && r.push(`Uniform name '${s}' is reserved (built-in uniform)`), It(s) || r.push(`Uniform name '${s}' is not a valid GLSL identifier`);
  const i = /* @__PURE__ */ new Set();
  if (t.buffers) {
    const s = Object.keys(t.buffers);
    for (const o of s) {
      if (typeof o != "string") {
        r.push(`Buffer name must be a string, got ${typeof o}`);
        continue;
      }
      It(o) || r.push(`Buffer name '${o}' is not a valid GLSL identifier`), i.add(o);
    }
  }
  if (t.textures && typeof t.textures == "object")
    for (const [s, o] of Object.entries(t.textures))
      It(s) || r.push(`Texture name '${s}' is not a valid GLSL identifier`), i.has(s) && r.push(`Texture name '${s}' collides with a buffer name`), typeof o != "string" ? r.push(`Texture source for '${s}' must be a string`) : !fr.has(o) && !/\.\w+$/.test(o) && !It(o) && r.push(`Invalid texture source '${o}' for '${s}'. Expected a file path with extension, a script texture name, or one of: ${[...fr].join(", ")}`);
  for (const s of Sn) {
    const o = t[s];
    if (!(!o || typeof o != "object")) {
      for (const a of Object.keys(o))
        To.has(a) || n.push(`Unknown key '${a}' in pass '${s}'`);
      for (const a of Wr) {
        const u = o[a];
        u && typeof u == "string" && Hn(u) && u !== "Image" && !t[u] && n.push(`${s}.${a} references '${u}' but no ${u} pass is configured`);
      }
    }
  }
  for (const s of n)
    console.warn(`[config] ${e}: ${s}`);
  if (r.length > 0)
    throw new Error(`Config validation failed for '${e}':
${r.map((s) => `  - ${s}`).join(`
`)}`);
}
const hr = /* @__PURE__ */ new Set(["split", "quad", "grid", "inset"]);
function So(t, e) {
  const n = [];
  if (!Array.isArray(t.views) || t.views.length < 2)
    n.push("'views' must be an array with at least 2 entries");
  else {
    for (const i of t.views)
      (typeof i != "string" || !i) && n.push(`Each view name must be a non-empty string, got '${i}'`);
    new Set(t.views).size !== t.views.length && n.push("Duplicate view names found");
  }
  if (t.layout !== void 0 && !hr.has(t.layout) && n.push(`Invalid multi-view layout '${t.layout}'. Expected one of: ${[...hr].join(", ")}`), t.theme !== void 0 && !Jt.has(t.theme) && n.push(`Invalid theme '${t.theme}'. Expected one of: ${[...Jt].join(", ")}`), t.uniforms && typeof t.uniforms == "object")
    for (const r of Object.keys(t.uniforms))
      Jr.has(r) && n.push(`Uniform name '${r}' is reserved (built-in uniform)`), It(r) || n.push(`Uniform name '${r}' is not a valid GLSL identifier`);
  if (n.length > 0)
    throw new Error(`Multi-view config validation failed for '${e}':
${n.map((r) => `  - ${r}`).join(`
`)}`);
}
function hn(t) {
  return {
    mode: t.mode,
    root: t.root,
    meta: {
      title: t.title ?? t.root.split("/").pop() ?? "Untitled",
      author: t.author ?? null,
      description: t.description ?? null
    },
    layout: t.layout ?? Co,
    theme: t.theme ?? Fo,
    controls: t.controls ?? Zr,
    startPaused: t.startPaused ?? !1,
    pixelRatio: t.pixelRatio ?? null,
    commonSource: t.commonSource,
    passes: t.passes,
    textures: t.textures ?? [],
    uniforms: t.uniforms ?? {},
    script: t.script ?? null
  };
}
const dr = /* @__PURE__ */ new Set(["float", "int", "bool", "vec2", "vec3", "vec4"]), pr = /* @__PURE__ */ new Set(["float", "vec2", "vec3", "vec4", "mat3", "mat4"]), Bo = {
  vec2: 2,
  vec3: 3,
  vec4: 4
};
function Mo(t, e) {
  for (const [n, r] of Object.entries(t)) {
    const i = `Uniform '${n}' in '${e}'`;
    if (!r.type)
      throw new Error(`${i}: missing 'type' field`);
    if (_e(r)) {
      if (!pr.has(r.type))
        throw new Error(`${i}: invalid array type '${r.type}'. Expected one of: ${[...pr].join(", ")}`);
      if (typeof r.count != "number" || r.count < 1 || !Number.isInteger(r.count))
        throw new Error(`${i}: 'count' must be a positive integer, got ${r.count}`);
      continue;
    }
    const s = r;
    if (!dr.has(s.type))
      throw new Error(`${i}: invalid type '${s.type}'. Expected one of: ${[...dr].join(", ")}`);
    switch (s.type) {
      case "float":
      case "int":
        if (typeof s.value != "number")
          throw new Error(`${i}: 'value' must be a number for type '${s.type}', got ${typeof s.value}`);
        if (s.min !== void 0 && typeof s.min != "number")
          throw new Error(`${i}: 'min' must be a number`);
        if (s.max !== void 0 && typeof s.max != "number")
          throw new Error(`${i}: 'max' must be a number`);
        if (s.step !== void 0 && typeof s.step != "number")
          throw new Error(`${i}: 'step' must be a number`);
        break;
      case "bool":
        if (typeof s.value != "boolean")
          throw new Error(`${i}: 'value' must be a boolean for type 'bool', got ${typeof s.value}`);
        break;
      case "vec2":
      case "vec3":
      case "vec4": {
        const o = Bo[s.type];
        if (!Array.isArray(s.value) || s.value.length !== o)
          throw new Error(`${i}: 'value' must be an array of ${o} numbers for type '${s.type}'`);
        if (s.value.some((u) => typeof u != "number"))
          throw new Error(`${i}: all components of 'value' must be numbers`);
        const a = s;
        for (const u of ["min", "max", "step"]) {
          const c = a[u];
          if (c !== void 0 && (!Array.isArray(c) || c.length !== o))
            throw new Error(`${i}: '${u}' must be an array of ${o} numbers for type '${s.type}'`);
        }
        break;
      }
    }
  }
}
async function Qr(t, e, n) {
  if (n) {
    const i = t.joinPath(e, n);
    if (!await t.exists(i))
      throw new Error(`Common GLSL file '${n}' not found in '${e}'.`);
    return await t.readText(i);
  }
  const r = t.joinPath(e, "common.glsl");
  return await t.exists(r) ? await t.readText(r) : null;
}
class ei {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  register(e, n = "linear", r = "repeat", i) {
    const s = `${e}|${n}|${r}`, o = this.map.get(s);
    if (o)
      return o.name;
    const a = `tex${this.map.size}`;
    return this.map.set(s, { name: a, filename: i, source: e, filter: n, wrap: r }), a;
  }
  toArray() {
    return Array.from(this.map.values());
  }
}
function Ro(t, e, n, r, i, s) {
  if ("buffer" in t) {
    const o = t.buffer;
    if (!Hn(o))
      throw new Error(`Invalid buffer name '${o}' for ${n} in pass '${e}' at '${r}'.`);
    return { kind: "buffer", buffer: o, current: !!t.current };
  }
  if ("texture" in t)
    return { kind: "texture", name: (s == null ? void 0 : s.get(t.texture)) ?? i.register(t.texture, t.filter, t.wrap), cubemap: t.type === "cubemap" };
  if ("keyboard" in t)
    return { kind: "keyboard" };
  if ("audio" in t)
    return { kind: "audio" };
  if ("webcam" in t)
    return { kind: "webcam" };
  if ("video" in t)
    return { kind: "video", src: t.video };
  if ("script" in t)
    return { kind: "script", name: t.script };
  throw new Error(`Invalid channel object for ${n} in pass '${e}' at '${r}'.`);
}
function Yt(t, e, n, r, i, s) {
  if (!t)
    return { kind: "none" };
  const o = qr(t);
  return o ? Ro(o, e, n, r, i, s) : { kind: "none" };
}
async function No(t, e, n) {
  let r = n == null ? void 0 : n.config;
  if (r === void 0) {
    const i = t.joinPath(e, "config.json");
    if (await t.exists(i)) {
      const s = await t.readText(i);
      try {
        r = JSON.parse(s);
      } catch (o) {
        throw new Error(`Invalid JSON in config.json at '${e}': ${(o == null ? void 0 : o.message) ?? String(o)}`);
      }
    }
  }
  return r ? (xo(r, e), r.mode === "shadertoy" ? Lo(t, e, r, n) : Io(t, e, r, n)) : Po(t, e, n);
}
async function Po(t, e, n) {
  const r = t.joinPath(e, "image.glsl");
  if (!await t.exists(r))
    throw new Error(`Single-pass project at '${e}' requires 'image.glsl'.`);
  const i = await t.listGlslFiles(e);
  if (i.length > 0 && i.filter((c) => c !== "image.glsl").length > 0)
    throw new Error(`Project at '${e}' contains multiple GLSL files (${i.join(", ")}) but no 'config.json'. Add a config file to use multiple passes.`);
  if (await t.hasFiles(t.joinPath(e, "textures")))
    throw new Error(`Project at '${e}' uses textures (in 'textures/' folder) but has no 'config.json'. Add a config file to define texture bindings.`);
  const o = await t.readText(r);
  return hn({
    mode: "standard",
    root: e,
    commonSource: null,
    passes: {
      Image: { name: "Image", glslSource: o, channels: [{ kind: "none" }, { kind: "none" }, { kind: "none" }, { kind: "none" }] }
    },
    script: n == null ? void 0 : n.script
  });
}
async function Lo(t, e, n, r) {
  const i = {
    Image: n.Image,
    BufferA: n.BufferA,
    BufferB: n.BufferB,
    BufferC: n.BufferC,
    BufferD: n.BufferD
  };
  i.Image || i.BufferA || i.BufferB || i.BufferC || i.BufferD || (i.Image = {});
  const o = await Qr(t, e, n.common), a = new ei(), u = /* @__PURE__ */ new Map();
  if (r != null && r.textureUrlResolver)
    for (const h of Sn) {
      const l = i[h];
      if (l)
        for (const d of Wr) {
          const g = l[d];
          if (!g)
            continue;
          const E = qr(g);
          if (E && "texture" in E && !u.has(E.texture)) {
            const f = await r.textureUrlResolver(E.texture), w = E.texture.split("/").pop(), C = a.register(f, E.filter, E.wrap, w);
            u.set(E.texture, C);
          }
        }
    }
  const c = {};
  for (const h of Sn) {
    const l = i[h];
    if (!l)
      continue;
    const d = l.source ?? wo(h), g = t.joinPath(e, d);
    if (!await t.exists(g))
      throw new Error(`Source GLSL file for pass '${h}' not found at '${d}' in '${e}'.`);
    const E = await t.readText(g), f = [
      Yt(l.iChannel0, h, "iChannel0", e, a, u),
      Yt(l.iChannel1, h, "iChannel1", e, a, u),
      Yt(l.iChannel2, h, "iChannel2", e, a, u),
      Yt(l.iChannel3, h, "iChannel3", e, a, u)
    ];
    c[h] = { name: h, glslSource: E, channels: f };
  }
  if (!c.Image)
    throw new Error(`config.json at '${e}' must define an Image pass.`);
  return hn({
    mode: "shadertoy",
    root: e,
    title: n.title,
    author: n.author,
    description: n.description,
    layout: n.layout,
    theme: n.theme,
    controls: n.controls,
    startPaused: n.startPaused,
    pixelRatio: n.pixelRatio,
    commonSource: o,
    passes: c,
    textures: a.toArray(),
    script: r == null ? void 0 : r.script
  });
}
async function Io(t, e, n, r) {
  n.uniforms && Mo(n.uniforms, e);
  const i = await Qr(t, e, n.common), s = n.buffers ?? {};
  if (Object.keys(s).length > 0 || n.textures && Object.keys(n.textures).length > 0)
    return Oo(t, e, n, i, r);
  const o = t.joinPath(e, "image.glsl");
  if (!await t.exists(o))
    throw new Error(`Standard mode project at '${e}' requires 'image.glsl'.`);
  const a = await t.readText(o), u = [{ kind: "none" }, { kind: "none" }, { kind: "none" }, { kind: "none" }];
  return hn({
    mode: "standard",
    root: e,
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
const Uo = /* @__PURE__ */ new Set(["keyboard", "audio", "webcam"]);
async function Oo(t, e, n, r, i) {
  const s = n.buffers ?? {}, o = Object.keys(s);
  if (o.length > 4)
    throw new Error(`Standard mode at '${e}' supports max 4 buffers, got ${o.length}: ${o.join(", ")}`);
  const a = /* @__PURE__ */ new Map();
  for (let E = 0; E < o.length; E++)
    a.set(o[E], yo[E]);
  const u = new ei(), c = /* @__PURE__ */ new Map();
  for (const [E, f] of a)
    c.set(E, { kind: "buffer", buffer: f, current: !1 });
  for (const [E, f] of Object.entries(n.textures ?? {}))
    if (f === "keyboard")
      c.set(E, { kind: "keyboard" });
    else if (f === "audio")
      c.set(E, { kind: "audio" });
    else if (f === "webcam")
      c.set(E, { kind: "webcam" });
    else if (/\.\w+$/.test(f)) {
      let w;
      i != null && i.textureUrlResolver ? w = await i.textureUrlResolver(f) : w = f;
      const C = u.register(w);
      c.set(E, { kind: "texture", name: C, cubemap: !1 });
    } else Uo.has(f) || c.set(E, { kind: "script", name: f });
  const h = [{ kind: "none" }, { kind: "none" }, { kind: "none" }, { kind: "none" }], l = t.joinPath(e, "image.glsl");
  if (!await t.exists(l))
    throw new Error(`Standard mode project at '${e}' requires 'image.glsl'.`);
  const g = {
    Image: {
      name: "Image",
      glslSource: await t.readText(l),
      channels: h,
      namedSamplers: new Map(c)
    }
  };
  for (const [E, f] of a) {
    const w = t.joinPath(e, `${E}.glsl`);
    if (!await t.exists(w))
      throw new Error(`Buffer '${E}' requires '${E}.glsl' in '${e}'.`);
    const C = await t.readText(w);
    g[f] = {
      name: f,
      glslSource: C,
      channels: h,
      namedSamplers: new Map(c)
    };
  }
  return hn({
    mode: "standard",
    root: e,
    title: n.title,
    author: n.author,
    description: n.description,
    layout: n.layout,
    theme: n.theme,
    controls: n.controls,
    startPaused: n.startPaused,
    pixelRatio: n.pixelRatio,
    commonSource: r,
    passes: g,
    textures: u.toArray(),
    uniforms: n.uniforms,
    script: i == null ? void 0 : i.script
  });
}
function ft(t, e) {
  if (e in t)
    return e;
  const n = e.toLowerCase();
  for (const r of Object.keys(t))
    if (r.toLowerCase() === n)
      return r;
  return null;
}
async function ti(t, e) {
  if (!e)
    return null;
  const n = `${t}/script.js`, r = ft(e, n);
  if (!r)
    return null;
  const i = await e[r](), s = {};
  return typeof i.setup == "function" && (s.setup = i.setup), typeof i.onFrame == "function" && (s.onFrame = i.onFrame), s.setup || s.onFrame ? s : null;
}
function ni(t, e) {
  return {
    async exists(n) {
      return ft(t, n) !== null || ft(e, n) !== null;
    },
    async readText(n) {
      const r = ft(t, n);
      if (!r)
        throw new Error(`File not found: ${n}`);
      return t[r]();
    },
    async resolveImageUrl(n) {
      const r = ft(e, n);
      if (!r)
        throw new Error(`Image not found: ${n}`);
      return e[r]();
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
function ri(t) {
  return (t.split("/").pop() || t).split("-").map((n) => n.charAt(0).toUpperCase() + n.slice(1)).join(" ");
}
async function ko(t, e, n, r, i) {
  const s = t.startsWith("./") ? t : `./${t}`, o = `${s}/config.json`;
  let a;
  if (o in n && (a = await n[o]()), a && Bs(a))
    return So(a, s), $o(s, a, e, r, i);
  const u = await ti(s, i), c = ni(e, r), l = await No(c, s, {
    config: a,
    script: u,
    textureUrlResolver: async (d) => {
      const g = `${s}/${d.replace(/^\.\//, "")}`;
      return c.resolveImageUrl(g);
    }
  });
  return a != null && a.title || (l.meta.title = ri(s)), l;
}
async function $o(t, e, n, r, i) {
  const s = ni(n, r), o = await ti(t, i);
  let a = null;
  const u = `${t}/common.glsl`;
  ft(n, u) && (a = await s.readText(u));
  const c = [], h = [
    { kind: "none" },
    { kind: "none" },
    { kind: "none" },
    { kind: "none" }
  ];
  for (const l of e.views) {
    const d = `${t}/${l}.glsl`, g = `${t}/${l}/image.glsl`;
    let E;
    if (ft(n, d))
      E = await s.readText(d);
    else if (ft(n, g))
      E = await s.readText(g);
    else
      throw new Error(`Multi-view: No shader found for view "${l}". Expected ${l}.glsl or ${l}/image.glsl`);
    const f = {
      name: "Image",
      glslSource: E,
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
    root: t,
    meta: {
      title: e.title ?? ri(t),
      author: e.author ?? null,
      description: e.description ?? null
    },
    theme: e.theme ?? "light",
    controls: e.controls ?? Zr,
    startPaused: e.startPaused ?? !1,
    pixelRatio: e.pixelRatio ?? null,
    commonSource: a,
    uniforms: e.uniforms ?? {},
    textures: [],
    script: o,
    views: c,
    viewLayout: e.layout ?? "split"
  };
}
const zo = /* @__PURE__ */ Object.assign({ "./shaders/2dFlowJS/common.glsl": () => Promise.resolve().then(() => Zo).then((t) => t.default), "./shaders/2dFlowJS/dotTrails.glsl": () => Promise.resolve().then(() => Qo).then((t) => t.default), "./shaders/2dFlowJS/gridTrace.glsl": () => Promise.resolve().then(() => ta).then((t) => t.default), "./shaders/2dFlowJS/image.glsl": () => Promise.resolve().then(() => ra).then((t) => t.default) }), Vo = /* @__PURE__ */ Object.assign({ "./shaders/2dFlowJS/config.json": () => Promise.resolve().then(() => sa).then((t) => t.default) }), Ho = /* @__PURE__ */ Object.assign({}), Xo = /* @__PURE__ */ Object.assign({ "./shaders/2dFlowJS/script.js": () => Promise.resolve().then(() => hf) });
let bn = null;
async function jo() {
  return bn || (bn = await ko("shaders/2dFlowJS", zo, Vo, Ho, Xo)), bn;
}
async function df(t, e = {}) {
  const n = await jo();
  return vo(t, { project: n, ...e });
}
class Yo {
  constructor(e, n) {
    this.recompileHandler = null, this.tabs = [], this.activeTabIndex = 0, this.editorInstance = null, this.modifiedSources = /* @__PURE__ */ new Map(), this.keydownHandler = null, this.container = e, this.project = n, this.buildTabs(), this.tabBar = document.createElement("div"), this.tabBar.className = "editor-tab-bar", this.buildTabBar(), this.contentArea = document.createElement("div"), this.contentArea.className = "editor-content-area", this.copyButton = document.createElement("button"), this.copyButton.className = "editor-copy-button", this.copyButton.innerHTML = `
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
  setRecompileHandler(e) {
    this.recompileHandler = e;
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
    const e = [
      "BufferA",
      "BufferB",
      "BufferC",
      "BufferD"
    ];
    for (const r of e) {
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
    this.tabBar.innerHTML = "", this.tabs.forEach((e, n) => {
      const r = document.createElement("button");
      r.className = "editor-tab-button", e.kind === "image" && r.classList.add("image-tab"), r.textContent = e.name, n === this.activeTabIndex && r.classList.add("active"), r.addEventListener("click", () => this.showTab(n)), this.tabBar.appendChild(r);
    });
  }
  async showTab(e) {
    this.saveCurrentEditorContent(), this.activeTabIndex = e;
    const n = this.tabs[e];
    if (this.tabBar.querySelectorAll(".editor-tab-button").forEach((r, i) => {
      r.classList.toggle("active", i === e);
    }), this.editorInstance && (this.editorInstance.destroy(), this.editorInstance = null), this.contentArea.innerHTML = "", n.kind === "code") {
      this.copyButton.style.display = "", this.recompileButton.style.display = "";
      const r = this.modifiedSources.get(n.passName) ?? n.source, i = document.createElement("div");
      i.className = "editor-prism-container", this.contentArea.appendChild(i);
      try {
        const { createEditor: s } = await Promise.resolve().then(() => si);
        this.editorInstance = s(i, r, (o) => {
          this.modifiedSources.set(n.passName, o);
        });
      } catch (s) {
        console.error("Failed to load editor:", s);
        const o = document.createElement("textarea");
        o.className = "editor-fallback-textarea", o.value = r, o.addEventListener("input", () => {
          this.modifiedSources.set(n.passName, o.value);
        }), i.appendChild(o);
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
      const e = this.tabs[this.activeTabIndex];
      if (e.kind === "code") {
        const n = this.editorInstance.getSource();
        this.modifiedSources.set(e.passName, n);
      }
    }
  }
  recompile() {
    if (!this.recompileHandler) {
      console.warn("No recompile handler set");
      return;
    }
    this.saveCurrentEditorContent();
    const e = this.tabs[this.activeTabIndex];
    if (e.kind !== "code")
      return;
    const n = this.modifiedSources.get(e.passName) ?? e.source, r = this.recompileHandler(e.passName, n);
    r.success ? (this.hideError(), e.source = n) : this.showError(r.error || "Compilation failed");
  }
  showError(e) {
    this.errorDisplay.textContent = e, this.errorDisplay.style.display = "block";
  }
  hideError() {
    this.errorDisplay.style.display = "none";
  }
  async copyToClipboard() {
    const e = this.tabs[this.activeTabIndex];
    if (e.kind !== "code")
      return;
    const n = this.editorInstance ? this.editorInstance.getSource() : this.modifiedSources.get(e.passName) ?? e.source;
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
    this.keydownHandler = (e) => {
      (e.ctrlKey || e.metaKey) && e.key === "Enter" && (e.preventDefault(), this.recompile());
    }, this.container.addEventListener("keydown", this.keydownHandler);
  }
}
const Go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EditorPanel: Yo
}, Symbol.toStringTag, { value: "Module" }));
var mr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ii = { exports: {} };
(function(t) {
  var e = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var n = function(r) {
    var i = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, s = 0, o = {}, a = {
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
        encode: function D(p) {
          return p instanceof u ? new u(p.type, D(p.content), p.alias) : Array.isArray(p) ? p.map(D) : p.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
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
        type: function(D) {
          return Object.prototype.toString.call(D).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(D) {
          return D.__id || Object.defineProperty(D, "__id", { value: ++s }), D.__id;
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
        clone: function D(p, y) {
          y = y || {};
          var m, v;
          switch (a.util.type(p)) {
            case "Object":
              if (v = a.util.objId(p), y[v])
                return y[v];
              m = /** @type {Record<string, any>} */
              {}, y[v] = m;
              for (var A in p)
                p.hasOwnProperty(A) && (m[A] = D(p[A], y));
              return (
                /** @type {any} */
                m
              );
            case "Array":
              return v = a.util.objId(p), y[v] ? y[v] : (m = [], y[v] = m, /** @type {Array} */
              /** @type {any} */
              p.forEach(function(_, F) {
                m[F] = D(_, y);
              }), /** @type {any} */
              m);
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
        getLanguage: function(D) {
          for (; D; ) {
            var p = i.exec(D.className);
            if (p)
              return p[1].toLowerCase();
            D = D.parentElement;
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
        setLanguage: function(D, p) {
          D.className = D.className.replace(RegExp(i, "gi"), ""), D.classList.add("language-" + p);
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
          } catch (m) {
            var D = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(m.stack) || [])[1];
            if (D) {
              var p = document.getElementsByTagName("script");
              for (var y in p)
                if (p[y].src == D)
                  return p[y];
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
        isActive: function(D, p, y) {
          for (var m = "no-" + p; D; ) {
            var v = D.classList;
            if (v.contains(p))
              return !0;
            if (v.contains(m))
              return !1;
            D = D.parentElement;
          }
          return !!y;
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
        plain: o,
        plaintext: o,
        text: o,
        txt: o,
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
        extend: function(D, p) {
          var y = a.util.clone(a.languages[D]);
          for (var m in p)
            y[m] = p[m];
          return y;
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
        insertBefore: function(D, p, y, m) {
          m = m || /** @type {any} */
          a.languages;
          var v = m[D], A = {};
          for (var _ in v)
            if (v.hasOwnProperty(_)) {
              if (_ == p)
                for (var F in y)
                  y.hasOwnProperty(F) && (A[F] = y[F]);
              y.hasOwnProperty(_) || (A[_] = v[_]);
            }
          var T = m[D];
          return m[D] = A, a.languages.DFS(a.languages, function(S, R) {
            R === T && S != D && (this[S] = A);
          }), A;
        },
        // Traverse a language definition with Depth First Search
        DFS: function D(p, y, m, v) {
          v = v || {};
          var A = a.util.objId;
          for (var _ in p)
            if (p.hasOwnProperty(_)) {
              y.call(p, _, p[_], m || _);
              var F = p[_], T = a.util.type(F);
              T === "Object" && !v[A(F)] ? (v[A(F)] = !0, D(F, y, null, v)) : T === "Array" && !v[A(F)] && (v[A(F)] = !0, D(F, y, _, v));
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
      highlightAll: function(D, p) {
        a.highlightAllUnder(document, D, p);
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
      highlightAllUnder: function(D, p, y) {
        var m = {
          callback: y,
          container: D,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        a.hooks.run("before-highlightall", m), m.elements = Array.prototype.slice.apply(m.container.querySelectorAll(m.selector)), a.hooks.run("before-all-elements-highlight", m);
        for (var v = 0, A; A = m.elements[v++]; )
          a.highlightElement(A, p === !0, m.callback);
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
      highlightElement: function(D, p, y) {
        var m = a.util.getLanguage(D), v = a.languages[m];
        a.util.setLanguage(D, m);
        var A = D.parentElement;
        A && A.nodeName.toLowerCase() === "pre" && a.util.setLanguage(A, m);
        var _ = D.textContent, F = {
          element: D,
          language: m,
          grammar: v,
          code: _
        };
        function T(R) {
          F.highlightedCode = R, a.hooks.run("before-insert", F), F.element.innerHTML = F.highlightedCode, a.hooks.run("after-highlight", F), a.hooks.run("complete", F), y && y.call(F.element);
        }
        if (a.hooks.run("before-sanity-check", F), A = F.element.parentElement, A && A.nodeName.toLowerCase() === "pre" && !A.hasAttribute("tabindex") && A.setAttribute("tabindex", "0"), !F.code) {
          a.hooks.run("complete", F), y && y.call(F.element);
          return;
        }
        if (a.hooks.run("before-highlight", F), !F.grammar) {
          T(a.util.encode(F.code));
          return;
        }
        if (p && r.Worker) {
          var S = new Worker(a.filename);
          S.onmessage = function(R) {
            T(R.data);
          }, S.postMessage(JSON.stringify({
            language: F.language,
            code: F.code,
            immediateClose: !0
          }));
        } else
          T(a.highlight(F.code, F.grammar, F.language));
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
      highlight: function(D, p, y) {
        var m = {
          code: D,
          grammar: p,
          language: y
        };
        if (a.hooks.run("before-tokenize", m), !m.grammar)
          throw new Error('The language "' + m.language + '" has no grammar.');
        return m.tokens = a.tokenize(m.code, m.grammar), a.hooks.run("after-tokenize", m), u.stringify(a.util.encode(m.tokens), m.language);
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
      tokenize: function(D, p) {
        var y = p.rest;
        if (y) {
          for (var m in y)
            p[m] = y[m];
          delete p.rest;
        }
        var v = new l();
        return d(v, v.head, D), h(D, v, p, v.head, 0), E(v);
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
        add: function(D, p) {
          var y = a.hooks.all;
          y[D] = y[D] || [], y[D].push(p);
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
        run: function(D, p) {
          var y = a.hooks.all[D];
          if (!(!y || !y.length))
            for (var m = 0, v; v = y[m++]; )
              v(p);
        }
      },
      Token: u
    };
    r.Prism = a;
    function u(D, p, y, m) {
      this.type = D, this.content = p, this.alias = y, this.length = (m || "").length | 0;
    }
    u.stringify = function D(p, y) {
      if (typeof p == "string")
        return p;
      if (Array.isArray(p)) {
        var m = "";
        return p.forEach(function(T) {
          m += D(T, y);
        }), m;
      }
      var v = {
        type: p.type,
        content: D(p.content, y),
        tag: "span",
        classes: ["token", p.type],
        attributes: {},
        language: y
      }, A = p.alias;
      A && (Array.isArray(A) ? Array.prototype.push.apply(v.classes, A) : v.classes.push(A)), a.hooks.run("wrap", v);
      var _ = "";
      for (var F in v.attributes)
        _ += " " + F + '="' + (v.attributes[F] || "").replace(/"/g, "&quot;") + '"';
      return "<" + v.tag + ' class="' + v.classes.join(" ") + '"' + _ + ">" + v.content + "</" + v.tag + ">";
    };
    function c(D, p, y, m) {
      D.lastIndex = p;
      var v = D.exec(y);
      if (v && m && v[1]) {
        var A = v[1].length;
        v.index += A, v[0] = v[0].slice(A);
      }
      return v;
    }
    function h(D, p, y, m, v, A) {
      for (var _ in y)
        if (!(!y.hasOwnProperty(_) || !y[_])) {
          var F = y[_];
          F = Array.isArray(F) ? F : [F];
          for (var T = 0; T < F.length; ++T) {
            if (A && A.cause == _ + "," + T)
              return;
            var S = F[T], R = S.inside, j = !!S.lookbehind, $ = !!S.greedy, X = S.alias;
            if ($ && !S.pattern.global) {
              var I = S.pattern.toString().match(/[imsuy]*$/)[0];
              S.pattern = RegExp(S.pattern.source, I + "g");
            }
            for (var q = S.pattern || S, V = m.next, G = v; V !== p.tail && !(A && G >= A.reach); G += V.value.length, V = V.next) {
              var Z = V.value;
              if (p.length > D.length)
                return;
              if (!(Z instanceof u)) {
                var ne = 1, te;
                if ($) {
                  if (te = c(q, G, D, j), !te || te.index >= D.length)
                    break;
                  var ge = te.index, se = te.index + te[0].length, de = G;
                  for (de += V.value.length; ge >= de; )
                    V = V.next, de += V.value.length;
                  if (de -= V.value.length, G = de, V.value instanceof u)
                    continue;
                  for (var me = V; me !== p.tail && (de < se || typeof me.value == "string"); me = me.next)
                    ne++, de += me.value.length;
                  ne--, Z = D.slice(G, de), te.index -= G;
                } else if (te = c(q, 0, Z, j), !te)
                  continue;
                var ge = te.index, le = te[0], ye = Z.slice(0, ge), fe = Z.slice(ge + le.length), oe = G + Z.length;
                A && oe > A.reach && (A.reach = oe);
                var Me = V.prev;
                ye && (Me = d(p, Me, ye), G += ye.length), g(p, Me, ne);
                var Ce = new u(_, R ? a.tokenize(le, R) : le, X, le);
                if (V = d(p, Me, Ce), fe && d(p, V, fe), ne > 1) {
                  var ae = {
                    cause: _ + "," + T,
                    reach: oe
                  };
                  h(D, p, y, V.prev, G, ae), A && ae.reach > A.reach && (A.reach = ae.reach);
                }
              }
            }
          }
        }
    }
    function l() {
      var D = { value: null, prev: null, next: null }, p = { value: null, prev: D, next: null };
      D.next = p, this.head = D, this.tail = p, this.length = 0;
    }
    function d(D, p, y) {
      var m = p.next, v = { value: y, prev: p, next: m };
      return p.next = v, m.prev = v, D.length++, v;
    }
    function g(D, p, y) {
      for (var m = p.next, v = 0; v < y && m !== D.tail; v++)
        m = m.next;
      p.next = m, m.prev = p, D.length -= v;
    }
    function E(D) {
      for (var p = [], y = D.head.next; y !== D.tail; )
        p.push(y.value), y = y.next;
      return p;
    }
    if (!r.document)
      return r.addEventListener && (a.disableWorkerMessageHandler || r.addEventListener("message", function(D) {
        var p = JSON.parse(D.data), y = p.language, m = p.code, v = p.immediateClose;
        r.postMessage(a.highlight(m, a.languages[y], y)), v && r.close();
      }, !1)), a;
    var f = a.util.currentScript();
    f && (a.filename = f.src, f.hasAttribute("data-manual") && (a.manual = !0));
    function w() {
      a.manual || a.highlightAll();
    }
    if (!a.manual) {
      var C = document.readyState;
      C === "loading" || C === "interactive" && f && f.defer ? document.addEventListener("DOMContentLoaded", w) : window.requestAnimationFrame ? window.requestAnimationFrame(w) : window.setTimeout(w, 16);
    }
    return a;
  }(e);
  t.exports && (t.exports = n), typeof mr < "u" && (mr.Prism = n), n.languages.markup = {
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
    value: function(i, s) {
      var o = {};
      o["language-" + s] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: n.languages[s]
      }, o.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var a = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: o
        }
      };
      a["language-" + s] = {
        pattern: /[\s\S]+/,
        inside: n.languages[s]
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
    var s = r.languages.markup;
    s && (s.tag.addInlined("style", "css"), s.tag.addAttribute("style", "css"));
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
    var r = "Loading…", i = function(f, w) {
      return "✖ Error " + f + " while fetching file: " + w;
    }, s = "✖ Error: File does not exist or is empty", o = {
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
    function d(f, w, C) {
      var D = new XMLHttpRequest();
      D.open("GET", f, !0), D.onreadystatechange = function() {
        D.readyState == 4 && (D.status < 400 && D.responseText ? w(D.responseText) : D.status >= 400 ? C(i(D.status, D.statusText)) : C(s));
      }, D.send(null);
    }
    function g(f) {
      var w = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(f || "");
      if (w) {
        var C = Number(w[1]), D = w[2], p = w[3];
        return D ? p ? [C, Number(p)] : [C, void 0] : [C, C];
      }
    }
    n.hooks.add("before-highlightall", function(f) {
      f.selector += ", " + l;
    }), n.hooks.add("before-sanity-check", function(f) {
      var w = (
        /** @type {HTMLPreElement} */
        f.element
      );
      if (w.matches(l)) {
        f.code = "", w.setAttribute(a, u);
        var C = w.appendChild(document.createElement("CODE"));
        C.textContent = r;
        var D = w.getAttribute("data-src"), p = f.language;
        if (p === "none") {
          var y = (/\.(\w+)$/.exec(D) || [, "none"])[1];
          p = o[y] || y;
        }
        n.util.setLanguage(C, p), n.util.setLanguage(w, p);
        var m = n.plugins.autoloader;
        m && m.loadLanguages(p), d(
          D,
          function(v) {
            w.setAttribute(a, c);
            var A = g(w.getAttribute("data-range"));
            if (A) {
              var _ = v.split(/\r\n?|\n/g), F = A[0], T = A[1] == null ? _.length : A[1];
              F < 0 && (F += _.length), F = Math.max(0, Math.min(F - 1, _.length)), T < 0 && (T += _.length), T = Math.max(0, Math.min(T, _.length)), v = _.slice(F, T).join(`
`), w.hasAttribute("data-start") || w.setAttribute("data-start", String(F + 1));
            }
            C.textContent = v, n.highlightElement(C);
          },
          function(v) {
            w.setAttribute(a, h), C.textContent = v;
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
      highlight: function(w) {
        for (var C = (w || document).querySelectorAll(l), D = 0, p; p = C[D++]; )
          n.highlightElement(p);
      }
    };
    var E = !1;
    n.fileHighlight = function() {
      E || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), E = !0), n.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(ii);
var Ko = ii.exports;
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
(function(t) {
  var e = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, n = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return e.source;
  });
  t.languages.cpp = t.languages.extend("c", {
    "class-name": [
      {
        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
          return e.source;
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
    keyword: e,
    number: {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: !0
    },
    operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    boolean: /\b(?:false|true)\b/
  }), t.languages.insertBefore("cpp", "string", {
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
  }), t.languages.insertBefore("cpp", "keyword", {
    "generic-function": {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        function: /^\w+/,
        generic: {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: t.languages.cpp
        }
      }
    }
  }), t.languages.insertBefore("cpp", "operator", {
    "double-colon": {
      pattern: /::/,
      alias: "punctuation"
    }
  }), t.languages.insertBefore("cpp", "class-name", {
    // the base clause is an optional list of parent classes
    // https://en.cppreference.com/w/cpp/language/class
    "base-clause": {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: !0,
      greedy: !0,
      inside: t.languages.extend("cpp", {})
    }
  }), t.languages.insertBefore("inside", "double-colon", {
    // All untokenized words that are not namespaces should be class names
    "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
  }, t.languages.cpp["base-clause"]);
})(Prism);
function qo(t, e, n) {
  const r = document.createElement("div");
  r.className = "prism-editor-wrapper";
  const i = document.createElement("div");
  i.className = "prism-editor-line-numbers";
  const s = document.createElement("div");
  s.className = "prism-editor-area";
  const o = document.createElement("textarea");
  o.className = "prism-editor-textarea", o.value = e, o.spellcheck = !1, o.autocapitalize = "off", o.autocomplete = "off";
  const a = document.createElement("div");
  a.className = "prism-editor-highlight";
  const u = document.createElement("code");
  u.className = "language-cpp", a.appendChild(u), s.appendChild(o), s.appendChild(a), r.appendChild(i), r.appendChild(s), t.appendChild(r);
  function c() {
    const d = o.value;
    u.textContent = d + `
`, Ko.highlightElement(u);
    const g = d.split(`
`);
    i.innerHTML = g.map((E, f) => `<span>${f + 1}</span>`).join(""), n && n(d);
  }
  function h() {
    a.scrollTop = o.scrollTop, a.scrollLeft = o.scrollLeft, i.scrollTop = o.scrollTop;
  }
  function l(d) {
    if (d.key === "Tab") {
      d.preventDefault();
      const g = o.selectionStart, E = o.selectionEnd, f = o.value;
      o.value = f.substring(0, g) + "  " + f.substring(E), o.selectionStart = o.selectionEnd = g + 2, c();
    }
  }
  return o.addEventListener("input", c), o.addEventListener("scroll", h), o.addEventListener("keydown", l), c(), {
    getSource: () => o.value,
    setSource: (d) => {
      o.value = d, c();
    },
    destroy: () => {
      o.removeEventListener("input", c), o.removeEventListener("scroll", h), o.removeEventListener("keydown", l), r.parentNode && r.parentNode.removeChild(r);
    }
  };
}
const si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createEditor: qo
}, Symbol.toStringTag, { value: "Module" })), Wo = `vec4 drPt(in vec4 pC, in vec2 p, in vec4 pt, in float r, in vec4 c, in float exp)
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
`, Zo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wo
}, Symbol.toStringTag, { value: "Module" })), Jo = `// Buffer for trailing dots

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
}`, Qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jo
}, Symbol.toStringTag, { value: "Module" })), ea = `// Buffer for Background and complete path record

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{   
    vec2 p = coords(fragCoord, iResolution, uScale, iResolution.xy * 0.5);
	vec2 uv = fragCoord / iResolution.xy;

    vec4 col = mix(backCol,vec4(texture(gridTrace,uv).xyz,1),backFade);

    col = drGrid(col, p, mat2(uLattice), 0.075, mix(col,traceCol,traceLevel), 2.);
    
    if(iFrame == 0 || uv.x > 1. || uv.y <0. || uv.y > 1. || uv.y < 0. || iMouse.z > 0.) 
    { col = backCol; }
    
    fragColor = col;
}`, ta = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ea
}, Symbol.toStringTag, { value: "Module" })), na = `void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	vec2 uv = fragCoord.xy / iResolution.xy;
    
    vec4 col = vec4(texture(gridTrace,uv).xyz,1);
    
    vec4 traced = vec4(texture(dotTrails,uv));
    
    col = vec4(mix(col, traced, traced.w).xyz,1.);

    // Output to screen
    fragColor = col;
}
`, ra = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: na
}, Symbol.toStringTag, { value: "Module" })), oi = "default", ai = !0, ui = [
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
], ci = [
  {
    label: "Set lattice",
    action: "onSetLattice"
  }
], li = {
  gridTrace: {},
  dotTrails: {}
}, fi = {
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
    value: 10,
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
}, ia = {
  layout: oi,
  controls: ai,
  textInputs: ui,
  buttons: ci,
  buffers: li,
  uniforms: fi
}, sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  buffers: li,
  buttons: ci,
  controls: ai,
  default: ia,
  layout: oi,
  textInputs: ui,
  uniforms: fi
}, Symbol.toStringTag, { value: "Module" }));
function Qt() {
  return Qt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Qt.apply(null, arguments);
}
var hi = {
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
function oa(t, e) {
  if (en(t, e) || di(t, e))
    return t[e];
  throw ca(t, e) ? new Error('Cannot access method "'.concat(e, '" as a property')) : t == null ? new TypeError('Cannot access property "'.concat(e, '": object is ').concat(t)) : new Error('No access to property "' + e + '"');
}
function aa(t, e, n) {
  if (en(t, e) || di(t, e))
    return t[e] = n, n;
  throw new Error('No access to property "'.concat(e, '"'));
}
function en(t, e) {
  return la(t) ? !(e in Object.prototype) : !1;
}
function di(t, e) {
  return Array.isArray(t) ? typeof e == "number" || typeof e == "string" && ua(e) || e === "length" : !1;
}
function ua(t) {
  return /^\d+$/.test(t);
}
function ca(t, e) {
  return t == null || typeof t[e] != "function" || Yn(t, e) && Object.getPrototypeOf && e in Object.getPrototypeOf(t) ? !1 : fa.has(e) ? !0 : !(e in Object.prototype || e in Function.prototype);
}
function la(t) {
  return typeof t == "object" && t && t.constructor === Object;
}
var fa = /* @__PURE__ */ new Set(["toString", "valueOf", "toLocaleString"]);
class ha {
  constructor(e) {
    this.wrappedObject = e, this[Symbol.iterator] = this.entries;
  }
  keys() {
    return Object.keys(this.wrappedObject).filter((e) => this.has(e)).values();
  }
  get(e) {
    return oa(this.wrappedObject, e);
  }
  set(e, n) {
    return aa(this.wrappedObject, e, n), this;
  }
  has(e) {
    return en(this.wrappedObject, e) && e in this.wrappedObject;
  }
  entries() {
    return da(this.keys(), (e) => [e, this.get(e)]);
  }
  forEach(e) {
    for (var n of this.keys())
      e(this.get(n), n, this);
  }
  delete(e) {
    en(this.wrappedObject, e) && delete this.wrappedObject[e];
  }
  clear() {
    for (var e of this.keys())
      this.delete(e);
  }
  get size() {
    return Object.keys(this.wrappedObject).length;
  }
}
function da(t, e) {
  return {
    next: () => {
      var n = t.next();
      return n.done ? n : {
        value: e(n.value),
        done: !1
      };
    }
  };
}
function ce(t) {
  return typeof t == "number";
}
function Ne(t) {
  return !t || typeof t != "object" || typeof t.constructor != "function" ? !1 : t.isBigNumber === !0 && typeof t.constructor.prototype == "object" && t.constructor.prototype.isBigNumber === !0 || typeof t.constructor.isDecimal == "function" && t.constructor.isDecimal(t) === !0;
}
function pa(t) {
  return typeof t == "bigint";
}
function pi(t) {
  return t && typeof t == "object" && Object.getPrototypeOf(t).isComplex === !0 || !1;
}
function mi(t) {
  return t && typeof t == "object" && Object.getPrototypeOf(t).isFraction === !0 || !1;
}
function gi(t) {
  return t && t.constructor.prototype.isUnit === !0 || !1;
}
function et(t) {
  return typeof t == "string";
}
var Fe = Array.isArray;
function Pe(t) {
  return t && t.constructor.prototype.isMatrix === !0 || !1;
}
function tn(t) {
  return Array.isArray(t) || Pe(t);
}
function ma(t) {
  return t && t.isDenseMatrix && t.constructor.prototype.isMatrix === !0 || !1;
}
function ga(t) {
  return t && t.isSparseMatrix && t.constructor.prototype.isMatrix === !0 || !1;
}
function va(t) {
  return t && t.constructor.prototype.isRange === !0 || !1;
}
function Xn(t) {
  return t && t.constructor.prototype.isIndex === !0 || !1;
}
function Da(t) {
  return typeof t == "boolean";
}
function Ea(t) {
  return t && t.constructor.prototype.isResultSet === !0 || !1;
}
function wa(t) {
  return t && t.constructor.prototype.isHelp === !0 || !1;
}
function ya(t) {
  return typeof t == "function";
}
function Ca(t) {
  return t instanceof Date;
}
function Fa(t) {
  return t instanceof RegExp;
}
function jn(t) {
  return !!(t && typeof t == "object" && t.constructor === Object && !pi(t) && !mi(t));
}
function ba(t) {
  return t ? t instanceof Map || t instanceof ha || typeof t.set == "function" && typeof t.get == "function" && typeof t.keys == "function" && typeof t.has == "function" : !1;
}
function _a(t) {
  return t === null;
}
function Aa(t) {
  return t === void 0;
}
function Ta(t) {
  return t && t.isAccessorNode === !0 && t.constructor.prototype.isNode === !0 || !1;
}
function xa(t) {
  return t && t.isArrayNode === !0 && t.constructor.prototype.isNode === !0 || !1;
}
function Sa(t) {
  return t && t.isAssignmentNode === !0 && t.constructor.prototype.isNode === !0 || !1;
}
function Ba(t) {
  return t && t.isBlockNode === !0 && t.constructor.prototype.isNode === !0 || !1;
}
function Ma(t) {
  return t && t.isConditionalNode === !0 && t.constructor.prototype.isNode === !0 || !1;
}
function Ra(t) {
  return t && t.isConstantNode === !0 && t.constructor.prototype.isNode === !0 || !1;
}
function Na(t) {
  return t && t.isFunctionAssignmentNode === !0 && t.constructor.prototype.isNode === !0 || !1;
}
function Pa(t) {
  return t && t.isFunctionNode === !0 && t.constructor.prototype.isNode === !0 || !1;
}
function La(t) {
  return t && t.isIndexNode === !0 && t.constructor.prototype.isNode === !0 || !1;
}
function Ia(t) {
  return t && t.isNode === !0 && t.constructor.prototype.isNode === !0 || !1;
}
function Ua(t) {
  return t && t.isObjectNode === !0 && t.constructor.prototype.isNode === !0 || !1;
}
function Oa(t) {
  return t && t.isOperatorNode === !0 && t.constructor.prototype.isNode === !0 || !1;
}
function ka(t) {
  return t && t.isParenthesisNode === !0 && t.constructor.prototype.isNode === !0 || !1;
}
function $a(t) {
  return t && t.isRangeNode === !0 && t.constructor.prototype.isNode === !0 || !1;
}
function za(t) {
  return t && t.isRelationalNode === !0 && t.constructor.prototype.isNode === !0 || !1;
}
function Va(t) {
  return t && t.isSymbolNode === !0 && t.constructor.prototype.isNode === !0 || !1;
}
function Ha(t) {
  return t && t.constructor.prototype.isChain === !0 || !1;
}
function wt(t) {
  var e = typeof t;
  return e === "object" ? t === null ? "null" : Ne(t) ? "BigNumber" : t.constructor && t.constructor.name ? t.constructor.name : "Object" : e;
}
function Be(t) {
  var e = typeof t;
  if (e === "number" || e === "bigint" || e === "string" || e === "boolean" || t === null || t === void 0)
    return t;
  if (typeof t.clone == "function")
    return t.clone();
  if (Array.isArray(t))
    return t.map(function(n) {
      return Be(n);
    });
  if (t instanceof Date) return new Date(t.valueOf());
  if (Ne(t)) return t;
  if (jn(t))
    return Xa(t, Be);
  if (e === "function")
    return t;
  throw new TypeError("Cannot clone: unknown type of value (value: ".concat(t, ")"));
}
function Xa(t, e) {
  var n = {};
  for (var r in t)
    Yn(t, r) && (n[r] = e(t[r]));
  return n;
}
function ja(t, e) {
  for (var n in e)
    Yn(e, n) && (t[n] = e[n]);
  return t;
}
function mt(t, e) {
  var n, r, i;
  if (Array.isArray(t)) {
    if (!Array.isArray(e) || t.length !== e.length)
      return !1;
    for (r = 0, i = t.length; r < i; r++)
      if (!mt(t[r], e[r]))
        return !1;
    return !0;
  } else {
    if (typeof t == "function")
      return t === e;
    if (t instanceof Object) {
      if (Array.isArray(e) || !(e instanceof Object))
        return !1;
      for (n in t)
        if (!(n in e) || !mt(t[n], e[n]))
          return !1;
      for (n in e)
        if (!(n in t))
          return !1;
      return !0;
    } else
      return t === e;
  }
}
function Yn(t, e) {
  return t && Object.hasOwnProperty.call(t, e);
}
function Ya(t, e) {
  for (var n = {}, r = 0; r < e.length; r++) {
    var i = e[r], s = t[i];
    s !== void 0 && (n[i] = s);
  }
  return n;
}
var Ga = ["Matrix", "Array"], Ka = ["number", "BigNumber", "bigint", "Fraction"], dn = function(e) {
  if (e)
    throw new Error(`The global config is readonly. 
Please create a mathjs instance if you want to change the default configuration. 
Example:

  import { create, all } from 'mathjs';
  const mathjs = create(all);
  mathjs.config({ number: 'BigNumber' });
`);
  return Object.freeze(hi);
};
Qt(dn, hi, {
  MATRIX_OPTIONS: Ga,
  NUMBER_OPTIONS: Ka
});
function gr() {
  return !0;
}
function qe() {
  return !1;
}
function At() {
}
const vr = "Argument is not a typed-function.";
function vi() {
  function t(b) {
    return typeof b == "object" && b !== null && b.constructor === Object;
  }
  const e = [{
    name: "number",
    test: function(b) {
      return typeof b == "number";
    }
  }, {
    name: "string",
    test: function(b) {
      return typeof b == "string";
    }
  }, {
    name: "boolean",
    test: function(b) {
      return typeof b == "boolean";
    }
  }, {
    name: "Function",
    test: function(b) {
      return typeof b == "function";
    }
  }, {
    name: "Array",
    test: Array.isArray
  }, {
    name: "Date",
    test: function(b) {
      return b instanceof Date;
    }
  }, {
    name: "RegExp",
    test: function(b) {
      return b instanceof RegExp;
    }
  }, {
    name: "Object",
    test: t
  }, {
    name: "null",
    test: function(b) {
      return b === null;
    }
  }, {
    name: "undefined",
    test: function(b) {
      return b === void 0;
    }
  }], n = {
    name: "any",
    test: gr,
    isAny: !0
  };
  let r, i, s = 0, o = {
    createCount: 0
  };
  function a(b) {
    const x = r.get(b);
    if (x)
      return x;
    let M = 'Unknown type "' + b + '"';
    const N = b.toLowerCase();
    let O;
    for (O of i)
      if (O.toLowerCase() === N) {
        M += '. Did you mean "' + O + '" ?';
        break;
      }
    throw new TypeError(M);
  }
  function u(b) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "any";
    const M = x ? a(x).index : i.length, N = [];
    for (let P = 0; P < b.length; ++P) {
      if (!b[P] || typeof b[P].name != "string" || typeof b[P].test != "function")
        throw new TypeError("Object with properties {name: string, test: function} expected");
      const z = b[P].name;
      if (r.has(z))
        throw new TypeError('Duplicate type name "' + z + '"');
      N.push(z), r.set(z, {
        name: z,
        test: b[P].test,
        isAny: b[P].isAny,
        index: M + P,
        conversionsTo: []
        // Newly added type can't have any conversions to it
      });
    }
    const O = i.slice(M);
    i = i.slice(0, M).concat(N).concat(O);
    for (let P = M + N.length; P < i.length; ++P)
      r.get(i[P]).index = P;
  }
  function c() {
    r = /* @__PURE__ */ new Map(), i = [], s = 0, u([n], !1);
  }
  c(), u(e);
  function h() {
    let b;
    for (b of i)
      r.get(b).conversionsTo = [];
    s = 0;
  }
  function l(b) {
    const x = i.filter((M) => {
      const N = r.get(M);
      return !N.isAny && N.test(b);
    });
    return x.length ? x : ["any"];
  }
  function d(b) {
    return b && typeof b == "function" && "_typedFunctionData" in b;
  }
  function g(b, x, M) {
    if (!d(b))
      throw new TypeError(vr);
    const N = M && M.exact, O = Array.isArray(x) ? x.join(",") : x, P = y(O), z = w(P);
    if (!N || z in b.signatures) {
      const Q = b._typedFunctionData.signatureMap.get(z);
      if (Q)
        return Q;
    }
    const k = P.length;
    let Y;
    if (N) {
      Y = [];
      let Q;
      for (Q in b.signatures)
        Y.push(b._typedFunctionData.signatureMap.get(Q));
    } else
      Y = b._typedFunctionData.signatures;
    for (let Q = 0; Q < k; ++Q) {
      const ue = P[Q], we = [];
      let $e;
      for ($e of Y) {
        const Ie = _($e.params, Q);
        if (!(!Ie || ue.restParam && !Ie.restParam)) {
          if (!Ie.hasAny) {
            const Ge = p(Ie);
            if (ue.types.some((Ke) => !Ge.has(Ke.name)))
              continue;
          }
          we.push($e);
        }
      }
      if (Y = we, Y.length === 0) break;
    }
    let U;
    for (U of Y)
      if (U.params.length <= k)
        return U;
    throw new TypeError("Signature not found (signature: " + (b.name || "unnamed") + "(" + w(P, ", ") + "))");
  }
  function E(b, x, M) {
    return g(b, x, M).implementation;
  }
  function f(b, x) {
    const M = a(x);
    if (M.test(b))
      return b;
    const N = M.conversionsTo;
    if (N.length === 0)
      throw new Error("There are no conversions to " + x + " defined.");
    for (let O = 0; O < N.length; O++)
      if (a(N[O].from).test(b))
        return N[O].convert(b);
    throw new Error("Cannot convert " + b + " to " + x);
  }
  function w(b) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ",";
    return b.map((M) => M.name).join(x);
  }
  function C(b) {
    const x = b.indexOf("...") === 0, N = (x ? b.length > 3 ? b.slice(3) : "any" : b).split("|").map((k) => a(k.trim()));
    let O = !1, P = x ? "..." : "";
    return {
      types: N.map(function(k) {
        return O = k.isAny || O, P += k.name + "|", {
          name: k.name,
          typeIndex: k.index,
          test: k.test,
          isAny: k.isAny,
          conversion: null,
          conversionIndex: -1
        };
      }),
      name: P.slice(0, -1),
      // remove trailing '|' from above
      hasAny: O,
      hasConversion: !1,
      restParam: x
    };
  }
  function D(b) {
    const x = b.types.map((z) => z.name), M = q(x);
    let N = b.hasAny, O = b.name;
    const P = M.map(function(z) {
      const k = a(z.from);
      return N = k.isAny || N, O += "|" + z.from, {
        name: z.from,
        typeIndex: k.index,
        test: k.test,
        isAny: k.isAny,
        conversion: z,
        conversionIndex: z.index
      };
    });
    return {
      types: b.types.concat(P),
      name: O,
      hasAny: N,
      hasConversion: P.length > 0,
      restParam: b.restParam
    };
  }
  function p(b) {
    return b.typeSet || (b.typeSet = /* @__PURE__ */ new Set(), b.types.forEach((x) => b.typeSet.add(x.name))), b.typeSet;
  }
  function y(b) {
    const x = [];
    if (typeof b != "string")
      throw new TypeError("Signatures must be strings");
    const M = b.trim();
    if (M === "")
      return x;
    const N = M.split(",");
    for (let O = 0; O < N.length; ++O) {
      const P = C(N[O].trim());
      if (P.restParam && O !== N.length - 1)
        throw new SyntaxError('Unexpected rest parameter "' + N[O] + '": only allowed for the last parameter');
      if (P.types.length === 0)
        return null;
      x.push(P);
    }
    return x;
  }
  function m(b) {
    const x = fe(b);
    return x ? x.restParam : !1;
  }
  function v(b) {
    if (!b || b.types.length === 0)
      return gr;
    if (b.types.length === 1)
      return a(b.types[0].name).test;
    if (b.types.length === 2) {
      const x = a(b.types[0].name).test, M = a(b.types[1].name).test;
      return function(O) {
        return x(O) || M(O);
      };
    } else {
      const x = b.types.map(function(M) {
        return a(M.name).test;
      });
      return function(N) {
        for (let O = 0; O < x.length; O++)
          if (x[O](N))
            return !0;
        return !1;
      };
    }
  }
  function A(b) {
    let x, M, N;
    if (m(b)) {
      x = ye(b).map(v);
      const O = x.length, P = v(fe(b)), z = function(k) {
        for (let Y = O; Y < k.length; Y++)
          if (!P(k[Y]))
            return !1;
        return !0;
      };
      return function(Y) {
        for (let U = 0; U < x.length; U++)
          if (!x[U](Y[U]))
            return !1;
        return z(Y) && Y.length >= O + 1;
      };
    } else
      return b.length === 0 ? function(P) {
        return P.length === 0;
      } : b.length === 1 ? (M = v(b[0]), function(P) {
        return M(P[0]) && P.length === 1;
      }) : b.length === 2 ? (M = v(b[0]), N = v(b[1]), function(P) {
        return M(P[0]) && N(P[1]) && P.length === 2;
      }) : (x = b.map(v), function(P) {
        for (let z = 0; z < x.length; z++)
          if (!x[z](P[z]))
            return !1;
        return P.length === x.length;
      });
  }
  function _(b, x) {
    return x < b.length ? b[x] : m(b) ? fe(b) : null;
  }
  function F(b, x) {
    const M = _(b, x);
    return M ? p(M) : /* @__PURE__ */ new Set();
  }
  function T(b) {
    return b.conversion === null || b.conversion === void 0;
  }
  function S(b, x) {
    const M = /* @__PURE__ */ new Set();
    return b.forEach((N) => {
      const O = F(N.params, x);
      let P;
      for (P of O)
        M.add(P);
    }), M.has("any") ? ["any"] : Array.from(M);
  }
  function R(b, x, M) {
    let N, O;
    const P = b || "unnamed";
    let z = M, k;
    for (k = 0; k < x.length; k++) {
      const ue = [];
      if (z.forEach((we) => {
        const $e = _(we.params, k), Ie = v($e);
        (k < we.params.length || m(we.params)) && Ie(x[k]) && ue.push(we);
      }), ue.length === 0) {
        if (O = S(z, k), O.length > 0) {
          const we = l(x[k]);
          return N = new TypeError("Unexpected type of argument in function " + P + " (expected: " + O.join(" or ") + ", actual: " + we.join(" | ") + ", index: " + k + ")"), N.data = {
            category: "wrongType",
            fn: P,
            index: k,
            actual: we,
            expected: O
          }, N;
        }
      } else
        z = ue;
    }
    const Y = z.map(function(ue) {
      return m(ue.params) ? 1 / 0 : ue.params.length;
    });
    if (x.length < Math.min.apply(null, Y))
      return O = S(z, k), N = new TypeError("Too few arguments in function " + P + " (expected: " + O.join(" or ") + ", index: " + x.length + ")"), N.data = {
        category: "tooFewArgs",
        fn: P,
        index: x.length,
        expected: O
      }, N;
    const U = Math.max.apply(null, Y);
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
  function j(b) {
    let x = i.length + 1;
    for (let M = 0; M < b.types.length; M++)
      x = Math.min(x, b.types[M].typeIndex);
    return x;
  }
  function $(b) {
    let x = s + 1;
    for (let M = 0; M < b.types.length; M++)
      T(b.types[M]) || (x = Math.min(x, b.types[M].conversionIndex));
    return x;
  }
  function X(b, x) {
    if (b.hasAny) {
      if (!x.hasAny)
        return 0.1;
    } else if (x.hasAny)
      return -0.1;
    if (b.restParam) {
      if (!x.restParam)
        return 0.01;
    } else if (x.restParam)
      return -0.01;
    const M = j(b) - j(x);
    if (M < 0)
      return -1e-3;
    if (M > 0)
      return 1e-3;
    const N = $(b), O = $(x);
    if (b.hasConversion) {
      if (!x.hasConversion)
        return (1 + N) * 1e-6;
    } else if (x.hasConversion)
      return -(1 + O) * 1e-6;
    const P = N - O;
    return P < 0 ? -1e-7 : P > 0 ? 1e-7 : 0;
  }
  function I(b, x) {
    const M = b.params, N = x.params, O = fe(M), P = fe(N), z = m(M), k = m(N);
    if (z && O.hasAny) {
      if (!k || !P.hasAny)
        return 1e7;
    } else if (k && P.hasAny)
      return -1e7;
    let Y = 0, U = 0, Q;
    for (Q of M)
      Q.hasAny && ++Y, Q.hasConversion && ++U;
    let ue = 0, we = 0;
    for (Q of N)
      Q.hasAny && ++ue, Q.hasConversion && ++we;
    if (Y !== ue)
      return (Y - ue) * 1e6;
    if (z && O.hasConversion) {
      if (!k || !P.hasConversion)
        return 1e5;
    } else if (k && P.hasConversion)
      return -1e5;
    if (U !== we)
      return (U - we) * 1e4;
    if (z) {
      if (!k)
        return 1e3;
    } else if (k)
      return -1e3;
    const $e = (M.length - N.length) * (z ? -100 : 100);
    if ($e !== 0)
      return $e;
    const Ie = [];
    let Ge = 0;
    for (let _t = 0; _t < M.length; ++_t) {
      const Vt = X(M[_t], N[_t]);
      Ie.push(Vt), Ge += Vt;
    }
    if (Ge !== 0)
      return (Ge < 0 ? -10 : 10) + Ge;
    let Ke, bt = 9;
    const Cn = bt / (Ie.length + 1);
    for (Ke of Ie) {
      if (Ke !== 0)
        return (Ke < 0 ? -bt : bt) + Ke;
      bt -= Cn;
    }
    return 0;
  }
  function q(b) {
    if (b.length === 0)
      return [];
    const x = b.map(a);
    if (b.length === 1) return x[0].conversionsTo;
    const M = new Set(b), N = /* @__PURE__ */ new Set();
    for (let P = 0; P < x.length; ++P)
      for (const z of x[P].conversionsTo)
        M.has(z.from) || N.add(z.from);
    const O = [];
    for (const P of N) {
      let z = s + 1, k = null;
      for (let Y = 0; Y < x.length; ++Y)
        for (const U of x[Y].conversionsTo)
          U.from === P && U.index < z && (z = U.index, k = U);
      O.push(k);
    }
    return O;
  }
  function V(b, x) {
    let M = x, N = "";
    if (b.some((P) => P.hasConversion)) {
      const P = m(b), z = b.map(G);
      N = z.map((k) => k.name).join(";"), M = function() {
        const Y = [], U = P ? arguments.length - 1 : arguments.length;
        for (let Q = 0; Q < U; Q++)
          Y[Q] = z[Q](arguments[Q]);
        return P && (Y[U] = arguments[U].map(z[U])), x.apply(this, Y);
      };
    }
    let O = M;
    if (m(b)) {
      const P = b.length - 1;
      O = function() {
        return M.apply(this, oe(arguments, 0, P).concat([oe(arguments, P)]));
      };
    }
    return N && Object.defineProperty(O, "name", {
      value: N
    }), O;
  }
  function G(b) {
    let x, M, N, O;
    const P = [], z = [];
    let k = "";
    b.types.forEach(function(U) {
      U.conversion && (k += U.conversion.from + "~>" + U.conversion.to + ",", P.push(a(U.conversion.from).test), z.push(U.conversion.convert));
    }), k ? k = k.slice(0, -1) : k = "pass";
    let Y = (U) => U;
    switch (z.length) {
      case 0:
        break;
      case 1:
        x = P[0], N = z[0], Y = function(Q) {
          return x(Q) ? N(Q) : Q;
        };
        break;
      case 2:
        x = P[0], M = P[1], N = z[0], O = z[1], Y = function(Q) {
          return x(Q) ? N(Q) : M(Q) ? O(Q) : Q;
        };
        break;
      default:
        Y = function(Q) {
          for (let ue = 0; ue < z.length; ue++)
            if (P[ue](Q))
              return z[ue](Q);
          return Q;
        };
    }
    return Object.defineProperty(Y, "name", {
      value: k
    }), Y;
  }
  function Z(b) {
    function x(M, N, O) {
      if (N < M.length) {
        const P = M[N];
        let z = [];
        if (P.restParam) {
          const k = P.types.filter(T);
          k.length < P.types.length && z.push({
            types: k,
            name: "..." + k.map((Y) => Y.name).join("|"),
            hasAny: k.some((Y) => Y.isAny),
            hasConversion: !1,
            restParam: !0
          }), z.push(P);
        } else
          z = P.types.map(function(k) {
            return {
              types: [k],
              name: k.name,
              hasAny: k.isAny,
              hasConversion: k.conversion,
              restParam: !1
            };
          });
        return Ce(z, function(k) {
          return x(M, N + 1, O.concat([k]));
        });
      } else
        return [O];
    }
    return x(b, 0, []);
  }
  function ne(b, x) {
    const M = Math.max(b.length, x.length);
    for (let k = 0; k < M; k++) {
      const Y = F(b, k), U = F(x, k);
      let Q = !1, ue;
      for (ue of U)
        if (Y.has(ue)) {
          Q = !0;
          break;
        }
      if (!Q)
        return !1;
    }
    const N = b.length, O = x.length, P = m(b), z = m(x);
    return P ? z ? N === O : O >= N : z ? N >= O : N === O;
  }
  function te(b) {
    return b.map((x) => it(x) ? Ye(x.referToSelf.callback) : rt(x) ? Ae(x.referTo.references, x.referTo.callback) : x);
  }
  function se(b, x, M) {
    const N = [];
    let O;
    for (O of b) {
      let P = M[O];
      if (typeof P != "number")
        throw new TypeError('No definition for referenced signature "' + O + '"');
      if (P = x[P], typeof P != "function")
        return !1;
      N.push(P);
    }
    return N;
  }
  function de(b, x, M) {
    const N = te(b), O = new Array(N.length).fill(!1);
    let P = !0;
    for (; P; ) {
      P = !1;
      let z = !0;
      for (let k = 0; k < N.length; ++k) {
        if (O[k]) continue;
        const Y = N[k];
        if (it(Y))
          N[k] = Y.referToSelf.callback(M), N[k].referToSelf = Y.referToSelf, O[k] = !0, z = !1;
        else if (rt(Y)) {
          const U = se(Y.referTo.references, N, x);
          U ? (N[k] = Y.referTo.callback.apply(this, U), N[k].referTo = Y.referTo, O[k] = !0, z = !1) : P = !0;
        }
      }
      if (z && P)
        throw new SyntaxError("Circular reference detected in resolving typed.referTo");
    }
    return N;
  }
  function me(b) {
    const x = /\bthis(\(|\.signatures\b)/;
    Object.keys(b).forEach((M) => {
      const N = b[M];
      if (x.test(N.toString()))
        throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.");
    });
  }
  function ge(b, x) {
    if (o.createCount++, Object.keys(x).length === 0)
      throw new SyntaxError("No signatures provided");
    o.warnAgainstDeprecatedThis && me(x);
    const M = [], N = [], O = {}, P = [];
    let z;
    for (z in x) {
      if (!Object.prototype.hasOwnProperty.call(x, z))
        continue;
      const pe = y(z);
      if (!pe) continue;
      M.forEach(function(Lt) {
        if (ne(Lt, pe))
          throw new TypeError('Conflicting signatures "' + w(Lt) + '" and "' + w(pe) + '".');
      }), M.push(pe);
      const ze = N.length;
      N.push(x[z]);
      const xs = pe.map(D);
      let Ht;
      for (Ht of Z(xs)) {
        const Lt = w(Ht);
        P.push({
          params: Ht,
          name: Lt,
          fn: ze
        }), Ht.every((Ss) => !Ss.hasConversion) && (O[Lt] = ze);
      }
    }
    P.sort(I);
    const k = de(N, O, Pt);
    let Y;
    for (Y in O)
      Object.prototype.hasOwnProperty.call(O, Y) && (O[Y] = k[O[Y]]);
    const U = [], Q = /* @__PURE__ */ new Map();
    for (Y of P)
      Q.has(Y.name) || (Y.fn = k[Y.fn], U.push(Y), Q.set(Y.name, Y));
    const ue = U[0] && U[0].params.length <= 2 && !m(U[0].params), we = U[1] && U[1].params.length <= 2 && !m(U[1].params), $e = U[2] && U[2].params.length <= 2 && !m(U[2].params), Ie = U[3] && U[3].params.length <= 2 && !m(U[3].params), Ge = U[4] && U[4].params.length <= 2 && !m(U[4].params), Ke = U[5] && U[5].params.length <= 2 && !m(U[5].params), bt = ue && we && $e && Ie && Ge && Ke;
    for (let pe = 0; pe < U.length; ++pe)
      U[pe].test = A(U[pe].params);
    const Cn = ue ? v(U[0].params[0]) : qe, _t = we ? v(U[1].params[0]) : qe, Vt = $e ? v(U[2].params[0]) : qe, ns = Ie ? v(U[3].params[0]) : qe, rs = Ge ? v(U[4].params[0]) : qe, is = Ke ? v(U[5].params[0]) : qe, ss = ue ? v(U[0].params[1]) : qe, os = we ? v(U[1].params[1]) : qe, as = $e ? v(U[2].params[1]) : qe, us = Ie ? v(U[3].params[1]) : qe, cs = Ge ? v(U[4].params[1]) : qe, ls = Ke ? v(U[5].params[1]) : qe;
    for (let pe = 0; pe < U.length; ++pe)
      U[pe].implementation = V(U[pe].params, U[pe].fn);
    const fs = ue ? U[0].implementation : At, hs = we ? U[1].implementation : At, ds = $e ? U[2].implementation : At, ps = Ie ? U[3].implementation : At, ms = Ge ? U[4].implementation : At, gs = Ke ? U[5].implementation : At, vs = ue ? U[0].params.length : -1, Ds = we ? U[1].params.length : -1, Es = $e ? U[2].params.length : -1, ws = Ie ? U[3].params.length : -1, ys = Ge ? U[4].params.length : -1, Cs = Ke ? U[5].params.length : -1, Fs = bt ? 6 : 0, bs = U.length, _s = U.map((pe) => pe.test), As = U.map((pe) => pe.implementation), Ts = function() {
      for (let ze = Fs; ze < bs; ze++)
        if (_s[ze](arguments))
          return As[ze].apply(this, arguments);
      return o.onMismatch(b, arguments, U);
    };
    function Pt(pe, ze) {
      return arguments.length === vs && Cn(pe) && ss(ze) ? fs.apply(this, arguments) : arguments.length === Ds && _t(pe) && os(ze) ? hs.apply(this, arguments) : arguments.length === Es && Vt(pe) && as(ze) ? ds.apply(this, arguments) : arguments.length === ws && ns(pe) && us(ze) ? ps.apply(this, arguments) : arguments.length === ys && rs(pe) && cs(ze) ? ms.apply(this, arguments) : arguments.length === Cs && is(pe) && ls(ze) ? gs.apply(this, arguments) : Ts.apply(this, arguments);
    }
    try {
      Object.defineProperty(Pt, "name", {
        value: b
      });
    } catch {
    }
    return Pt.signatures = O, Pt._typedFunctionData = {
      signatures: U,
      signatureMap: Q
    }, Pt;
  }
  function le(b, x, M) {
    throw R(b, x, M);
  }
  function ye(b) {
    return oe(b, 0, b.length - 1);
  }
  function fe(b) {
    return b[b.length - 1];
  }
  function oe(b, x, M) {
    return Array.prototype.slice.call(b, x, M);
  }
  function Me(b, x) {
    for (let M = 0; M < b.length; M++)
      if (x(b[M]))
        return b[M];
  }
  function Ce(b, x) {
    return Array.prototype.concat.apply([], b.map(x));
  }
  function ae() {
    const b = ye(arguments).map((M) => w(y(M))), x = fe(arguments);
    if (typeof x != "function")
      throw new TypeError("Callback function expected as last argument");
    return Ae(b, x);
  }
  function Ae(b, x) {
    return {
      referTo: {
        references: b,
        callback: x
      }
    };
  }
  function Ye(b) {
    if (typeof b != "function")
      throw new TypeError("Callback function expected as first argument");
    return {
      referToSelf: {
        callback: b
      }
    };
  }
  function rt(b) {
    return b && typeof b.referTo == "object" && Array.isArray(b.referTo.references) && typeof b.referTo.callback == "function";
  }
  function it(b) {
    return b && typeof b.referToSelf == "object" && typeof b.referToSelf.callback == "function";
  }
  function Ct(b, x) {
    if (!b)
      return x;
    if (x && x !== b) {
      const M = new Error("Function names do not match (expected: " + b + ", actual: " + x + ")");
      throw M.data = {
        actual: x,
        expected: b
      }, M;
    }
    return b;
  }
  function Ft(b) {
    let x;
    for (const M in b)
      Object.prototype.hasOwnProperty.call(b, M) && (d(b[M]) || typeof b[M].signature == "string") && (x = Ct(x, b[M].name));
    return x;
  }
  function yn(b, x) {
    let M;
    for (M in x)
      if (Object.prototype.hasOwnProperty.call(x, M)) {
        if (M in b && x[M] !== b[M]) {
          const N = new Error('Signature "' + M + '" is defined twice');
          throw N.data = {
            signature: M,
            sourceFunction: x[M],
            destFunction: b[M]
          }, N;
        }
        b[M] = x[M];
      }
  }
  const ts = o;
  o = function(b) {
    const x = typeof b == "string", M = x ? 1 : 0;
    let N = x ? b : "";
    const O = {};
    for (let P = M; P < arguments.length; ++P) {
      const z = arguments[P];
      let k = {}, Y;
      if (typeof z == "function" ? (Y = z.name, typeof z.signature == "string" ? k[z.signature] = z : d(z) && (k = z.signatures)) : t(z) && (k = z, x || (Y = Ft(z))), Object.keys(k).length === 0) {
        const U = new TypeError("Argument to 'typed' at index " + P + " is not a (typed) function, nor an object with signatures as keys and functions as values.");
        throw U.data = {
          index: P,
          argument: z
        }, U;
      }
      x || (N = Ct(N, Y)), yn(O, k);
    }
    return ge(N || "", O);
  }, o.create = vi, o.createCount = ts.createCount, o.onMismatch = le, o.throwMismatchError = le, o.createError = R, o.clear = c, o.clearConversions = h, o.addTypes = u, o._findType = a, o.referTo = ae, o.referToSelf = Ye, o.convert = f, o.findSignature = g, o.find = E, o.isTypedFunction = d, o.warnAgainstDeprecatedThis = !0, o.addType = function(b, x) {
    let M = "any";
    x !== !1 && r.has("Object") && (M = "Object"), o.addTypes([b], M);
  };
  function er(b) {
    if (!b || typeof b.from != "string" || typeof b.to != "string" || typeof b.convert != "function")
      throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");
    if (b.to === b.from)
      throw new SyntaxError('Illegal to define conversion from "' + b.from + '" to itself.');
  }
  return o.addConversion = function(b) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      override: !1
    };
    er(b);
    const M = a(b.to), N = M.conversionsTo.find((O) => O.from === b.from);
    if (N)
      if (x && x.override)
        o.removeConversion({
          from: N.from,
          to: b.to,
          convert: N.convert
        });
      else
        throw new Error('There is already a conversion from "' + b.from + '" to "' + M.name + '"');
    M.conversionsTo.push({
      from: b.from,
      to: M.name,
      convert: b.convert,
      index: s++
    });
  }, o.addConversions = function(b, x) {
    b.forEach((M) => o.addConversion(M, x));
  }, o.removeConversion = function(b) {
    er(b);
    const x = a(b.to), M = Me(x.conversionsTo, (O) => O.from === b.from);
    if (!M)
      throw new Error("Attempt to remove nonexistent conversion from " + b.from + " to " + b.to);
    if (M.convert !== b.convert)
      throw new Error("Conversion to remove does not match existing conversion");
    const N = x.conversionsTo.indexOf(M);
    x.conversionsTo.splice(N, 1);
  }, o.resolve = function(b, x) {
    if (!d(b))
      throw new TypeError(vr);
    const M = b._typedFunctionData.signatures;
    for (let N = 0; N < M.length; ++N)
      if (M[N].test(x))
        return M[N];
    return null;
  }, o;
}
const nn = vi();
function ie(t, e, n, r) {
  function i(s) {
    var o = Ya(s, e.map(Za));
    return qa(t, e, s), n(o);
  }
  return i.isFactory = !0, i.fn = t, i.dependencies = e.slice().sort(), r && (i.meta = r), i;
}
function qa(t, e, n) {
  var r = e.filter((s) => !Wa(s)).every((s) => n[s] !== void 0);
  if (!r) {
    var i = e.filter((s) => n[s] === void 0);
    throw new Error('Cannot create function "'.concat(t, '", ') + "some dependencies are missing: ".concat(i.map((s) => '"'.concat(s, '"')).join(", "), "."));
  }
}
function Wa(t) {
  return t && t[0] === "?";
}
function Za(t) {
  return t && t[0] === "?" ? t.slice(1) : t;
}
function Re(t) {
  return typeof t == "boolean" ? !0 : Number.isFinite(t) ? t === Math.round(t) : !1;
}
function _n(t, e, n) {
  var r = {
    2: "0b",
    8: "0o",
    16: "0x"
  }, i = r[e], s = "";
  if (n) {
    if (n < 1)
      throw new Error("size must be in greater than 0");
    if (!Re(n))
      throw new Error("size must be an integer");
    if (t > 2 ** (n - 1) - 1 || t < -(2 ** (n - 1)))
      throw new Error("Value must be in range [-2^".concat(n - 1, ", 2^").concat(n - 1, "-1]"));
    if (!Re(t))
      throw new Error("Value must be an integer");
    t < 0 && (t = t + 2 ** n), s = "i".concat(n);
  }
  var o = "";
  return t < 0 && (t = -t, o = "-"), "".concat(o).concat(i).concat(t.toString(e)).concat(s);
}
function Bn(t, e) {
  if (typeof e == "function")
    return e(t);
  if (t === 1 / 0)
    return "Infinity";
  if (t === -1 / 0)
    return "-Infinity";
  if (isNaN(t))
    return "NaN";
  var {
    notation: n,
    precision: r,
    wordSize: i
  } = Di(e);
  switch (n) {
    case "fixed":
      return Qa(t, r);
    case "exponential":
      return Ei(t, r);
    case "engineering":
      return Ja(t, r);
    case "bin":
      return _n(t, 2, i);
    case "oct":
      return _n(t, 8, i);
    case "hex":
      return _n(t, 16, i);
    case "auto":
      return eu(t, r, e).replace(/((\.\d*?)(0+))($|e)/, function() {
        var s = arguments[2], o = arguments[4];
        return s !== "." ? s + o : o;
      });
    default:
      throw new Error('Unknown notation "' + n + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
  }
}
function Di(t) {
  var e = "auto", n, r;
  if (t !== void 0)
    if (ce(t))
      n = t;
    else if (Ne(t))
      n = t.toNumber();
    else if (jn(t))
      t.precision !== void 0 && (n = Dr(t.precision, () => {
        throw new Error('Option "precision" must be a number or BigNumber');
      })), t.wordSize !== void 0 && (r = Dr(t.wordSize, () => {
        throw new Error('Option "wordSize" must be a number or BigNumber');
      })), t.notation && (e = t.notation);
    else
      throw new Error("Unsupported type of options, number, BigNumber, or object expected");
  return {
    notation: e,
    precision: n,
    wordSize: r
  };
}
function pn(t) {
  var e = String(t).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
  if (!e)
    throw new SyntaxError("Invalid number " + t);
  var n = e[1], r = e[2], i = parseFloat(e[4] || "0"), s = r.indexOf(".");
  i += s !== -1 ? s - 1 : r.length - 1;
  var o = r.replace(".", "").replace(/^0*/, function(a) {
    return i -= a.length, "";
  }).replace(/0*$/, "").split("").map(function(a) {
    return parseInt(a);
  });
  return o.length === 0 && (o.push(0), i++), {
    sign: n,
    coefficients: o,
    exponent: i
  };
}
function Ja(t, e) {
  if (isNaN(t) || !Number.isFinite(t))
    return String(t);
  var n = pn(t), r = mn(n, e), i = r.exponent, s = r.coefficients, o = i % 3 === 0 ? i : i < 0 ? i - 3 - i % 3 : i - i % 3;
  if (ce(e))
    for (; e > s.length || i - o + 1 > s.length; )
      s.push(0);
  else
    for (var a = Math.abs(i - o) - (s.length - 1), u = 0; u < a; u++)
      s.push(0);
  for (var c = Math.abs(i - o), h = 1; c > 0; )
    h++, c--;
  var l = s.slice(h).join(""), d = ce(e) && l.length || l.match(/[1-9]/) ? "." + l : "", g = s.slice(0, h).join("") + d + "e" + (i >= 0 ? "+" : "") + o.toString();
  return r.sign + g;
}
function Qa(t, e) {
  if (isNaN(t) || !Number.isFinite(t))
    return String(t);
  var n = pn(t), r = typeof e == "number" ? mn(n, n.exponent + 1 + e) : n, i = r.coefficients, s = r.exponent + 1, o = s + (e || 0);
  return i.length < o && (i = i.concat(Mt(o - i.length))), s < 0 && (i = Mt(-s + 1).concat(i), s = 1), s < i.length && i.splice(s, 0, s === 0 ? "0." : "."), r.sign + i.join("");
}
function Ei(t, e) {
  if (isNaN(t) || !Number.isFinite(Number(t)))
    return String(t);
  var n = pn(t), r = e ? mn(n, e) : n, i = r.coefficients, s = r.exponent;
  i.length < e && (i = i.concat(Mt(e - i.length)));
  var o = i.shift();
  return r.sign + o + (i.length > 0 ? "." + i.join("") : "") + "e" + (s >= 0 ? "+" : "") + s;
}
function eu(t, e, n) {
  if (isNaN(t) || !Number.isFinite(t))
    return String(t);
  var r = Er(n == null ? void 0 : n.lowerExp, -3), i = Er(n == null ? void 0 : n.upperExp, 5), s = pn(t), o = e ? mn(s, e) : s;
  if (o.exponent < r || o.exponent >= i)
    return Ei(t, e);
  var a = o.coefficients, u = o.exponent;
  a.length < e && (a = a.concat(Mt(e - a.length))), a = a.concat(Mt(u - a.length + 1 + (a.length < e ? e - a.length : 0))), a = Mt(-u).concat(a);
  var c = u > 0 ? u : 0;
  return c < a.length - 1 && a.splice(c + 1, 0, "."), o.sign + a.join("");
}
function mn(t, e) {
  for (var n = {
    sign: t.sign,
    coefficients: t.coefficients,
    exponent: t.exponent
  }, r = n.coefficients; e <= 0; )
    r.unshift(0), n.exponent++, e++;
  if (r.length > e) {
    var i = r.splice(e, r.length - e);
    if (i[0] >= 5) {
      var s = e - 1;
      for (r[s]++; r[s] === 10; )
        r.pop(), s === 0 && (r.unshift(0), n.exponent++, s++), s--, r[s]++;
    }
  }
  return n;
}
function Mt(t) {
  for (var e = [], n = 0; n < t; n++)
    e.push(0);
  return e;
}
function tu(t) {
  return t.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length;
}
function rn(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1e-8, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  if (n <= 0)
    throw new Error("Relative tolerance must be greater than 0");
  if (r < 0)
    throw new Error("Absolute tolerance must be at least 0");
  return isNaN(t) || isNaN(e) ? !1 : !Number.isFinite(t) || !Number.isFinite(e) ? t === e : t === e ? !0 : Math.abs(t - e) <= Math.max(n * Math.max(Math.abs(t), Math.abs(e)), r);
}
function Dr(t, e) {
  if (ce(t))
    return t;
  if (Ne(t))
    return t.toNumber();
  e();
}
function Er(t, e) {
  return ce(t) ? t : Ne(t) ? t.toNumber() : e;
}
var wi = function() {
  return wi = nn.create, nn;
}, nu = ["?BigNumber", "?Complex", "?DenseMatrix", "?Fraction"], ru = /* @__PURE__ */ ie("typed", nu, function(e) {
  var {
    BigNumber: n,
    Complex: r,
    DenseMatrix: i,
    Fraction: s
  } = e, o = wi();
  return o.clear(), o.addTypes([
    {
      name: "number",
      test: ce
    },
    {
      name: "Complex",
      test: pi
    },
    {
      name: "BigNumber",
      test: Ne
    },
    {
      name: "bigint",
      test: pa
    },
    {
      name: "Fraction",
      test: mi
    },
    {
      name: "Unit",
      test: gi
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
      test: Ha
    },
    {
      name: "Array",
      test: Fe
    },
    {
      name: "Matrix",
      test: Pe
    },
    {
      name: "DenseMatrix",
      test: ma
    },
    {
      name: "SparseMatrix",
      test: ga
    },
    {
      name: "Range",
      test: va
    },
    {
      name: "Index",
      test: Xn
    },
    {
      name: "boolean",
      test: Da
    },
    {
      name: "ResultSet",
      test: Ea
    },
    {
      name: "Help",
      test: wa
    },
    {
      name: "function",
      test: ya
    },
    {
      name: "Date",
      test: Ca
    },
    {
      name: "RegExp",
      test: Fa
    },
    {
      name: "null",
      test: _a
    },
    {
      name: "undefined",
      test: Aa
    },
    {
      name: "AccessorNode",
      test: Ta
    },
    {
      name: "ArrayNode",
      test: xa
    },
    {
      name: "AssignmentNode",
      test: Sa
    },
    {
      name: "BlockNode",
      test: Ba
    },
    {
      name: "ConditionalNode",
      test: Ma
    },
    {
      name: "ConstantNode",
      test: Ra
    },
    {
      name: "FunctionNode",
      test: Pa
    },
    {
      name: "FunctionAssignmentNode",
      test: Na
    },
    {
      name: "IndexNode",
      test: La
    },
    {
      name: "Node",
      test: Ia
    },
    {
      name: "ObjectNode",
      test: Ua
    },
    {
      name: "OperatorNode",
      test: Oa
    },
    {
      name: "ParenthesisNode",
      test: ka
    },
    {
      name: "RangeNode",
      test: $a
    },
    {
      name: "RelationalNode",
      test: za
    },
    {
      name: "SymbolNode",
      test: Va
    },
    {
      name: "Map",
      test: ba
    },
    {
      name: "Object",
      test: jn
    }
    // order 'Object' last, it matches on other classes too
  ]), o.addConversions([{
    from: "number",
    to: "BigNumber",
    convert: function(u) {
      if (n || Gt(u), tu(u) > 15)
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
      return n || Gt(u), new n(u.toString());
    }
  }, {
    from: "bigint",
    to: "Fraction",
    convert: function(u) {
      return s || qt(u), new s(u);
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
      s || qt(u);
      var c = new s(u);
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
      n || Gt(u);
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
      s || qt(u);
      try {
        return new s(u);
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
      return n || Gt(u), new n(+u);
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
      return s || qt(u), new s(+u);
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
      return i || iu(), new i(u);
    }
  }, {
    from: "Matrix",
    to: "Array",
    convert: function(u) {
      return u.valueOf();
    }
  }]), o.onMismatch = (a, u, c) => {
    var h = o.createError(a, u, c);
    if (["wrongType", "mismatch"].includes(h.data.category) && u.length === 1 && tn(u[0]) && // check if the function can be unary:
    c.some((d) => !d.params.includes(","))) {
      var l = new TypeError("Function '".concat(a, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(a, ")'."));
      throw l.data = h.data, l;
    }
    throw h;
  }, o.onMismatch = (a, u, c) => {
    var h = o.createError(a, u, c);
    if (["wrongType", "mismatch"].includes(h.data.category) && u.length === 1 && tn(u[0]) && // check if the function can be unary:
    c.some((d) => !d.params.includes(","))) {
      var l = new TypeError("Function '".concat(a, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(a, ")'."));
      throw l.data = h.data, l;
    }
    throw h;
  }, o;
});
function Gt(t) {
  throw new Error("Cannot convert value ".concat(t, " into a BigNumber: no class 'BigNumber' provided"));
}
function Kt(t) {
  throw new Error("Cannot convert value ".concat(t, " into a Complex number: no class 'Complex' provided"));
}
function iu() {
  throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided");
}
function qt(t) {
  throw new Error("Cannot convert value ".concat(t, " into a Fraction, no class 'Fraction' provided."));
}
/*!
 *  decimal.js v10.6.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var St = 9e15, vt = 1e9, Mn = "0123456789abcdef", sn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", on = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Rn = {
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
}, yi, at, ee = !0, gn = "[DecimalError] ", gt = gn + "Invalid argument: ", Ci = gn + "Precision limit exceeded", Fi = gn + "crypto unavailable", bi = "[object Decimal]", Oe = Math.floor, be = Math.pow, su = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, ou = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, au = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, _i = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Qe = 1e7, J = 7, uu = 9007199254740991, cu = sn.length - 1, Nn = on.length - 1, L = { toStringTag: bi };
L.absoluteValue = L.abs = function() {
  var t = new this.constructor(this);
  return t.s < 0 && (t.s = 1), W(t);
};
L.ceil = function() {
  return W(new this.constructor(this), this.e + 1, 2);
};
L.clampedTo = L.clamp = function(t, e) {
  var n, r = this, i = r.constructor;
  if (t = new i(t), e = new i(e), !t.s || !e.s) return new i(NaN);
  if (t.gt(e)) throw Error(gt + e);
  return n = r.cmp(t), n < 0 ? t : r.cmp(e) > 0 ? e : new i(r);
};
L.comparedTo = L.cmp = function(t) {
  var e, n, r, i, s = this, o = s.d, a = (t = new s.constructor(t)).d, u = s.s, c = t.s;
  if (!o || !a)
    return !u || !c ? NaN : u !== c ? u : o === a ? 0 : !o ^ u < 0 ? 1 : -1;
  if (!o[0] || !a[0]) return o[0] ? u : a[0] ? -c : 0;
  if (u !== c) return u;
  if (s.e !== t.e) return s.e > t.e ^ u < 0 ? 1 : -1;
  for (r = o.length, i = a.length, e = 0, n = r < i ? r : i; e < n; ++e)
    if (o[e] !== a[e]) return o[e] > a[e] ^ u < 0 ? 1 : -1;
  return r === i ? 0 : r > i ^ u < 0 ? 1 : -1;
};
L.cosine = L.cos = function() {
  var t, e, n = this, r = n.constructor;
  return n.d ? n.d[0] ? (t = r.precision, e = r.rounding, r.precision = t + Math.max(n.e, n.sd()) + J, r.rounding = 1, n = lu(r, Bi(r, n)), r.precision = t, r.rounding = e, W(at == 2 || at == 3 ? n.neg() : n, t, e, !0)) : new r(1) : new r(NaN);
};
L.cubeRoot = L.cbrt = function() {
  var t, e, n, r, i, s, o, a, u, c, h = this, l = h.constructor;
  if (!h.isFinite() || h.isZero()) return new l(h);
  for (ee = !1, s = h.s * be(h.s * h, 1 / 3), !s || Math.abs(s) == 1 / 0 ? (n = Le(h.d), t = h.e, (s = (t - n.length + 1) % 3) && (n += s == 1 || s == -2 ? "0" : "00"), s = be(n, 1 / 3), t = Oe((t + 1) / 3) - (t % 3 == (t < 0 ? -1 : 2)), s == 1 / 0 ? n = "5e" + t : (n = s.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + t), r = new l(n), r.s = h.s) : r = new l(s.toString()), o = (t = l.precision) + 3; ; )
    if (a = r, u = a.times(a).times(a), c = u.plus(h), r = ve(c.plus(h).times(a), c.plus(u), o + 2, 1), Le(a.d).slice(0, o) === (n = Le(r.d)).slice(0, o))
      if (n = n.slice(o - 3, o + 1), n == "9999" || !i && n == "4999") {
        if (!i && (W(a, t + 1, 0), a.times(a).times(a).eq(h))) {
          r = a;
          break;
        }
        o += 4, i = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (W(r, t + 1, 1), e = !r.times(r).times(r).eq(h));
        break;
      }
  return ee = !0, W(r, t, l.rounding, e);
};
L.decimalPlaces = L.dp = function() {
  var t, e = this.d, n = NaN;
  if (e) {
    if (t = e.length - 1, n = (t - Oe(this.e / J)) * J, t = e[t], t) for (; t % 10 == 0; t /= 10) n--;
    n < 0 && (n = 0);
  }
  return n;
};
L.dividedBy = L.div = function(t) {
  return ve(this, new this.constructor(t));
};
L.dividedToIntegerBy = L.divToInt = function(t) {
  var e = this, n = e.constructor;
  return W(ve(e, new n(t), 0, 1, 1), n.precision, n.rounding);
};
L.equals = L.eq = function(t) {
  return this.cmp(t) === 0;
};
L.floor = function() {
  return W(new this.constructor(this), this.e + 1, 3);
};
L.greaterThan = L.gt = function(t) {
  return this.cmp(t) > 0;
};
L.greaterThanOrEqualTo = L.gte = function(t) {
  var e = this.cmp(t);
  return e == 1 || e === 0;
};
L.hyperbolicCosine = L.cosh = function() {
  var t, e, n, r, i, s = this, o = s.constructor, a = new o(1);
  if (!s.isFinite()) return new o(s.s ? 1 / 0 : NaN);
  if (s.isZero()) return a;
  n = o.precision, r = o.rounding, o.precision = n + Math.max(s.e, s.sd()) + 4, o.rounding = 1, i = s.d.length, i < 32 ? (t = Math.ceil(i / 3), e = (1 / Dn(4, t)).toString()) : (t = 16, e = "2.3283064365386962890625e-10"), s = Rt(o, 1, s.times(e), new o(1), !0);
  for (var u, c = t, h = new o(8); c--; )
    u = s.times(s), s = a.minus(u.times(h.minus(u.times(h))));
  return W(s, o.precision = n, o.rounding = r, !0);
};
L.hyperbolicSine = L.sinh = function() {
  var t, e, n, r, i = this, s = i.constructor;
  if (!i.isFinite() || i.isZero()) return new s(i);
  if (e = s.precision, n = s.rounding, s.precision = e + Math.max(i.e, i.sd()) + 4, s.rounding = 1, r = i.d.length, r < 3)
    i = Rt(s, 2, i, i, !0);
  else {
    t = 1.4 * Math.sqrt(r), t = t > 16 ? 16 : t | 0, i = i.times(1 / Dn(5, t)), i = Rt(s, 2, i, i, !0);
    for (var o, a = new s(5), u = new s(16), c = new s(20); t--; )
      o = i.times(i), i = i.times(a.plus(o.times(u.times(o).plus(c))));
  }
  return s.precision = e, s.rounding = n, W(i, e, n, !0);
};
L.hyperbolicTangent = L.tanh = function() {
  var t, e, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (t = r.precision, e = r.rounding, r.precision = t + 7, r.rounding = 1, ve(n.sinh(), n.cosh(), r.precision = t, r.rounding = e)) : new r(n.s);
};
L.inverseCosine = L.acos = function() {
  var t = this, e = t.constructor, n = t.abs().cmp(1), r = e.precision, i = e.rounding;
  return n !== -1 ? n === 0 ? t.isNeg() ? tt(e, r, i) : new e(0) : new e(NaN) : t.isZero() ? tt(e, r + 4, i).times(0.5) : (e.precision = r + 6, e.rounding = 1, t = new e(1).minus(t).div(t.plus(1)).sqrt().atan(), e.precision = r, e.rounding = i, t.times(2));
};
L.inverseHyperbolicCosine = L.acosh = function() {
  var t, e, n = this, r = n.constructor;
  return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (t = r.precision, e = r.rounding, r.precision = t + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, ee = !1, n = n.times(n).minus(1).sqrt().plus(n), ee = !0, r.precision = t, r.rounding = e, n.ln()) : new r(n);
};
L.inverseHyperbolicSine = L.asinh = function() {
  var t, e, n = this, r = n.constructor;
  return !n.isFinite() || n.isZero() ? new r(n) : (t = r.precision, e = r.rounding, r.precision = t + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, ee = !1, n = n.times(n).plus(1).sqrt().plus(n), ee = !0, r.precision = t, r.rounding = e, n.ln());
};
L.inverseHyperbolicTangent = L.atanh = function() {
  var t, e, n, r, i = this, s = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (t = s.precision, e = s.rounding, r = i.sd(), Math.max(r, t) < 2 * -i.e - 1 ? W(new s(i), t, e, !0) : (s.precision = n = r - i.e, i = ve(i.plus(1), new s(1).minus(i), n + t, 1), s.precision = t + 4, s.rounding = 1, i = i.ln(), s.precision = t, s.rounding = e, i.times(0.5))) : new s(NaN);
};
L.inverseSine = L.asin = function() {
  var t, e, n, r, i = this, s = i.constructor;
  return i.isZero() ? new s(i) : (e = i.abs().cmp(1), n = s.precision, r = s.rounding, e !== -1 ? e === 0 ? (t = tt(s, n + 4, r).times(0.5), t.s = i.s, t) : new s(NaN) : (s.precision = n + 6, s.rounding = 1, i = i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan(), s.precision = n, s.rounding = r, i.times(2)));
};
L.inverseTangent = L.atan = function() {
  var t, e, n, r, i, s, o, a, u, c = this, h = c.constructor, l = h.precision, d = h.rounding;
  if (c.isFinite()) {
    if (c.isZero())
      return new h(c);
    if (c.abs().eq(1) && l + 4 <= Nn)
      return o = tt(h, l + 4, d).times(0.25), o.s = c.s, o;
  } else {
    if (!c.s) return new h(NaN);
    if (l + 4 <= Nn)
      return o = tt(h, l + 4, d).times(0.5), o.s = c.s, o;
  }
  for (h.precision = a = l + 10, h.rounding = 1, n = Math.min(28, a / J + 2 | 0), t = n; t; --t) c = c.div(c.times(c).plus(1).sqrt().plus(1));
  for (ee = !1, e = Math.ceil(a / J), r = 1, u = c.times(c), o = new h(c), i = c; t !== -1; )
    if (i = i.times(u), s = o.minus(i.div(r += 2)), i = i.times(u), o = s.plus(i.div(r += 2)), o.d[e] !== void 0) for (t = e; o.d[t] === s.d[t] && t--; ) ;
  return n && (o = o.times(2 << n - 1)), ee = !0, W(o, h.precision = l, h.rounding = d, !0);
};
L.isFinite = function() {
  return !!this.d;
};
L.isInteger = L.isInt = function() {
  return !!this.d && Oe(this.e / J) > this.d.length - 2;
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
L.lessThan = L.lt = function(t) {
  return this.cmp(t) < 0;
};
L.lessThanOrEqualTo = L.lte = function(t) {
  return this.cmp(t) < 1;
};
L.logarithm = L.log = function(t) {
  var e, n, r, i, s, o, a, u, c = this, h = c.constructor, l = h.precision, d = h.rounding, g = 5;
  if (t == null)
    t = new h(10), e = !0;
  else {
    if (t = new h(t), n = t.d, t.s < 0 || !n || !n[0] || t.eq(1)) return new h(NaN);
    e = t.eq(10);
  }
  if (n = c.d, c.s < 0 || !n || !n[0] || c.eq(1))
    return new h(n && !n[0] ? -1 / 0 : c.s != 1 ? NaN : n ? 0 : 1 / 0);
  if (e)
    if (n.length > 1)
      s = !0;
    else {
      for (i = n[0]; i % 10 === 0; ) i /= 10;
      s = i !== 1;
    }
  if (ee = !1, a = l + g, o = ht(c, a), r = e ? an(h, a + 10) : ht(t, a), u = ve(o, r, a, 1), $t(u.d, i = l, d))
    do
      if (a += 10, o = ht(c, a), r = e ? an(h, a + 10) : ht(t, a), u = ve(o, r, a, 1), !s) {
        +Le(u.d).slice(i + 1, i + 15) + 1 == 1e14 && (u = W(u, l + 1, 0));
        break;
      }
    while ($t(u.d, i += 10, d));
  return ee = !0, W(u, l, d);
};
L.minus = L.sub = function(t) {
  var e, n, r, i, s, o, a, u, c, h, l, d, g = this, E = g.constructor;
  if (t = new E(t), !g.d || !t.d)
    return !g.s || !t.s ? t = new E(NaN) : g.d ? t.s = -t.s : t = new E(t.d || g.s !== t.s ? g : NaN), t;
  if (g.s != t.s)
    return t.s = -t.s, g.plus(t);
  if (c = g.d, d = t.d, a = E.precision, u = E.rounding, !c[0] || !d[0]) {
    if (d[0]) t.s = -t.s;
    else if (c[0]) t = new E(g);
    else return new E(u === 3 ? -0 : 0);
    return ee ? W(t, a, u) : t;
  }
  if (n = Oe(t.e / J), h = Oe(g.e / J), c = c.slice(), s = h - n, s) {
    for (l = s < 0, l ? (e = c, s = -s, o = d.length) : (e = d, n = h, o = c.length), r = Math.max(Math.ceil(a / J), o) + 2, s > r && (s = r, e.length = 1), e.reverse(), r = s; r--; ) e.push(0);
    e.reverse();
  } else {
    for (r = c.length, o = d.length, l = r < o, l && (o = r), r = 0; r < o; r++)
      if (c[r] != d[r]) {
        l = c[r] < d[r];
        break;
      }
    s = 0;
  }
  for (l && (e = c, c = d, d = e, t.s = -t.s), o = c.length, r = d.length - o; r > 0; --r) c[o++] = 0;
  for (r = d.length; r > s; ) {
    if (c[--r] < d[r]) {
      for (i = r; i && c[--i] === 0; ) c[i] = Qe - 1;
      --c[i], c[r] += Qe;
    }
    c[r] -= d[r];
  }
  for (; c[--o] === 0; ) c.pop();
  for (; c[0] === 0; c.shift()) --n;
  return c[0] ? (t.d = c, t.e = vn(c, n), ee ? W(t, a, u) : t) : new E(u === 3 ? -0 : 0);
};
L.modulo = L.mod = function(t) {
  var e, n = this, r = n.constructor;
  return t = new r(t), !n.d || !t.s || t.d && !t.d[0] ? new r(NaN) : !t.d || n.d && !n.d[0] ? W(new r(n), r.precision, r.rounding) : (ee = !1, r.modulo == 9 ? (e = ve(n, t.abs(), 0, 3, 1), e.s *= t.s) : e = ve(n, t, 0, r.modulo, 1), e = e.times(t), ee = !0, n.minus(e));
};
L.naturalExponential = L.exp = function() {
  return Pn(this);
};
L.naturalLogarithm = L.ln = function() {
  return ht(this);
};
L.negated = L.neg = function() {
  var t = new this.constructor(this);
  return t.s = -t.s, W(t);
};
L.plus = L.add = function(t) {
  var e, n, r, i, s, o, a, u, c, h, l = this, d = l.constructor;
  if (t = new d(t), !l.d || !t.d)
    return !l.s || !t.s ? t = new d(NaN) : l.d || (t = new d(t.d || l.s === t.s ? l : NaN)), t;
  if (l.s != t.s)
    return t.s = -t.s, l.minus(t);
  if (c = l.d, h = t.d, a = d.precision, u = d.rounding, !c[0] || !h[0])
    return h[0] || (t = new d(l)), ee ? W(t, a, u) : t;
  if (s = Oe(l.e / J), r = Oe(t.e / J), c = c.slice(), i = s - r, i) {
    for (i < 0 ? (n = c, i = -i, o = h.length) : (n = h, r = s, o = c.length), s = Math.ceil(a / J), o = s > o ? s + 1 : o + 1, i > o && (i = o, n.length = 1), n.reverse(); i--; ) n.push(0);
    n.reverse();
  }
  for (o = c.length, i = h.length, o - i < 0 && (i = o, n = h, h = c, c = n), e = 0; i; )
    e = (c[--i] = c[i] + h[i] + e) / Qe | 0, c[i] %= Qe;
  for (e && (c.unshift(e), ++r), o = c.length; c[--o] == 0; ) c.pop();
  return t.d = c, t.e = vn(c, r), ee ? W(t, a, u) : t;
};
L.precision = L.sd = function(t) {
  var e, n = this;
  if (t !== void 0 && t !== !!t && t !== 1 && t !== 0) throw Error(gt + t);
  return n.d ? (e = Ai(n.d), t && n.e + 1 > e && (e = n.e + 1)) : e = NaN, e;
};
L.round = function() {
  var t = this, e = t.constructor;
  return W(new e(t), t.e + 1, e.rounding);
};
L.sine = L.sin = function() {
  var t, e, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (t = r.precision, e = r.rounding, r.precision = t + Math.max(n.e, n.sd()) + J, r.rounding = 1, n = hu(r, Bi(r, n)), r.precision = t, r.rounding = e, W(at > 2 ? n.neg() : n, t, e, !0)) : new r(NaN);
};
L.squareRoot = L.sqrt = function() {
  var t, e, n, r, i, s, o = this, a = o.d, u = o.e, c = o.s, h = o.constructor;
  if (c !== 1 || !a || !a[0])
    return new h(!c || c < 0 && (!a || a[0]) ? NaN : a ? o : 1 / 0);
  for (ee = !1, c = Math.sqrt(+o), c == 0 || c == 1 / 0 ? (e = Le(a), (e.length + u) % 2 == 0 && (e += "0"), c = Math.sqrt(e), u = Oe((u + 1) / 2) - (u < 0 || u % 2), c == 1 / 0 ? e = "5e" + u : (e = c.toExponential(), e = e.slice(0, e.indexOf("e") + 1) + u), r = new h(e)) : r = new h(c.toString()), n = (u = h.precision) + 3; ; )
    if (s = r, r = s.plus(ve(o, s, n + 2, 1)).times(0.5), Le(s.d).slice(0, n) === (e = Le(r.d)).slice(0, n))
      if (e = e.slice(n - 3, n + 1), e == "9999" || !i && e == "4999") {
        if (!i && (W(s, u + 1, 0), s.times(s).eq(o))) {
          r = s;
          break;
        }
        n += 4, i = 1;
      } else {
        (!+e || !+e.slice(1) && e.charAt(0) == "5") && (W(r, u + 1, 1), t = !r.times(r).eq(o));
        break;
      }
  return ee = !0, W(r, u, h.rounding, t);
};
L.tangent = L.tan = function() {
  var t, e, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (t = r.precision, e = r.rounding, r.precision = t + 10, r.rounding = 1, n = n.sin(), n.s = 1, n = ve(n, new r(1).minus(n.times(n)).sqrt(), t + 10, 0), r.precision = t, r.rounding = e, W(at == 2 || at == 4 ? n.neg() : n, t, e, !0)) : new r(NaN);
};
L.times = L.mul = function(t) {
  var e, n, r, i, s, o, a, u, c, h = this, l = h.constructor, d = h.d, g = (t = new l(t)).d;
  if (t.s *= h.s, !d || !d[0] || !g || !g[0])
    return new l(!t.s || d && !d[0] && !g || g && !g[0] && !d ? NaN : !d || !g ? t.s / 0 : t.s * 0);
  for (n = Oe(h.e / J) + Oe(t.e / J), u = d.length, c = g.length, u < c && (s = d, d = g, g = s, o = u, u = c, c = o), s = [], o = u + c, r = o; r--; ) s.push(0);
  for (r = c; --r >= 0; ) {
    for (e = 0, i = u + r; i > r; )
      a = s[i] + g[r] * d[i - r - 1] + e, s[i--] = a % Qe | 0, e = a / Qe | 0;
    s[i] = (s[i] + e) % Qe | 0;
  }
  for (; !s[--o]; ) s.pop();
  return e ? ++n : s.shift(), t.d = s, t.e = vn(s, n), ee ? W(t, l.precision, l.rounding) : t;
};
L.toBinary = function(t, e) {
  return Gn(this, 2, t, e);
};
L.toDecimalPlaces = L.toDP = function(t, e) {
  var n = this, r = n.constructor;
  return n = new r(n), t === void 0 ? n : (je(t, 0, vt), e === void 0 ? e = r.rounding : je(e, 0, 8), W(n, t + n.e + 1, e));
};
L.toExponential = function(t, e) {
  var n, r = this, i = r.constructor;
  return t === void 0 ? n = nt(r, !0) : (je(t, 0, vt), e === void 0 ? e = i.rounding : je(e, 0, 8), r = W(new i(r), t + 1, e), n = nt(r, !0, t + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
};
L.toFixed = function(t, e) {
  var n, r, i = this, s = i.constructor;
  return t === void 0 ? n = nt(i) : (je(t, 0, vt), e === void 0 ? e = s.rounding : je(e, 0, 8), r = W(new s(i), t + i.e + 1, e), n = nt(r, !1, t + r.e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n;
};
L.toFraction = function(t) {
  var e, n, r, i, s, o, a, u, c, h, l, d, g = this, E = g.d, f = g.constructor;
  if (!E) return new f(g);
  if (c = n = new f(1), r = u = new f(0), e = new f(r), s = e.e = Ai(E) - g.e - 1, o = s % J, e.d[0] = be(10, o < 0 ? J + o : o), t == null)
    t = s > 0 ? e : c;
  else {
    if (a = new f(t), !a.isInt() || a.lt(c)) throw Error(gt + a);
    t = a.gt(e) ? s > 0 ? e : c : a;
  }
  for (ee = !1, a = new f(Le(E)), h = f.precision, f.precision = s = E.length * J * 2; l = ve(a, e, 0, 1, 1), i = n.plus(l.times(r)), i.cmp(t) != 1; )
    n = r, r = i, i = c, c = u.plus(l.times(i)), u = i, i = e, e = a.minus(l.times(i)), a = i;
  return i = ve(t.minus(n), r, 0, 1, 1), u = u.plus(i.times(c)), n = n.plus(i.times(r)), u.s = c.s = g.s, d = ve(c, r, s, 1).minus(g).abs().cmp(ve(u, n, s, 1).minus(g).abs()) < 1 ? [c, r] : [u, n], f.precision = h, ee = !0, d;
};
L.toHexadecimal = L.toHex = function(t, e) {
  return Gn(this, 16, t, e);
};
L.toNearest = function(t, e) {
  var n = this, r = n.constructor;
  if (n = new r(n), t == null) {
    if (!n.d) return n;
    t = new r(1), e = r.rounding;
  } else {
    if (t = new r(t), e === void 0 ? e = r.rounding : je(e, 0, 8), !n.d) return t.s ? n : t;
    if (!t.d)
      return t.s && (t.s = n.s), t;
  }
  return t.d[0] ? (ee = !1, n = ve(n, t, 0, e, 1).times(t), ee = !0, W(n)) : (t.s = n.s, n = t), n;
};
L.toNumber = function() {
  return +this;
};
L.toOctal = function(t, e) {
  return Gn(this, 8, t, e);
};
L.toPower = L.pow = function(t) {
  var e, n, r, i, s, o, a = this, u = a.constructor, c = +(t = new u(t));
  if (!a.d || !t.d || !a.d[0] || !t.d[0]) return new u(be(+a, c));
  if (a = new u(a), a.eq(1)) return a;
  if (r = u.precision, s = u.rounding, t.eq(1)) return W(a, r, s);
  if (e = Oe(t.e / J), e >= t.d.length - 1 && (n = c < 0 ? -c : c) <= uu)
    return i = Ti(u, a, n, r), t.s < 0 ? new u(1).div(i) : W(i, r, s);
  if (o = a.s, o < 0) {
    if (e < t.d.length - 1) return new u(NaN);
    if (t.d[e] & 1 || (o = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
      return a.s = o, a;
  }
  return n = be(+a, c), e = n == 0 || !isFinite(n) ? Oe(c * (Math.log("0." + Le(a.d)) / Math.LN10 + a.e + 1)) : new u(n + "").e, e > u.maxE + 1 || e < u.minE - 1 ? new u(e > 0 ? o / 0 : 0) : (ee = !1, u.rounding = a.s = 1, n = Math.min(12, (e + "").length), i = Pn(t.times(ht(a, r + n)), r), i.d && (i = W(i, r + 5, 1), $t(i.d, r, s) && (e = r + 10, i = W(Pn(t.times(ht(a, e + n)), e), e + 5, 1), +Le(i.d).slice(r + 1, r + 15) + 1 == 1e14 && (i = W(i, r + 1, 0)))), i.s = o, ee = !0, u.rounding = s, W(i, r, s));
};
L.toPrecision = function(t, e) {
  var n, r = this, i = r.constructor;
  return t === void 0 ? n = nt(r, r.e <= i.toExpNeg || r.e >= i.toExpPos) : (je(t, 1, vt), e === void 0 ? e = i.rounding : je(e, 0, 8), r = W(new i(r), t, e), n = nt(r, t <= r.e || r.e <= i.toExpNeg, t)), r.isNeg() && !r.isZero() ? "-" + n : n;
};
L.toSignificantDigits = L.toSD = function(t, e) {
  var n = this, r = n.constructor;
  return t === void 0 ? (t = r.precision, e = r.rounding) : (je(t, 1, vt), e === void 0 ? e = r.rounding : je(e, 0, 8)), W(new r(n), t, e);
};
L.toString = function() {
  var t = this, e = t.constructor, n = nt(t, t.e <= e.toExpNeg || t.e >= e.toExpPos);
  return t.isNeg() && !t.isZero() ? "-" + n : n;
};
L.truncated = L.trunc = function() {
  return W(new this.constructor(this), this.e + 1, 1);
};
L.valueOf = L.toJSON = function() {
  var t = this, e = t.constructor, n = nt(t, t.e <= e.toExpNeg || t.e >= e.toExpPos);
  return t.isNeg() ? "-" + n : n;
};
function Le(t) {
  var e, n, r, i = t.length - 1, s = "", o = t[0];
  if (i > 0) {
    for (s += o, e = 1; e < i; e++)
      r = t[e] + "", n = J - r.length, n && (s += lt(n)), s += r;
    o = t[e], r = o + "", n = J - r.length, n && (s += lt(n));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return s + o;
}
function je(t, e, n) {
  if (t !== ~~t || t < e || t > n)
    throw Error(gt + t);
}
function $t(t, e, n, r) {
  var i, s, o, a;
  for (s = t[0]; s >= 10; s /= 10) --e;
  return --e < 0 ? (e += J, i = 0) : (i = Math.ceil((e + 1) / J), e %= J), s = be(10, J - e), a = t[i] % s | 0, r == null ? e < 3 ? (e == 0 ? a = a / 100 | 0 : e == 1 && (a = a / 10 | 0), o = n < 4 && a == 99999 || n > 3 && a == 49999 || a == 5e4 || a == 0) : o = (n < 4 && a + 1 == s || n > 3 && a + 1 == s / 2) && (t[i + 1] / s / 100 | 0) == be(10, e - 2) - 1 || (a == s / 2 || a == 0) && (t[i + 1] / s / 100 | 0) == 0 : e < 4 ? (e == 0 ? a = a / 1e3 | 0 : e == 1 ? a = a / 100 | 0 : e == 2 && (a = a / 10 | 0), o = (r || n < 4) && a == 9999 || !r && n > 3 && a == 4999) : o = ((r || n < 4) && a + 1 == s || !r && n > 3 && a + 1 == s / 2) && (t[i + 1] / s / 1e3 | 0) == be(10, e - 3) - 1, o;
}
function Wt(t, e, n) {
  for (var r, i = [0], s, o = 0, a = t.length; o < a; ) {
    for (s = i.length; s--; ) i[s] *= e;
    for (i[0] += Mn.indexOf(t.charAt(o++)), r = 0; r < i.length; r++)
      i[r] > n - 1 && (i[r + 1] === void 0 && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n);
  }
  return i.reverse();
}
function lu(t, e) {
  var n, r, i;
  if (e.isZero()) return e;
  r = e.d.length, r < 32 ? (n = Math.ceil(r / 3), i = (1 / Dn(4, n)).toString()) : (n = 16, i = "2.3283064365386962890625e-10"), t.precision += n, e = Rt(t, 1, e.times(i), new t(1));
  for (var s = n; s--; ) {
    var o = e.times(e);
    e = o.times(o).minus(o).times(8).plus(1);
  }
  return t.precision -= n, e;
}
var ve = /* @__PURE__ */ function() {
  function t(r, i, s) {
    var o, a = 0, u = r.length;
    for (r = r.slice(); u--; )
      o = r[u] * i + a, r[u] = o % s | 0, a = o / s | 0;
    return a && r.unshift(a), r;
  }
  function e(r, i, s, o) {
    var a, u;
    if (s != o)
      u = s > o ? 1 : -1;
    else
      for (a = u = 0; a < s; a++)
        if (r[a] != i[a]) {
          u = r[a] > i[a] ? 1 : -1;
          break;
        }
    return u;
  }
  function n(r, i, s, o) {
    for (var a = 0; s--; )
      r[s] -= a, a = r[s] < i[s] ? 1 : 0, r[s] = a * o + r[s] - i[s];
    for (; !r[0] && r.length > 1; ) r.shift();
  }
  return function(r, i, s, o, a, u) {
    var c, h, l, d, g, E, f, w, C, D, p, y, m, v, A, _, F, T, S, R, j = r.constructor, $ = r.s == i.s ? 1 : -1, X = r.d, I = i.d;
    if (!X || !X[0] || !I || !I[0])
      return new j(
        // Return NaN if either NaN, or both Infinity or 0.
        !r.s || !i.s || (X ? I && X[0] == I[0] : !I) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          X && X[0] == 0 || !I ? $ * 0 : $ / 0
        )
      );
    for (u ? (g = 1, h = r.e - i.e) : (u = Qe, g = J, h = Oe(r.e / g) - Oe(i.e / g)), S = I.length, F = X.length, C = new j($), D = C.d = [], l = 0; I[l] == (X[l] || 0); l++) ;
    if (I[l] > (X[l] || 0) && h--, s == null ? (v = s = j.precision, o = j.rounding) : a ? v = s + (r.e - i.e) + 1 : v = s, v < 0)
      D.push(1), E = !0;
    else {
      if (v = v / g + 2 | 0, l = 0, S == 1) {
        for (d = 0, I = I[0], v++; (l < F || d) && v--; l++)
          A = d * u + (X[l] || 0), D[l] = A / I | 0, d = A % I | 0;
        E = d || l < F;
      } else {
        for (d = u / (I[0] + 1) | 0, d > 1 && (I = t(I, d, u), X = t(X, d, u), S = I.length, F = X.length), _ = S, p = X.slice(0, S), y = p.length; y < S; ) p[y++] = 0;
        R = I.slice(), R.unshift(0), T = I[0], I[1] >= u / 2 && ++T;
        do
          d = 0, c = e(I, p, S, y), c < 0 ? (m = p[0], S != y && (m = m * u + (p[1] || 0)), d = m / T | 0, d > 1 ? (d >= u && (d = u - 1), f = t(I, d, u), w = f.length, y = p.length, c = e(f, p, w, y), c == 1 && (d--, n(f, S < w ? R : I, w, u))) : (d == 0 && (c = d = 1), f = I.slice()), w = f.length, w < y && f.unshift(0), n(p, f, y, u), c == -1 && (y = p.length, c = e(I, p, S, y), c < 1 && (d++, n(p, S < y ? R : I, y, u))), y = p.length) : c === 0 && (d++, p = [0]), D[l++] = d, c && p[0] ? p[y++] = X[_] || 0 : (p = [X[_]], y = 1);
        while ((_++ < F || p[0] !== void 0) && v--);
        E = p[0] !== void 0;
      }
      D[0] || D.shift();
    }
    if (g == 1)
      C.e = h, yi = E;
    else {
      for (l = 1, d = D[0]; d >= 10; d /= 10) l++;
      C.e = l + h * g - 1, W(C, a ? s + C.e + 1 : s, o, E);
    }
    return C;
  };
}();
function W(t, e, n, r) {
  var i, s, o, a, u, c, h, l, d, g = t.constructor;
  e: if (e != null) {
    if (l = t.d, !l) return t;
    for (i = 1, a = l[0]; a >= 10; a /= 10) i++;
    if (s = e - i, s < 0)
      s += J, o = e, h = l[d = 0], u = h / be(10, i - o - 1) % 10 | 0;
    else if (d = Math.ceil((s + 1) / J), a = l.length, d >= a)
      if (r) {
        for (; a++ <= d; ) l.push(0);
        h = u = 0, i = 1, s %= J, o = s - J + 1;
      } else
        break e;
    else {
      for (h = a = l[d], i = 1; a >= 10; a /= 10) i++;
      s %= J, o = s - J + i, u = o < 0 ? 0 : h / be(10, i - o - 1) % 10 | 0;
    }
    if (r = r || e < 0 || l[d + 1] !== void 0 || (o < 0 ? h : h % be(10, i - o - 1)), c = n < 4 ? (u || r) && (n == 0 || n == (t.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (n == 4 || r || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
    (s > 0 ? o > 0 ? h / be(10, i - o) : 0 : l[d - 1]) % 10 & 1 || n == (t.s < 0 ? 8 : 7)), e < 1 || !l[0])
      return l.length = 0, c ? (e -= t.e + 1, l[0] = be(10, (J - e % J) % J), t.e = -e || 0) : l[0] = t.e = 0, t;
    if (s == 0 ? (l.length = d, a = 1, d--) : (l.length = d + 1, a = be(10, J - s), l[d] = o > 0 ? (h / be(10, i - o) % be(10, o) | 0) * a : 0), c)
      for (; ; )
        if (d == 0) {
          for (s = 1, o = l[0]; o >= 10; o /= 10) s++;
          for (o = l[0] += a, a = 1; o >= 10; o /= 10) a++;
          s != a && (t.e++, l[0] == Qe && (l[0] = 1));
          break;
        } else {
          if (l[d] += a, l[d] != Qe) break;
          l[d--] = 0, a = 1;
        }
    for (s = l.length; l[--s] === 0; ) l.pop();
  }
  return ee && (t.e > g.maxE ? (t.d = null, t.e = NaN) : t.e < g.minE && (t.e = 0, t.d = [0])), t;
}
function nt(t, e, n) {
  if (!t.isFinite()) return Si(t);
  var r, i = t.e, s = Le(t.d), o = s.length;
  return e ? (n && (r = n - o) > 0 ? s = s.charAt(0) + "." + s.slice(1) + lt(r) : o > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (t.e < 0 ? "e" : "e+") + t.e) : i < 0 ? (s = "0." + lt(-i - 1) + s, n && (r = n - o) > 0 && (s += lt(r))) : i >= o ? (s += lt(i + 1 - o), n && (r = n - i - 1) > 0 && (s = s + "." + lt(r))) : ((r = i + 1) < o && (s = s.slice(0, r) + "." + s.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (s += "."), s += lt(r))), s;
}
function vn(t, e) {
  var n = t[0];
  for (e *= J; n >= 10; n /= 10) e++;
  return e;
}
function an(t, e, n) {
  if (e > cu)
    throw ee = !0, n && (t.precision = n), Error(Ci);
  return W(new t(sn), e, 1, !0);
}
function tt(t, e, n) {
  if (e > Nn) throw Error(Ci);
  return W(new t(on), e, n, !0);
}
function Ai(t) {
  var e = t.length - 1, n = e * J + 1;
  if (e = t[e], e) {
    for (; e % 10 == 0; e /= 10) n--;
    for (e = t[0]; e >= 10; e /= 10) n++;
  }
  return n;
}
function lt(t) {
  for (var e = ""; t--; ) e += "0";
  return e;
}
function Ti(t, e, n, r) {
  var i, s = new t(1), o = Math.ceil(r / J + 4);
  for (ee = !1; ; ) {
    if (n % 2 && (s = s.times(e), yr(s.d, o) && (i = !0)), n = Oe(n / 2), n === 0) {
      n = s.d.length - 1, i && s.d[n] === 0 && ++s.d[n];
      break;
    }
    e = e.times(e), yr(e.d, o);
  }
  return ee = !0, s;
}
function wr(t) {
  return t.d[t.d.length - 1] & 1;
}
function xi(t, e, n) {
  for (var r, i, s = new t(e[0]), o = 0; ++o < e.length; ) {
    if (i = new t(e[o]), !i.s) {
      s = i;
      break;
    }
    r = s.cmp(i), (r === n || r === 0 && s.s === n) && (s = i);
  }
  return s;
}
function Pn(t, e) {
  var n, r, i, s, o, a, u, c = 0, h = 0, l = 0, d = t.constructor, g = d.rounding, E = d.precision;
  if (!t.d || !t.d[0] || t.e > 17)
    return new d(t.d ? t.d[0] ? t.s < 0 ? 0 : 1 / 0 : 1 : t.s ? t.s < 0 ? 0 : t : NaN);
  for (e == null ? (ee = !1, u = E) : u = e, a = new d(0.03125); t.e > -2; )
    t = t.times(a), l += 5;
  for (r = Math.log(be(2, l)) / Math.LN10 * 2 + 5 | 0, u += r, n = s = o = new d(1), d.precision = u; ; ) {
    if (s = W(s.times(t), u, 1), n = n.times(++h), a = o.plus(ve(s, n, u, 1)), Le(a.d).slice(0, u) === Le(o.d).slice(0, u)) {
      for (i = l; i--; ) o = W(o.times(o), u, 1);
      if (e == null)
        if (c < 3 && $t(o.d, u - r, g, c))
          d.precision = u += 10, n = s = a = new d(1), h = 0, c++;
        else
          return W(o, d.precision = E, g, ee = !0);
      else
        return d.precision = E, o;
    }
    o = a;
  }
}
function ht(t, e) {
  var n, r, i, s, o, a, u, c, h, l, d, g = 1, E = 10, f = t, w = f.d, C = f.constructor, D = C.rounding, p = C.precision;
  if (f.s < 0 || !w || !w[0] || !f.e && w[0] == 1 && w.length == 1)
    return new C(w && !w[0] ? -1 / 0 : f.s != 1 ? NaN : w ? 0 : f);
  if (e == null ? (ee = !1, h = p) : h = e, C.precision = h += E, n = Le(w), r = n.charAt(0), Math.abs(s = f.e) < 15e14) {
    for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3; )
      f = f.times(t), n = Le(f.d), r = n.charAt(0), g++;
    s = f.e, r > 1 ? (f = new C("0." + n), s++) : f = new C(r + "." + n.slice(1));
  } else
    return c = an(C, h + 2, p).times(s + ""), f = ht(new C(r + "." + n.slice(1)), h - E).plus(c), C.precision = p, e == null ? W(f, p, D, ee = !0) : f;
  for (l = f, u = o = f = ve(f.minus(1), f.plus(1), h, 1), d = W(f.times(f), h, 1), i = 3; ; ) {
    if (o = W(o.times(d), h, 1), c = u.plus(ve(o, new C(i), h, 1)), Le(c.d).slice(0, h) === Le(u.d).slice(0, h))
      if (u = u.times(2), s !== 0 && (u = u.plus(an(C, h + 2, p).times(s + ""))), u = ve(u, new C(g), h, 1), e == null)
        if ($t(u.d, h - E, D, a))
          C.precision = h += E, c = o = f = ve(l.minus(1), l.plus(1), h, 1), d = W(f.times(f), h, 1), i = a = 1;
        else
          return W(u, C.precision = p, D, ee = !0);
      else
        return C.precision = p, u;
    u = c, i += 2;
  }
}
function Si(t) {
  return String(t.s * t.s / 0);
}
function Zt(t, e) {
  var n, r, i;
  for ((n = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (r = e.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +e.slice(r + 1), e = e.substring(0, r)) : n < 0 && (n = e.length), r = 0; e.charCodeAt(r) === 48; r++) ;
  for (i = e.length; e.charCodeAt(i - 1) === 48; --i) ;
  if (e = e.slice(r, i), e) {
    if (i -= r, t.e = n = n - r - 1, t.d = [], r = (n + 1) % J, n < 0 && (r += J), r < i) {
      for (r && t.d.push(+e.slice(0, r)), i -= J; r < i; ) t.d.push(+e.slice(r, r += J));
      e = e.slice(r), r = J - e.length;
    } else
      r -= i;
    for (; r--; ) e += "0";
    t.d.push(+e), ee && (t.e > t.constructor.maxE ? (t.d = null, t.e = NaN) : t.e < t.constructor.minE && (t.e = 0, t.d = [0]));
  } else
    t.e = 0, t.d = [0];
  return t;
}
function fu(t, e) {
  var n, r, i, s, o, a, u, c, h;
  if (e.indexOf("_") > -1) {
    if (e = e.replace(/(\d)_(?=\d)/g, "$1"), _i.test(e)) return Zt(t, e);
  } else if (e === "Infinity" || e === "NaN")
    return +e || (t.s = NaN), t.e = NaN, t.d = null, t;
  if (ou.test(e))
    n = 16, e = e.toLowerCase();
  else if (su.test(e))
    n = 2;
  else if (au.test(e))
    n = 8;
  else
    throw Error(gt + e);
  for (s = e.search(/p/i), s > 0 ? (u = +e.slice(s + 1), e = e.substring(2, s)) : e = e.slice(2), s = e.indexOf("."), o = s >= 0, r = t.constructor, o && (e = e.replace(".", ""), a = e.length, s = a - s, i = Ti(r, new r(n), s, s * 2)), c = Wt(e, n, Qe), h = c.length - 1, s = h; c[s] === 0; --s) c.pop();
  return s < 0 ? new r(t.s * 0) : (t.e = vn(c, h), t.d = c, ee = !1, o && (t = ve(t, i, a * 4)), u && (t = t.times(Math.abs(u) < 54 ? be(2, u) : Nt.pow(2, u))), ee = !0, t);
}
function hu(t, e) {
  var n, r = e.d.length;
  if (r < 3)
    return e.isZero() ? e : Rt(t, 2, e, e);
  n = 1.4 * Math.sqrt(r), n = n > 16 ? 16 : n | 0, e = e.times(1 / Dn(5, n)), e = Rt(t, 2, e, e);
  for (var i, s = new t(5), o = new t(16), a = new t(20); n--; )
    i = e.times(e), e = e.times(s.plus(i.times(o.times(i).minus(a))));
  return e;
}
function Rt(t, e, n, r, i) {
  var s, o, a, u, c = t.precision, h = Math.ceil(c / J);
  for (ee = !1, u = n.times(n), a = new t(r); ; ) {
    if (o = ve(a.times(u), new t(e++ * e++), c, 1), a = i ? r.plus(o) : r.minus(o), r = ve(o.times(u), new t(e++ * e++), c, 1), o = a.plus(r), o.d[h] !== void 0) {
      for (s = h; o.d[s] === a.d[s] && s--; ) ;
      if (s == -1) break;
    }
    s = a, a = r, r = o, o = s;
  }
  return ee = !0, o.d.length = h + 1, o;
}
function Dn(t, e) {
  for (var n = t; --e; ) n *= t;
  return n;
}
function Bi(t, e) {
  var n, r = e.s < 0, i = tt(t, t.precision, 1), s = i.times(0.5);
  if (e = e.abs(), e.lte(s))
    return at = r ? 4 : 1, e;
  if (n = e.divToInt(i), n.isZero())
    at = r ? 3 : 2;
  else {
    if (e = e.minus(n.times(i)), e.lte(s))
      return at = wr(n) ? r ? 2 : 3 : r ? 4 : 1, e;
    at = wr(n) ? r ? 1 : 4 : r ? 3 : 2;
  }
  return e.minus(i).abs();
}
function Gn(t, e, n, r) {
  var i, s, o, a, u, c, h, l, d, g = t.constructor, E = n !== void 0;
  if (E ? (je(n, 1, vt), r === void 0 ? r = g.rounding : je(r, 0, 8)) : (n = g.precision, r = g.rounding), !t.isFinite())
    h = Si(t);
  else {
    for (h = nt(t), o = h.indexOf("."), E ? (i = 2, e == 16 ? n = n * 4 - 3 : e == 8 && (n = n * 3 - 2)) : i = e, o >= 0 && (h = h.replace(".", ""), d = new g(1), d.e = h.length - o, d.d = Wt(nt(d), 10, i), d.e = d.d.length), l = Wt(h, 10, i), s = u = l.length; l[--u] == 0; ) l.pop();
    if (!l[0])
      h = E ? "0p+0" : "0";
    else {
      if (o < 0 ? s-- : (t = new g(t), t.d = l, t.e = s, t = ve(t, d, n, r, 0, i), l = t.d, s = t.e, c = yi), o = l[n], a = i / 2, c = c || l[n + 1] !== void 0, c = r < 4 ? (o !== void 0 || c) && (r === 0 || r === (t.s < 0 ? 3 : 2)) : o > a || o === a && (r === 4 || c || r === 6 && l[n - 1] & 1 || r === (t.s < 0 ? 8 : 7)), l.length = n, c)
        for (; ++l[--n] > i - 1; )
          l[n] = 0, n || (++s, l.unshift(1));
      for (u = l.length; !l[u - 1]; --u) ;
      for (o = 0, h = ""; o < u; o++) h += Mn.charAt(l[o]);
      if (E) {
        if (u > 1)
          if (e == 16 || e == 8) {
            for (o = e == 16 ? 4 : 3, --u; u % o; u++) h += "0";
            for (l = Wt(h, i, e), u = l.length; !l[u - 1]; --u) ;
            for (o = 1, h = "1."; o < u; o++) h += Mn.charAt(l[o]);
          } else
            h = h.charAt(0) + "." + h.slice(1);
        h = h + (s < 0 ? "p" : "p+") + s;
      } else if (s < 0) {
        for (; ++s; ) h = "0" + h;
        h = "0." + h;
      } else if (++s > u) for (s -= u; s--; ) h += "0";
      else s < u && (h = h.slice(0, s) + "." + h.slice(s));
    }
    h = (e == 16 ? "0x" : e == 2 ? "0b" : e == 8 ? "0o" : "") + h;
  }
  return t.s < 0 ? "-" + h : h;
}
function yr(t, e) {
  if (t.length > e)
    return t.length = e, !0;
}
function du(t) {
  return new this(t).abs();
}
function pu(t) {
  return new this(t).acos();
}
function mu(t) {
  return new this(t).acosh();
}
function gu(t, e) {
  return new this(t).plus(e);
}
function vu(t) {
  return new this(t).asin();
}
function Du(t) {
  return new this(t).asinh();
}
function Eu(t) {
  return new this(t).atan();
}
function wu(t) {
  return new this(t).atanh();
}
function yu(t, e) {
  t = new this(t), e = new this(e);
  var n, r = this.precision, i = this.rounding, s = r + 4;
  return !t.s || !e.s ? n = new this(NaN) : !t.d && !e.d ? (n = tt(this, s, 1).times(e.s > 0 ? 0.25 : 0.75), n.s = t.s) : !e.d || t.isZero() ? (n = e.s < 0 ? tt(this, r, i) : new this(0), n.s = t.s) : !t.d || e.isZero() ? (n = tt(this, s, 1).times(0.5), n.s = t.s) : e.s < 0 ? (this.precision = s, this.rounding = 1, n = this.atan(ve(t, e, s, 1)), e = tt(this, s, 1), this.precision = r, this.rounding = i, n = t.s < 0 ? n.minus(e) : n.plus(e)) : n = this.atan(ve(t, e, s, 1)), n;
}
function Cu(t) {
  return new this(t).cbrt();
}
function Fu(t) {
  return W(t = new this(t), t.e + 1, 2);
}
function bu(t, e, n) {
  return new this(t).clamp(e, n);
}
function _u(t) {
  if (!t || typeof t != "object") throw Error(gn + "Object expected");
  var e, n, r, i = t.defaults === !0, s = [
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
  for (e = 0; e < s.length; e += 3)
    if (n = s[e], i && (this[n] = Rn[n]), (r = t[n]) !== void 0)
      if (Oe(r) === r && r >= s[e + 1] && r <= s[e + 2]) this[n] = r;
      else throw Error(gt + n + ": " + r);
  if (n = "crypto", i && (this[n] = Rn[n]), (r = t[n]) !== void 0)
    if (r === !0 || r === !1 || r === 0 || r === 1)
      if (r)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[n] = !0;
        else
          throw Error(Fi);
      else
        this[n] = !1;
    else
      throw Error(gt + n + ": " + r);
  return this;
}
function Au(t) {
  return new this(t).cos();
}
function Tu(t) {
  return new this(t).cosh();
}
function Mi(t) {
  var e, n, r;
  function i(s) {
    var o, a, u, c = this;
    if (!(c instanceof i)) return new i(s);
    if (c.constructor = i, Cr(s)) {
      c.s = s.s, ee ? !s.d || s.e > i.maxE ? (c.e = NaN, c.d = null) : s.e < i.minE ? (c.e = 0, c.d = [0]) : (c.e = s.e, c.d = s.d.slice()) : (c.e = s.e, c.d = s.d ? s.d.slice() : s.d);
      return;
    }
    if (u = typeof s, u === "number") {
      if (s === 0) {
        c.s = 1 / s < 0 ? -1 : 1, c.e = 0, c.d = [0];
        return;
      }
      if (s < 0 ? (s = -s, c.s = -1) : c.s = 1, s === ~~s && s < 1e7) {
        for (o = 0, a = s; a >= 10; a /= 10) o++;
        ee ? o > i.maxE ? (c.e = NaN, c.d = null) : o < i.minE ? (c.e = 0, c.d = [0]) : (c.e = o, c.d = [s]) : (c.e = o, c.d = [s]);
        return;
      }
      if (s * 0 !== 0) {
        s || (c.s = NaN), c.e = NaN, c.d = null;
        return;
      }
      return Zt(c, s.toString());
    }
    if (u === "string")
      return (a = s.charCodeAt(0)) === 45 ? (s = s.slice(1), c.s = -1) : (a === 43 && (s = s.slice(1)), c.s = 1), _i.test(s) ? Zt(c, s) : fu(c, s);
    if (u === "bigint")
      return s < 0 ? (s = -s, c.s = -1) : c.s = 1, Zt(c, s.toString());
    throw Error(gt + s);
  }
  if (i.prototype = L, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = _u, i.clone = Mi, i.isDecimal = Cr, i.abs = du, i.acos = pu, i.acosh = mu, i.add = gu, i.asin = vu, i.asinh = Du, i.atan = Eu, i.atanh = wu, i.atan2 = yu, i.cbrt = Cu, i.ceil = Fu, i.clamp = bu, i.cos = Au, i.cosh = Tu, i.div = xu, i.exp = Su, i.floor = Bu, i.hypot = Mu, i.ln = Ru, i.log = Nu, i.log10 = Lu, i.log2 = Pu, i.max = Iu, i.min = Uu, i.mod = Ou, i.mul = ku, i.pow = $u, i.random = zu, i.round = Vu, i.sign = Hu, i.sin = Xu, i.sinh = ju, i.sqrt = Yu, i.sub = Gu, i.sum = Ku, i.tan = qu, i.tanh = Wu, i.trunc = Zu, t === void 0 && (t = {}), t && t.defaults !== !0)
    for (r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], e = 0; e < r.length; ) t.hasOwnProperty(n = r[e++]) || (t[n] = this[n]);
  return i.config(t), i;
}
function xu(t, e) {
  return new this(t).div(e);
}
function Su(t) {
  return new this(t).exp();
}
function Bu(t) {
  return W(t = new this(t), t.e + 1, 3);
}
function Mu() {
  var t, e, n = new this(0);
  for (ee = !1, t = 0; t < arguments.length; )
    if (e = new this(arguments[t++]), e.d)
      n.d && (n = n.plus(e.times(e)));
    else {
      if (e.s)
        return ee = !0, new this(1 / 0);
      n = e;
    }
  return ee = !0, n.sqrt();
}
function Cr(t) {
  return t instanceof Nt || t && t.toStringTag === bi || !1;
}
function Ru(t) {
  return new this(t).ln();
}
function Nu(t, e) {
  return new this(t).log(e);
}
function Pu(t) {
  return new this(t).log(2);
}
function Lu(t) {
  return new this(t).log(10);
}
function Iu() {
  return xi(this, arguments, -1);
}
function Uu() {
  return xi(this, arguments, 1);
}
function Ou(t, e) {
  return new this(t).mod(e);
}
function ku(t, e) {
  return new this(t).mul(e);
}
function $u(t, e) {
  return new this(t).pow(e);
}
function zu(t) {
  var e, n, r, i, s = 0, o = new this(1), a = [];
  if (t === void 0 ? t = this.precision : je(t, 1, vt), r = Math.ceil(t / J), this.crypto)
    if (crypto.getRandomValues)
      for (e = crypto.getRandomValues(new Uint32Array(r)); s < r; )
        i = e[s], i >= 429e7 ? e[s] = crypto.getRandomValues(new Uint32Array(1))[0] : a[s++] = i % 1e7;
    else if (crypto.randomBytes) {
      for (e = crypto.randomBytes(r *= 4); s < r; )
        i = e[s] + (e[s + 1] << 8) + (e[s + 2] << 16) + ((e[s + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(e, s) : (a.push(i % 1e7), s += 4);
      s = r / 4;
    } else
      throw Error(Fi);
  else for (; s < r; ) a[s++] = Math.random() * 1e7 | 0;
  for (r = a[--s], t %= J, r && t && (i = be(10, J - t), a[s] = (r / i | 0) * i); a[s] === 0; s--) a.pop();
  if (s < 0)
    n = 0, a = [0];
  else {
    for (n = -1; a[0] === 0; n -= J) a.shift();
    for (r = 1, i = a[0]; i >= 10; i /= 10) r++;
    r < J && (n -= J - r);
  }
  return o.e = n, o.d = a, o;
}
function Vu(t) {
  return W(t = new this(t), t.e + 1, this.rounding);
}
function Hu(t) {
  return t = new this(t), t.d ? t.d[0] ? t.s : 0 * t.s : t.s || NaN;
}
function Xu(t) {
  return new this(t).sin();
}
function ju(t) {
  return new this(t).sinh();
}
function Yu(t) {
  return new this(t).sqrt();
}
function Gu(t, e) {
  return new this(t).sub(e);
}
function Ku() {
  var t = 0, e = arguments, n = new this(e[t]);
  for (ee = !1; n.s && ++t < e.length; ) n = n.plus(e[t]);
  return ee = !0, W(n, this.precision, this.rounding);
}
function qu(t) {
  return new this(t).tan();
}
function Wu(t) {
  return new this(t).tanh();
}
function Zu(t) {
  return W(t = new this(t), t.e + 1, 1);
}
L[Symbol.for("nodejs.util.inspect.custom")] = L.toString;
L[Symbol.toStringTag] = "Decimal";
var Nt = L.constructor = Mi(Rn);
sn = new Nt(sn);
on = new Nt(on);
var Ju = "BigNumber", Qu = ["?on", "config"], ec = /* @__PURE__ */ ie(Ju, Qu, (t) => {
  var {
    on: e,
    config: n
  } = t, r = Nt.clone({
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
  }, e && e("config", function(i, s) {
    i.precision !== s.precision && r.config({
      precision: i.precision
    });
  }), r;
}, {
  isClass: !0
});
const Ue = Math.cosh || function(t) {
  return Math.abs(t) < 1e-9 ? 1 - t : (Math.exp(t) + Math.exp(-t)) * 0.5;
}, We = Math.sinh || function(t) {
  return Math.abs(t) < 1e-9 ? t : (Math.exp(t) - Math.exp(-t)) * 0.5;
}, tc = (t) => {
  const e = Math.sin(0.5 * t);
  return -2 * e * e;
}, An = function(t, e) {
  return t = Math.abs(t), e = Math.abs(e), t < e && ([t, e] = [e, t]), t < 1e8 ? Math.sqrt(t * t + e * e) : (e /= t, t * Math.sqrt(1 + e * e));
}, Tt = function() {
  throw SyntaxError("Invalid Param");
};
function Tn(t, e) {
  const n = Math.abs(t), r = Math.abs(e);
  return t === 0 ? Math.log(r) : e === 0 ? Math.log(n) : n < 3e3 && r < 3e3 ? Math.log(t * t + e * e) * 0.5 : (t = t * 0.5, e = e * 0.5, 0.5 * Math.log(t * t + e * e) + Math.LN2);
}
const nc = { re: 0, im: 0 }, Dt = function(t, e) {
  const n = nc;
  if (t == null)
    n.re = n.im = 0;
  else if (e !== void 0)
    n.re = t, n.im = e;
  else
    switch (typeof t) {
      case "object":
        if ("im" in t && "re" in t)
          n.re = t.re, n.im = t.im;
        else if ("abs" in t && "arg" in t) {
          if (!isFinite(t.abs) && isFinite(t.arg))
            return B.INFINITY;
          n.re = t.abs * Math.cos(t.arg), n.im = t.abs * Math.sin(t.arg);
        } else if ("r" in t && "phi" in t) {
          if (!isFinite(t.r) && isFinite(t.phi))
            return B.INFINITY;
          n.re = t.r * Math.cos(t.phi), n.im = t.r * Math.sin(t.phi);
        } else t.length === 2 ? (n.re = t[0], n.im = t[1]) : Tt();
        break;
      case "string":
        n.im = /* void */
        n.re = 0;
        const r = t.replace(/_/g, "").match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g);
        let i = 1, s = 0;
        r === null && Tt();
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          a === " " || a === "	" || a === `
` || (a === "+" ? i++ : a === "-" ? s++ : a === "i" || a === "I" ? (i + s === 0 && Tt(), r[o + 1] !== " " && !isNaN(r[o + 1]) ? (n.im += parseFloat((s % 2 ? "-" : "") + r[o + 1]), o++) : n.im += parseFloat((s % 2 ? "-" : "") + "1"), i = s = 0) : ((i + s === 0 || isNaN(a)) && Tt(), r[o + 1] === "i" || r[o + 1] === "I" ? (n.im += parseFloat((s % 2 ? "-" : "") + a), o++) : n.re += parseFloat((s % 2 ? "-" : "") + a), i = s = 0));
        }
        i + s > 0 && Tt();
        break;
      case "number":
        n.im = 0, n.re = t;
        break;
      default:
        Tt();
    }
  return isNaN(n.re) || isNaN(n.im), n;
};
function B(t, e) {
  if (!(this instanceof B))
    return new B(t, e);
  const n = Dt(t, e);
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
    const t = An(this.re, this.im);
    return new B(
      this.re / t,
      this.im / t
    );
  },
  /**
   * Adds two complex numbers
   *
   * @returns {Complex}
   */
  add: function(t, e) {
    const n = Dt(t, e), r = this.isInfinite(), i = !(isFinite(n.re) && isFinite(n.im));
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
  sub: function(t, e) {
    const n = Dt(t, e), r = this.isInfinite(), i = !(isFinite(n.re) && isFinite(n.im));
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
  mul: function(t, e) {
    const n = Dt(t, e), r = this.isInfinite(), i = !(isFinite(n.re) && isFinite(n.im)), s = this.re === 0 && this.im === 0, o = n.re === 0 && n.im === 0;
    return r && o || i && s ? B.NAN : r || i ? B.INFINITY : n.im === 0 && this.im === 0 ? new B(this.re * n.re, 0) : new B(
      this.re * n.re - this.im * n.im,
      this.re * n.im + this.im * n.re
    );
  },
  /**
   * Divides two complex numbers
   *
   * @returns {Complex}
   */
  div: function(t, e) {
    const n = Dt(t, e), r = this.isInfinite(), i = !(isFinite(n.re) && isFinite(n.im)), s = this.re === 0 && this.im === 0, o = n.re === 0 && n.im === 0;
    if (s && o || r && i)
      return B.NAN;
    if (o || r)
      return B.INFINITY;
    if (s || i)
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
  pow: function(t, e) {
    const n = Dt(t, e), r = this.re === 0 && this.im === 0;
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
    const s = Math.atan2(this.im, this.re), o = Tn(this.re, this.im);
    let a = Math.exp(n.re * o - n.im * s), u = n.im * o + n.re * s;
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
    const t = this.re, e = this.im;
    if (e === 0)
      return t >= 0 ? new B(Math.sqrt(t), 0) : new B(0, Math.sqrt(-t));
    const n = An(t, e);
    let r = Math.sqrt(0.5 * (n + Math.abs(t))), i = Math.abs(e) / (2 * r);
    return t >= 0 ? new B(r, e < 0 ? -i : i) : new B(i, e < 0 ? -r : r);
  },
  /**
   * Calculate the complex exponent
   *
   * @returns {Complex}
   */
  exp: function() {
    const t = Math.exp(this.re);
    return this.im === 0 ? new B(t, 0) : new B(
      t * Math.cos(this.im),
      t * Math.sin(this.im)
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
    const t = this.re, e = this.im;
    return new B(
      Math.expm1(t) * Math.cos(e) + tc(e),
      Math.exp(t) * Math.sin(e)
    );
  },
  /**
   * Calculate the natural log
   *
   * @returns {Complex}
   */
  log: function() {
    const t = this.re, e = this.im;
    return e === 0 && t > 0 ? new B(Math.log(t), 0) : new B(
      Tn(t, e),
      Math.atan2(e, t)
    );
  },
  /**
   * Calculate the magnitude of the complex number
   *
   * @returns {number}
   */
  abs: function() {
    return An(this.re, this.im);
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
    const t = this.re, e = this.im;
    return new B(
      Math.sin(t) * Ue(e),
      Math.cos(t) * We(e)
    );
  },
  /**
   * Calculate the cosine
   *
   * @returns {Complex}
   */
  cos: function() {
    const t = this.re, e = this.im;
    return new B(
      Math.cos(t) * Ue(e),
      -Math.sin(t) * We(e)
    );
  },
  /**
   * Calculate the tangent
   *
   * @returns {Complex}
   */
  tan: function() {
    const t = 2 * this.re, e = 2 * this.im, n = Math.cos(t) + Ue(e);
    return new B(
      Math.sin(t) / n,
      We(e) / n
    );
  },
  /**
   * Calculate the cotangent
   *
   * @returns {Complex}
   */
  cot: function() {
    const t = 2 * this.re, e = 2 * this.im, n = Math.cos(t) - Ue(e);
    return new B(
      -Math.sin(t) / n,
      We(e) / n
    );
  },
  /**
   * Calculate the secant
   *
   * @returns {Complex}
   */
  sec: function() {
    const t = this.re, e = this.im, n = 0.5 * Ue(2 * e) + 0.5 * Math.cos(2 * t);
    return new B(
      Math.cos(t) * Ue(e) / n,
      Math.sin(t) * We(e) / n
    );
  },
  /**
   * Calculate the cosecans
   *
   * @returns {Complex}
   */
  csc: function() {
    const t = this.re, e = this.im, n = 0.5 * Ue(2 * e) - 0.5 * Math.cos(2 * t);
    return new B(
      Math.sin(t) * Ue(e) / n,
      -Math.cos(t) * We(e) / n
    );
  },
  /**
   * Calculate the complex arcus sinus
   *
   * @returns {Complex}
   */
  asin: function() {
    const t = this.re, e = this.im, n = new B(
      e * e - t * t + 1,
      -2 * t * e
    ).sqrt(), r = new B(
      n.re - e,
      n.im + t
    ).log();
    return new B(r.im, -r.re);
  },
  /**
   * Calculate the complex arcus cosinus
   *
   * @returns {Complex}
   */
  acos: function() {
    const t = this.re, e = this.im, n = new B(
      e * e - t * t + 1,
      -2 * t * e
    ).sqrt(), r = new B(
      n.re - e,
      n.im + t
    ).log();
    return new B(Math.PI / 2 - r.im, r.re);
  },
  /**
   * Calculate the complex arcus tangent
   *
   * @returns {Complex}
   */
  atan: function() {
    const t = this.re, e = this.im;
    if (t === 0) {
      if (e === 1)
        return new B(0, 1 / 0);
      if (e === -1)
        return new B(0, -1 / 0);
    }
    const n = t * t + (1 - e) * (1 - e), r = new B(
      (1 - e * e - t * t) / n,
      -2 * t / n
    ).log();
    return new B(-0.5 * r.im, 0.5 * r.re);
  },
  /**
   * Calculate the complex arcus cotangent
   *
   * @returns {Complex}
   */
  acot: function() {
    const t = this.re, e = this.im;
    if (e === 0)
      return new B(Math.atan2(1, t), 0);
    const n = t * t + e * e;
    return n !== 0 ? new B(
      t / n,
      -e / n
    ).atan() : new B(
      t !== 0 ? t / 0 : 0,
      e !== 0 ? -e / 0 : 0
    ).atan();
  },
  /**
   * Calculate the complex arcus secant
   *
   * @returns {Complex}
   */
  asec: function() {
    const t = this.re, e = this.im;
    if (t === 0 && e === 0)
      return new B(0, 1 / 0);
    const n = t * t + e * e;
    return n !== 0 ? new B(
      t / n,
      -e / n
    ).acos() : new B(
      t !== 0 ? t / 0 : 0,
      e !== 0 ? -e / 0 : 0
    ).acos();
  },
  /**
   * Calculate the complex arcus cosecans
   *
   * @returns {Complex}
   */
  acsc: function() {
    const t = this.re, e = this.im;
    if (t === 0 && e === 0)
      return new B(Math.PI / 2, 1 / 0);
    const n = t * t + e * e;
    return n !== 0 ? new B(
      t / n,
      -e / n
    ).asin() : new B(
      t !== 0 ? t / 0 : 0,
      e !== 0 ? -e / 0 : 0
    ).asin();
  },
  /**
   * Calculate the complex sinh
   *
   * @returns {Complex}
   */
  sinh: function() {
    const t = this.re, e = this.im;
    return new B(
      We(t) * Math.cos(e),
      Ue(t) * Math.sin(e)
    );
  },
  /**
   * Calculate the complex cosh
   *
   * @returns {Complex}
   */
  cosh: function() {
    const t = this.re, e = this.im;
    return new B(
      Ue(t) * Math.cos(e),
      We(t) * Math.sin(e)
    );
  },
  /**
   * Calculate the complex tanh
   *
   * @returns {Complex}
   */
  tanh: function() {
    const t = 2 * this.re, e = 2 * this.im, n = Ue(t) + Math.cos(e);
    return new B(
      We(t) / n,
      Math.sin(e) / n
    );
  },
  /**
   * Calculate the complex coth
   *
   * @returns {Complex}
   */
  coth: function() {
    const t = 2 * this.re, e = 2 * this.im, n = Ue(t) - Math.cos(e);
    return new B(
      We(t) / n,
      -Math.sin(e) / n
    );
  },
  /**
   * Calculate the complex csch
   *
   * @returns {Complex}
   */
  csch: function() {
    const t = this.re, e = this.im, n = Math.cos(2 * e) - Ue(2 * t);
    return new B(
      -2 * We(t) * Math.cos(e) / n,
      2 * Ue(t) * Math.sin(e) / n
    );
  },
  /**
   * Calculate the complex sech
   *
   * @returns {Complex}
   */
  sech: function() {
    const t = this.re, e = this.im, n = Math.cos(2 * e) + Ue(2 * t);
    return new B(
      2 * Ue(t) * Math.cos(e) / n,
      -2 * We(t) * Math.sin(e) / n
    );
  },
  /**
   * Calculate the complex asinh
   *
   * @returns {Complex}
   */
  asinh: function() {
    const t = this.re, e = this.im;
    if (e === 0) {
      if (t === 0)
        return new B(0, 0);
      const s = Math.abs(t), o = Math.log(s + Math.sqrt(s * s + 1));
      return new B(t < 0 ? -o : o, 0);
    }
    const n = t * t - e * e + 1, r = 2 * t * e, i = new B(n, r).sqrt();
    return new B(t + i.re, e + i.im).log();
  },
  /**
   * Calculate the complex acosh
   *
   * @returns {Complex}
   */
  acosh: function() {
    const t = this.re, e = this.im;
    if (e === 0) {
      if (t > 1)
        return new B(
          Math.log(t + Math.sqrt(t - 1) * Math.sqrt(t + 1)),
          0
        );
      if (t < -1) {
        const i = Math.sqrt(t * t - 1);
        return new B(Math.log(-t + i), Math.PI);
      }
      return new B(0, Math.acos(t));
    }
    const n = new B(t - 1, e).sqrt(), r = new B(t + 1, e).sqrt();
    return new B(
      t + n.re * r.re - n.im * r.im,
      e + n.re * r.im + n.im * r.re
    ).log();
  },
  /**
   * Calculate the complex atanh
   *
   * @returns {Complex}
   */
  atanh: function() {
    const t = this.re, e = this.im;
    if (e === 0) {
      if (t === 0)
        return new B(0, 0);
      if (t === 1)
        return new B(1 / 0, 0);
      if (t === -1)
        return new B(-1 / 0, 0);
      if (-1 < t && t < 1)
        return new B(
          0.5 * Math.log((1 + t) / (1 - t)),
          0
        );
      if (t > 1) {
        const u = (t + 1) / (t - 1);
        return new B(
          0.5 * Math.log(u),
          -Math.PI / 2
        );
      }
      const a = (1 + t) / (1 - t);
      return new B(
        0.5 * Math.log(-a),
        // log((1 - a)/(1 + a))
        Math.PI / 2
      );
    }
    const n = 1 - t, r = 1 + t, i = n * n + e * e;
    if (i === 0)
      return new B(
        t !== -1 ? t / 0 : 0,
        e !== 0 ? e / 0 : 0
      );
    const s = (r * n - e * e) / i, o = (e * n + r * e) / i;
    return new B(
      Tn(s, o) / 2,
      Math.atan2(o, s) / 2
    );
  },
  /**
   * Calculate the complex acoth
   *
   * @returns {Complex}
   */
  acoth: function() {
    const t = this.re, e = this.im;
    if (t === 0 && e === 0)
      return new B(0, Math.PI / 2);
    const n = t * t + e * e;
    return n !== 0 ? new B(t / n, -e / n).atanh() : new B(
      t !== 0 ? t / 0 : 0,
      e !== 0 ? -e / 0 : 0
    ).atanh();
  },
  /**
   * Calculate the complex acsch
   *
   * @returns {Complex}
   */
  acsch: function() {
    const t = this.re, e = this.im;
    if (e === 0) {
      if (t === 0)
        return new B(1 / 0, 0);
      const r = 1 / t;
      return new B(
        Math.log(r + Math.sqrt(r * r + 1)),
        0
      );
    }
    const n = t * t + e * e;
    return n !== 0 ? new B(t / n, -e / n).asinh() : new B(
      t !== 0 ? t / 0 : 0,
      e !== 0 ? -e / 0 : 0
    ).asinh();
  },
  /**
   * Calculate the complex asech
   *
   * @returns {Complex}
   */
  asech: function() {
    const t = this.re, e = this.im;
    if (this.isZero())
      return B.INFINITY;
    const n = t * t + e * e;
    return n !== 0 ? new B(t / n, -e / n).acosh() : new B(
      t !== 0 ? t / 0 : 0,
      e !== 0 ? -e / 0 : 0
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
    const t = this.re, e = this.im, n = t * t + e * e;
    return new B(t / n, -e / n);
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
  ceil: function(t) {
    return t = Math.pow(10, t || 0), new B(
      Math.ceil(this.re * t) / t,
      Math.ceil(this.im * t) / t
    );
  },
  /**
   * Floors the actual complex number
   *
   * @returns {Complex}
   */
  floor: function(t) {
    return t = Math.pow(10, t || 0), new B(
      Math.floor(this.re * t) / t,
      Math.floor(this.im * t) / t
    );
  },
  /**
   * Ceils the actual complex number
   *
   * @returns {Complex}
   */
  round: function(t) {
    return t = Math.pow(10, t || 0), new B(
      Math.round(this.re * t) / t,
      Math.round(this.im * t) / t
    );
  },
  /**
   * Compares two complex numbers
   *
   * **Note:** new Complex(Infinity).equals(Infinity) === false
   *
   * @returns {boolean}
   */
  equals: function(t, e) {
    const n = Dt(t, e);
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
    let t = this.re, e = this.im, n = "";
    return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(t) < B.EPSILON && (t = 0), Math.abs(e) < B.EPSILON && (e = 0), e === 0 ? n + t : (t !== 0 ? (n += t, n += " ", e < 0 ? (e = -e, n += "-") : n += "+", n += " ") : e < 0 && (e = -e, n += "-"), e !== 1 && (n += e), n + "i"));
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
var rc = "Complex", ic = [], sc = /* @__PURE__ */ ie(rc, ic, () => (Object.defineProperty(B, "name", {
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
}, B.prototype.format = function(t) {
  var e = "", n = this.im, r = this.re, i = Bn(this.re, t), s = Bn(this.im, t), o = ce(t) ? t : t ? t.precision : null;
  if (o !== null) {
    var a = Math.pow(10, -o);
    Math.abs(r / n) < a && (r = 0), Math.abs(n / r) < a && (n = 0);
  }
  return n === 0 ? e = i : r === 0 ? n === 1 ? e = "i" : n === -1 ? e = "-i" : e = s + "i" : n < 0 ? n === -1 ? e = i + " - i" : e = i + " - " + s.substring(1) + "i" : n === 1 ? e = i + " + i" : e = i + " + " + s + "i", e;
}, B.fromPolar = function(t) {
  switch (arguments.length) {
    case 1: {
      var e = arguments[0];
      if (typeof e == "object")
        return B(e);
      throw new TypeError("Input has to be an object with r and phi keys.");
    }
    case 2: {
      var n = arguments[0], r = arguments[1];
      if (ce(n)) {
        if (gi(r) && r.hasBase("ANGLE") && (r = r.toNumber("rad")), ce(r))
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
}, B.prototype.valueOf = B.prototype.toString, B.fromJSON = function(t) {
  return new B(t);
}, B.compare = function(t, e) {
  return t.re > e.re ? 1 : t.re < e.re ? -1 : t.im > e.im ? 1 : t.im < e.im ? -1 : 0;
}, B), {
  isClass: !0
});
typeof BigInt > "u" && (BigInt = function(t) {
  if (isNaN(t)) throw new Error("");
  return t;
});
const K = BigInt(0), re = BigInt(1), Se = BigInt(2), Ot = BigInt(3), Bt = BigInt(5), He = BigInt(10);
BigInt(Number.MAX_SAFE_INTEGER);
const oc = 2e3, H = {
  s: re,
  n: K,
  d: re
};
function st(t, e) {
  try {
    t = BigInt(t);
  } catch {
    throw ct();
  }
  return t * e;
}
function Je(t) {
  return typeof t == "bigint" ? t : Math.floor(t);
}
function De(t, e) {
  if (e === K)
    throw Kn();
  const n = Object.create(Ze.prototype);
  n.s = t < K ? -re : re, t = t < K ? -t : t;
  const r = Et(t, e);
  return n.n = t / r, n.d = e / r, n;
}
const ac = [Se * Se, Se, Se * Se, Se, Se * Se, Se * Ot, Se, Se * Ot];
function xt(t) {
  const e = /* @__PURE__ */ Object.create(null);
  if (t <= re)
    return e[t] = re, e;
  const n = (r) => {
    e[r] = (e[r] || K) + re;
  };
  for (; t % Se === K; )
    n(Se), t /= Se;
  for (; t % Ot === K; )
    n(Ot), t /= Ot;
  for (; t % Bt === K; )
    n(Bt), t /= Bt;
  for (let r = 0, i = Se + Bt; i * i <= t; ) {
    for (; t % i === K; )
      n(i), t /= i;
    i += ac[r], r = r + 1 & 7;
  }
  return t > re && n(t), e;
}
const xe = function(t, e) {
  let n = K, r = re, i = re;
  if (t != null) if (e !== void 0) {
    if (typeof t == "bigint")
      n = t;
    else {
      if (isNaN(t))
        throw ct();
      if (t % 1 !== 0)
        throw Fr();
      n = BigInt(t);
    }
    if (typeof e == "bigint")
      r = e;
    else {
      if (isNaN(e))
        throw ct();
      if (e % 1 !== 0)
        throw Fr();
      r = BigInt(e);
    }
    i = n * r;
  } else if (typeof t == "object") {
    if ("d" in t && "n" in t)
      n = BigInt(t.n), r = BigInt(t.d), "s" in t && (n *= BigInt(t.s));
    else if (0 in t)
      n = BigInt(t[0]), 1 in t && (r = BigInt(t[1]));
    else if (typeof t == "bigint")
      n = t;
    else
      throw ct();
    i = n * r;
  } else if (typeof t == "number") {
    if (isNaN(t))
      throw ct();
    if (t < 0 && (i = -re, t = -t), t % 1 === 0)
      n = BigInt(t);
    else {
      let s = 1, o = 0, a = 1, u = 1, c = 1, h = 1e7;
      for (t >= 1 && (s = 10 ** Math.floor(1 + Math.log10(t)), t /= s); a <= h && c <= h; ) {
        let l = (o + u) / (a + c);
        if (t === l) {
          a + c <= h ? (n = o + u, r = a + c) : c > a ? (n = u, r = c) : (n = o, r = a);
          break;
        } else
          t > l ? (o += u, a += c) : (u += o, c += a), a > h ? (n = u, r = c) : (n = o, r = a);
      }
      n = BigInt(n) * BigInt(s), r = BigInt(r);
    }
  } else if (typeof t == "string") {
    let s = 0, o = K, a = K, u = K, c = re, h = re, l = t.replace(/_/g, "").match(/\d+|./g);
    if (l === null)
      throw ct();
    if (l[s] === "-" ? (i = -re, s++) : l[s] === "+" && s++, l.length === s + 1 ? a = st(l[s++], i) : l[s + 1] === "." || l[s] === "." ? (l[s] !== "." && (o = st(l[s++], i)), s++, (s + 1 === l.length || l[s + 1] === "(" && l[s + 3] === ")" || l[s + 1] === "'" && l[s + 3] === "'") && (a = st(l[s], i), c = He ** BigInt(l[s].length), s++), (l[s] === "(" && l[s + 2] === ")" || l[s] === "'" && l[s + 2] === "'") && (u = st(l[s + 1], i), h = He ** BigInt(l[s + 1].length) - re, s += 3)) : l[s + 1] === "/" || l[s + 1] === ":" ? (a = st(l[s], i), c = st(l[s + 2], re), s += 3) : l[s + 3] === "/" && l[s + 1] === " " && (o = st(l[s], i), a = st(l[s + 2], i), c = st(l[s + 4], re), s += 5), l.length <= s)
      r = c * h, i = /* void */
      n = u + r * o + h * a;
    else
      throw ct();
  } else if (typeof t == "bigint")
    n = t, i = t, r = re;
  else
    throw ct();
  if (r === K)
    throw Kn();
  H.s = i < K ? -re : re, H.n = n < K ? -n : n, H.d = r < K ? -r : r;
};
function uc(t, e, n) {
  let r = re;
  for (; e > K; t = t * t % n, e >>= re)
    e & re && (r = r * t % n);
  return r;
}
function cc(t, e) {
  for (; e % Se === K; e /= Se)
    ;
  for (; e % Bt === K; e /= Bt)
    ;
  if (e === re)
    return K;
  let n = He % e, r = 1;
  for (; n !== re; r++)
    if (n = n * He % e, r > oc)
      return K;
  return BigInt(r);
}
function lc(t, e, n) {
  let r = re, i = uc(He, n, e);
  for (let s = 0; s < 300; s++) {
    if (r === i)
      return BigInt(s);
    r = r * He % e, i = i * He % e;
  }
  return 0;
}
function Et(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  for (; ; ) {
    if (t %= e, !t)
      return e;
    if (e %= t, !e)
      return t;
  }
}
function Ze(t, e) {
  if (xe(t, e), this instanceof Ze)
    t = Et(H.d, H.n), this.s = H.s, this.n = H.n / t, this.d = H.d / t;
  else
    return De(H.s * H.n, H.d);
}
const Kn = function() {
  return new Error("Division by Zero");
}, ct = function() {
  return new Error("Invalid argument");
}, Fr = function() {
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
  add: function(t, e) {
    return xe(t, e), De(
      this.s * this.n * H.d + H.s * this.d * H.n,
      this.d * H.d
    );
  },
  /**
   * Subtracts two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
   **/
  sub: function(t, e) {
    return xe(t, e), De(
      this.s * this.n * H.d - H.s * this.d * H.n,
      this.d * H.d
    );
  },
  /**
   * Multiplies two rational numbers
   *
   * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
   **/
  mul: function(t, e) {
    return xe(t, e), De(
      this.s * H.s * this.n * H.n,
      this.d * H.d
    );
  },
  /**
   * Divides two rational numbers
   *
   * Ex: new Fraction("-17.(345)").inverse().div(3)
   **/
  div: function(t, e) {
    return xe(t, e), De(
      this.s * H.s * this.n * H.d,
      this.d * H.n
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
  mod: function(t, e) {
    if (t === void 0)
      return De(this.s * this.n % this.d, re);
    if (xe(t, e), K === H.n * this.d)
      throw Kn();
    return De(
      this.s * (H.d * this.n) % (H.n * this.d),
      H.d * this.d
    );
  },
  /**
   * Calculates the fractional gcd of two rational numbers
   *
   * Ex: new Fraction(5,8).gcd(3,7) => 1/56
   */
  gcd: function(t, e) {
    return xe(t, e), De(Et(H.n, this.n) * Et(H.d, this.d), H.d * this.d);
  },
  /**
   * Calculates the fractional lcm of two rational numbers
   *
   * Ex: new Fraction(5,8).lcm(3,7) => 15
   */
  lcm: function(t, e) {
    return xe(t, e), H.n === K && this.n === K ? De(K, re) : De(H.n * this.n, Et(H.n, this.n) * Et(H.d, this.d));
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
  pow: function(t, e) {
    if (xe(t, e), H.d === re)
      return H.s < K ? De((this.s * this.d) ** H.n, this.n ** H.n) : De((this.s * this.n) ** H.n, this.d ** H.n);
    if (this.s < K) return null;
    let n = xt(this.n), r = xt(this.d), i = re, s = re;
    for (let o in n)
      if (o !== "1") {
        if (o === "0") {
          i = K;
          break;
        }
        if (n[o] *= H.n, n[o] % H.d === K)
          n[o] /= H.d;
        else return null;
        i *= BigInt(o) ** n[o];
      }
    for (let o in r)
      if (o !== "1") {
        if (r[o] *= H.n, r[o] % H.d === K)
          r[o] /= H.d;
        else return null;
        s *= BigInt(o) ** r[o];
      }
    return H.s < K ? De(s, i) : De(i, s);
  },
  /**
   * Calculates the logarithm of a fraction to a given rational base
   *
   * Ex: new Fraction(27, 8).log(9, 4) => 3/2
   */
  log: function(t, e) {
    if (xe(t, e), this.s <= K || H.s <= K) return null;
    const n = /* @__PURE__ */ Object.create(null), r = xt(H.n), i = xt(H.d), s = xt(this.n), o = xt(this.d);
    for (const c in i)
      r[c] = (r[c] || K) - i[c];
    for (const c in o)
      s[c] = (s[c] || K) - o[c];
    for (const c in r)
      c !== "1" && (n[c] = !0);
    for (const c in s)
      c !== "1" && (n[c] = !0);
    let a = null, u = null;
    for (const c in n) {
      const h = r[c] || K, l = s[c] || K;
      if (h === K) {
        if (l !== K)
          return null;
        continue;
      }
      let d = l, g = h;
      const E = Et(d, g);
      if (d /= E, g /= E, a === null && u === null)
        a = d, u = g;
      else if (d * u !== a * g)
        return null;
    }
    return a !== null && u !== null ? De(a, u) : null;
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  equals: function(t, e) {
    return xe(t, e), this.s * this.n * H.d === H.s * H.n * this.d;
  },
  /**
   * Check if this rational number is less than another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  lt: function(t, e) {
    return xe(t, e), this.s * this.n * H.d < H.s * H.n * this.d;
  },
  /**
   * Check if this rational number is less than or equal another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  lte: function(t, e) {
    return xe(t, e), this.s * this.n * H.d <= H.s * H.n * this.d;
  },
  /**
   * Check if this rational number is greater than another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  gt: function(t, e) {
    return xe(t, e), this.s * this.n * H.d > H.s * H.n * this.d;
  },
  /**
   * Check if this rational number is greater than or equal another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  gte: function(t, e) {
    return xe(t, e), this.s * this.n * H.d >= H.s * H.n * this.d;
  },
  /**
   * Compare two rational numbers
   * < 0 iff this < that
   * > 0 iff this > that
   * = 0 iff this = that
   *
   * Ex: new Fraction(19.6).compare([98, 5]);
   **/
  compare: function(t, e) {
    xe(t, e);
    let n = this.s * this.n * H.d - H.s * H.n * this.d;
    return (K < n) - (n < K);
  },
  /**
   * Calculates the ceil of a rational number
   *
   * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
   **/
  ceil: function(t) {
    return t = He ** BigInt(t || 0), De(
      Je(this.s * t * this.n / this.d) + (t * this.n % this.d > K && this.s >= K ? re : K),
      t
    );
  },
  /**
   * Calculates the floor of a rational number
   *
   * Ex: new Fraction('4.(3)').floor() => (4 / 1)
   **/
  floor: function(t) {
    return t = He ** BigInt(t || 0), De(
      Je(this.s * t * this.n / this.d) - (t * this.n % this.d > K && this.s < K ? re : K),
      t
    );
  },
  /**
   * Rounds a rational numbers
   *
   * Ex: new Fraction('4.(3)').round() => (4 / 1)
   **/
  round: function(t) {
    return t = He ** BigInt(t || 0), De(
      Je(this.s * t * this.n / this.d) + this.s * ((this.s >= K ? re : K) + Se * (t * this.n % this.d) > this.d ? re : K),
      t
    );
  },
  /**
    * Rounds a rational number to a multiple of another rational number
    *
    * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
    **/
  roundTo: function(t, e) {
    xe(t, e);
    const n = this.n * H.d, r = this.d * H.n, i = n % r;
    let s = Je(n / r);
    return i + i >= r && s++, De(this.s * s * H.n, H.d);
  },
  /**
   * Check if two rational numbers are divisible
   *
   * Ex: new Fraction(19.6).divisible(1.5);
   */
  divisible: function(t, e) {
    return xe(t, e), H.n === K ? !1 : this.n * H.d % (H.n * this.d) === K;
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
  toString: function(t = 15) {
    let e = this.n, n = this.d, r = cc(e, n), i = lc(e, n, r), s = this.s < K ? "-" : "";
    if (s += Je(e / n), e %= n, e *= He, e && (s += "."), r) {
      for (let o = i; o--; )
        s += Je(e / n), e %= n, e *= He;
      s += "(";
      for (let o = r; o--; )
        s += Je(e / n), e %= n, e *= He;
      s += ")";
    } else
      for (let o = t; e && o--; )
        s += Je(e / n), e %= n, e *= He;
    return s;
  },
  /**
   * Returns a string-fraction representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toFraction() => "4 1/3"
   **/
  toFraction: function(t = !1) {
    let e = this.n, n = this.d, r = this.s < K ? "-" : "";
    if (n === re)
      r += e;
    else {
      const i = Je(e / n);
      t && i > K && (r += i, r += " ", e %= n), r += e, r += "/", r += n;
    }
    return r;
  },
  /**
   * Returns a latex representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
   **/
  toLatex: function(t = !1) {
    let e = this.n, n = this.d, r = this.s < K ? "-" : "";
    if (n === re)
      r += e;
    else {
      const i = Je(e / n);
      t && i > K && (r += i, e %= n), r += "\\frac{", r += e, r += "}{", r += n, r += "}";
    }
    return r;
  },
  /**
   * Returns an array of continued fraction elements
   *
   * Ex: new Fraction("7/8").toContinued() => [0,1,7]
   */
  toContinued: function() {
    let t = this.n, e = this.d;
    const n = [];
    for (; e; ) {
      n.push(Je(t / e));
      const r = t % e;
      t = e, e = r;
    }
    return n;
  },
  simplify: function(t = 1e-3) {
    const e = BigInt(Math.ceil(1 / t)), n = this.abs(), r = n.toContinued();
    for (let i = 1; i < r.length; i++) {
      let s = De(r[i - 1], re);
      for (let a = i - 2; a >= 0; a--)
        s = s.inverse().add(r[a]);
      let o = s.sub(n);
      if (o.n * e < o.d)
        return s.mul(this.s);
    }
    return this;
  }
};
var fc = "Fraction", hc = [], dc = /* @__PURE__ */ ie(fc, hc, () => (Object.defineProperty(Ze, "name", {
  value: "Fraction"
}), Ze.prototype.constructor = Ze, Ze.prototype.type = "Fraction", Ze.prototype.isFraction = !0, Ze.prototype.toJSON = function() {
  return {
    mathjs: "Fraction",
    n: String(this.s * this.n),
    d: String(this.d)
  };
}, Ze.fromJSON = function(t) {
  return new Ze(t);
}, Ze), {
  isClass: !0
}), pc = "Matrix", mc = [], gc = /* @__PURE__ */ ie(pc, mc, () => {
  function t() {
    if (!(this instanceof t))
      throw new SyntaxError("Constructor must be called with the new operator");
  }
  return t.prototype.type = "Matrix", t.prototype.isMatrix = !0, t.prototype.storage = function() {
    throw new Error("Cannot invoke storage on a Matrix interface");
  }, t.prototype.datatype = function() {
    throw new Error("Cannot invoke datatype on a Matrix interface");
  }, t.prototype.create = function(e, n) {
    throw new Error("Cannot invoke create on a Matrix interface");
  }, t.prototype.subset = function(e, n, r) {
    throw new Error("Cannot invoke subset on a Matrix interface");
  }, t.prototype.get = function(e) {
    throw new Error("Cannot invoke get on a Matrix interface");
  }, t.prototype.set = function(e, n, r) {
    throw new Error("Cannot invoke set on a Matrix interface");
  }, t.prototype.resize = function(e, n) {
    throw new Error("Cannot invoke resize on a Matrix interface");
  }, t.prototype.reshape = function(e, n) {
    throw new Error("Cannot invoke reshape on a Matrix interface");
  }, t.prototype.clone = function() {
    throw new Error("Cannot invoke clone on a Matrix interface");
  }, t.prototype.size = function() {
    throw new Error("Cannot invoke size on a Matrix interface");
  }, t.prototype.map = function(e, n) {
    throw new Error("Cannot invoke map on a Matrix interface");
  }, t.prototype.forEach = function(e) {
    throw new Error("Cannot invoke forEach on a Matrix interface");
  }, t.prototype[Symbol.iterator] = function() {
    throw new Error("Cannot iterate a Matrix interface");
  }, t.prototype.toArray = function() {
    throw new Error("Cannot invoke toArray on a Matrix interface");
  }, t.prototype.valueOf = function() {
    throw new Error("Cannot invoke valueOf on a Matrix interface");
  }, t.prototype.format = function(e) {
    throw new Error("Cannot invoke format on a Matrix interface");
  }, t.prototype.toString = function() {
    throw new Error("Cannot invoke toString on a Matrix interface");
  }, t;
}, {
  isClass: !0
});
function xn(t, e, n) {
  var r = t.constructor, i = new r(2), s = "";
  if (n) {
    if (n < 1)
      throw new Error("size must be in greater than 0");
    if (!Re(n))
      throw new Error("size must be an integer");
    if (t.greaterThan(i.pow(n - 1).sub(1)) || t.lessThan(i.pow(n - 1).mul(-1)))
      throw new Error("Value must be in range [-2^".concat(n - 1, ", 2^").concat(n - 1, "-1]"));
    if (!t.isInteger())
      throw new Error("Value must be an integer");
    t.lessThan(0) && (t = t.add(i.pow(n))), s = "i".concat(n);
  }
  switch (e) {
    case 2:
      return "".concat(t.toBinary()).concat(s);
    case 8:
      return "".concat(t.toOctal()).concat(s);
    case 16:
      return "".concat(t.toHexadecimal()).concat(s);
    default:
      throw new Error("Base ".concat(e, " not supported "));
  }
}
function vc(t, e) {
  if (typeof e == "function")
    return e(t);
  if (!t.isFinite())
    return t.isNaN() ? "NaN" : t.gt(0) ? "Infinity" : "-Infinity";
  var {
    notation: n,
    precision: r,
    wordSize: i
  } = Di(e);
  switch (n) {
    case "fixed":
      return Ec(t, r);
    case "exponential":
      return br(t, r);
    case "engineering":
      return Dc(t, r);
    case "bin":
      return xn(t, 2, i);
    case "oct":
      return xn(t, 8, i);
    case "hex":
      return xn(t, 16, i);
    case "auto": {
      var s = _r(e == null ? void 0 : e.lowerExp, -3), o = _r(e == null ? void 0 : e.upperExp, 5);
      if (t.isZero()) return "0";
      var a, u = t.toSignificantDigits(r), c = u.e;
      return c >= s && c < o ? a = u.toFixed() : a = br(t, r), a.replace(/((\.\d*?)(0+))($|e)/, function() {
        var h = arguments[2], l = arguments[4];
        return h !== "." ? h + l : l;
      });
    }
    default:
      throw new Error('Unknown notation "' + n + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
  }
}
function Dc(t, e) {
  var n = t.e, r = n % 3 === 0 ? n : n < 0 ? n - 3 - n % 3 : n - n % 3, i = t.mul(Math.pow(10, -r)), s = i.toPrecision(e);
  if (s.includes("e")) {
    var o = t.constructor;
    s = new o(s).toFixed();
  }
  return s + "e" + (n >= 0 ? "+" : "") + r.toString();
}
function br(t, e) {
  return e !== void 0 ? t.toExponential(e - 1) : t.toExponential();
}
function Ec(t, e) {
  return t.toFixed(e);
}
function _r(t, e) {
  return ce(t) ? t : Ne(t) ? t.toNumber() : e;
}
function Ve(t, e) {
  var n = wc(t, e);
  return e && typeof e == "object" && "truncate" in e && n.length > e.truncate ? n.substring(0, e.truncate - 3) + "..." : n;
}
function wc(t, e) {
  if (typeof t == "number")
    return Bn(t, e);
  if (Ne(t))
    return vc(t, e);
  if (yc(t))
    return !e || e.fraction !== "decimal" ? "".concat(t.s * t.n, "/").concat(t.d) : t.toString();
  if (Array.isArray(t))
    return Ri(t, e);
  if (et(t))
    return Ar(t);
  if (typeof t == "function")
    return t.syntax ? String(t.syntax) : "function";
  if (t && typeof t == "object") {
    if (typeof t.format == "function")
      return t.format(e);
    if (t && t.toString(e) !== {}.toString())
      return t.toString(e);
    var n = Object.keys(t).map((r) => Ar(r) + ": " + Ve(t[r], e));
    return "{" + n.join(", ") + "}";
  }
  return String(t);
}
function Ar(t) {
  for (var e = String(t), n = "", r = 0; r < e.length; ) {
    var i = e.charAt(r);
    n += i in Tr ? Tr[i] : i, r++;
  }
  return '"' + n + '"';
}
var Tr = {
  '"': '\\"',
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t"
};
function Ri(t, e) {
  if (Array.isArray(t)) {
    for (var n = "[", r = t.length, i = 0; i < r; i++)
      i !== 0 && (n += ", "), n += Ri(t[i], e);
    return n += "]", n;
  } else
    return Ve(t, e);
}
function yc(t) {
  return t && typeof t == "object" && typeof t.s == "bigint" && typeof t.n == "bigint" && typeof t.d == "bigint" || !1;
}
function he(t, e, n) {
  if (!(this instanceof he))
    throw new SyntaxError("Constructor must be called with the new operator");
  this.actual = t, this.expected = e, this.relation = n, this.message = "Dimension mismatch (" + (Array.isArray(t) ? "[" + t.join(", ") + "]" : t) + " " + (this.relation || "!=") + " " + (Array.isArray(e) ? "[" + e.join(", ") + "]" : e) + ")", this.stack = new Error().stack;
}
he.prototype = new RangeError();
he.prototype.constructor = RangeError;
he.prototype.name = "DimensionError";
he.prototype.isDimensionError = !0;
function yt(t, e, n) {
  if (!(this instanceof yt))
    throw new SyntaxError("Constructor must be called with the new operator");
  this.index = t, arguments.length < 3 ? (this.min = 0, this.max = e) : (this.min = e, this.max = n), this.min !== void 0 && this.index < this.min ? this.message = "Index out of range (" + this.index + " < " + this.min + ")" : this.max !== void 0 && this.index >= this.max ? this.message = "Index out of range (" + this.index + " > " + (this.max - 1) + ")" : this.message = "Index out of range (" + this.index + ")", this.stack = new Error().stack;
}
yt.prototype = new RangeError();
yt.prototype.constructor = RangeError;
yt.prototype.name = "IndexError";
yt.prototype.isIndexError = !0;
function Xe(t) {
  for (var e = []; Array.isArray(t); )
    e.push(t.length), t = t[0];
  return e;
}
function Ni(t, e, n) {
  var r, i = t.length;
  if (i !== e[n])
    throw new he(i, e[n]);
  if (n < e.length - 1) {
    var s = n + 1;
    for (r = 0; r < i; r++) {
      var o = t[r];
      if (!Array.isArray(o))
        throw new he(e.length - 1, e.length, "<");
      Ni(t[r], e, s);
    }
  } else
    for (r = 0; r < i; r++)
      if (Array.isArray(t[r]))
        throw new he(e.length + 1, e.length, ">");
}
function xr(t, e) {
  var n = e.length === 0;
  if (n) {
    if (Array.isArray(t))
      throw new he(t.length, 0);
  } else
    Ni(t, e, 0);
}
function Ee(t, e) {
  if (t !== void 0) {
    if (!ce(t) || !Re(t))
      throw new TypeError("Index must be an integer (value: " + t + ")");
    if (t < 0 || typeof e == "number" && t >= e)
      throw new yt(t, e);
  }
}
function Sr(t, e, n) {
  if (!Array.isArray(e))
    throw new TypeError("Array expected");
  if (e.length === 0)
    throw new Error("Resizing to scalar is not supported");
  e.forEach(function(i) {
    if (!ce(i) || !Re(i) || i < 0)
      throw new TypeError("Invalid size, must contain positive integers (size: " + Ve(e) + ")");
  }), (ce(t) || Ne(t)) && (t = [t]);
  var r = n !== void 0 ? n : 0;
  return Ln(t, e, 0, r), t;
}
function Ln(t, e, n, r) {
  var i, s, o = t.length, a = e[n], u = Math.min(o, a);
  if (t.length = a, n < e.length - 1) {
    var c = n + 1;
    for (i = 0; i < u; i++)
      s = t[i], Array.isArray(s) || (s = [s], t[i] = s), Ln(s, e, c, r);
    for (i = u; i < a; i++)
      s = [], t[i] = s, Ln(s, e, c, r);
  } else {
    for (i = 0; i < u; i++)
      for (; Array.isArray(t[i]); )
        t[i] = t[i][0];
    for (i = u; i < a; i++)
      t[i] = r;
  }
}
function Pi(t, e) {
  var n = Fc(t, !0), r = n.length;
  if (!Array.isArray(t) || !Array.isArray(e))
    throw new TypeError("Array expected");
  if (e.length === 0)
    throw new he(0, r, "!=");
  e = qn(e, r);
  var i = Li(e);
  if (r !== i)
    throw new he(i, r, "!=");
  try {
    return Cc(n, e);
  } catch (s) {
    throw s instanceof he ? new he(i, r, "!=") : s;
  }
}
function qn(t, e) {
  var n = Li(t), r = t.slice(), i = -1, s = t.indexOf(i), o = t.indexOf(i, s + 1) >= 0;
  if (o)
    throw new Error("More than one wildcard in sizes");
  var a = s >= 0, u = e % n === 0;
  if (a)
    if (u)
      r[s] = -e / n;
    else
      throw new Error("Could not replace wildcard, since " + e + " is no multiple of " + -n);
  return r;
}
function Li(t) {
  return t.reduce((e, n) => e * n, 1);
}
function Cc(t, e) {
  for (var n = t, r, i = e.length - 1; i > 0; i--) {
    var s = e[i];
    r = [];
    for (var o = n.length / s, a = 0; a < o; a++)
      r.push(n.slice(a * s, (a + 1) * s));
    n = r;
  }
  return n;
}
function Ii(t, e, n, r) {
  var i = r || Xe(t);
  if (n)
    for (var s = 0; s < n; s++)
      t = [t], i.unshift(1);
  for (t = Ui(t, e, 0); i.length < e; )
    i.push(1);
  return t;
}
function Ui(t, e, n) {
  var r, i;
  if (Array.isArray(t)) {
    var s = n + 1;
    for (r = 0, i = t.length; r < i; r++)
      t[r] = Ui(t[r], e, s);
  } else
    for (var o = n; o < e; o++)
      t = [t];
  return t;
}
function Fc(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (!Array.isArray(t))
    return t;
  if (typeof e != "boolean")
    throw new TypeError("Boolean expected for second argument of flatten");
  var n = [];
  return e ? i(t) : r(t), n;
  function r(s) {
    for (var o = 0; o < s.length; o++) {
      var a = s[o];
      Array.isArray(a) ? r(a) : n.push(a);
    }
  }
  function i(s) {
    if (Array.isArray(s[0]))
      for (var o = 0; o < s.length; o++)
        i(s[o]);
    else
      for (var a = 0; a < s.length; a++)
        n.push(s[a]);
  }
}
function Wn(t, e) {
  for (var n, r = 0, i = 0; i < t.length; i++) {
    var s = t[i], o = Array.isArray(s);
    if (i === 0 && o && (r = s.length), o && s.length !== r)
      return;
    var a = o ? Wn(s, e) : e(s);
    if (n === void 0)
      n = a;
    else if (n !== a)
      return "mixed";
  }
  return n;
}
function Oi(t, e, n, r) {
  if (r < n) {
    if (t.length !== e.length)
      throw new he(t.length, e.length);
    for (var i = [], s = 0; s < t.length; s++)
      i[s] = Oi(t[s], e[s], n, r + 1);
    return i;
  } else
    return t.concat(e);
}
function ki() {
  var t = Array.prototype.slice.call(arguments, 0, -1), e = Array.prototype.slice.call(arguments, -1);
  if (t.length === 1)
    return t[0];
  if (t.length > 1)
    return t.slice(1).reduce(function(n, r) {
      return Oi(n, r, e, 0);
    }, t[0]);
  throw new Error("Wrong number of arguments in function concat");
}
function $i() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  for (var r = e.map((d) => d.length), i = Math.max(...r), s = new Array(i).fill(null), o = 0; o < e.length; o++)
    for (var a = e[o], u = r[o], c = 0; c < u; c++) {
      var h = i - u + c;
      a[c] > s[h] && (s[h] = a[c]);
    }
  for (var l = 0; l < e.length; l++)
    zi(e[l], s);
  return s;
}
function zi(t, e) {
  for (var n = e.length, r = t.length, i = 0; i < r; i++) {
    var s = n - r + i;
    if (t[i] < e[s] && t[i] > 1 || t[i] > e[s])
      throw new Error("shape mismatch: mismatch is found in arg with shape (".concat(t, ") not possible to broadcast dimension ").concat(r, " with size ").concat(t[i], " to size ").concat(e[s]));
  }
}
function In(t, e) {
  var n = Xe(t);
  if (mt(n, e))
    return t;
  zi(n, e);
  var r = $i(n, e), i = r.length, s = [...Array(i - n.length).fill(1), ...n], o = _c(t);
  n.length < i && (o = Pi(o, s), n = Xe(o));
  for (var a = 0; a < i; a++)
    n[a] < r[a] && (o = bc(o, r[a], a), n = Xe(o));
  return o;
}
function bc(t, e, n) {
  return ki(...Array(e).fill(t), n);
}
function Vi(t, e) {
  if (!Array.isArray(t))
    throw new Error("Array expected");
  if (!Array.isArray(e))
    throw new Error("Array expected for index");
  var n = Xe(t);
  if (e.length !== n.length)
    throw new he(e.length, n.length);
  for (var r = 0; r < e.length; r++)
    Ee(e[r], n[r]);
  return e.reduce((i, s) => i[s], t);
}
function Br(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  if (t.length === 0)
    return [];
  if (n)
    return s(t);
  var r = [];
  return i(t, 0);
  function i(o, a) {
    if (Array.isArray(o)) {
      for (var u = o.length, c = Array(u), h = 0; h < u; h++)
        r[a] = h, c[h] = i(o[h], a + 1);
      return c;
    } else
      return e(o, r.slice(0, a), t);
  }
  function s(o) {
    if (Array.isArray(o)) {
      for (var a = o.length, u = Array(a), c = 0; c < a; c++)
        u[c] = s(o[c]);
      return u;
    } else
      return e(o);
  }
}
function _c(t) {
  return Qt([], t);
}
function un(t, e, n, r) {
  if (nn.isTypedFunction(t)) {
    var i;
    if (r)
      i = 1;
    else {
      var s = e.isMatrix ? e.size() : Xe(e), o = s.length ? s[s.length - 1] === 0 : !0;
      if (o)
        return {
          isUnary: r,
          fn: t
        };
      var a = s.map(() => 0), u = e.isMatrix ? e.get(a) : Vi(e, a);
      i = xc(t, u, a, e);
    }
    var c;
    if (e.isMatrix && e.dataType !== "mixed" && e.dataType !== void 0) {
      var h = Ac(t, i);
      c = h !== void 0 ? h : t;
    } else
      c = t;
    return i >= 1 && i <= 3 ? {
      isUnary: i === 1,
      fn: function() {
        for (var d = arguments.length, g = new Array(d), E = 0; E < d; E++)
          g[E] = arguments[E];
        return Mr(c, g.slice(0, i), n, t.name);
      }
    } : {
      isUnary: !1,
      fn: function() {
        for (var d = arguments.length, g = new Array(d), E = 0; E < d; E++)
          g[E] = arguments[E];
        return Mr(c, g, n, t.name);
      }
    };
  }
  return r === void 0 ? {
    isUnary: Tc(t),
    fn: t
  } : {
    isUnary: r,
    fn: t
  };
}
function Ac(t, e) {
  var n = [];
  if (Object.entries(t.signatures).forEach((r) => {
    var [i, s] = r;
    i.split(",").length === e && n.push(s);
  }), n.length === 1)
    return n[0];
}
function Tc(t) {
  if (t.length !== 1) return !1;
  var e = t.toString();
  if (/arguments/.test(e)) return !1;
  var n = e.match(/\(.*?\)/);
  return !/\.\.\./.test(n);
}
function xc(t, e, n, r) {
  for (var i = [e, n, r], s = 3; s > 0; s--) {
    var o = i.slice(0, s);
    if (nn.resolve(t, o) !== null)
      return s;
  }
}
function Mr(t, e, n, r) {
  try {
    return t(...e);
  } catch (i) {
    Sc(i, e, n, r);
  }
}
function Sc(t, e, n, r) {
  var i;
  if (t instanceof TypeError && ((i = t.data) === null || i === void 0 ? void 0 : i.category) === "wrongType") {
    var s = [];
    throw s.push("value: ".concat(wt(e[0]))), e.length >= 2 && s.push("index: ".concat(wt(e[1]))), e.length >= 3 && s.push("array: ".concat(wt(e[2]))), new TypeError("Function ".concat(n, " cannot apply callback arguments ") + "".concat(r, "(").concat(s.join(", "), ") at index ").concat(JSON.stringify(e[1])));
  } else
    throw new TypeError("Function ".concat(n, " cannot apply callback arguments ") + "to function ".concat(r, ": ").concat(t.message));
}
var Bc = "DenseMatrix", Mc = ["Matrix", "config"], Rc = /* @__PURE__ */ ie(Bc, Mc, (t) => {
  var {
    Matrix: e,
    config: n
  } = t;
  function r(l, d) {
    if (!(this instanceof r))
      throw new SyntaxError("Constructor must be called with the new operator");
    if (d && !et(d))
      throw new Error("Invalid datatype: " + d);
    if (Pe(l))
      l.type === "DenseMatrix" ? (this._data = Be(l._data), this._size = Be(l._size), this._datatype = d || l._datatype) : (this._data = l.toArray(), this._size = l.size(), this._datatype = d || l._datatype);
    else if (l && Fe(l.data) && Fe(l.size))
      this._data = l.data, this._size = l.size, xr(this._data, this._size), this._datatype = d || l.datatype;
    else if (Fe(l))
      this._data = h(l), this._size = Xe(this._data), xr(this._data, this._size), this._datatype = d;
    else {
      if (l)
        throw new TypeError("Unsupported type of data (" + wt(l) + ")");
      this._data = [], this._size = [0], this._datatype = d;
    }
  }
  r.prototype = new e(), r.prototype.createDenseMatrix = function(l, d) {
    return new r(l, d);
  }, Object.defineProperty(r, "name", {
    value: "DenseMatrix"
  }), r.prototype.constructor = r, r.prototype.type = "DenseMatrix", r.prototype.isDenseMatrix = !0, r.prototype.getDataType = function() {
    return Wn(this._data, wt);
  }, r.prototype.storage = function() {
    return "dense";
  }, r.prototype.datatype = function() {
    return this._datatype;
  }, r.prototype.create = function(l, d) {
    return new r(l, d);
  }, r.prototype.subset = function(l, d, g) {
    switch (arguments.length) {
      case 1:
        return i(this, l);
      case 2:
      case 3:
        return o(this, l, d, g);
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  }, r.prototype.get = function(l) {
    return Vi(this._data, l);
  }, r.prototype.set = function(l, d, g) {
    if (!Fe(l))
      throw new TypeError("Array expected");
    if (l.length < this._size.length)
      throw new he(l.length, this._size.length, "<");
    var E, f, w, C = l.map(function(p) {
      return p + 1;
    });
    c(this, C, g);
    var D = this._data;
    for (E = 0, f = l.length - 1; E < f; E++)
      w = l[E], Ee(w, D.length), D = D[w];
    return w = l[l.length - 1], Ee(w, D.length), D[w] = d, this;
  };
  function i(l, d) {
    if (!Xn(d))
      throw new TypeError("Invalid index");
    var g = n.legacySubset ? d.size().every((m) => m === 1) : d.isScalar();
    if (g)
      return l.get(d.min());
    var E = d.size();
    if (E.length !== l._size.length)
      throw new he(E.length, l._size.length);
    for (var f = d.min(), w = d.max(), C = 0, D = l._size.length; C < D; C++)
      Ee(f[C], l._size[C]), Ee(w[C], l._size[C]);
    var p = new r(), y = s(l._data, d);
    return p._size = y.size, p._datatype = l._datatype, p._data = y.data, n.legacySubset ? p.reshape(d.size()) : p;
  }
  function s(l, d) {
    var g = d.size().length - 1, E = Array(g);
    return {
      data: f(l),
      size: E.filter((w) => w !== null)
    };
    function f(w) {
      var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, D = d.dimension(C);
      function p(y, m) {
        return ce(y) ? m(y) : y.map(m).valueOf();
      }
      return ce(D) ? E[C] = null : E[C] = D.size()[0], C < g ? p(D, (y) => (Ee(y, w.length), f(w[y], C + 1))) : p(D, (y) => (Ee(y, w.length), w[y]));
    }
  }
  function o(l, d, g, E) {
    if (!d || d.isIndex !== !0)
      throw new TypeError("Invalid index");
    var f = d.size(), w = d.isScalar(), C;
    if (Pe(g) ? (C = g.size(), g = g.valueOf()) : C = Xe(g), w) {
      if (C.length !== 0)
        throw new TypeError("Scalar expected");
      l.set(d.min(), g, E);
    } else {
      if (!mt(C, f)) {
        if (C.length === 0)
          g = In([g], f);
        else
          try {
            g = In(g, f);
          } catch {
          }
        C = Xe(g);
      }
      if (f.length < l._size.length)
        throw new he(f.length, l._size.length, "<");
      if (C.length < f.length) {
        for (var D = 0, p = 0; f[D] === 1 && C[D] === 1; )
          D++;
        for (; f[D] === 1; )
          p++, D++;
        g = Ii(g, f.length, p, C);
      }
      if (!mt(f, C))
        throw new he(f, C, ">");
      var y = d.max().map(function(m) {
        return m + 1;
      });
      c(l, y, E), a(l._data, d, g);
    }
    return l;
  }
  function a(l, d, g) {
    var E = d.size().length - 1;
    f(l, g);
    function f(w, C) {
      var D = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, p = d.dimension(D), y = (v, A) => {
        Ee(v, w.length), f(w[v], C[A[0]], D + 1);
      }, m = (v, A) => {
        Ee(v, w.length), w[v] = C[A[0]];
      };
      D < E ? ce(p) ? y(p, [0]) : p.forEach(y) : ce(p) ? m(p, [0]) : p.forEach(m);
    }
  }
  r.prototype.resize = function(l, d, g) {
    if (!tn(l))
      throw new TypeError("Array or Matrix expected");
    var E = l.valueOf().map((w) => Array.isArray(w) && w.length === 1 ? w[0] : w), f = g ? this.clone() : this;
    return u(f, E, d);
  };
  function u(l, d, g) {
    if (d.length === 0) {
      for (var E = l._data; Fe(E); )
        E = E[0];
      return E;
    }
    return l._size = d.slice(0), l._data = Sr(l._data, l._size, g), l;
  }
  r.prototype.reshape = function(l, d) {
    var g = d ? this.clone() : this;
    g._data = Pi(g._data, l);
    var E = g._size.reduce((f, w) => f * w);
    return g._size = qn(l, E), g;
  };
  function c(l, d, g) {
    for (var E = l._size.slice(0), f = !1; E.length < d.length; )
      E.push(0), f = !0;
    for (var w = 0, C = d.length; w < C; w++)
      d[w] > E[w] && (E[w] = d[w], f = !0);
    f && u(l, E, g);
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
    var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, g = this, E = g._size.length - 1;
    if (E < 0) return g.clone();
    var f = un(l, g, "map", d), w = f.fn, C = g.create(void 0, g._datatype);
    if (C._size = g._size, d || f.isUnary)
      return C._data = A(g._data), C;
    if (E === 0) {
      for (var D = g.valueOf(), p = Array(D.length), y = 0; y < D.length; y++)
        p[y] = w(D[y], [y], g);
      return C._data = p, C;
    }
    var m = [];
    return C._data = v(g._data), C;
    function v(_) {
      var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, T = Array(_.length);
      if (F < E)
        for (var S = 0; S < _.length; S++)
          m[F] = S, T[S] = v(_[S], F + 1);
      else
        for (var R = 0; R < _.length; R++)
          m[F] = R, T[R] = w(_[R], m.slice(), g);
      return T;
    }
    function A(_) {
      var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, T = Array(_.length);
      if (F < E)
        for (var S = 0; S < _.length; S++)
          T[S] = A(_[S], F + 1);
      else
        for (var R = 0; R < _.length; R++)
          T[R] = w(_[R]);
      return T;
    }
  }, r.prototype.forEach = function(l) {
    var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, g = this, E = g._size.length - 1;
    if (E < 0) return;
    var f = un(l, g, "map", d), w = f.fn;
    if (d || f.isUnary) {
      y(g._data);
      return;
    }
    if (E === 0) {
      for (var C = 0; C < g._data.length; C++)
        w(g._data[C], [C], g);
      return;
    }
    var D = [];
    p(g._data);
    function p(m) {
      var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      if (v < E)
        for (var A = 0; A < m.length; A++)
          D[v] = A, p(m[A], v + 1);
      else
        for (var _ = 0; _ < m.length; _++)
          D[v] = _, w(m[_], D.slice(), g);
    }
    function y(m) {
      var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      if (v < E)
        for (var A = 0; A < m.length; A++)
          y(m[A], v + 1);
      else
        for (var _ = 0; _ < m.length; _++)
          w(m[_]);
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
      for (var g = Array(l + 1).fill(0), E = this._size.reduce((p, y) => p * y, 1), f = 0; f < E; f++) {
        for (var w = this._data, C = 0; C < l; C++)
          w = w[g[C]];
        yield {
          value: w[g[l]],
          index: g.slice()
        };
        for (var D = l; D >= 0 && (g[D]++, !(g[D] < this._size[D])); D--)
          g[D] = 0;
      }
    }
  }, r.prototype.rows = function() {
    var l = [], d = this.size();
    if (d.length !== 2)
      throw new TypeError("Rows can only be returned for a 2D matrix.");
    var g = this._data;
    for (var E of g)
      l.push(new r([E], this._datatype));
    return l;
  }, r.prototype.columns = function() {
    var l = this, d = [], g = this.size();
    if (g.length !== 2)
      throw new TypeError("Rows can only be returned for a 2D matrix.");
    for (var E = this._data, f = function(D) {
      var p = E.map((y) => [y[D]]);
      d.push(new r(p, l._datatype));
    }, w = 0; w < g[1]; w++)
      f(w);
    return d;
  }, r.prototype.toArray = function() {
    return Be(this._data);
  }, r.prototype.valueOf = function() {
    return this._data;
  }, r.prototype.format = function(l) {
    return Ve(this._data, l);
  }, r.prototype.toString = function() {
    return Ve(this._data);
  }, r.prototype.toJSON = function() {
    return {
      mathjs: "DenseMatrix",
      data: this._data,
      size: this._size,
      datatype: this._datatype
    };
  }, r.prototype.diagonal = function(l) {
    if (l) {
      if (Ne(l) && (l = l.toNumber()), !ce(l) || !Re(l))
        throw new TypeError("The parameter k must be an integer number");
    } else
      l = 0;
    for (var d = l > 0 ? l : 0, g = l < 0 ? -l : 0, E = this._size[0], f = this._size[1], w = Math.min(E - g, f - d), C = [], D = 0; D < w; D++)
      C[D] = this._data[D + g][D + d];
    return new r({
      data: C,
      size: [w],
      datatype: this._datatype
    });
  }, r.diagonal = function(l, d, g, E) {
    if (!Fe(l))
      throw new TypeError("Array expected, size parameter");
    if (l.length !== 2)
      throw new Error("Only two dimensions matrix are supported");
    if (l = l.map(function(_) {
      if (Ne(_) && (_ = _.toNumber()), !ce(_) || !Re(_) || _ < 1)
        throw new Error("Size values must be positive integers");
      return _;
    }), g) {
      if (Ne(g) && (g = g.toNumber()), !ce(g) || !Re(g))
        throw new TypeError("The parameter k must be an integer number");
    } else
      g = 0;
    var f = g > 0 ? g : 0, w = g < 0 ? -g : 0, C = l[0], D = l[1], p = Math.min(C - w, D - f), y;
    if (Fe(d)) {
      if (d.length !== p)
        throw new Error("Invalid value array length");
      y = function(F) {
        return d[F];
      };
    } else if (Pe(d)) {
      var m = d.size();
      if (m.length !== 1 || m[0] !== p)
        throw new Error("Invalid matrix length");
      y = function(F) {
        return d.get([F]);
      };
    } else
      y = function() {
        return d;
      };
    E || (E = Ne(y(0)) ? y(0).mul(0) : 0);
    var v = [];
    if (l.length > 0) {
      v = Sr(v, l, E);
      for (var A = 0; A < p; A++)
        v[A + w][A + f] = y(A);
    }
    return new r({
      data: v,
      size: [C, D]
    });
  }, r.fromJSON = function(l) {
    return new r(l);
  }, r.prototype.swapRows = function(l, d) {
    if (!ce(l) || !Re(l) || !ce(d) || !Re(d))
      throw new Error("Row index must be positive integers");
    if (this._size.length !== 2)
      throw new Error("Only two dimensional matrix is supported");
    return Ee(l, this._size[0]), Ee(d, this._size[0]), r._swapRows(l, d, this._data), this;
  }, r._swapRows = function(l, d, g) {
    var E = g[l];
    g[l] = g[d], g[d] = E;
  };
  function h(l) {
    return Pe(l) ? h(l.valueOf()) : Fe(l) ? l.map(h) : l;
  }
  return r;
}, {
  isClass: !0
});
function Zn(t, e, n) {
  if (!n)
    return Pe(t) ? t.map((i) => e(i), !1, !0) : Br(t, e, !0);
  var r = (i) => i === 0 ? i : e(i);
  return Pe(t) ? t.map((i) => r(i), !1, !0) : Br(t, r, !0);
}
var Rr = "isInteger", Nc = ["typed", "equal"], Pc = /* @__PURE__ */ ie(Rr, Nc, (t) => {
  var {
    typed: e,
    equal: n
  } = t;
  return e(Rr, {
    number: (r) => Number.isFinite(r) ? n(r, Math.round(r)) : !1,
    BigNumber: (r) => r.isFinite() ? n(r.round(), r) : !1,
    bigint: (r) => !0,
    Fraction: (r) => r.d === 1n,
    "Array | Matrix": e.referToSelf((r) => (i) => Zn(i, r))
  });
}), Lc = "number", Jn = "number, number";
function Hi(t, e) {
  return t + e;
}
Hi.signature = Jn;
function Xi(t, e) {
  return t - e;
}
Xi.signature = Jn;
function ji(t, e) {
  return t * e;
}
ji.signature = Jn;
function Yi(t) {
  return -t;
}
Yi.signature = Lc;
function Ic(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1e-9, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  if (n <= 0)
    throw new Error("Relative tolerance must be greater than 0");
  if (r < 0)
    throw new Error("Absolute tolerance must be at least 0");
  return t.isNaN() || e.isNaN() ? !1 : !t.isFinite() || !e.isFinite() ? t.eq(e) : t.eq(e) ? !0 : t.minus(e).abs().lte(t.constructor.max(t.constructor.max(t.abs(), e.abs()).mul(n), r));
}
function Uc(t, e, n, r) {
  return rn(t.re, e.re, n, r) && rn(t.im, e.im, n, r);
}
var Oc = /* @__PURE__ */ ie("compareUnits", ["typed"], (t) => {
  var {
    typed: e
  } = t;
  return {
    "Unit, Unit": e.referToSelf((n) => (r, i) => {
      if (!r.equalBase(i))
        throw new Error("Cannot compare units with different base");
      return e.find(n, [r.valueType(), i.valueType()])(r.value, i.value);
    })
  };
}), cn = "equalScalar", kc = ["typed", "config"], $c = /* @__PURE__ */ ie(cn, kc, (t) => {
  var {
    typed: e,
    config: n
  } = t, r = Oc({
    typed: e
  });
  return e(cn, {
    "boolean, boolean": function(s, o) {
      return s === o;
    },
    "number, number": function(s, o) {
      return rn(s, o, n.relTol, n.absTol);
    },
    "BigNumber, BigNumber": function(s, o) {
      return s.eq(o) || Ic(s, o, n.relTol, n.absTol);
    },
    "bigint, bigint": function(s, o) {
      return s === o;
    },
    "Fraction, Fraction": function(s, o) {
      return s.equals(o);
    },
    "Complex, Complex": function(s, o) {
      return Uc(s, o, n.relTol, n.absTol);
    }
  }, r);
});
ie(cn, ["typed", "config"], (t) => {
  var {
    typed: e,
    config: n
  } = t;
  return e(cn, {
    "number, number": function(i, s) {
      return rn(i, s, n.relTol, n.absTol);
    }
  });
});
var zc = "SparseMatrix", Vc = ["typed", "equalScalar", "Matrix"], Hc = /* @__PURE__ */ ie(zc, Vc, (t) => {
  var {
    typed: e,
    equalScalar: n,
    Matrix: r
  } = t;
  function i(f, w) {
    if (!(this instanceof i))
      throw new SyntaxError("Constructor must be called with the new operator");
    if (w && !et(w))
      throw new Error("Invalid datatype: " + w);
    if (Pe(f))
      s(this, f, w);
    else if (f && Fe(f.index) && Fe(f.ptr) && Fe(f.size))
      this._values = f.values, this._index = f.index, this._ptr = f.ptr, this._size = f.size, this._datatype = w || f.datatype;
    else if (Fe(f))
      o(this, f, w);
    else {
      if (f)
        throw new TypeError("Unsupported type of data (" + wt(f) + ")");
      this._values = [], this._index = [], this._ptr = [0], this._size = [0, 0], this._datatype = w;
    }
  }
  function s(f, w, C) {
    w.type === "SparseMatrix" ? (f._values = w._values ? Be(w._values) : void 0, f._index = Be(w._index), f._ptr = Be(w._ptr), f._size = Be(w._size), f._datatype = C || w._datatype) : o(f, w.valueOf(), C || w._datatype);
  }
  function o(f, w, C) {
    f._values = [], f._index = [], f._ptr = [], f._datatype = C;
    var D = w.length, p = 0, y = n, m = 0;
    if (et(C) && (y = e.find(n, [C, C]) || n, m = e.convert(0, C)), D > 0) {
      var v = 0;
      do {
        f._ptr.push(f._index.length);
        for (var A = 0; A < D; A++) {
          var _ = w[A];
          if (Fe(_)) {
            if (v === 0 && p < _.length && (p = _.length), v < _.length) {
              var F = _[v];
              y(F, m) || (f._values.push(F), f._index.push(A));
            }
          } else
            v === 0 && p < 1 && (p = 1), y(_, m) || (f._values.push(_), f._index.push(A));
        }
        v++;
      } while (v < p);
    }
    for (; f._ptr.length <= p; )
      f._ptr.push(f._index.length);
    f._size = [D, p];
  }
  i.prototype = new r(), i.prototype.createSparseMatrix = function(f, w) {
    return new i(f, w);
  }, Object.defineProperty(i, "name", {
    value: "SparseMatrix"
  }), i.prototype.constructor = i, i.prototype.type = "SparseMatrix", i.prototype.isSparseMatrix = !0, i.prototype.getDataType = function() {
    return Wn(this._values, wt);
  }, i.prototype.storage = function() {
    return "sparse";
  }, i.prototype.datatype = function() {
    return this._datatype;
  }, i.prototype.create = function(f, w) {
    return new i(f, w);
  }, i.prototype.density = function() {
    var f = this._size[0], w = this._size[1];
    return f !== 0 && w !== 0 ? this._index.length / (f * w) : 0;
  }, i.prototype.subset = function(f, w, C) {
    if (!this._values)
      throw new Error("Cannot invoke subset on a Pattern only matrix");
    switch (arguments.length) {
      case 1:
        return a(this, f);
      case 2:
      case 3:
        return u(this, f, w, C);
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  };
  function a(f, w) {
    if (!Xn(w))
      throw new TypeError("Invalid index");
    var C = w.isScalar();
    if (C)
      return f.get(w.min());
    var D = w.size();
    if (D.length !== f._size.length)
      throw new he(D.length, f._size.length);
    var p, y, m, v, A = w.min(), _ = w.max();
    for (p = 0, y = f._size.length; p < y; p++)
      Ee(A[p], f._size[p]), Ee(_[p], f._size[p]);
    var F = f._values, T = f._index, S = f._ptr, R = w.dimension(0), j = w.dimension(1), $ = [], X = [];
    function I(ne, te) {
      X[ne] = te[0], $[ne] = !0;
    }
    Number.isInteger(R) ? I(R, [0]) : R.forEach(I);
    var q = F ? [] : void 0, V = [], G = [];
    function Z(ne) {
      for (G.push(V.length), m = S[ne], v = S[ne + 1]; m < v; m++)
        p = T[m], $[p] === !0 && (V.push(X[p]), q && q.push(F[m]));
    }
    return Number.isInteger(j) ? Z(j) : j.forEach(Z), G.push(V.length), new i({
      values: q,
      index: V,
      ptr: G,
      size: D,
      datatype: f._datatype
    });
  }
  function u(f, w, C, D) {
    if (!w || w.isIndex !== !0)
      throw new TypeError("Invalid index");
    var p = w.size(), y = w.isScalar(), m;
    if (Pe(C) ? (m = C.size(), C = C.toArray()) : m = Xe(C), y) {
      if (m.length !== 0)
        throw new TypeError("Scalar expected");
      f.set(w.min(), C, D);
    } else {
      if (p.length !== 1 && p.length !== 2)
        throw new he(p.length, f._size.length, "<");
      if (m.length < p.length) {
        for (var v = 0, A = 0; p[v] === 1 && m[v] === 1; )
          v++;
        for (; p[v] === 1; )
          A++, v++;
        C = Ii(C, p.length, A, m);
      }
      if (!mt(p, m))
        throw new he(p, m, ">");
      if (p.length === 1) {
        var _ = w.dimension(0);
        S(_, (R, j) => {
          Ee(R), f.set([R, 0], C[j[0]], D);
        });
      } else {
        var F = w.dimension(0), T = w.dimension(1);
        S(F, (R, j) => {
          Ee(R), S(T, ($, X) => {
            Ee($), f.set([R, $], C[j[0]][X[0]], D);
          });
        });
      }
    }
    return f;
    function S(R, j) {
      ce(R) ? j(R, [0]) : R.forEach(j);
    }
  }
  i.prototype.get = function(f) {
    if (!Fe(f))
      throw new TypeError("Array expected");
    if (f.length !== this._size.length)
      throw new he(f.length, this._size.length);
    if (!this._values)
      throw new Error("Cannot invoke get on a Pattern only matrix");
    var w = f[0], C = f[1];
    Ee(w, this._size[0]), Ee(C, this._size[1]);
    var D = c(w, this._ptr[C], this._ptr[C + 1], this._index);
    return D < this._ptr[C + 1] && this._index[D] === w ? this._values[D] : 0;
  }, i.prototype.set = function(f, w, C) {
    if (!Fe(f))
      throw new TypeError("Array expected");
    if (f.length !== this._size.length)
      throw new he(f.length, this._size.length);
    if (!this._values)
      throw new Error("Cannot invoke set on a Pattern only matrix");
    var D = f[0], p = f[1], y = this._size[0], m = this._size[1], v = n, A = 0;
    et(this._datatype) && (v = e.find(n, [this._datatype, this._datatype]) || n, A = e.convert(0, this._datatype)), (D > y - 1 || p > m - 1) && (d(this, Math.max(D + 1, y), Math.max(p + 1, m), C), y = this._size[0], m = this._size[1]), Ee(D, y), Ee(p, m);
    var _ = c(D, this._ptr[p], this._ptr[p + 1], this._index);
    return _ < this._ptr[p + 1] && this._index[_] === D ? v(w, A) ? h(_, p, this._values, this._index, this._ptr) : this._values[_] = w : v(w, A) || l(_, D, p, w, this._values, this._index, this._ptr), this;
  };
  function c(f, w, C, D) {
    if (C - w === 0)
      return C;
    for (var p = w; p < C; p++)
      if (D[p] === f)
        return p;
    return w;
  }
  function h(f, w, C, D, p) {
    C.splice(f, 1), D.splice(f, 1);
    for (var y = w + 1; y < p.length; y++)
      p[y]--;
  }
  function l(f, w, C, D, p, y, m) {
    p.splice(f, 0, D), y.splice(f, 0, w);
    for (var v = C + 1; v < m.length; v++)
      m[v]++;
  }
  i.prototype.resize = function(f, w, C) {
    if (!tn(f))
      throw new TypeError("Array or Matrix expected");
    var D = f.valueOf().map((y) => Array.isArray(y) && y.length === 1 ? y[0] : y);
    if (D.length !== 2)
      throw new Error("Only two dimensions matrix are supported");
    D.forEach(function(y) {
      if (!ce(y) || !Re(y) || y < 0)
        throw new TypeError("Invalid size, must contain positive integers (size: " + Ve(D) + ")");
    });
    var p = C ? this.clone() : this;
    return d(p, D[0], D[1], w);
  };
  function d(f, w, C, D) {
    var p = D || 0, y = n, m = 0;
    et(f._datatype) && (y = e.find(n, [f._datatype, f._datatype]) || n, m = e.convert(0, f._datatype), p = e.convert(p, f._datatype));
    var v = !y(p, m), A = f._size[0], _ = f._size[1], F, T, S;
    if (C > _) {
      for (T = _; T < C; T++)
        if (f._ptr[T] = f._values.length, v)
          for (F = 0; F < A; F++)
            f._values.push(p), f._index.push(F);
      f._ptr[C] = f._values.length;
    } else C < _ && (f._ptr.splice(C + 1, _ - C), f._values.splice(f._ptr[C], f._values.length), f._index.splice(f._ptr[C], f._index.length));
    if (_ = C, w > A) {
      if (v) {
        var R = 0;
        for (T = 0; T < _; T++) {
          f._ptr[T] = f._ptr[T] + R, S = f._ptr[T + 1] + R;
          var j = 0;
          for (F = A; F < w; F++, j++)
            f._values.splice(S + j, 0, p), f._index.splice(S + j, 0, F), R++;
        }
        f._ptr[_] = f._values.length;
      }
    } else if (w < A) {
      var $ = 0;
      for (T = 0; T < _; T++) {
        f._ptr[T] = f._ptr[T] - $;
        var X = f._ptr[T], I = f._ptr[T + 1] - $;
        for (S = X; S < I; S++)
          F = f._index[S], F > w - 1 && (f._values.splice(S, 1), f._index.splice(S, 1), $++);
      }
      f._ptr[T] = f._values.length;
    }
    return f._size[0] = w, f._size[1] = C, f;
  }
  i.prototype.reshape = function(f, w) {
    if (!Fe(f))
      throw new TypeError("Array expected");
    if (f.length !== 2)
      throw new Error("Sparse matrices can only be reshaped in two dimensions");
    f.forEach(function(G) {
      if (!ce(G) || !Re(G) || G <= -2 || G === 0)
        throw new TypeError("Invalid size, must contain positive integers or -1 (size: " + Ve(f) + ")");
    });
    var C = this._size[0] * this._size[1];
    f = qn(f, C);
    var D = f[0] * f[1];
    if (C !== D)
      throw new Error("Reshaping sparse matrix will result in the wrong number of elements");
    var p = w ? this.clone() : this;
    if (this._size[0] === f[0] && this._size[1] === f[1])
      return p;
    for (var y = [], m = 0; m < p._ptr.length; m++)
      for (var v = 0; v < p._ptr[m + 1] - p._ptr[m]; v++)
        y.push(m);
    for (var A = p._values.slice(), _ = p._index.slice(), F = 0; F < p._index.length; F++) {
      var T = _[F], S = y[F], R = T * p._size[1] + S;
      y[F] = R % f[1], _[F] = Math.floor(R / f[1]);
    }
    p._values.length = 0, p._index.length = 0, p._ptr.length = f[1] + 1, p._size = f.slice();
    for (var j = 0; j < p._ptr.length; j++)
      p._ptr[j] = 0;
    for (var $ = 0; $ < A.length; $++) {
      var X = _[$], I = y[$], q = A[$], V = c(X, p._ptr[I], p._ptr[I + 1], p._index);
      l(V, X, I, q, p._values, p._index, p._ptr);
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
  }, i.prototype.map = function(f, w) {
    if (!this._values)
      throw new Error("Cannot invoke map on a Pattern only matrix");
    var C = this, D = this._size[0], p = this._size[1], y = un(f, C, "map"), m = function(A, _, F) {
      return y.fn(A, [_, F], C);
    };
    return g(this, 0, D - 1, 0, p - 1, m, w);
  };
  function g(f, w, C, D, p, y, m) {
    var v = [], A = [], _ = [], F = n, T = 0;
    et(f._datatype) && (F = e.find(n, [f._datatype, f._datatype]) || n, T = e.convert(0, f._datatype));
    for (var S = function(se, de, me) {
      var ge = y(se, de, me);
      F(ge, T) || (v.push(ge), A.push(de));
    }, R = D; R <= p; R++) {
      _.push(v.length);
      var j = f._ptr[R], $ = f._ptr[R + 1];
      if (m)
        for (var X = j; X < $; X++) {
          var I = f._index[X];
          I >= w && I <= C && S(f._values[X], I - w, R - D);
        }
      else {
        for (var q = {}, V = j; V < $; V++) {
          var G = f._index[V];
          q[G] = f._values[V];
        }
        for (var Z = w; Z <= C; Z++) {
          var ne = Z in q ? q[Z] : 0;
          S(ne, Z - w, R - D);
        }
      }
    }
    return _.push(v.length), new i({
      values: v,
      index: A,
      ptr: _,
      size: [C - w + 1, p - D + 1]
    });
  }
  i.prototype.forEach = function(f, w) {
    if (!this._values)
      throw new Error("Cannot invoke forEach on a Pattern only matrix");
    for (var C = this, D = this._size[0], p = this._size[1], y = un(f, C, "forEach"), m = 0; m < p; m++) {
      var v = this._ptr[m], A = this._ptr[m + 1];
      if (w)
        for (var _ = v; _ < A; _++) {
          var F = this._index[_];
          y.fn(this._values[_], [F, m], C);
        }
      else {
        for (var T = {}, S = v; S < A; S++) {
          var R = this._index[S];
          T[R] = this._values[S];
        }
        for (var j = 0; j < D; j++) {
          var $ = j in T ? T[j] : 0;
          y.fn($, [j, m], C);
        }
      }
    }
  }, i.prototype[Symbol.iterator] = function* () {
    if (!this._values)
      throw new Error("Cannot iterate a Pattern only matrix");
    for (var f = this._size[1], w = 0; w < f; w++)
      for (var C = this._ptr[w], D = this._ptr[w + 1], p = C; p < D; p++) {
        var y = this._index[p];
        yield {
          value: this._values[p],
          index: [y, w]
        };
      }
  }, i.prototype.toArray = function() {
    return E(this._values, this._index, this._ptr, this._size, !0);
  }, i.prototype.valueOf = function() {
    return E(this._values, this._index, this._ptr, this._size, !1);
  };
  function E(f, w, C, D, p) {
    var y = D[0], m = D[1], v = [], A, _;
    for (A = 0; A < y; A++)
      for (v[A] = [], _ = 0; _ < m; _++)
        v[A][_] = 0;
    for (_ = 0; _ < m; _++)
      for (var F = C[_], T = C[_ + 1], S = F; S < T; S++)
        A = w[S], v[A][_] = f ? p ? Be(f[S]) : f[S] : 1;
    return v;
  }
  return i.prototype.format = function(f) {
    for (var w = this._size[0], C = this._size[1], D = this.density(), p = "Sparse Matrix [" + Ve(w, f) + " x " + Ve(C, f) + "] density: " + Ve(D, f) + `
`, y = 0; y < C; y++)
      for (var m = this._ptr[y], v = this._ptr[y + 1], A = m; A < v; A++) {
        var _ = this._index[A];
        p += `
    (` + Ve(_, f) + ", " + Ve(y, f) + ") ==> " + (this._values ? Ve(this._values[A], f) : "X");
      }
    return p;
  }, i.prototype.toString = function() {
    return Ve(this.toArray());
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
      if (Ne(f) && (f = f.toNumber()), !ce(f) || !Re(f))
        throw new TypeError("The parameter k must be an integer number");
    } else
      f = 0;
    var w = f > 0 ? f : 0, C = f < 0 ? -f : 0, D = this._size[0], p = this._size[1], y = Math.min(D - C, p - w), m = [], v = [], A = [];
    A[0] = 0;
    for (var _ = w; _ < p && m.length < y; _++)
      for (var F = this._ptr[_], T = this._ptr[_ + 1], S = F; S < T; S++) {
        var R = this._index[S];
        if (R === _ - w + C) {
          m.push(this._values[S]), v[m.length - 1] = R - C;
          break;
        }
      }
    return A.push(m.length), new i({
      values: m,
      index: v,
      ptr: A,
      size: [y, 1]
    });
  }, i.fromJSON = function(f) {
    return new i(f);
  }, i.diagonal = function(f, w, C, D, p) {
    if (!Fe(f))
      throw new TypeError("Array expected, size parameter");
    if (f.length !== 2)
      throw new Error("Only two dimensions matrix are supported");
    if (f = f.map(function(G) {
      if (Ne(G) && (G = G.toNumber()), !ce(G) || !Re(G) || G < 1)
        throw new Error("Size values must be positive integers");
      return G;
    }), C) {
      if (Ne(C) && (C = C.toNumber()), !ce(C) || !Re(C))
        throw new TypeError("The parameter k must be an integer number");
    } else
      C = 0;
    var y = n, m = 0;
    et(p) && (y = e.find(n, [p, p]) || n, m = e.convert(0, p));
    var v = C > 0 ? C : 0, A = C < 0 ? -C : 0, _ = f[0], F = f[1], T = Math.min(_ - A, F - v), S;
    if (Fe(w)) {
      if (w.length !== T)
        throw new Error("Invalid value array length");
      S = function(Z) {
        return w[Z];
      };
    } else if (Pe(w)) {
      var R = w.size();
      if (R.length !== 1 || R[0] !== T)
        throw new Error("Invalid matrix length");
      S = function(Z) {
        return w.get([Z]);
      };
    } else
      S = function() {
        return w;
      };
    for (var j = [], $ = [], X = [], I = 0; I < F; I++) {
      X.push(j.length);
      var q = I - v;
      if (q >= 0 && q < T) {
        var V = S(q);
        y(V, m) || ($.push(q + A), j.push(V));
      }
    }
    return X.push(j.length), new i({
      values: j,
      index: $,
      ptr: X,
      size: [_, F]
    });
  }, i.prototype.swapRows = function(f, w) {
    if (!ce(f) || !Re(f) || !ce(w) || !Re(w))
      throw new Error("Row index must be positive integers");
    if (this._size.length !== 2)
      throw new Error("Only two dimensional matrix is supported");
    return Ee(f, this._size[0]), Ee(w, this._size[0]), i._swapRows(f, w, this._size[1], this._values, this._index, this._ptr), this;
  }, i._forEachRow = function(f, w, C, D, p) {
    for (var y = D[f], m = D[f + 1], v = y; v < m; v++)
      p(C[v], w[v]);
  }, i._swapRows = function(f, w, C, D, p, y) {
    for (var m = 0; m < C; m++) {
      var v = y[m], A = y[m + 1], _ = c(f, v, A, p), F = c(w, v, A, p);
      if (_ < A && F < A && p[_] === f && p[F] === w) {
        if (D) {
          var T = D[_];
          D[_] = D[F], D[F] = T;
        }
        continue;
      }
      if (_ < A && p[_] === f && (F >= A || p[F] !== w)) {
        var S = D ? D[_] : void 0;
        p.splice(F, 0, w), D && D.splice(F, 0, S), p.splice(F <= _ ? _ + 1 : _, 1), D && D.splice(F <= _ ? _ + 1 : _, 1);
        continue;
      }
      if (F < A && p[F] === w && (_ >= A || p[_] !== f)) {
        var R = D ? D[F] : void 0;
        p.splice(_, 0, f), D && D.splice(_, 0, R), p.splice(_ <= F ? F + 1 : F, 1), D && D.splice(_ <= F ? F + 1 : F, 1);
      }
    }
  }, i;
}, {
  isClass: !0
}), Nr = "matrix", Xc = ["typed", "Matrix", "DenseMatrix", "SparseMatrix"], jc = /* @__PURE__ */ ie(Nr, Xc, (t) => {
  var {
    typed: e,
    Matrix: n,
    DenseMatrix: r,
    SparseMatrix: i
  } = t;
  return e(Nr, {
    "": function() {
      return s([]);
    },
    string: function(a) {
      return s([], a);
    },
    "string, string": function(a, u) {
      return s([], a, u);
    },
    Array: function(a) {
      return s(a);
    },
    Matrix: function(a) {
      return s(a, a.storage());
    },
    "Array | Matrix, string": s,
    "Array | Matrix, string, string": s
  });
  function s(o, a, u) {
    if (a === "dense" || a === "default" || a === void 0)
      return new r(o, u);
    if (a === "sparse")
      return new i(o, u);
    throw new TypeError("Unknown matrix type " + JSON.stringify(a) + ".");
  }
}), Pr = "unaryMinus", Yc = ["typed"], Gc = /* @__PURE__ */ ie(Pr, Yc, (t) => {
  var {
    typed: e
  } = t;
  return e(Pr, {
    number: Yi,
    "Complex | BigNumber | Fraction": (n) => n.neg(),
    bigint: (n) => -n,
    Unit: e.referToSelf((n) => (r) => {
      var i = r.clone();
      return i.value = e.find(n, i.valueType())(r.value), i;
    }),
    // deep map collection, skip zeros since unaryMinus(0) = 0
    "Array | Matrix": e.referToSelf((n) => (r) => Zn(r, n, !0))
    // TODO: add support for string
  });
}), Lr = "addScalar", Kc = ["typed"], qc = /* @__PURE__ */ ie(Lr, Kc, (t) => {
  var {
    typed: e
  } = t;
  return e(Lr, {
    "number, number": Hi,
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
    "Unit, Unit": e.referToSelf((n) => (r, i) => {
      if (r.value === null || r.value === void 0)
        throw new Error("Parameter x contains a unit with undefined value");
      if (i.value === null || i.value === void 0)
        throw new Error("Parameter y contains a unit with undefined value");
      if (!r.equalBase(i)) throw new Error("Units do not match");
      var s = r.clone();
      return s.value = e.find(n, [s.valueType(), i.valueType()])(s.value, i.value), s.fixPrefix = !1, s;
    })
  });
}), Ir = "subtractScalar", Wc = ["typed"], Zc = /* @__PURE__ */ ie(Ir, Wc, (t) => {
  var {
    typed: e
  } = t;
  return e(Ir, {
    "number, number": Xi,
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
    "Unit, Unit": e.referToSelf((n) => (r, i) => {
      if (r.value === null || r.value === void 0)
        throw new Error("Parameter x contains a unit with undefined value");
      if (i.value === null || i.value === void 0)
        throw new Error("Parameter y contains a unit with undefined value");
      if (!r.equalBase(i)) throw new Error("Units do not match");
      var s = r.clone();
      return s.value = e.find(n, [s.valueType(), i.valueType()])(s.value, i.value), s.fixPrefix = !1, s;
    })
  });
}), Jc = "matAlgo11xS0s", Qc = ["typed", "equalScalar"], el = /* @__PURE__ */ ie(Jc, Qc, (t) => {
  var {
    typed: e,
    equalScalar: n
  } = t;
  return function(i, s, o, a) {
    var u = i._values, c = i._index, h = i._ptr, l = i._size, d = i._datatype;
    if (!u)
      throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var g = l[0], E = l[1], f, w = n, C = 0, D = o;
    typeof d == "string" && (f = d, w = e.find(n, [f, f]), C = e.convert(0, f), s = e.convert(s, f), D = e.find(o, [f, f]));
    for (var p = [], y = [], m = [], v = 0; v < E; v++) {
      m[v] = y.length;
      for (var A = h[v], _ = h[v + 1], F = A; F < _; F++) {
        var T = c[F], S = a ? D(s, u[F]) : D(u[F], s);
        w(S, C) || (y.push(T), p.push(S));
      }
    }
    return m[E] = y.length, i.createSparseMatrix({
      values: p,
      index: y,
      ptr: m,
      size: [g, E],
      datatype: f
    });
  };
}), tl = "matAlgo12xSfs", nl = ["typed", "DenseMatrix"], Gi = /* @__PURE__ */ ie(tl, nl, (t) => {
  var {
    typed: e,
    DenseMatrix: n
  } = t;
  return function(i, s, o, a) {
    var u = i._values, c = i._index, h = i._ptr, l = i._size, d = i._datatype;
    if (!u)
      throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var g = l[0], E = l[1], f, w = o;
    typeof d == "string" && (f = d, s = e.convert(s, f), w = e.find(o, [f, f]));
    for (var C = [], D = [], p = [], y = 0; y < E; y++) {
      for (var m = y + 1, v = h[y], A = h[y + 1], _ = v; _ < A; _++) {
        var F = c[_];
        D[F] = u[_], p[F] = m;
      }
      for (var T = 0; T < g; T++)
        y === 0 && (C[T] = []), p[T] === m ? C[T][y] = a ? w(s, D[T]) : w(D[T], s) : C[T][y] = a ? w(s, 0) : w(0, s);
    }
    return new n({
      data: C,
      size: [g, E],
      datatype: f
    });
  };
}), rl = "matAlgo14xDs", il = ["typed"], Ki = /* @__PURE__ */ ie(rl, il, (t) => {
  var {
    typed: e
  } = t;
  return function(i, s, o, a) {
    var u = i._data, c = i._size, h = i._datatype, l, d = o;
    typeof h == "string" && (l = h, s = e.convert(s, l), d = e.find(o, [l, l]));
    var g = c.length > 0 ? n(d, 0, c, c[0], u, s, a) : [];
    return i.createDenseMatrix({
      data: g,
      size: Be(c),
      datatype: l
    });
  };
  function n(r, i, s, o, a, u, c) {
    var h = [];
    if (i === s.length - 1)
      for (var l = 0; l < o; l++)
        h[l] = c ? r(u, a[l]) : r(a[l], u);
    else
      for (var d = 0; d < o; d++)
        h[d] = n(r, i + 1, s, s[i + 1], a[d], u, c);
    return h;
  }
}), sl = "matAlgo03xDSf", ol = ["typed"], qi = /* @__PURE__ */ ie(sl, ol, (t) => {
  var {
    typed: e
  } = t;
  return function(r, i, s, o) {
    var a = r._data, u = r._size, c = r._datatype || r.getDataType(), h = i._values, l = i._index, d = i._ptr, g = i._size, E = i._datatype || i._data === void 0 ? i._datatype : i.getDataType();
    if (u.length !== g.length)
      throw new he(u.length, g.length);
    if (u[0] !== g[0] || u[1] !== g[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + u + ") must match Matrix B (" + g + ")");
    if (!h)
      throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
    var f = u[0], w = u[1], C, D = 0, p = s;
    typeof c == "string" && c === E && c !== "mixed" && (C = c, D = e.convert(0, C), p = e.find(s, [C, C]));
    for (var y = [], m = 0; m < f; m++)
      y[m] = [];
    for (var v = [], A = [], _ = 0; _ < w; _++) {
      for (var F = _ + 1, T = d[_], S = d[_ + 1], R = T; R < S; R++) {
        var j = l[R];
        v[j] = o ? p(h[R], a[j][_]) : p(a[j][_], h[R]), A[j] = F;
      }
      for (var $ = 0; $ < f; $++)
        A[$] === F ? y[$][_] = v[$] : y[$][_] = o ? p(D, a[$][_]) : p(a[$][_], D);
    }
    return r.createDenseMatrix({
      data: y,
      size: [f, w],
      datatype: c === r._datatype && E === i._datatype ? C : void 0
    });
  };
}), al = "matAlgo05xSfSf", ul = ["typed", "equalScalar"], cl = /* @__PURE__ */ ie(al, ul, (t) => {
  var {
    typed: e,
    equalScalar: n
  } = t;
  return function(i, s, o) {
    var a = i._values, u = i._index, c = i._ptr, h = i._size, l = i._datatype || i._data === void 0 ? i._datatype : i.getDataType(), d = s._values, g = s._index, E = s._ptr, f = s._size, w = s._datatype || s._data === void 0 ? s._datatype : s.getDataType();
    if (h.length !== f.length)
      throw new he(h.length, f.length);
    if (h[0] !== f[0] || h[1] !== f[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + h + ") must match Matrix B (" + f + ")");
    var C = h[0], D = h[1], p, y = n, m = 0, v = o;
    typeof l == "string" && l === w && l !== "mixed" && (p = l, y = e.find(n, [p, p]), m = e.convert(0, p), v = e.find(o, [p, p]));
    var A = a && d ? [] : void 0, _ = [], F = [], T = A ? [] : void 0, S = A ? [] : void 0, R = [], j = [], $, X, I, q;
    for (X = 0; X < D; X++) {
      F[X] = _.length;
      var V = X + 1;
      for (I = c[X], q = c[X + 1]; I < q; I++)
        $ = u[I], _.push($), R[$] = V, T && (T[$] = a[I]);
      for (I = E[X], q = E[X + 1]; I < q; I++)
        $ = g[I], R[$] !== V && _.push($), j[$] = V, S && (S[$] = d[I]);
      if (A)
        for (I = F[X]; I < _.length; ) {
          $ = _[I];
          var G = R[$], Z = j[$];
          if (G === V || Z === V) {
            var ne = G === V ? T[$] : m, te = Z === V ? S[$] : m, se = v(ne, te);
            y(se, m) ? _.splice(I, 1) : (A.push(se), I++);
          }
        }
    }
    return F[D] = _.length, i.createSparseMatrix({
      values: A,
      index: _,
      ptr: F,
      size: [C, D],
      datatype: l === i._datatype && w === s._datatype ? p : void 0
    });
  };
}), ll = "matAlgo13xDD", fl = ["typed"], hl = /* @__PURE__ */ ie(ll, fl, (t) => {
  var {
    typed: e
  } = t;
  return function(i, s, o) {
    var a = i._data, u = i._size, c = i._datatype, h = s._data, l = s._size, d = s._datatype, g = [];
    if (u.length !== l.length)
      throw new he(u.length, l.length);
    for (var E = 0; E < u.length; E++) {
      if (u[E] !== l[E])
        throw new RangeError("Dimension mismatch. Matrix A (" + u + ") must match Matrix B (" + l + ")");
      g[E] = u[E];
    }
    var f, w = o;
    typeof c == "string" && c === d && (f = c, w = e.find(o, [f, f]));
    var C = g.length > 0 ? n(w, 0, g, g[0], a, h) : [];
    return i.createDenseMatrix({
      data: C,
      size: g,
      datatype: f
    });
  };
  function n(r, i, s, o, a, u) {
    var c = [];
    if (i === s.length - 1)
      for (var h = 0; h < o; h++)
        c[h] = r(a[h], u[h]);
    else
      for (var l = 0; l < o; l++)
        c[l] = n(r, i + 1, s, s[i + 1], a[l], u[l]);
    return c;
  }
});
function Te(t, e) {
  if (mt(t.size(), e.size()))
    return [t, e];
  var n = $i(t.size(), e.size());
  return [t, e].map((r) => dl(r, n));
}
function dl(t, e) {
  return mt(t.size(), e) ? t : t.create(In(t.valueOf(), e), t.datatype());
}
var pl = "matrixAlgorithmSuite", ml = ["typed", "matrix"], Wi = /* @__PURE__ */ ie(pl, ml, (t) => {
  var {
    typed: e,
    matrix: n
  } = t, r = hl({
    typed: e
  }), i = Ki({
    typed: e
  });
  return function(o) {
    var a = o.elop, u = o.SD || o.DS, c;
    a ? (c = {
      "DenseMatrix, DenseMatrix": (g, E) => r(...Te(g, E), a),
      "Array, Array": (g, E) => r(...Te(n(g), n(E)), a).valueOf(),
      "Array, DenseMatrix": (g, E) => r(...Te(n(g), E), a),
      "DenseMatrix, Array": (g, E) => r(...Te(g, n(E)), a)
    }, o.SS && (c["SparseMatrix, SparseMatrix"] = (g, E) => o.SS(...Te(g, E), a, !1)), o.DS && (c["DenseMatrix, SparseMatrix"] = (g, E) => o.DS(...Te(g, E), a, !1), c["Array, SparseMatrix"] = (g, E) => o.DS(...Te(n(g), E), a, !1)), u && (c["SparseMatrix, DenseMatrix"] = (g, E) => u(...Te(E, g), a, !0), c["SparseMatrix, Array"] = (g, E) => u(...Te(n(E), g), a, !0))) : (c = {
      "DenseMatrix, DenseMatrix": e.referToSelf((g) => (E, f) => r(...Te(E, f), g)),
      "Array, Array": e.referToSelf((g) => (E, f) => r(...Te(n(E), n(f)), g).valueOf()),
      "Array, DenseMatrix": e.referToSelf((g) => (E, f) => r(...Te(n(E), f), g)),
      "DenseMatrix, Array": e.referToSelf((g) => (E, f) => r(...Te(E, n(f)), g))
    }, o.SS && (c["SparseMatrix, SparseMatrix"] = e.referToSelf((g) => (E, f) => o.SS(...Te(E, f), g, !1))), o.DS && (c["DenseMatrix, SparseMatrix"] = e.referToSelf((g) => (E, f) => o.DS(...Te(E, f), g, !1)), c["Array, SparseMatrix"] = e.referToSelf((g) => (E, f) => o.DS(...Te(n(E), f), g, !1))), u && (c["SparseMatrix, DenseMatrix"] = e.referToSelf((g) => (E, f) => u(...Te(f, E), g, !0)), c["SparseMatrix, Array"] = e.referToSelf((g) => (E, f) => u(...Te(n(f), E), g, !0))));
    var h = o.scalar || "any", l = o.Ds || o.Ss;
    l && (a ? (c["DenseMatrix," + h] = (g, E) => i(g, E, a, !1), c[h + ", DenseMatrix"] = (g, E) => i(E, g, a, !0), c["Array," + h] = (g, E) => i(n(g), E, a, !1).valueOf(), c[h + ", Array"] = (g, E) => i(n(E), g, a, !0).valueOf()) : (c["DenseMatrix," + h] = e.referToSelf((g) => (E, f) => i(E, f, g, !1)), c[h + ", DenseMatrix"] = e.referToSelf((g) => (E, f) => i(f, E, g, !0)), c["Array," + h] = e.referToSelf((g) => (E, f) => i(n(E), f, g, !1).valueOf()), c[h + ", Array"] = e.referToSelf((g) => (E, f) => i(n(f), E, g, !0).valueOf())));
    var d = o.sS !== void 0 ? o.sS : o.Ss;
    return a ? (o.Ss && (c["SparseMatrix," + h] = (g, E) => o.Ss(g, E, a, !1)), d && (c[h + ", SparseMatrix"] = (g, E) => d(E, g, a, !0))) : (o.Ss && (c["SparseMatrix," + h] = e.referToSelf((g) => (E, f) => o.Ss(E, f, g, !1))), d && (c[h + ", SparseMatrix"] = e.referToSelf((g) => (E, f) => d(f, E, g, !0)))), a && a.signatures && ja(c, a.signatures), c;
  };
}), gl = "matAlgo01xDSid", vl = ["typed"], Dl = /* @__PURE__ */ ie(gl, vl, (t) => {
  var {
    typed: e
  } = t;
  return function(r, i, s, o) {
    var a = r._data, u = r._size, c = r._datatype || r.getDataType(), h = i._values, l = i._index, d = i._ptr, g = i._size, E = i._datatype || i._data === void 0 ? i._datatype : i.getDataType();
    if (u.length !== g.length)
      throw new he(u.length, g.length);
    if (u[0] !== g[0] || u[1] !== g[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + u + ") must match Matrix B (" + g + ")");
    if (!h)
      throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
    var f = u[0], w = u[1], C = typeof c == "string" && c !== "mixed" && c === E ? c : void 0, D = C ? e.find(s, [C, C]) : s, p, y, m = [];
    for (p = 0; p < f; p++)
      m[p] = [];
    var v = [], A = [];
    for (y = 0; y < w; y++) {
      for (var _ = y + 1, F = d[y], T = d[y + 1], S = F; S < T; S++)
        p = l[S], v[p] = o ? D(h[S], a[p][y]) : D(a[p][y], h[S]), A[p] = _;
      for (p = 0; p < f; p++)
        A[p] === _ ? m[p][y] = v[p] : m[p][y] = a[p][y];
    }
    return r.createDenseMatrix({
      data: m,
      size: [f, w],
      datatype: c === r._datatype && E === i._datatype ? C : void 0
    });
  };
}), El = "matAlgo10xSids", wl = ["typed", "DenseMatrix"], yl = /* @__PURE__ */ ie(El, wl, (t) => {
  var {
    typed: e,
    DenseMatrix: n
  } = t;
  return function(i, s, o, a) {
    var u = i._values, c = i._index, h = i._ptr, l = i._size, d = i._datatype;
    if (!u)
      throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var g = l[0], E = l[1], f, w = o;
    typeof d == "string" && (f = d, s = e.convert(s, f), w = e.find(o, [f, f]));
    for (var C = [], D = [], p = [], y = 0; y < E; y++) {
      for (var m = y + 1, v = h[y], A = h[y + 1], _ = v; _ < A; _++) {
        var F = c[_];
        D[F] = u[_], p[F] = m;
      }
      for (var T = 0; T < g; T++)
        y === 0 && (C[T] = []), p[T] === m ? C[T][y] = a ? w(s, D[T]) : w(D[T], s) : C[T][y] = s;
    }
    return new n({
      data: C,
      size: [g, E],
      datatype: f
    });
  };
}), Cl = "multiplyScalar", Fl = ["typed"], bl = /* @__PURE__ */ ie(Cl, Fl, (t) => {
  var {
    typed: e
  } = t;
  return e("multiplyScalar", {
    "number, number": ji,
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
}), Ur = "multiply", _l = ["typed", "matrix", "addScalar", "multiplyScalar", "equalScalar", "dot"], Al = /* @__PURE__ */ ie(Ur, _l, (t) => {
  var {
    typed: e,
    matrix: n,
    addScalar: r,
    multiplyScalar: i,
    equalScalar: s,
    dot: o
  } = t, a = el({
    typed: e,
    equalScalar: s
  }), u = Ki({
    typed: e
  });
  function c(m, v) {
    switch (m.length) {
      case 1:
        switch (v.length) {
          case 1:
            if (m[0] !== v[0])
              throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");
            break;
          case 2:
            if (m[0] !== v[0])
              throw new RangeError("Dimension mismatch in multiplication. Vector length (" + m[0] + ") must match Matrix rows (" + v[0] + ")");
            break;
          default:
            throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + v.length + " dimensions)");
        }
        break;
      case 2:
        switch (v.length) {
          case 1:
            if (m[1] !== v[0])
              throw new RangeError("Dimension mismatch in multiplication. Matrix columns (" + m[1] + ") must match Vector length (" + v[0] + ")");
            break;
          case 2:
            if (m[1] !== v[0])
              throw new RangeError("Dimension mismatch in multiplication. Matrix A columns (" + m[1] + ") must match Matrix B rows (" + v[0] + ")");
            break;
          default:
            throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + v.length + " dimensions)");
        }
        break;
      default:
        throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has " + m.length + " dimensions)");
    }
  }
  function h(m, v, A) {
    if (A === 0)
      throw new Error("Cannot multiply two empty vectors");
    return o(m, v);
  }
  function l(m, v) {
    if (v.storage() !== "dense")
      throw new Error("Support for SparseMatrix not implemented");
    return d(m, v);
  }
  function d(m, v) {
    var A = m._data, _ = m._size, F = m._datatype || m.getDataType(), T = v._data, S = v._size, R = v._datatype || v.getDataType(), j = _[0], $ = S[1], X, I = r, q = i;
    F && R && F === R && typeof F == "string" && F !== "mixed" && (X = F, I = e.find(r, [X, X]), q = e.find(i, [X, X]));
    for (var V = [], G = 0; G < $; G++) {
      for (var Z = q(A[0], T[0][G]), ne = 1; ne < j; ne++)
        Z = I(Z, q(A[ne], T[ne][G]));
      V[G] = Z;
    }
    return m.createDenseMatrix({
      data: V,
      size: [$],
      datatype: F === m._datatype && R === v._datatype ? X : void 0
    });
  }
  var g = e("_multiplyMatrixVector", {
    "DenseMatrix, any": f,
    "SparseMatrix, any": D
  }), E = e("_multiplyMatrixMatrix", {
    "DenseMatrix, DenseMatrix": w,
    "DenseMatrix, SparseMatrix": C,
    "SparseMatrix, DenseMatrix": p,
    "SparseMatrix, SparseMatrix": y
  });
  function f(m, v) {
    var A = m._data, _ = m._size, F = m._datatype || m.getDataType(), T = v._data, S = v._datatype || v.getDataType(), R = _[0], j = _[1], $, X = r, I = i;
    F && S && F === S && typeof F == "string" && F !== "mixed" && ($ = F, X = e.find(r, [$, $]), I = e.find(i, [$, $]));
    for (var q = [], V = 0; V < R; V++) {
      for (var G = A[V], Z = I(G[0], T[0]), ne = 1; ne < j; ne++)
        Z = X(Z, I(G[ne], T[ne]));
      q[V] = Z;
    }
    return m.createDenseMatrix({
      data: q,
      size: [R],
      datatype: F === m._datatype && S === v._datatype ? $ : void 0
    });
  }
  function w(m, v) {
    var A = m._data, _ = m._size, F = m._datatype || m.getDataType(), T = v._data, S = v._size, R = v._datatype || v.getDataType(), j = _[0], $ = _[1], X = S[1], I, q = r, V = i;
    F && R && F === R && typeof F == "string" && F !== "mixed" && F !== "mixed" && (I = F, q = e.find(r, [I, I]), V = e.find(i, [I, I]));
    for (var G = [], Z = 0; Z < j; Z++) {
      var ne = A[Z];
      G[Z] = [];
      for (var te = 0; te < X; te++) {
        for (var se = V(ne[0], T[0][te]), de = 1; de < $; de++)
          se = q(se, V(ne[de], T[de][te]));
        G[Z][te] = se;
      }
    }
    return m.createDenseMatrix({
      data: G,
      size: [j, X],
      datatype: F === m._datatype && R === v._datatype ? I : void 0
    });
  }
  function C(m, v) {
    var A = m._data, _ = m._size, F = m._datatype || m.getDataType(), T = v._values, S = v._index, R = v._ptr, j = v._size, $ = v._datatype || v._data === void 0 ? v._datatype : v.getDataType();
    if (!T)
      throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");
    var X = _[0], I = j[1], q, V = r, G = i, Z = s, ne = 0;
    F && $ && F === $ && typeof F == "string" && F !== "mixed" && (q = F, V = e.find(r, [q, q]), G = e.find(i, [q, q]), Z = e.find(s, [q, q]), ne = e.convert(0, q));
    for (var te = [], se = [], de = [], me = v.createSparseMatrix({
      values: te,
      index: se,
      ptr: de,
      size: [X, I],
      datatype: F === m._datatype && $ === v._datatype ? q : void 0
    }), ge = 0; ge < I; ge++) {
      de[ge] = se.length;
      var le = R[ge], ye = R[ge + 1];
      if (ye > le)
        for (var fe = 0, oe = 0; oe < X; oe++) {
          for (var Me = oe + 1, Ce = void 0, ae = le; ae < ye; ae++) {
            var Ae = S[ae];
            fe !== Me ? (Ce = G(A[oe][Ae], T[ae]), fe = Me) : Ce = V(Ce, G(A[oe][Ae], T[ae]));
          }
          fe === Me && !Z(Ce, ne) && (se.push(oe), te.push(Ce));
        }
    }
    return de[I] = se.length, me;
  }
  function D(m, v) {
    var A = m._values, _ = m._index, F = m._ptr, T = m._datatype || m._data === void 0 ? m._datatype : m.getDataType();
    if (!A)
      throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
    var S = v._data, R = v._datatype || v.getDataType(), j = m._size[0], $ = v._size[0], X = [], I = [], q = [], V, G = r, Z = i, ne = s, te = 0;
    T && R && T === R && typeof T == "string" && T !== "mixed" && (V = T, G = e.find(r, [V, V]), Z = e.find(i, [V, V]), ne = e.find(s, [V, V]), te = e.convert(0, V));
    var se = [], de = [];
    q[0] = 0;
    for (var me = 0; me < $; me++) {
      var ge = S[me];
      if (!ne(ge, te))
        for (var le = F[me], ye = F[me + 1], fe = le; fe < ye; fe++) {
          var oe = _[fe];
          de[oe] ? se[oe] = G(se[oe], Z(ge, A[fe])) : (de[oe] = !0, I.push(oe), se[oe] = Z(ge, A[fe]));
        }
    }
    for (var Me = I.length, Ce = 0; Ce < Me; Ce++) {
      var ae = I[Ce];
      X[Ce] = se[ae];
    }
    return q[1] = I.length, m.createSparseMatrix({
      values: X,
      index: I,
      ptr: q,
      size: [j, 1],
      datatype: T === m._datatype && R === v._datatype ? V : void 0
    });
  }
  function p(m, v) {
    var A = m._values, _ = m._index, F = m._ptr, T = m._datatype || m._data === void 0 ? m._datatype : m.getDataType();
    if (!A)
      throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
    var S = v._data, R = v._datatype || v.getDataType(), j = m._size[0], $ = v._size[0], X = v._size[1], I, q = r, V = i, G = s, Z = 0;
    T && R && T === R && typeof T == "string" && T !== "mixed" && (I = T, q = e.find(r, [I, I]), V = e.find(i, [I, I]), G = e.find(s, [I, I]), Z = e.convert(0, I));
    for (var ne = [], te = [], se = [], de = m.createSparseMatrix({
      values: ne,
      index: te,
      ptr: se,
      size: [j, X],
      datatype: T === m._datatype && R === v._datatype ? I : void 0
    }), me = [], ge = [], le = 0; le < X; le++) {
      se[le] = te.length;
      for (var ye = le + 1, fe = 0; fe < $; fe++) {
        var oe = S[fe][le];
        if (!G(oe, Z))
          for (var Me = F[fe], Ce = F[fe + 1], ae = Me; ae < Ce; ae++) {
            var Ae = _[ae];
            ge[Ae] !== ye ? (ge[Ae] = ye, te.push(Ae), me[Ae] = V(oe, A[ae])) : me[Ae] = q(me[Ae], V(oe, A[ae]));
          }
      }
      for (var Ye = se[le], rt = te.length, it = Ye; it < rt; it++) {
        var Ct = te[it];
        ne[it] = me[Ct];
      }
    }
    return se[X] = te.length, de;
  }
  function y(m, v) {
    var A = m._values, _ = m._index, F = m._ptr, T = m._datatype || m._data === void 0 ? m._datatype : m.getDataType(), S = v._values, R = v._index, j = v._ptr, $ = v._datatype || v._data === void 0 ? v._datatype : v.getDataType(), X = m._size[0], I = v._size[1], q = A && S, V, G = r, Z = i;
    T && $ && T === $ && typeof T == "string" && T !== "mixed" && (V = T, G = e.find(r, [V, V]), Z = e.find(i, [V, V]));
    for (var ne = q ? [] : void 0, te = [], se = [], de = m.createSparseMatrix({
      values: ne,
      index: te,
      ptr: se,
      size: [X, I],
      datatype: T === m._datatype && $ === v._datatype ? V : void 0
    }), me = q ? [] : void 0, ge = [], le, ye, fe, oe, Me, Ce, ae, Ae, Ye = 0; Ye < I; Ye++) {
      se[Ye] = te.length;
      var rt = Ye + 1;
      for (Me = j[Ye], Ce = j[Ye + 1], oe = Me; oe < Ce; oe++)
        if (Ae = R[oe], q)
          for (ye = F[Ae], fe = F[Ae + 1], le = ye; le < fe; le++)
            ae = _[le], ge[ae] !== rt ? (ge[ae] = rt, te.push(ae), me[ae] = Z(S[oe], A[le])) : me[ae] = G(me[ae], Z(S[oe], A[le]));
        else
          for (ye = F[Ae], fe = F[Ae + 1], le = ye; le < fe; le++)
            ae = _[le], ge[ae] !== rt && (ge[ae] = rt, te.push(ae));
      if (q)
        for (var it = se[Ye], Ct = te.length, Ft = it; Ft < Ct; Ft++) {
          var yn = te[Ft];
          ne[Ft] = me[yn];
        }
    }
    return se[I] = te.length, de;
  }
  return e(Ur, i, {
    // we extend the signatures of multiplyScalar with signatures dealing with matrices
    "Array, Array": e.referTo("Matrix, Matrix", (m) => (v, A) => {
      c(Xe(v), Xe(A));
      var _ = m(n(v), n(A));
      return Pe(_) ? _.valueOf() : _;
    }),
    "Matrix, Matrix": function(v, A) {
      var _ = v.size(), F = A.size();
      return c(_, F), _.length === 1 ? F.length === 1 ? h(v, A, _[0]) : l(v, A) : F.length === 1 ? g(v, A) : E(v, A);
    },
    "Matrix, Array": e.referTo("Matrix,Matrix", (m) => (v, A) => m(v, n(A))),
    "Array, Matrix": e.referToSelf((m) => (v, A) => m(n(v, A.storage()), A)),
    "SparseMatrix, any": function(v, A) {
      return a(v, A, i, !1);
    },
    "DenseMatrix, any": function(v, A) {
      return u(v, A, i, !1);
    },
    "any, SparseMatrix": function(v, A) {
      return a(A, v, i, !0);
    },
    "any, DenseMatrix": function(v, A) {
      return u(A, v, i, !0);
    },
    "Array, any": function(v, A) {
      return u(n(v), A, i, !1).valueOf();
    },
    "any, Array": function(v, A) {
      return u(n(A), v, i, !0).valueOf();
    },
    "any, any": i,
    "any, any, ...any": e.referToSelf((m) => (v, A, _) => {
      for (var F = m(v, A), T = 0; T < _.length; T++)
        F = m(F, _[T]);
      return F;
    })
  });
}), Or = "subtract", Tl = ["typed", "matrix", "equalScalar", "subtractScalar", "unaryMinus", "DenseMatrix", "concat"], xl = /* @__PURE__ */ ie(Or, Tl, (t) => {
  var {
    typed: e,
    matrix: n,
    equalScalar: r,
    subtractScalar: i,
    unaryMinus: s,
    DenseMatrix: o,
    concat: a
  } = t, u = Dl({
    typed: e
  }), c = qi({
    typed: e
  }), h = cl({
    typed: e,
    equalScalar: r
  }), l = yl({
    typed: e,
    DenseMatrix: o
  }), d = Gi({
    typed: e,
    DenseMatrix: o
  }), g = Wi({
    typed: e,
    matrix: n,
    concat: a
  });
  return e(Or, {
    "any, any": i
  }, g({
    elop: i,
    SS: h,
    DS: u,
    SD: c,
    Ss: d,
    sS: l
  }));
}), Sl = "matAlgo07xSSf", Bl = ["typed", "SparseMatrix"], Ml = /* @__PURE__ */ ie(Sl, Bl, (t) => {
  var {
    typed: e,
    SparseMatrix: n
  } = t;
  return function(s, o, a) {
    var u = s._size, c = s._datatype || s._data === void 0 ? s._datatype : s.getDataType(), h = o._size, l = o._datatype || o._data === void 0 ? o._datatype : o.getDataType();
    if (u.length !== h.length)
      throw new he(u.length, h.length);
    if (u[0] !== h[0] || u[1] !== h[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + u + ") must match Matrix B (" + h + ")");
    var d = u[0], g = u[1], E, f = 0, w = a;
    typeof c == "string" && c === l && c !== "mixed" && (E = c, f = e.convert(0, E), w = e.find(a, [E, E]));
    for (var C = [], D = [], p = new Array(g + 1).fill(0), y = [], m = [], v = [], A = [], _ = 0; _ < g; _++) {
      var F = _ + 1, T = 0;
      r(s, _, v, y, F), r(o, _, A, m, F);
      for (var S = 0; S < d; S++) {
        var R = v[S] === F ? y[S] : f, j = A[S] === F ? m[S] : f, $ = w(R, j);
        $ !== 0 && $ !== !1 && (D.push(S), C.push($), T++);
      }
      p[_ + 1] = p[_] + T;
    }
    return new n({
      values: C,
      index: D,
      ptr: p,
      size: [d, g],
      datatype: c === s._datatype && l === o._datatype ? E : void 0
    });
  };
  function r(i, s, o, a, u) {
    for (var c = i._values, h = i._index, l = i._ptr, d = l[s], g = l[s + 1]; d < g; d++) {
      var E = h[d];
      o[E] = u, a[E] = c[d];
    }
  }
}), kr = "conj", Rl = ["typed"], Nl = /* @__PURE__ */ ie(kr, Rl, (t) => {
  var {
    typed: e
  } = t;
  return e(kr, {
    "number | BigNumber | Fraction": (n) => n,
    Complex: (n) => n.conjugate(),
    Unit: e.referToSelf((n) => (r) => new r.constructor(n(r.toNumeric()), r.formatUnits())),
    "Array | Matrix": e.referToSelf((n) => (r) => Zn(r, n))
  });
}), $r = "concat", Pl = ["typed", "matrix", "isInteger"], Ll = /* @__PURE__ */ ie($r, Pl, (t) => {
  var {
    typed: e,
    matrix: n,
    isInteger: r
  } = t;
  return e($r, {
    // TODO: change signature to '...Array | Matrix, dim?' when supported
    "...Array | Matrix | number | BigNumber": function(s) {
      var o, a = s.length, u = -1, c, h = !1, l = [];
      for (o = 0; o < a; o++) {
        var d = s[o];
        if (Pe(d) && (h = !0), ce(d) || Ne(d)) {
          if (o !== a - 1)
            throw new Error("Dimension must be specified as last argument");
          if (c = u, u = d.valueOf(), !r(u))
            throw new TypeError("Integer number expected for dimension");
          if (u < 0 || o > 0 && u > c)
            throw new yt(u, c + 1);
        } else {
          var g = Be(d).valueOf(), E = Xe(g);
          if (l[o] = g, c = u, u = E.length - 1, o > 0 && u !== c)
            throw new he(c + 1, u + 1);
        }
      }
      if (l.length === 0)
        throw new SyntaxError("At least one matrix expected");
      for (var f = l.shift(); l.length; )
        f = ki(f, l.shift(), u);
      return h ? n(f) : f;
    },
    "...string": function(s) {
      return s.join("");
    }
  });
}), zr = "size", Il = ["typed"], Ul = /* @__PURE__ */ ie(zr, Il, (t) => {
  var {
    typed: e
  } = t;
  return e(zr, {
    Matrix: (n) => n.size(),
    Array: Xe,
    string: (n) => [n.length],
    // scalar
    "number | Complex | BigNumber | Unit | boolean | null": (n) => []
  });
}), ln = "equal", Ol = ["typed", "matrix", "equalScalar", "DenseMatrix", "SparseMatrix"], kl = /* @__PURE__ */ ie(ln, Ol, (t) => {
  var {
    typed: e,
    matrix: n,
    equalScalar: r,
    DenseMatrix: i,
    concat: s,
    SparseMatrix: o
  } = t, a = qi({
    typed: e
  }), u = Ml({
    typed: e,
    SparseMatrix: o
  }), c = Gi({
    typed: e,
    DenseMatrix: i
  }), h = Wi({
    typed: e,
    matrix: n
  });
  return e(ln, $l({
    typed: e,
    equalScalar: r
  }), h({
    elop: r,
    SS: u,
    DS: a,
    Ss: c
  }));
}), $l = ie(ln, ["typed", "equalScalar"], (t) => {
  var {
    typed: e,
    equalScalar: n
  } = t;
  return e(ln, {
    "any, any": function(i, s) {
      return i === null ? s === null : s === null ? i === null : i === void 0 ? s === void 0 : s === void 0 ? i === void 0 : n(i, s);
    }
  });
}), Vr = "dot", zl = ["typed", "addScalar", "multiplyScalar", "conj", "size"], Vl = /* @__PURE__ */ ie(Vr, zl, (t) => {
  var {
    typed: e,
    addScalar: n,
    multiplyScalar: r,
    conj: i,
    size: s
  } = t;
  return e(Vr, {
    "Array | DenseMatrix, Array | DenseMatrix": a,
    "SparseMatrix, SparseMatrix": u
  });
  function o(c, h) {
    var l = s(c), d = s(h), g, E;
    if (l.length === 1)
      g = l[0];
    else if (l.length === 2 && l[1] === 1)
      g = l[0];
    else
      throw new RangeError("Expected a column vector, instead got a matrix of size (" + l.join(", ") + ")");
    if (d.length === 1)
      E = d[0];
    else if (d.length === 2 && d[1] === 1)
      E = d[0];
    else
      throw new RangeError("Expected a column vector, instead got a matrix of size (" + d.join(", ") + ")");
    if (g !== E) throw new RangeError("Vectors must have equal length (" + g + " != " + E + ")");
    if (g === 0) throw new RangeError("Cannot calculate the dot product of empty vectors");
    return g;
  }
  function a(c, h) {
    var l = o(c, h), d = Pe(c) ? c._data : c, g = Pe(c) ? c._datatype || c.getDataType() : void 0, E = Pe(h) ? h._data : h, f = Pe(h) ? h._datatype || h.getDataType() : void 0, w = s(c).length === 2, C = s(h).length === 2, D = n, p = r;
    if (g && f && g === f && typeof g == "string" && g !== "mixed") {
      var y = g;
      D = e.find(n, [y, y]), p = e.find(r, [y, y]);
    }
    if (!w && !C) {
      for (var m = p(i(d[0]), E[0]), v = 1; v < l; v++)
        m = D(m, p(i(d[v]), E[v]));
      return m;
    }
    if (!w && C) {
      for (var A = p(i(d[0]), E[0][0]), _ = 1; _ < l; _++)
        A = D(A, p(i(d[_]), E[_][0]));
      return A;
    }
    if (w && !C) {
      for (var F = p(i(d[0][0]), E[0]), T = 1; T < l; T++)
        F = D(F, p(i(d[T][0]), E[T]));
      return F;
    }
    if (w && C) {
      for (var S = p(i(d[0][0]), E[0][0]), R = 1; R < l; R++)
        S = D(S, p(i(d[R][0]), E[R][0]));
      return S;
    }
  }
  function u(c, h) {
    o(c, h);
    for (var l = c._index, d = c._values, g = h._index, E = h._values, f = 0, w = n, C = r, D = 0, p = 0; D < l.length && p < g.length; ) {
      var y = l[D], m = g[p];
      if (y < m) {
        D++;
        continue;
      }
      if (y > m) {
        p++;
        continue;
      }
      y === m && (f = w(f, C(d[D], E[p])), D++, p++);
    }
    return f;
  }
}), Hl = /* @__PURE__ */ ec({
  config: dn
}), Xl = /* @__PURE__ */ sc({}), jl = /* @__PURE__ */ dc({}), Qn = /* @__PURE__ */ gc({}), En = /* @__PURE__ */ Rc({
  Matrix: Qn,
  config: dn
}), ke = /* @__PURE__ */ ru({
  BigNumber: Hl,
  Complex: Xl,
  DenseMatrix: En,
  Fraction: jl
}), Zi = /* @__PURE__ */ qc({
  typed: ke
}), Yl = /* @__PURE__ */ Nl({
  typed: ke
}), wn = /* @__PURE__ */ $c({
  config: dn,
  typed: ke
}), Ji = /* @__PURE__ */ bl({
  typed: ke
}), Gl = /* @__PURE__ */ Ul({
  typed: ke
}), Qi = /* @__PURE__ */ Hc({
  Matrix: Qn,
  equalScalar: wn,
  typed: ke
}), Kl = /* @__PURE__ */ Zc({
  typed: ke
}), Un = /* @__PURE__ */ Vl({
  addScalar: Zi,
  conj: Yl,
  multiplyScalar: Ji,
  size: Gl,
  typed: ke
}), ut = /* @__PURE__ */ jc({
  DenseMatrix: En,
  Matrix: Qn,
  SparseMatrix: Qi,
  typed: ke
}), On = /* @__PURE__ */ Al({
  addScalar: Zi,
  dot: Un,
  equalScalar: wn,
  matrix: ut,
  multiplyScalar: Ji,
  typed: ke
}), ql = /* @__PURE__ */ kl({
  DenseMatrix: En,
  SparseMatrix: Qi,
  equalScalar: wn,
  matrix: ut,
  typed: ke
}), Wl = /* @__PURE__ */ Pc({
  equal: ql,
  typed: ke
}), Zl = /* @__PURE__ */ Gc({
  typed: ke
}), Jl = /* @__PURE__ */ Ll({
  isInteger: Wl,
  matrix: ut,
  typed: ke
}), Ql = /* @__PURE__ */ xl({
  DenseMatrix: En,
  concat: Jl,
  equalScalar: wn,
  matrix: ut,
  subtractScalar: Kl,
  typed: ke,
  unaryMinus: Zl
});
function kn(t) {
  return !t || !t.trim() ? [] : t.split(/[\s,]+/).map((e) => parseInt(e, 10)).filter((e) => !isNaN(e));
}
function ef(t) {
  if (t.length === 0) return 0;
  let e = t[t.length - 1];
  for (let n = t.length - 2; n >= 0; n--)
    e = t[n] + 1 / e;
  return e;
}
function tf(t, e) {
  if (e.length === 0) return ef(t);
  let n = [[1, 0], [0, 1]];
  for (const u of e)
    n = [
      [u * n[0][0] + n[0][1], n[0][0]],
      [u * n[1][0] + n[1][1], n[1][0]]
    ];
  const r = n[1][0], i = n[1][1] - n[0][0], s = -n[0][1], o = i * i - 4 * r * s;
  if (o < 0) throw new Error("quadraticCF: negative discriminant");
  let a = (-i + Math.sqrt(o)) / (2 * r);
  for (let u = t.length - 1; u >= 0; u--)
    a = t[u] + 1 / a;
  return a;
}
function Hr(t, e) {
  return tf(kn(t), kn(e));
}
function nf(t) {
  return kn(t).reverse().join(", ");
}
let dt = [1, 1.618033988749895], pt = [-1.618033988749895, 1], rf = null, $n = !1;
function sf(t) {
  console.log("checkPeriodSnap called, flow:", t, "p1:", rf);
}
function es(t, e) {
  t = ut(t), e = ut(e);
  const n = (r) => Un(r, r);
  for (n(t) > n(e) && ([t, e] = [e, t]); ; ) {
    const r = Math.round(Un(t, e) / n(t));
    if (e = Ql(e, On(r, t)), n(e) >= n(t)) break;
    [t, e] = [e, t];
  }
  return [t.toArray(), e.toArray()];
}
const fn = 60;
function of(t) {
  return ut([
    [Math.exp(t / (3 * fn)), 0],
    [0, Math.exp(-t / (3 * fn))]
  ]);
}
function af(t) {
  return ut([
    [1, 0],
    [t / fn, 1]
  ]);
}
function uf(t) {
  return ut([
    [1, t / fn],
    [0, 1]
  ]);
}
function cf(t, e) {
  const n = Hr(t.cfPrefix ?? "", t.cfPeriod ?? "0");
  dt = [1, Hr("", nf(t.cfPeriod) ?? "0")], pt = [-n, 1], [dt, pt] = es(dt, pt), $n = !0;
}
function lf(t) {
  dt = [1, 1.618033988749895], pt = [-1.618033988749895, 1];
}
function ff(t, e, n, r) {
  const i = t.getUniformValue("uFlow"), s = t.getUniformValue("uSpeed");
  let o;
  switch (i) {
    case 1:
      o = af(s);
      break;
    case 2:
      o = uf(s);
      break;
    default:
      o = of(s * 2);
  }
  const a = On(o, dt), u = On(o, pt);
  [dt, pt] = es(a, u), sf(i), t.setUniformValue("uLattice", [dt[0], dt[1], pt[0], pt[1]]), t.setUniformValue("uNewLattice", $n), $n = !1;
}
const hf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onFrame: ff,
  onSetLattice: cf,
  setup: lf
}, Symbol.toStringTag, { value: "Module" }));
export {
  df as mount
};
