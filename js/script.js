const { createApp } = Vue;

const busPlaceCount = 20;
const bottlesCountForOnePerson = 2;
const burgersCountForOnePerson = 3;
createApp({
  data() {
    return {
      passengersCount: null,
    };
  },
  computed: {
    busCount() {
      return Math.ceil(this.passengersCount / busPlaceCount);
    },
    bottlesCount() {
      return this.passengersCount * bottlesCountForOnePerson;
    },
    burgersCount() {
      return this.passengersCount * burgersCountForOnePerson;
    },
  },
}).mount("#app1");
// =================================================
createApp({
  data() {
    return {
      monthNumber: null,
    };
  },
  computed: {
    clothesName() {
      let result;
      switch (this.monthNumber) {
        case 12:
        case 1:
        case 2:
          result = "зима - одяг:шуба";
          break;
        case 3:
        case 4:
        case 5:
          result = "весна - одяг:курточка";
          break;
        case 6:
        case 7:
        case 8:
          result = "літо - одяг:шорти";
          break;
        case 9:
        case 10:
        case 11:
          result = "осінь - одяг:пальто";
          break;
      }
      return result;
    },
    imageSeason() {
      let result;
      switch (this.monthNumber) {
        case 12:
        case 1:
        case 2:
          result = "./img/winter.jpg";
          break;
        case 3:
        case 4:
        case 5:
          result = "./img/spring.jpg";
          break;
        case 6:
        case 7:
        case 8:
          result = "./img/summer.jpg";
          break;
        case 9:
        case 10:
        case 11:
          result = "./img/autumn.jpg";
          break;
      }
      return result;
    },
  },
}).mount("#app2");
// ==================================================
createApp({
  data() {
    return {
      startIntervalNumber: null,
      endIntervalNumber: null,
      randomNum: null,
    };
  },
  methods: {
    randomNumber() {
      this.randomNum =
        this.startIntervalNumber +
        Math.floor(
          Math.random() *
            (this.endIntervalNumber - this.startIntervalNumber + 1)
        );
    },
  },
}).mount("#app3");
// =================================================
const taxPercentage = 3;
const dollarRate = 38;
const euroRate = 40;
createApp({
  data() {
    return {
      balanceAccountMoney: 0,
      addMoneyAccount: null,
      withdrawMoneyAccount: null,
      message: null,
      colorBalance: "color:blue",
    };
  },
  computed: {
    showBalanceAccount() {
      return this.balanceAccountMoney;
    },
    taxRate() {
      let sum = (this.addMoneyAccount ?? 0) + (this.withdrawMoneyAccount ?? 0);
      return (sum * taxPercentage) / 100;
    },
    taxRateValue() {
      return this.taxRate.toFixed(2);
    },
    dollarValue() {
      return (this.balanceAccountMoney / dollarRate).toFixed(2);
    },
    euroValue() {
      return (this.balanceAccountMoney / euroRate).toFixed(2);
    },
    getColorDollar() {
      return `color: ${this.dollarValue <= 100 ? "red" : "green"}`;
    },
    getColorEuro() {
      return `color: ${this.euroValue <= 100 ? "red" : "green"}`;
    },
  },
  methods: {
    onAddMoney() {
      if (this.addMoneyAccount < 0) {
        this.message = 'Сума додавання не може бути від"ємною';
        return;
      }
      this.balanceAccountMoney += this.addMoneyAccount - this.taxRate;
      this.addMoneyAccount = null;
      this.colorBalance = "color:green";
    },
    onWithdrawMoney() {
      const valueToSubtract = this.withdrawMoneyAccount + this.taxRate;
      if (this.balanceAccountMoney < valueToSubtract) {
        this.message = "На рахунку недостатньо коштів";
        return;
      }
      this.balanceAccountMoney -= this.withdrawMoneyAccount + this.taxRate;
      this.withdrawMoneyAccount = null;
      this.colorBalance = "color:red";
    },
    onFocus() {
      this.message = null;
    },
  },
}).mount("#app4");
// ===================================================
const users = [
  {
    login: "name1",
    password: "password123",
  },
  {
    login: "name2",
    password: "password133",
  },
  {
    login: "name3",
    password: "password163",
  },
  {
    login: "name4",
    password: "password167",
  },
];
createApp({
  data() {
    return {
      login: null,
      password: null,
      message: null,
    };
  },
  methods: {
    checkResult() {
      for (let i = 0; i < users.length; i++) {
        if (
          this.login === users[i].login &&
          this.password === users[i].password
        ) {
          this.message = "Авторизовано";
          return;
        } else this.message = "Не авторизовано";
        return;
      }
    },
  },
}).mount("#app5");
// trim
// toLoverCase
