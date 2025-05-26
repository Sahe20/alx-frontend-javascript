// Interfaces with branding
interface MajorCredits {
  credits: number;
  readonly __brand: 'major';  // brand property to uniquely identify this type
}

interface MinorCredits {
  credits: number;
  readonly __brand: 'minor';  // brand property to uniquely identify this type
}

// Functions to sum credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'major'
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'minor'
  };
}

