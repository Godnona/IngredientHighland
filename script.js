const SIZES = ["S", "M", "L"];

const DRINKS = [
  {
    id: "phin-den-da",
    name: "Phin đen đá",
    result: "img/Res/PhinĐenĐá.jpg",
    ingredients: [
      recipeLine("Cà phê (Cf)", "img/NguyênLiệu/CafePhin.jpg", [40, 50, 60], "ml"),
      recipeLine("Đường", "img/NguyênLiệu/Đường.jpg", [15, 20, 25], "ml"),
      recipeLine("Đá", "img/NguyênLiệu/Đá.jpg", [200, 260, 400], "g"),
    ],
  },
  {
    id: "phin-sua-da",
    name: "Phin sữa đá",
    result: "img/Res/PhinSữaĐá.jpg",
    ingredients: [
      recipeLine("Cà phê (Cf)", "img/NguyênLiệu/CafePhin.jpg", [40, 50, 60], "ml"),
      recipeLine("Sữa đặc", "img/NguyênLiệu/SữaĐặc.jpg", [30, 40, 45], "ml"),
      recipeLine("Đá", "img/NguyênLiệu/Đá.jpg", [200, 260, 400], "g"),
    ],
  },
  {
    id: "bac-xiu-da",
    name: "Bạc xỉu đá",
    result: "img/Res/BạcXỉuĐá.jpg",
    ingredients: [
      recipeLine("Sữa đặc", "img/NguyênLiệu/SữaĐặc.jpg", [40, 50, 60], "ml"),
      recipeLine("Cà phê (Cf)", "img/NguyênLiệu/CafePhin.jpg", [20, 25, 30], "ml"),
      recipeLine("Nước nóng", "img/NguyênLiệu/NướcNóng.jpg", [20, 25, 30], "ml"),
      recipeLine("Đá", "img/NguyênLiệu/Đá.jpg", [200, 260, 400], "g"),
    ],
  },
  {
    id: "tra-sen-vang-da",
    name: "Trà sen vàng đá",
    result: "img/Res/TràSenVàngĐá.jpg",
    ingredients: [
      recipeLine("Sen", "img/NguyênLiệu/Sen.jpg", [20, 25, 30], "g"),
      recipeLine("Số hạt sen", "img/NguyênLiệu/Sen.jpg", [10, 12, 15], "hạt"),
      recipeLine("Đường", "img/NguyênLiệu/Đường.jpg", [30, 40, 45], "ml"),
      recipeLine("Trà ô long", "img/NguyênLiệu/ÔLong.jpg", [100, 130, 150], "ml"),
      recipeLine("Đá", "img/NguyênLiệu/Đá.jpg", [150, 200, 220], "g"),
      recipeLine("Kem", "img/NguyênLiệu/Kem.jpg", [50, 65, 75], "g"),
      recipeLine("Cn", "img/NguyênLiệu/CN.jpg", [15, 20, 25], "g"),
    ],
  },
  {
    id: "tra-thanh-dao",
    name: "Trà thanh đào",
    result: "img/Res/TràThanhĐào.jpg",
    ingredients: [
      recipeLine("Syrup sả", "img/NguyênLiệu/SyrupSả.jpg", [15, 15, 20], "ml"),
      recipeLine("Syrup đào", "img/NguyênLiệu/SyrupĐào.jpg", [15, 20, 25], "ml"),
      recipeLine("Trà đào", "img/NguyênLiệu/TràĐào.jpg", [100, 130, 150], "ml"),
      recipeLine("Đá", "img/NguyênLiệu/Đá.jpg", [220, 280, 300], "g"),
      recipeLine("Đào miếng", "img/NguyênLiệu/ĐàoMiếng.jpg", [30, 40, 40], "g"),
      recipeLine("Sả", "img/NguyênLiệu/Sả.jpg", [5, 5, 5], "g"),
      recipeLine("Sả lát", "img/NguyênLiệu/Sả.jpg", [3, 3, 3], "lát"),
    ],
  },
  {
    id: "tra-thach-dao",
    name: "Trà thạch đào",
    result: "img/Res/TràThạchĐào.jpg",
    ingredients: [
      recipeLine("Đường + Ndc", "img/NguyênLiệu/Đường+NgôDiệpChi.jpg", [30, 40, 45], "ml"),
      recipeLine("Trà đào", "img/NguyênLiệu/TràĐào.jpg", [100, 130, 150], "ml"),
      recipeLine("Đá", "img/NguyênLiệu/Đá.jpg", [150, 200, 220], "g"),
      recipeLine("Thạch đào", "img/NguyênLiệu/ThạchĐào.jpg", [50, 65, 75], "g"),
      recipeLine("Số sợi thạch", "img/NguyênLiệu/ThạchĐào.jpg", [9, 12, 15], "sợi"),
      recipeLine("Đào miếng", "img/NguyênLiệu/ĐàoMiếng.jpg", [30, 40, 40], "g"),
      recipeLine("Số miếng đào", "img/NguyênLiệu/ĐàoMiếng.jpg", [3, 4, 4], "miếng"),
    ],
  },
];

const state = {
  scene: "main",
  mode: "level",
  order: null,
  selectedSize: null,
  selectedIngredient: null,
  cup: {},
  score: 0,
  timeLeft: 300,
  timerId: null,
};

const els = {
  screens: {
    main: document.querySelector("#screen-main"),
    select: document.querySelector("#screen-select"),
    game: document.querySelector("#screen-game"),
  },
  startButton: document.querySelector("#start-button"),
  combatButton: document.querySelector("#combat-button"),
  levelList: document.querySelector("#level-list"),
  modeLabel: document.querySelector("#mode-label"),
  gameTitle: document.querySelector("#game-title"),
  timerPill: document.querySelector("#timer-pill"),
  orderBubble: document.querySelector("#order-bubble"),
  sizeButtons: document.querySelector("#size-buttons"),
  cupList: document.querySelector("#cup-list"),
  pourPanel: document.querySelector("#pour-panel"),
  pourName: document.querySelector("#pour-name"),
  amountInput: document.querySelector("#amount-input"),
  unitLabel: document.querySelector("#unit-label"),
  closePour: document.querySelector("#close-pour"),
  pourButton: document.querySelector("#pour-button"),
  resetButton: document.querySelector("#reset-button"),
  submitButton: document.querySelector("#submit-button"),
  feedback: document.querySelector("#feedback"),
  ingredientGrid: document.querySelector("#ingredient-grid"),
  resultDialog: document.querySelector("#result-dialog"),
  resultImage: document.querySelector("#result-image"),
  resultKicker: document.querySelector("#result-kicker"),
  resultTitle: document.querySelector("#result-title"),
  resultText: document.querySelector("#result-text"),
  resultActions: document.querySelector("#result-actions"),
};

function recipeLine(name, image, amounts, unit) {
  return {
    name,
    image,
    portions: {
      S: { amount: amounts[0], unit },
      M: { amount: amounts[1], unit },
      L: { amount: amounts[2], unit },
    },
  };
}

function uniqueIngredients() {
  const byName = new Map();
  for (const drink of DRINKS) {
    for (const ingredient of drink.ingredients) {
      if (!byName.has(ingredient.name)) {
        byName.set(ingredient.name, ingredient);
      }
    }
  }
  return [...byName.values()];
}

function showScreen(name) {
  state.scene = name;
  Object.entries(els.screens).forEach(([screenName, node]) => {
    node.classList.toggle("is-active", screenName === name);
  });
}

function randomSize() {
  return SIZES[Math.floor(Math.random() * SIZES.length)];
}

function randomDrink() {
  return DRINKS[Math.floor(Math.random() * DRINKS.length)];
}

function startLevel(drinkId) {
  const drink = DRINKS.find((item) => item.id === drinkId);
  state.mode = "level";
  state.score = 0;
  state.order = { drink, size: randomSize() };
  resetCup(false);
  stopTimer();
  renderGame();
  showScreen("game");
}

function startCombat() {
  state.mode = "combat";
  state.score = 0;
  nextCombatOrder();
  showScreen("game");
}

function nextCombatOrder() {
  state.order = { drink: randomDrink(), size: randomSize() };
  resetCup(false);
  state.timeLeft = 300;
  renderGame();
  startTimer();
}

function restartCurrent() {
  if (state.mode === "combat") {
    state.timeLeft = 300;
    resetCup(true);
    startTimer();
    return;
  }
  state.order = { drink: state.order.drink, size: randomSize() };
  resetCup(true);
  renderGame();
}

function resetCup(render = true) {
  state.selectedSize = null;
  state.selectedIngredient = null;
  state.cup = {};
  hidePourPanel();
  els.feedback.textContent = "";
  if (render) {
    renderGame();
  }
}

function startTimer() {
  stopTimer();
  updateTimer();
  state.timerId = window.setInterval(() => {
    state.timeLeft -= 1;
    updateTimer();
    if (state.timeLeft <= 0) {
      stopTimer();
      showTimeoutDialog();
    }
  }, 1000);
}

function stopTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function updateTimer() {
  const minute = Math.floor(Math.max(state.timeLeft, 0) / 60);
  const second = Math.max(state.timeLeft, 0) % 60;
  els.timerPill.textContent = `${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
  els.timerPill.classList.toggle("is-low", state.timeLeft <= 30);
}

function renderSelect() {
  els.levelList.innerHTML = DRINKS.map((drink, index) => {
    const count = drink.ingredients.length;
    return `
      <article class="level-card">
        <img src="${drink.result}" alt="${drink.name}" />
        <div class="level-body">
          <div>
            <p>Màn ${index + 1} · ${count} nguyên liệu</p>
            <h3>${drink.name}</h3>
          </div>
          <button class="button primary small" type="button" data-level="${drink.id}">Chơi</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderGame() {
  const { drink, size } = state.order;
  els.modeLabel.textContent = state.mode === "combat" ? `Thực chiến · ${state.score} cốc` : "Màn công thức";
  els.gameTitle.textContent = drink.name;
  els.timerPill.hidden = state.mode !== "combat";
  els.orderBubble.textContent =
    state.mode === "combat"
      ? `Cho mình size ${size} ${drink.name}. Nhanh giúp mình nhé!`
      : `Cho mình ly ${drink.name} size ${size}.`;

  renderSizeButtons();
  renderCup();
  renderIngredients();
  updateTimer();
}

function renderSizeButtons() {
  els.sizeButtons.innerHTML = SIZES.map((size) => `
    <button class="${state.selectedSize === size ? "is-selected" : ""}" type="button" data-size="${size}">${size}</button>
  `).join("");
}

function renderCup() {
  const entries = Object.values(state.cup);
  if (!entries.length) {
    els.cupList.innerHTML = "<li>Ly đang trống</li>";
    return;
  }

  els.cupList.innerHTML = entries.map((item) => `
    <li>
      <span>${item.name}: ${item.amount} ${item.unit}</span>
      <button aria-label="Bỏ ${item.name}" data-remove="${item.name}">×</button>
    </li>
  `).join("");
}

function renderIngredients() {
  els.ingredientGrid.innerHTML = uniqueIngredients().map((ingredient) => `
    <button class="ingredient-card ${state.selectedIngredient?.name === ingredient.name ? "is-active" : ""}" type="button" data-ingredient="${ingredient.name}">
      <img src="${ingredient.image}" alt="${ingredient.name}" />
      <span>${ingredient.name}</span>
    </button>
  `).join("");
}

function selectSize(size) {
  state.selectedSize = size;
  els.feedback.textContent = size === state.order.size ? "" : `Khách gọi size ${state.order.size}, bạn đang chọn size ${size}.`;
  renderSizeButtons();
  if (state.selectedIngredient) {
    showPourPanel(state.selectedIngredient);
  }
}

function selectIngredient(name) {
  if (!state.selectedSize) {
    els.feedback.textContent = "Chọn size ly trước rồi hãy lấy nguyên liệu.";
    return;
  }
  const ingredient = uniqueIngredients().find((item) => item.name === name);
  state.selectedIngredient = ingredient;
  showPourPanel(ingredient);
  renderIngredients();
}

function showPourPanel(ingredient) {
  const portion = getPortionForInput(ingredient.name);
  els.pourName.textContent = ingredient.name;
  els.unitLabel.textContent = portion.unit;
  els.amountInput.value = "";
  els.pourPanel.hidden = false;
  els.amountInput.focus();
}

function hidePourPanel() {
  state.selectedIngredient = null;
  els.pourPanel.hidden = true;
  renderIngredients();
}

function getPortionForInput(name) {
  const line = state.order.drink.ingredients.find((item) => item.name === name);
  if (line) {
    return line.portions[state.selectedSize || state.order.size];
  }
  const fallback = uniqueIngredients().find((item) => item.name === name);
  return fallback?.portions?.[state.selectedSize || "S"] || { unit: "đv" };
}

function pourSelectedIngredient() {
  if (!state.selectedIngredient) {
    return;
  }
  const amount = Number(els.amountInput.value);
  if (!Number.isFinite(amount) || amount <= 0) {
    els.feedback.textContent = "Nhập số lượng lớn hơn 0 trước khi đổ vào.";
    return;
  }

  const portion = getPortionForInput(state.selectedIngredient.name);
  state.cup[state.selectedIngredient.name] = {
    name: state.selectedIngredient.name,
    amount,
    unit: portion.unit,
  };
  els.feedback.textContent = `${state.selectedIngredient.name} đã vào ly.`;
  hidePourPanel();
  renderCup();
}

function removeCupItem(name) {
  delete state.cup[name];
  renderCup();
}

function submitDrink() {
  const problems = validateCup();
  if (problems.length) {
    els.feedback.textContent = problems.slice(0, 3).join(" ");
    return;
  }

  if (state.mode === "combat") {
    state.score += 1;
    stopTimer();
  }
  showSuccessDialog();
}

function validateCup() {
  const problems = [];
  const expectedSize = state.order.size;
  const expectedLines = state.order.drink.ingredients;

  if (state.selectedSize !== expectedSize) {
    problems.push(`Sai size: khách cần ${expectedSize}.`);
  }

  for (const line of expectedLines) {
    const expected = line.portions[expectedSize];
    const actual = state.cup[line.name];
    if (!actual) {
      problems.push(`Thiếu ${line.name}.`);
      continue;
    }
    if (actual.amount !== expected.amount) {
      problems.push(`${line.name} cần ${expected.amount} ${expected.unit}.`);
    }
  }

  const extras = Object.keys(state.cup).filter(
    (name) => !expectedLines.some((line) => line.name === name),
  );
  if (extras.length) {
    problems.push(`Dư ${extras.join(", ")}.`);
  }

  return problems;
}

function showSuccessDialog() {
  const { drink, size } = state.order;
  els.resultImage.hidden = false;
  els.resultImage.src = drink.result;
  els.resultImage.alt = drink.name;
  els.resultKicker.textContent = state.mode === "combat" ? `Điểm: ${state.score} cốc` : "Hoàn thành";
  els.resultTitle.textContent = "Chuẩn vị";
  els.resultText.textContent = `Bạn đã phục vụ ${drink.name} size ${size} đúng công thức.`;

  if (state.mode === "combat") {
    setDialogActions([
      ["Khách tiếp", "primary", () => closeDialogAnd(nextCombatOrder)],
      ["Thoát ca", "ghost", () => closeDialogAnd(goSelect)],
    ]);
  } else {
    setDialogActions([
      ["Menu màn", "ghost", () => closeDialogAnd(goSelect)],
      ["Restart", "primary", () => closeDialogAnd(restartCurrent)],
    ]);
  }
  els.resultDialog.showModal();
}

function showTimeoutDialog() {
  els.resultImage.hidden = true;
  els.resultKicker.textContent = `Điểm: ${state.score} cốc`;
  els.resultTitle.textContent = "Hết giờ";
  els.resultText.textContent = "Khách này chờ quá 5 phút. Ca thực chiến vẫn tiếp tục nếu bạn nhận khách mới.";
  setDialogActions([
    ["Khách mới", "primary", () => closeDialogAnd(nextCombatOrder)],
    ["Thoát ca", "ghost", () => closeDialogAnd(goSelect)],
  ]);
  els.resultDialog.showModal();
}

function setDialogActions(actions) {
  els.resultActions.innerHTML = "";
  for (const [label, kind, handler] of actions) {
    const button = document.createElement("button");
    button.className = `button ${kind}`;
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", handler, { once: true });
    els.resultActions.append(button);
  }
}

function closeDialogAnd(next) {
  if (els.resultDialog.open) {
    els.resultDialog.close();
  }
  next();
}

function goSelect() {
  stopTimer();
  resetCup(false);
  showScreen("select");
}

function goMain() {
  stopTimer();
  resetCup(false);
  showScreen("main");
}

let lastPointerActivationAt = 0;

function shouldSkipDuplicateActivation(event) {
  if (event.type === "pointerup") {
    lastPointerActivationAt = Date.now();
    return false;
  }
  return event.type === "click" && Date.now() - lastPointerActivationAt < 350;
}

function handleActivation(event) {
  if (shouldSkipDuplicateActivation(event)) {
    return;
  }

    if (event.target.closest("#start-button")) {
      showScreen("select");
      return;
    }

    if (event.target.closest("#combat-button")) {
      startCombat();
      return;
    }

    const button = event.target.closest("[data-level]");
    if (button) {
      startLevel(button.dataset.level);
      return;
    }

    const sizeButton = event.target.closest("[data-size]");
    if (sizeButton) {
      selectSize(sizeButton.dataset.size);
      return;
    }

    const ingredientButton = event.target.closest("[data-ingredient]");
    if (ingredientButton) {
      selectIngredient(ingredientButton.dataset.ingredient);
      return;
    }

    const removeButton = event.target.closest("[data-remove]");
    if (removeButton) {
      removeCupItem(removeButton.dataset.remove);
      return;
    }

    if (event.target.closest("#close-pour")) {
      hidePourPanel();
      return;
    }

    if (event.target.closest("#pour-button")) {
      pourSelectedIngredient();
      return;
    }

    if (event.target.closest("#reset-button")) {
      resetCup(true);
      return;
    }

    if (event.target.closest("#submit-button")) {
      submitDrink();
      return;
    }

    const actionButton = event.target.closest("[data-action]");
    if (!actionButton) {
      return;
    }
    if (actionButton.dataset.action === "main") {
      goMain();
    }
    if (actionButton.dataset.action === "select") {
      goSelect();
    }
}

function bindEvents() {
  document.addEventListener("click", handleActivation);
  document.addEventListener("pointerup", handleActivation);
  els.amountInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      pourSelectedIngredient();
    }
  });
}

function initGame() {
  window.HighlandGameDebug = {
    drinks: DRINKS.length,
    getScene: () => state.scene,
    getOrder: () => state.order,
    ready: false,
    error: null,
  };
  try {
    renderSelect();
    bindEvents();
    window.HighlandGameDebug.ready = true;
    document.body.dataset.gameReady = "true";
  } catch (error) {
    window.HighlandGameDebug.error = error.message;
    document.body.dataset.gameReady = "error";
    throw error;
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initGame, { once: true });
} else {
  initGame();
}
