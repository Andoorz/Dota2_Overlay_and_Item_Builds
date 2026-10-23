export class TimerService {
  static nextPowerRune(gameTime: number) {
    return 120 - (gameTime % 120);
  }

  static nextBountyRune(gameTime: number) {
    return 180 - (gameTime % 180);
  }

  static nextWisdomRune(gameTime: number) {
    if (gameTime < 420) {
      return 420 - gameTime;
    }

    return 420 - ((gameTime - 420) % 420);
  }
}