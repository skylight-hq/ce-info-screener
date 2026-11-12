const screens = {
  intro: {
    content: "Do you want to begin now?",
    buttons: [
      {
        content: "Begin",
        target: "checkAdult",
      },
    ]
  },

  checkAdult: {
    content: "Work requirements only apply to adults. Are you between the ages of 19 and 64?",
    buttons: [
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
    buttons: [
      {
        content: "Start over",
        target: "intro",
      }
    ],
  },

  explainExclusions: {
    content: "Some people are not subject to work requirements. Let's see if any of these situations apply to you.",
    buttons: [
      {
        content: "Okay",
        target: "exclusions",
      },
    ]
  },

  exclusions: {
    content: "If you answer yes to any question below, you do not need to meet the new work requirements.",
    buttons: [
      {
        content: "Yes",
        label: "Are you currently in foster care, or are a former foster care youth up to age 26?",
        target: "meetsAnExclusion",
      },
      {
        content: "Yes",
        label: "Are you a parent or caregiver for a child under 14 years of age?",
        target: "meetsAnExclusion",
      },
      {
        content: "Yes",
        label: "Are you a parent, guardian, caretaker relative or family caregiver of a person with a disability?",
        target: "meetsAnExclusion",
      },
      {
        content: "Yes",
        label: "Are you an American Indian, including as a California Indian, Eskimo, Aleut, or other Alaska Native?",
        target: "meetsAnExclusion",
      },
      {
        content: "No",
        label: "None of the above apply to me.",
        target: "noExclusion",
      },
      {
        content: "I don't know.",
        target: "contactDHS",
      },
    ]
  },
  disabledVeteran: {
    content: "4. Are you a veteran with a total disability rating?",
    buttons: [
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
    buttons: [
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
    buttons: [
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
    buttons: [
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
    buttons: [
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
    buttons: [
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
    buttons: [
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
    buttons: [
      {
        content: "Start over",
        target: "intro",
      }
    ],
  },

  noExclusion: {
    content: "Okay, you aren't specifically excluded from needing to comply with Medicaid work requirements. Let's see if you meet the requirements.",
    buttons: [
      {
        content: "Okay",
        target: "exemptions",
      }
    ],
  },

  exemptions: {
    content: "Some people do not have to meet work requirements because an exemption applies to them. Select any statement that describes you.",
    buttons: [
      {
        content: "Yes",
        label: "Were you released from incarceration within the last three months?",
        target: "meetsAnExemption",
      },
      {
        content: "Yes",
        label: "Did you receive Medicaid under another eligibility group within the last three months?",
        target: "meetsAnExemption",
      },
      {
        content: "Yes",
        label: "Were you hospitalized or stayed in a nursing home or similar facility, or received outpatient treatment for a serious medical condition within the last three months?",
        target: "meetsAnExemption",
      },
      {
        content: "Yes",
        label: "Did you or a dependent travel outside your community for an extended period to receive care for a serious medical condition within the last three months?",
        target: "meetsAnExemption",
      },
      {
        content: "No",
        label: "None of the above apply to me.",
        target: "noExemption",
      },
      {
        content: "I don't know.",
        target: "contactDHS",
      },
    ],
  },

  contactDHS: {
    content: "For more information on eligibility and new work requirements, contact DHS https://mn.gov/dhs/about-us/contact-us/ or your local county or regional office.",
    buttons: [
      {
        content: "Start over",
        target: "intro"
      }
    ],
  },

  meetsAnExemption: {
    content: "Because of this exemption, you may not have to meet the work requirement for a limited time.",
    buttons: [
      {
        content: "Start over",
        target: "intro"
      },
    ]
  },

  noExemption: {
    content: "You are not excluded or exempt from the work requirements. Let's see if you already meet the requirements.",
    buttons: [
      {
        content: "okay",
        target: "monthlyIncome",
      }
    ],
  },

  monthlyIncome: {
    content: "Is your household income at least $580 per month or if you are a seasonal worker did you make an average of $580 per month over the past 6 months?",
    buttons: [
      {
        content: "Yes",
        target: "meetsRequirements",
      },
      {
        content: "No",
        target: "education",
      },
    ],
  },

  education: {
    content: "Are you enrolled at least half-time in a college, vocational, or GED equivalent program?",
    buttons: [
      {
        content: "Yes",
        target: "meetsRequirements",
      },
      {
        content: "No",
        target: "monthlyHours",
      },
    ],
  },

  monthlyHours: {
    content: "Different types of activities can satisfy the work requirements including a job, internship, gig work, a work program, volunteering or community service, part-time school, or caregiving. Are you doing at least 80 hours of qualifying activities per month?",
    buttons: [
      {
        content: "Yes",
        target: "meetsRequirements",
      },
      {
        content: "No",
        target: "needsToMeetRequirements",
      },
    ],
  },

  meetsRequirements: {
    content: "You are currently meeting work requirements. You should report this information to DHS at application or renewal.",
    buttons: [
      {
        content: "Start over",
        target: "intro",
      },
    ],
  },

  needsToMeetRequirements: {
    content: "You are not currently meeting work requirements. Starting January 2027, you will need to show that you have an exemption or are meeting work requirements to keep your Medicaid coverage.",
    buttons: [
      {
        content: "Start over",
        target: "intro",
      },
    ],

  },

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
    if (Object.hasOwn(screens[screenName], "buttons")) {
      screens[screenName].buttons.map((option) => {
          const button = document.createElement("button");
          button.textContent = option.content;
          if (Object.hasOwn(option, "target")) {
            button.addEventListener("click", this.getClickTargetHandler(option.target));
          }

          const listElement = document.createElement("li");
          listElement.appendChild(button);

          if (Object.hasOwn(option, "label")) {
            const label = document.createElement("span");
            label.textContent = "\xA0" + option.label;
            listElement.appendChild(label);
          }

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
