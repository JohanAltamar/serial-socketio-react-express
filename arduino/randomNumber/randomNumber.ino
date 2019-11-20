int i = 0;
int characters = 12;
String numbers[10] = {"1", "2", "3", "4", "5", "6", "7", "8", "9", "0"};
String randString = "";

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  for (i = 0; i < characters; i++)
  {
    if (i == 1) {
      randString = randString + "9";
    }
    else {
      randString = randString + numbers[random(0, 10)];
    }
  }
  Serial.print(randString);
  delay(10000);
  randString = "";
}
