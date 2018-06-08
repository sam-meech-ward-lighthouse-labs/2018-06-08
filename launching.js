function canLaunch(weight, fuel) {
  if (weight && !fuel) {
    return "🐶";
  }
  if (weight == 100 && fuel == 3) {
    return "🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🤗";
  }
  return "💁‍♀️💩";
}

exports.poop = "💩";
exports.canLaunch = canLaunch;
