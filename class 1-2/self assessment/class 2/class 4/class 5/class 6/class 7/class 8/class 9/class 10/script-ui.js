document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const digits = document.querySelectorAll('.digit');
  const operators = document.querySelectorAll('.operator');
  const clearBtn = document.getElementById('clear');
  const delBtn = document.getElementById('del');
  const decimal = document.getElementById('decimal');
  const equals = document.getElementById('equals');

  function safeEval(expr) {
    if (/[^0-9+\-*/().\s]/.test(expr)) throw new Error('Invalid');
    return Function('"use strict"; return (' + expr + ')')();
  }

  digits.forEach(b => b.addEventListener('click', () => {
    display.value = display.value === '0' ? b.textContent : display.value + b.textContent;
  }));

  decimal.addEventListener('click', () => {
    if (!display.value.includes('.')) display.value += '.';
  });

  operators.forEach(b => b.addEventListener('click', () => {
    const op = b.dataset.op;
    if (op === 'sqrt') {
      try { display.value = Math.sqrt(Number(display.value)); } catch { display.value = 'Error'; }
      return;
    }
    if (op === 'fact') {
      const n = Number(display.value);
      if (!Number.isInteger(n) || n < 0) { display.value = 'Error'; return; }
      let f = 1; for (let i = 2; i <= n; i++) f *= i;
      display.value = f;
      return;
    }
    const map = { add: '+', subtract: '-', multiply: '*', divide: '/', power: '**' };
    const sym = map[op] || '';
    if (/[+\-*/.]$/.test(display.value)) return;
    display.value += sym;
  }));

  equals.addEventListener('click', () => {
    try {
      const expr = display.value.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');
      display.value = safeEval(expr);
    } catch { display.value = 'Error'; }
  });

  clearBtn.addEventListener('click', () => display.value = '0');
  delBtn.addEventListener('click', () => display.value = display.value.slice(0, -1) || '0');

  display.value = '0';
});
