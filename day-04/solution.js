const parsePassports = (passports) => passports.split('\n\n');

const REQUIRED_FIELDS = [
  'byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid',
];

export const problem1 = (input) => {
  const passports = parsePassports(input);
  const validPassports = passports.filter(
    (passport) => REQUIRED_FIELDS.every((field) => passport.includes(field)),
  );

  return validPassports;
};

const FIELD_VALIDATORS = {
  byr: (value) => value >= 1920 && value <= 2002,
  iyr: (value) => value >= 2010 && value <= 2020,
  eyr: (value) => value >= 2020 && value <= 2030,
  hgt: (value) => {
    const HeightNumber = value.replace(/\D/g, '');
    return value.includes('cm') ? HeightNumber >= 150 && HeightNumber <= 193 : HeightNumber >= 59 && HeightNumber <= 76;
  },
  hcl: (value) => value.match(/^#[0-9A-F]{6}$/i),
  ecl: (value) => value.match(new RegExp(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].join('|'), 'g')),
  pid: (value) => !Number.isNaN(value) && value.split('').length === 9,
};

export const problem2 = (input) => {
  const filteredPassports = problem1(input);

  const validPassports = filteredPassports.filter((passport) => {
    const parsedPassport = passport.split(/\s|\n/).map((entry) => entry.split(':'));
    return Object.entries(FIELD_VALIDATORS).every(([field, rule]) => {
      const value = parsedPassport.find((item) => item[0] === field)[1];
      return rule(value);
    });
  });

  return validPassports;
};
