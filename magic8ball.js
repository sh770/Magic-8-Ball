// מדפיס הודעת פתיחה למסוף
console.log("שלום! אני ה-Magic 8-Ball, ואני כאן כדי לעזור לך.");

// פונקציה שמחזירה תשובה אקראית וגם את הסוג שלה
function getRandomFortune() {

  // מערך תשובות חיוביות
  const positiveFortunes = [
    "זה בטוח.",
    "בהחלט כן!",
    "זה בוודאות יקרה!",
    "הסיכויים לטובתך.",
    "אתה יכול לסמוך על זה.",
    "הכל יסתדר."
  ];

  // מערך תשובות שליליות
  const negativeFortunes = [
    "לא סביר.",
    "אל תסמוך על זה.",
    "אל תבנה על זה.",
    "התשובה היא לא.",
    "מאוד ספקולטיבי.",
    "הסיכויים לא טובים.",
    "ממש לא."
  ];

  // מערך תשובות ניטרליות
  const neutralFortunes = [
    "תגובה מעורפלת, נסה שוב.",
    "תתמקד ותשאל שוב.",
    "נסה שוב.",
    "רמזים מרמזים על כך.",
    "אולי.",
    "עדיף לא לספר לך עכשיו."
  ];

  // מגריל מספר בין 0 ל-2 כדי לבחור קטגוריה
  const categoryIndex = Math.floor(Math.random() * 3);

  let answer = "";   // משתנה שישמור את התשובה
  let type = "";     // משתנה שישמור את סוג התשובה

  if (categoryIndex === 0) {

    type = "חיובית"; // מגדיר את סוג התשובה
    answer = positiveFortunes[
      Math.floor(Math.random() * positiveFortunes.length)
    ]; // בוחר תשובה אקראית מתוך החיוביות

  } else if (categoryIndex === 1) {

    type = "שלילית"; // מגדיר את סוג התשובה
    answer = negativeFortunes[
      Math.floor(Math.random() * negativeFortunes.length)
    ]; // בוחר תשובה אקראית מתוך השליליות

  } else {

    type = "ניטרלית"; // מגדיר את סוג התשובה
    answer = neutralFortunes[
      Math.floor(Math.random() * neutralFortunes.length)
    ]; // בוחר תשובה אקראית מתוך הניטרליות
  }

  // מחזיר אובייקט עם התשובה והקטגוריה
  return {
    text: answer,
    category: type
  };
}

// מבקש מהמשתמש להזין שאלה (עובד בדפדפן)
let userQuestion = prompt('שאלו את ה-Magic 8-Ball שאלה:'); // משתמשים ב-let כי ייתכן שנשנה את הערך

// אם המשתמש לא הזין שאלה או השאיר ריק
if (!userQuestion) {

  userQuestion = 'האם אהיה מתכנת טוב?'; // מגדיר שאלה ברירת מחדל
  console.log('לא שאלת שאלה. ה-Magic 8-Ball שוקל: ' + userQuestion);

}

// אם יש שאלה (כולל ברירת מחדל)
if (userQuestion) {

  console.log('שאלת: ' + userQuestion); // מדפיס את השאלה

  const result = getRandomFortune(); // שומר את התשובה שהפונקציה החזירה

  console.log("השאלה שלך היא: " + userQuestion); // מדפיס שוב את השאלה
  console.log("הכדור הקסם אומר: " + result.text); // מדפיס את התשובה
  console.log("סוג התשובה הוא: " + result.category); // מדפיס את סוג התשובה

  console.log("להתראות! מקווה שעזרתי לך."); // הודעת סיום

} else {

  console.log('לא שאלת שאלה.'); // במקרה נדיר של ביטול מוחלט

}
