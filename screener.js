const screens = {
  intro: {
    content: "Do you want to begin now?",
    options: [
      {
        content: "Begin",
        target: "checkAdult",
      },
    ]
  },

  checkAdult: {
    content: "Work requirements only apply to adults. Are you between the ages of 19 and 64?",
    options: [
      {
        content: "Yes",
        target: "explainExclusions",
      },
      {
        content: "No",
        target: "notAnAdult",
      },
    ]
  },

  notAnAdult: {
    content: "You do NOT have to meet any additional requirements to qualify for Medicaid.",
    options: [
      {
        content: "Start over",
        target: "intro",
      }
    ],
  },

  explainExclusions: {
    content: "Some people are not subject to work requirements. Let's see if any of these nine situations apply to you.",
    options: [
      {
        content: "Okay",
        target: "formerFosterCare",
      },
    ]
  },

  formerFosterCare: {
    content: "1. Were you in foster care and enrolled in Medicaid when you turned 18?",
    options: [
      {
        content: "Yes",
        target: "fosterCareFollowup",
      },
      {
        content: "No",
        target: "americanIndian",
      },
    ]
  },
  fosterCareFollowup: {
    content: "1. Okay, you were in foster care and enrolled in Medicaid. Are you under age 26?",
    options: [
      {
        content: "Yes",
        target: "meetsAnExclusion",
      },
      {
        content: "No",
        target: "americanIndian",
      },
    ],
  },

  americanIndian: {
    content: "2. Are you an American Indian, including as a California Indian, Eskimo, Aleut, or other Alaska Native?",
    options: [
      {
        content: "Yes",
        target: "meetsAnExclusion",
      },
      {
        content: "No",
        target: "parentCaregiverChild",
      },
    ],
  },

  parentCaregiverChild: {
    content: "3. Are you a parent or caregiver for a child under 14 years of age?",
    options: [
      {
        content: "Yes",
        target: "meetsAnExclusion",
      },
      {
        content: "No",
        target: "parentCaregiverDisabled",
      },
    ],
  },

  parentCaregiverDisabled: {
    content: "3. Are you a parent or caregiver for a disabled person?",
    options: [
      {
        content: "Yes",
        target: "meetsAnExclusion",
      },
      {
        content: "No",
        target: "disabledVeteran",
      },
    ],
  },

  disabledVeteran: {
    content: "4. Are you a veteran with a total disability rating?",
    options: [
      {
        content: "Yes",
        target: "meetsAnExclusion",
      },
      {
        content: "No",
        target: "medicallyFrail",
      },
    ],
  },

  medicallyFrail: {
    content: "5. Do you have special medical needs including being blind, disabled, having a substance use disorder, or having a serious or complex medical condition?",
    options: [
      {
        content: "Yes",
        target: "meetsAnExclusion",
      },
      {
        content: "No",
        target: "tanf",
      },
    ],
  },

  tanf: {
    content: "6. Do you already comply with work requirements for the TANF prgram?",
    options: [
      {
        content: "Yes",
        target: "meetsAnExclusion",
      },
      {
        content: "No",
        target: "snap",
      },
    ],
  },

  snap: {
    content: "6. Are you already required to comply with work requirements for the SNAP program?",
    options: [
      {
        content: "Yes",
        target: "meetsAnExclusion",
      },
      {
        content: "No",
        target: "rehab",
      },
    ],
  },

  rehab: {
    content: "7. Do you participate in a rehabilitation or treatment program for drug or alcohol addiction?",
    options: [
      {
        content: "Yes",
        target: "meetsAnExclusion",
      },
      {
        content: "No",
        target: "inmate",
      },
    ],
  },

  inmate: {
    content: "8. Are you an inmate of a correctional or detention facility?",
    options: [
      {
        content: "Yes",
        target: "meetsAnExclusion",
      },
      {
        content: "No",
        target: "pregnant",
      },
    ],
  },

  pregnant: {
    content: "9. Are you pregnant or receiving postpartum Medicaid assistance?",
    options: [
      {
        content: "Yes",
        target: "meetsAnExclusion",
      },
      {
        content: "No",
        target: "noExclusion",
      },
    ],
  },

  meetsAnExclusion: {
    content: "You meet one of the exclusions to work requirements. You do NOT have to meet any additional requirements to qualify for Medicaid.",
    options: [
      {
        content: "Start over",
        target: "intro",
      }
    ],
  },

  noExclusion: {
    content: "Okay, you aren't specifically excluded from needing to comply with Medicaid work requirements. Let's see if you meet the requirements.",
    options: [
      {
        content: "Continue (TODO)",
        target: "intro",
      }
    ],
  }
};


class Screener extends HTMLElement {


  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});
    const wrapper = document.createElement("div");
    shadow.appendChild(wrapper);

    const introText = document.createElement("p");
    introText.textContent = "Let's determine how Medicaid work requirements apply to you."

    wrapper.appendChild(introText);

    this.content = document.createElement("div");
    wrapper.appendChild(this.content);
  }

  connectedCallback(e) {
    this.displayScreen("intro");
  }

  displayScreen(screenName) {
    const contentP = document.createElement("p");
    contentP.textContent = screens[screenName]["content"];

    const buttons = document.createElement("ul");
    if (Object.hasOwn(screens[screenName], "options")) {
      screens[screenName].options.map((option) => {
          const button = document.createElement("button");
          button.textContent = option.content;
          if (Object.hasOwn(option, "target")) {
            button.addEventListener("click", this.getClickTargetHandler(option.target));
          }

          const listElement = document.createElement("li");
          listElement.appendChild(button);
          buttons.appendChild(listElement);
        }
      );
    }
    this.content.replaceChildren(contentP, buttons);
  }

  // returns an event handling function that displays the new screen.
  getClickTargetHandler(screenName) {
    return (e) => {
      this.displayScreen(screenName);
    }
  }

}

customElements.define('ce-screener', Screener);
