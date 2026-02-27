// =========================
// Configurações
// =========================
const WHATSAPP_NUMBER = "5519995759720";

// =========================
// Banco de terapias
// =========================

// Serviços "antigos"
const baseTherapies = [
  {
    id: 1,
    name: "Aromaterapia",
    icon: "fas fa-air-freshener",
    image: "assets/img/aromaterapia.jpg",
    short: "Óleos essenciais para equilíbrio físico, emocional e energético.",
    description:
      "Utilizamos óleos essenciais puros para estimular as respostas físicas, emocionais e energéticas do corpo. Cada aroma foi cuidadosamente selecionado para proporcionar benefícios específicos.",
    duration: "60 minutos",
    price: "¥ 4,500",
  },
  {
    id: 2,
    name: "Radiestesia Aplicada",
    icon: "fas fa-compass",
    image: "assets/img/radiestesia-aplicada.png",
    short: "Leitura energética para identificar e harmonizar desequilíbrios.",
    description:
      "Técnica de captação energética para identificar desequilíbrios e harmonizar ambientes e pessoas através de frequências sutis e instrumentos específicos.",
    duration: "60 minutos",
    price: "¥ 3,600",
  },
  {
    id: 3,
    name: "Harmonização de Chakras com Cristais (presencial)",
    icon: "fas fa-yin-yang",
    image: "assets/img/harmonizacao-chakras-cristais.jpg",
    short: "Equilíbrio dos centros energéticos com o apoio de cristais.",
    description:
      "Equilíbrio dos sete centros energéticos principais do corpo para promover saúde integral, vitalidade e conexão espiritual.",
    duration: "60 minutos",
    price: "¥ 3,600",
  },
  {
    id: 4,
    name: "Shiatsu Massagem",
    icon: "fas fa-hands",
    image: "assets/img/shiatsu-massagem.jpg",
    short: "Massagem terapêutica japonesa para aliviar tensões profundas.",
    description:
      "Massagem terapêutica japonesa que aplica pressão em pontos específicos (tsubos) para aliviar tensões e restaurar o fluxo energético do corpo.",
    duration: "60 minutos",
    price: "¥ 5,000",
  },
  {
    id: 5,
    name: "Seitai - Quiropraxia Japonesa",
    icon: "fas fa-bone",
    image: "assets/img/seitai-quiropraxia.jpg",
    short: "Ajustes suaves para alinhamento da coluna e postura.",
    description:
      "Técnica japonesa de ajuste vertebral que restaura o alinhamento natural da coluna e promove o equilíbrio do sistema nervoso.",
    duration: "45 minutos",
    price: "¥ 5,500",
  },
  {
    id: 6,
    name: "Podoreflexologia",
    icon: "fas fa-foot",
    image: "assets/img/podoreflexologia.jpg",
    short: "Massagem nos pés para equilíbrio de todo o organismo.",
    description:
      "Técnica de massagem nos pés que ativa pontos reflexos correspondentes a órgãos e sistemas do corpo, promovendo equilíbrio e bem-estar.",
    duration: "50 minutos",
    price: "¥ 2,700",
  },
];

// Novos serviços
const extraTherapies = [
  {
    id: "cone-hindu",
    name: "Cone Hindu / Chinês",
    icon: "fas fa-fire",
    image: "assets/img/cone-hindu.jpg",
    short: "Terapia energética para limpeza auricular e equilíbrio.",
    description:
      "O Cone Hindu é uma técnica natural que auxilia na limpeza energética, alívio de desconfortos e sensação de leveza na região da cabeça.",
    duration: "Aplicação",
    price: "¥ 2,700",
  },
  {
    id: "magnetoterapia",
    name: "Magnetoterapia",
    icon: "fas fa-magnet",
    image: "assets/img/magnetoterapia.png",
    short: "Equilíbrio energético com campos magnéticos.",
    description:
      "A Magnetoterapia utiliza campos magnéticos terapêuticos para auxiliar em dores, inflações e reequilíbrio do organismo.",
    duration: "30 minutos",
    price: "¥ 2,500",
  },
  {
    id: "radionica",
    name: "Radiônica",
    icon: "fas fa-broadcast-tower",
    image: "assets/img/radionica.jpg",
    short: "Avaliação energética profunda.",
    description:
      "A Radiônica atua no campo vibracional, identificando desequilíbrios físicos, emocionais e energéticos para apoiar processos de harmonização.",
    duration: "Avaliação",
    price: "¥ 10,000",
  },
  {
    id: "ventosaterapia",
    name: "Ventosaterapia",
    icon: "fas fa-wind",
    image: "assets/img/ventosaterapia.jpg",
    short: "Liberação muscular e energética.",
    description:
      "A Ventosaterapia estimula a circulação sanguínea, alivia tensões musculares e favorece relaxamento profundo.",
    duration: "60 minutos",
    price: "¥ 5,000",
  },
  {
    id: "pranayama",
    name: "Pranayama",
    icon: "fas fa-spa",
    image: "assets/img/pranayama.jpg",
    short: "Respiração consciente para equilíbrio interno.",
    description:
      "Práticas de respiração guiada que auxiliam no manejo do estresse, ansiedade e na melhora da vitalidade.",
    duration: "Sob consulta",
    price: "Sob consulta",
  },
  {
    id: "meditacao",
    name: "Meditação",
    icon: "fas fa-om",
    image: "assets/img/meditacao.jpg",
    short: "Presença, foco e equilíbrio emocional.",
    description:
      "Sessões de meditação guiada para apoiar o silêncio interno, o descanso mental e a conexão consigo mesma(o).",
    duration: "Sob consulta",
    price: "Sob consulta",
  },
];

// Array final
const therapies = [...baseTherapies, ...extraTherapies];

// =========================
// Renderização de serviços
// =========================
function renderServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;

  grid.innerHTML = "";

  therapies.forEach((t) => {
    const imageHtml = t.image ? `<img src="${t.image}" alt="${t.name}" class="service-image">` : `<div class="service-icon"><i class="${t.icon}"></i></div>`;
    grid.innerHTML += `
      <div class="service-card">
        ${imageHtml}
        <div class="service-header">
          <h3>${t.name}</h3>
        </div>
        <p>${t.short ?? t.description}</p>
        <div class="service-price-duration">
          <strong>${t.price}</strong> — ${t.duration}
        </div>
        <div class="service-actions">
          <button class="btn btn-secondary" onclick="openTherapy('${t.id}')">
            Ver detalhes
          </button>
          <button class="btn btn-primary" onclick="openWhatsApp('Olá, gostaria de agendar ${t.name}.')">
            Agendar
          </button>
        </div>
      </div>
    `;
  });

  // Preenche select do agendamento
  const select = document.getElementById("bookingService");
  if (select) {
    select.innerHTML = '<option value="">Selecione uma terapia</option>';
    therapies.forEach((t) => {
      const opt = document.createElement("option");
      opt.value = t.id;
      opt.textContent = `${t.name} – ${t.price}`;
      select.appendChild(opt);
    });
  }
}

// =========================
// Detalhes da terapia
// =========================
function openTherapy(id) {
  const therapy = therapies.find((t) => String(t.id) === String(id));
  if (!therapy) return;

  const container = document.getElementById("therapyModalContent");
  if (!container) return;

  container.innerHTML = `
    <h2>${therapy.name}</h2>
    <p style="margin:16px 0;">${therapy.description}</p>
    <p><strong>Duração:</strong> ${therapy.duration}</p>
    <p><strong>Valor:</strong> ${therapy.price}</p>
    <div style="margin-top:24px;">
      <button class="btn btn-primary" onclick="openWhatsApp('Olá, quero agendar ${therapy.name}.')">
        Agendar pelo WhatsApp
      </button>
    </div>
  `;

  openModal("therapyModal");
}

// =========================
// WhatsApp
// =========================
function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
}

// =========================
// Modais
// =========================
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "flex";
}

document.querySelectorAll("[data-close-modal]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.closeModal;
    const modal = document.querySelector(target);
    if (modal) modal.style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  document.querySelectorAll(".modal").forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// =========================
// Menu mobile
// =========================
const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");

if (mobileToggle && navMenu) {
  mobileToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");
    mobileToggle.setAttribute("aria-expanded", isOpen);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      mobileToggle.setAttribute("aria-expanded", "false");
    });
  });
  
  // Fechar menu ao clicar fora
  document.addEventListener("click", (e) => {
    if (!e.target.closest("header")) {
      navMenu.classList.remove("active");
      mobileToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// =========================
// Validação de Formulários
// =========================
function validateName(name) {
  if (!name || name.length < 3) return false;
  return /^[a-zA-Z\sáéíóúÁÉÍÓÚãõÃÕçÇ]+$/.test(name);
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input) {
  return input.trim().replace(/[<>"']/g, "");
}

// =========================
// Formulário de agendamento
// =========================
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("bookingName");
    const serviceSelect = document.getElementById("bookingService");
    const messageInput = document.getElementById("bookingMessage");
    const feedback = document.getElementById("bookingFeedback");

    const name = sanitizeInput(nameInput.value);
    const serviceId = serviceSelect.value;
    const message = sanitizeInput(messageInput.value);

    // Validar nome
    if (!validateName(name)) {
      feedback.textContent = "Por favor, insira um nome válido (mínimo 3 caracteres).";
      feedback.className = "form-feedback error";
      nameInput.focus();
      nameInput.setAttribute("aria-invalid", "true");
      return;
    }
    nameInput.setAttribute("aria-invalid", "false");

    // Validar serviço
    const therapy = therapies.find((t) => String(t.id) === String(serviceId));
    if (!therapy) {
      feedback.textContent = "Por favor, selecione uma terapia para continuar.";
      feedback.className = "form-feedback error";
      serviceSelect.focus();
      serviceSelect.setAttribute("aria-invalid", "true");
      return;
    }
    serviceSelect.setAttribute("aria-invalid", "false");

    try {
      const text =
        `Olá, meu nome é ${name}.\n` +
        `Tenho interesse em agendar: ${therapy.name} (${therapy.price}).\n` +
        (message ? `Mensagem: ${message}` : "");

      openWhatsApp(text);
      feedback.textContent = "Abrindo o WhatsApp para finalizar seu agendamento…";
      feedback.className = "form-feedback ok";
      
      // Limpar formulário após 2 segundos
      setTimeout(() => {
        bookingForm.reset();
        feedback.textContent = "";
      }, 2000);
    } catch (error) {
      console.error("Erro ao processar agendamento:", error);
      feedback.textContent = "Ocorreu um erro. Por favor, tente novamente.";
      feedback.className = "form-feedback error";
    }
  });
}

// =========================
// Formulário de contato
// =========================
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("contactName");
    const emailInput = document.getElementById("contactEmail");
    const messageInput = document.getElementById("contactMessage");
    const feedback = document.getElementById("contactFeedback");

    const name = sanitizeInput(nameInput.value);
    const email = sanitizeInput(emailInput.value);
    const message = sanitizeInput(messageInput.value);

    // Validar nome
    if (!validateName(name)) {
      feedback.textContent = "Por favor, insira um nome válido.";
      feedback.className = "form-feedback error";
      nameInput.focus();
      nameInput.setAttribute("aria-invalid", "true");
      return;
    }
    nameInput.setAttribute("aria-invalid", "false");

    // Validar email
    if (!validateEmail(email)) {
      feedback.textContent = "Por favor, insira um e-mail válido.";
      feedback.className = "form-feedback error";
      emailInput.focus();
      emailInput.setAttribute("aria-invalid", "true");
      return;
    }
    emailInput.setAttribute("aria-invalid", "false");

    // Validar mensagem
    if (!message || message.length < 10) {
      feedback.textContent = "Por favor, escreva uma mensagem com pelo menos 10 caracteres.";
      feedback.className = "form-feedback error";
      messageInput.focus();
      messageInput.setAttribute("aria-invalid", "true");
      return;
    }
    messageInput.setAttribute("aria-invalid", "false");

    try {
      // Log seguro para debug
      console.log("Contato recebido:", { 
        name: name.substring(0, 20), 
        email: email.replace(/(.{2})(.*)(.{2})/, "$1***$3"),
        timestamp: new Date().toISOString()
      });
      
      feedback.textContent =
        "Mensagem enviada com carinho. Em breve você receberá um retorno.";
      feedback.className = "form-feedback ok";
      contactForm.reset();
      
      // Limpar feedback após 3 segundos
      setTimeout(() => {
        feedback.textContent = "";
      }, 3000);
    } catch (error) {
      console.error("Erro ao processar contato:", error);
      feedback.textContent = "Ocorreu um erro. Por favor, tente novamente.";
      feedback.className = "form-feedback error";
    }
  });
}

// =========================
// Ano no rodapé + inicialização
// =========================
const yearSpan = document.getElementById("currentYear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

renderServices();
