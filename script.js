let questions = [
  {
    question: "What is the Turkish equivalent of the word 'afraid'?",
    answers: [
      { text: "Korkmuş", correct: true },
      { text: "Yaş, çağ", correct: false },
      { text: "Yalnız", correct: false },
      { text: "Uçak", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'age'?",
    answers: [
      { text: "Korkmuş", correct: false },
      { text: "Yaş, çağ", correct: true },
      { text: "Yalnız", correct: false },
      { text: "Uçak", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'alone'?",
    answers: [
      { text: "Korkmuş", correct: false },
      { text: "Yaş, çağ", correct: false },
      { text: "Yalnız", correct: true },
      { text: "Uçak", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'airplane'?",
    answers: [
      { text: "Korkmuş", correct: false },
      { text: "Yaş, çağ", correct: false },
      { text: "Yalnız", correct: false },
      { text: "Uçak", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'angry'?",
    answers: [
      { text: "Kızgın", correct: true },
      { text: "Hayvan", correct: false },
      { text: "Cevap", correct: false },
      { text: "Mimar", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'animal'?",
    answers: [
      { text: "Kızgın", correct: false },
      { text: "Hayvan", correct: true },
      { text: "Cevap", correct: false },
      { text: "Mimar", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'answer'?",
    answers: [
      { text: "Kızgın", correct: false },
      { text: "Hayvan", correct: false },
      { text: "Cevap", correct: true },
      { text: "Mimar", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'architect'?",
    answers: [
      { text: "Kızgın", correct: false },
      { text: "Hayvan", correct: false },
      { text: "Cevap", correct: false },
      { text: "Mimar", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'arrive'?",
    answers: [
      { text: "Korkmuş", correct: false },
      { text: "Varmak", correct: true },
      { text: "Yalnız", correct: false },
      { text: "Uçak", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'aunt'?",
    answers: [
      { text: "Korkmuş", correct: false },
      { text: "Yaş, çağ", correct: false },
      { text: "Teyze, hala", correct: true },
      { text: "Uçak", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'bag'?",
    answers: [
      { text: "Korkmuş", correct: false },
      { text: "Yaş, çağ", correct: false },
      { text: "Yalnız", correct: false },
      { text: "Çanta", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'ball'?",
    answers: [
      { text: "Top", correct: true },
      { text: "Banyo", correct: false },
      { text: "Güzel", correct: false },
      { text: "Fatura", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'bath'?",
    answers: [
      { text: "Top", correct: false },
      { text: "Banyo", correct: true },
      { text: "Güzel", correct: false },
      { text: "Fatura", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'beautiful'?",
    answers: [
      { text: "Top", correct: false },
      { text: "Banyo", correct: false },
      { text: "Güzel", correct: true },
      { text: "Fatura", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'bill'?",
    answers: [
      { text: "Top", correct: false },
      { text: "Banyo", correct: false },
      { text: "Güzel", correct: false },
      { text: "Fatura", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'body'?",
    answers: [
      { text: "Vücut", correct: true },
      { text: "Köprü", correct: false },
      { text: "Pane etmek", correct: false },
      { text: "Kırmak", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'boil'?",
    answers: [
      { text: "Vücut", correct: false },
      { text: "Köprü", correct: false },
      { text: "Kaynatmak, haşlamak", correct: true },
      { text: "Kırmak", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'bookstore'?",
    answers: [
      { text: "Vücut", correct: false },
      { text: "Köprü", correct: false },
      { text: "Kitapçı", correct: true },
      { text: "Kırmak", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'boring'?",
    answers: [
      { text: "Vücut", correct: false },
      { text: "Köprü", correct: false },
      { text: "Sıkıcı", correct: true },
      { text: "Kırmak", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'borrow'?",
    answers: [
      { text: "Vücut", correct: false },
      { text: "Köprü", correct: false },
      { text: "Ödünç almak", correct: true },
      { text: "Kırmak", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'boss'?",
    answers: [
      { text: "Vücut", correct: false },
      { text: "Köprü", correct: false },
      { text: "Patron", correct: true },
      { text: "Kırmak", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'bottle'?",
    answers: [
      { text: "Vücut", correct: false },
      { text: "Köprü", correct: false },
      { text: "Şişe", correct: true },
      { text: "Kırmak", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'box'?",
    answers: [
      { text: "Vücut", correct: false },
      { text: "Köprü", correct: false },
      { text: "Kutu", correct: true },
      { text: "Kırmak", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'brave'?",
    answers: [
      { text: "Vücut", correct: false },
      { text: "Köprü", correct: false },
      { text: "Cesur", correct: true },
      { text: "Kırmak", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'bread'?",
    answers: [
      { text: "Ekmek, pane etmek", correct: true },
      { text: "Köprü", correct: false },
      { text: "Cesur", correct: false },
      { text: "Kırmak", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'break'?",
    answers: [
      { text: "Ekmek, pane etmek", correct: false },
      { text: "Köprü", correct: false },
      { text: "Kırmak", correct: true },
      { text: "Cesur", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'bridge'?",
    answers: [
      { text: "Ekmek, pane etmek", correct: false },
      { text: "Köprü", correct: true },
      { text: "Kırmak", correct: false },
      { text: "Cesur", correct: false },
    ],
  },
  //newler
  {
    question: "What is the Turkish equivalent of the word 'brush'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: true },
      { text: "İnşa etmek", correct: false },
      { text: "Tereyağı", correct: false },
      { text: "Hesap", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'build'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "İnşa etmek", correct: true },
      { text: "Tereyağı", correct: false },
      { text: "Hesap", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'butter'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "İnşa etmek", correct: false },
      { text: "Tereyağı", correct: true },
      { text: "Hesap", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'calculator'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "İnşa etmek", correct: false },
      { text: "Tereyağı", correct: false },
      { text: "Hesap", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'calendar'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "İnşa etmek", correct: false },
      { text: "Takvim", correct: true },
      { text: "Hesap", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'call'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "İnşa etmek", correct: false },
      { text: "Takvim", correct: false },
      { text: "Arama", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'capital'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "İnşa etmek", correct: false },
      { text: "Sermaye, başkent", correct: true },
      { text: "Hesap", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'carpenter'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "Marangoz", correct: true },
      { text: "Sermaye, başkent", correct: false },
      { text: "Hesap", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'carpet'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "Marangoz", correct: false },
      { text: "Halı", correct: true },
      { text: "Hesap", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'carry'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "Marangoz", correct: false },
      { text: "Halı", correct: false },
      { text: "Taşımak", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'cheap'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "Marangoz", correct: false },
      { text: "Ucuz", correct: true },
      { text: "Hesap", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'cheese'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "Marangoz", correct: false },
      { text: "Ucuz", correct: false },
      { text: "Peynir", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'cherry'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "Marangoz", correct: false },
      { text: "Ucuz", correct: false },
      { text: "Kiraz", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'chicken'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "Marangoz", correct: false },
      { text: "Ucuz", correct: false },
      { text: "Tavuk", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'church'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "Marangoz", correct: false },
      { text: "Ucuz", correct: false },
      { text: "Kilise", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'clean'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "Marangoz", correct: false },
      { text: "Ucuz", correct: false },
      { text: "Temizlemek, temiz", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'clear'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "Marangoz", correct: false },
      { text: "Ucuz", correct: false },
      { text: "Açık, net", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'clever'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "Marangoz", correct: false },
      { text: "Ucuz", correct: false },
      { text: "Zeki", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'clock'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "Marangoz", correct: false },
      { text: "Ucuz", correct: false },
      { text: "Saat", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'cloud'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "Marangoz", correct: false },
      { text: "Ucuz", correct: false },
      { text: "Bulut", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'coat'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "Marangoz", correct: false },
      { text: "Ucuz", correct: false },
      { text: "Ceket", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'cold'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "Marangoz", correct: false },
      { text: "Ucuz", correct: false },
      { text: "Soğuk", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'company'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "Marangoz", correct: false },
      { text: "Ucuz", correct: false },
      { text: "Şirket", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'continue'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "Marangoz", correct: false },
      { text: "Ucuz", correct: false },
      { text: "Devam etmek", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'correct'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "Marangoz", correct: false },
      { text: "Ucuz", correct: false },
      { text: "Doğru, düzeltmek", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'country'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "Marangoz", correct: false },
      { text: "Ucuz", correct: false },
      { text: "Ülke", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'cow'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "Marangoz", correct: false },
      { text: "Ucuz", correct: false },
      { text: "İnek", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'cry'?",
    answers: [
      { text: "Fırça, fırçalamak", correct: false },
      { text: "Marangoz", correct: false },
      { text: "Ucuz", correct: false },
      { text: "Ağlamak", correct: true },
    ],
  },
  /// part3
  {
    question: "What is the Turkish equivalent of the word 'daily'?",
    answers: [
      { text: "Günlük", correct: true },
      { text: "Karanlık", correct: false },
      { text: "Dişçi", correct: false },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'dark'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Karanlık", correct: true },
      { text: "Dişçi", correct: false },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'dentist'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Karanlık", correct: false },
      { text: "Dişçi", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'difficult'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Karanlık", correct: false },
      { text: "Dişçi", correct: false },
      { text: "Zor", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'dirty'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Karanlık", correct: false },
      { text: "Kirli", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'divorced'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Karanlık", correct: false },
      { text: "Boşanmış", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'draw'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Karanlık", correct: false },
      { text: "Çizmek", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'early'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: true },
      { text: "Dişçi", correct: false },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'earn'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Kazanmak", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'elephant'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Fil", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'emergency'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Acil durum", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'empty'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Boş", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'engaged'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Nişanlı", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'engineer'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Mühendis", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'enough'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Yeterli", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'eraser'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Silgi", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'error'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Hata", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'fall'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Düşmek", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'far'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Uzak", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'farm'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Çiftlik", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'fat'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Şişman", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'finger'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Parmak", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'fire'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Ateş", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'flight'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Uçuş", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'floor'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Zemin", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'fork'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Çatal", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'friendly'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Samimi", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'fruit'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Meyve", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  //part4
  {
    question: "What is the Turkish equivalent of the word 'funny'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Komik", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'garden'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Bahçe", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'glass'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Bardak", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'grape'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Üzüm", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'gun'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Tabanca", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'habit'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Alışkanlık", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'half'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Yarım", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'hand'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "El", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'handsome'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Yakışıklı", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'hate'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Nefret", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'health'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Sağlık", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'hear'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Duymak", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'heart'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Kalp", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'heavy'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Ağır", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'high'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Yüksek", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'history'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Tarih", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'horror'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Korku", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'hungry'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Aç", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'ill'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Hasta", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'interested'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "İlgili", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'job'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Meslek", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'journalist'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Gazeteci", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'kill'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Öldürmek", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'large'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Büyük", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'laugh'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Gülmek", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'lawyer'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Avukat", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'leave'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Ayrılmak", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'left'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Sol", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  ///part 5
  {
    question: "What is the Turkish equivalent of the word 'lend'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Ödünç vermek", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'letter'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Mektup", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'library'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Kütüphane", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'lunch'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Öğle yemeği", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'manager'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Müdür", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'main'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Ana", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'map'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Harita", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'married'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Evli", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'meal'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Yemek", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'meet'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Karşılamak", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'meeting'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Toplantı", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'melon'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Kavun", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'minute'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Dakika", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'mirror'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Ayna", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'miss'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Kaçırmak", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'mistake'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Hata", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'month'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Ay", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'need'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Gerek", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'neighbour'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Komşu", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'news'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Haber", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'nice'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Güzel", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'nose'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Burun", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'nurse'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Hemşire", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'object'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Nesne", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'opposite'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Karşısında", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'oven'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Fırın", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'page'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Sayfa", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'paint'?",
    answers: [
      { text: "Günlük", correct: false },
      { text: "Erken", correct: false },
      { text: "Boya", correct: true },
      { text: "Zor", correct: false },
    ],
  },
  //part 6
  {
    question: "What is the Turkish equivalent of the word 'parent'?",
    answers: [
      { text: "Ebeveyn", correct: true },
      { text: "Geçmek", correct: false },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'pass'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: true },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'pay'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Ödeme", correct: true },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'pepper'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'personal'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Ödeme", correct: false },
      { text: "Kişisel", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'pet'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Ödeme", correct: false },
      { text: "Evcil hayvan", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'place'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Yer", correct: true },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'plane'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Uçak", correct: true },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'pocket'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Cep", correct: true },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'polite'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Kibar", correct: true },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'pool'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Havuz", correct: true },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'poor'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Yoksul", correct: true },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'possible'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Mümkün", correct: true },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'push'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "İtmek", correct: true },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'quick'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Hızlı", correct: true },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'quiet'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Sessiz", correct: true },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'railway'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Demiryolu", correct: true },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'ready'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Hazır", correct: true },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'refrigerator'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Buzdolabı", correct: true },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'remember'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Hatırlamak", correct: true },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'rent'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Kiralamak", correct: true },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'repair'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Onarım", correct: true },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'repeat'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Tekrar", correct: true },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'restroom'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Tuvalet", correct: true },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'return'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Dönüş", correct: true },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'rice'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Pirinç", correct: true },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'rich'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Zengin", correct: true },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'ride'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Binmek", correct: true },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  //part 7
  {
    question: "What is the Turkish equivalent of the word 'right'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Sağ", correct: true },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'ring'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Halka", correct: true },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'rise'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Artış", correct: true },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'river'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Nehir", correct: true },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'road'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Yol", correct: true },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'roof'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Çatı", correct: true },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'room'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Oda", correct: true },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'rose'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Gül", correct: true },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'salt'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Tuz", correct: true },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'same'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Geçmek", correct: false },
      { text: "Aynı", correct: true },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'security'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Güvenlik", correct: true },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'sell'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Satmak", correct: true },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'serious'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Ciddi", correct: true },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'shelf'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Raf", correct: true },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'ship'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Gemi", correct: true },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'shirt'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Gömlek", correct: true },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'shoe'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Ayakkabı", correct: true },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'show'?",
    answers: [
      { text: "Ebeveyn", correct: false },
      { text: "Göstermek", correct: true },
      { text: "Ödeme", correct: false },
      { text: "Biber", correct: false },
    ],
  },
  //part 8
  {
    question: "What is the Turkish equivalent of the word 'soup'?",
    answers: [
      { text: "Çorba", correct: true },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'spend'?",
    answers: [
      { text: "Çorba", correct: false },
      { text: "Harcamak", correct: true },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'spoon'?",
    answers: [
      { text: "Çorba", correct: false },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: true },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'stamp'?",
    answers: [
      { text: "Çorba", correct: false },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: true },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'stay'?",
    answers: [
      { text: "Çorba", correct: false },
      { text: "Kalmak", correct: true },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'story'?",
    answers: [
      { text: "Çorba", correct: false },
      { text: "Hikaye", correct: true },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'strawberry'?",
    answers: [
      { text: "Çilek", correct: true },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'strong'?",
    answers: [
      { text: "Güçlü", correct: true },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'successful'?",
    answers: [
      { text: "Başarılı", correct: true },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'suit'?",
    answers: [
      { text: "Takım elbise", correct: true },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'sweet'?",
    answers: [
      { text: "Tatlı", correct: true },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'talk'?",
    answers: [
      { text: "Konuşmak", correct: true },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'tall'?",
    answers: [
      { text: "Uzun boylu", correct: true },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'teach'?",
    answers: [
      { text: "Öğretmek", correct: true },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'thick'?",
    answers: [
      { text: "Kalın", correct: true },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'thief'?",
    answers: [
      { text: "Hırsız", correct: true },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'thin'?",
    answers: [
      { text: "İnce", correct: true },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'think'?",
    answers: [
      { text: "Sanmak", correct: false },
      { text: "Düşünmek", correct: true },
      { text: "Harcamak", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'thirsty'?",
    answers: [
      { text: "Susuz", correct: true },
      { text: "Susamış", correct: false },
      { text: "Harcamak", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'ticket'?",
    answers: [
      { text: "Bilet", correct: true },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'tidy'?",
    answers: [
      { text: "Düzenli", correct: true },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'tired'?",
    answers: [
      { text: "Yorgun", correct: true },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'toothbrush'?",
    answers: [
      { text: "Diş fırçası", correct: true },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'toothpaste'?",
    answers: [
      { text: "Diş macunu", correct: true },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'towel'?",
    answers: [
      { text: "Havlu", correct: true },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'tower'?",
    answers: [
      { text: "Kule", correct: true },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'town'?",
    answers: [
      { text: "Kasaba", correct: true },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  {
    question: "What is the Turkish equivalent of the word 'toy'?",
    answers: [
      { text: "Oyuncak", correct: true },
      { text: "Harcamak", correct: false },
      { text: "Kaşık", correct: false },
      { text: "Pul", correct: false },
    ],
  },
  //son part
  {
    questions: [
      {
        question: "What is the Turkish equivalent of the word 'trainers'?",
        answers: [
          { text: "Spor ayakkabı", correct: true },
          { text: "Seyahat", correct: false },
          { text: "Ağaç", correct: false },
          { text: "Pantolon", correct: false },
        ],
      },
      {
        question: "What is the Turkish equivalent of the word 'travel'?",
        answers: [
          { text: "Seyahat", correct: true },
          { text: "Spor ayakkabı", correct: false },
          { text: "Ağaç", correct: false },
          { text: "Pantolon", correct: false },
        ],
      },
      {
        question: "What is the Turkish equivalent of the word 'tree'?",
        answers: [
          { text: "Ağaç", correct: true },
          { text: "Seyahat", correct: false },
          { text: "Spor ayakkabı", correct: false },
          { text: "Pantolon", correct: false },
        ],
      },
      {
        question: "What is the Turkish equivalent of the word 'trousers'?",
        answers: [
          { text: "Pantolon", correct: true },
          { text: "Seyahat", correct: false },
          { text: "Ağaç", correct: false },
          { text: "Spor ayakkabı", correct: false },
        ],
      },
      {
        question: "What is the Turkish equivalent of the word 'turn'?",
        answers: [
          { text: "Dönmek", correct: true },
          { text: "Seyahat", correct: false },
          { text: "Ağaç", correct: false },
          { text: "Pantolon", correct: false },
        ],
      },
      {
        question: "What is the Turkish equivalent of the word 'ugly'?",
        answers: [
          { text: "Çirkin", correct: true },
          { text: "Seyahat", correct: false },
          { text: "Ağaç", correct: false },
          { text: "Pantolon", correct: false },
        ],
      },
      {
        question: "What is the Turkish equivalent of the word 'umbrella'?",
        answers: [
          { text: "Şemsiye", correct: true },
          { text: "Seyahat", correct: false },
          { text: "Ağaç", correct: false },
          { text: "Pantolon", correct: false },
        ],
      },
      {
        question: "What is the Turkish equivalent of the word 'uncle'?",
        answers: [
          { text: "Amca", correct: true },
          { text: "Seyahat", correct: false },
          { text: "Ağaç", correct: false },
          { text: "Pantolon", correct: false },
        ],
      },
      {
        question: "What is the Turkish equivalent of the word 'understand'?",
        answers: [
          { text: "Anlamak", correct: true },
          { text: "Seyahat", correct: false },
          { text: "Ağaç", correct: false },
          { text: "Pantolon", correct: false },
        ],
      },
      {
        question: "What is the Turkish equivalent of the word 'underwear'?",
        answers: [
          { text: "İç çamaşırı", correct: true },
          { text: "Seyahat", correct: false },
          { text: "Ağaç", correct: false },
          { text: "Pantolon", correct: false },
        ],
      },
      {
        question: "What is the Turkish equivalent of the word 'waiter'?",
        answers: [
          { text: "Garson", correct: true },
          { text: "Seyahat", correct: false },
          { text: "Ağaç", correct: false },
          { text: "Pantolon", correct: false },
        ],
      },
      {
        question: "What is the Turkish equivalent of the word 'waitress'?",
        answers: [
          { text: "Kadın garson", correct: true },
          { text: "Seyahat", correct: false },
          { text: "Ağaç", correct: false },
          { text: "Pantolon", correct: false },
        ],
      },
      {
        question: "What is the Turkish equivalent of the word 'wall'?",
        answers: [
          { text: "Duvar", correct: true },
          { text: "Seyahat", correct: false },
          { text: "Ağaç", correct: false },
          { text: "Pantolon", correct: false },
        ],
      },
      {
        question: "What is the Turkish equivalent of the word 'watermelon'?",
        answers: [
          { text: "Karpuz", correct: true },
          { text: "Seyahat", correct: false },
          { text: "Ağaç", correct: false },
          { text: "Pantolon", correct: false },
        ],
      },
      {
        question: "What is the Turkish equivalent of the word 'way'?",
        answers: [
          { text: "Yol", correct: true },
          { text: "Seyahat", correct: false },
          { text: "Ağaç", correct: false },
          { text: "Pantolon", correct: false },
        ],
      },
      {
        question: "What is the Turkish equivalent of the word 'weak'?",
        answers: [
          { text: "Zayıf", correct: true },
          { text: "Seyahat", correct: false },
          { text: "Ağaç", correct: false },
          { text: "Pantolon", correct: false },
        ],
      },
      {
        question: "What is the Turkish equivalent of the word 'wear'?",
        answers: [
          { text: "Giymek", correct: true },
          { text: "Seyahat", correct: false },
          { text: "Ağaç", correct: false },
          { text: "Pantolon", correct: false },
        ],
      },
    ],
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// questions dizisini karıştır
questions = shuffleArray(questions);

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  questions = shuffleArray(questions); // questions dizisini karıştır
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
