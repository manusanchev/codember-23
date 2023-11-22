function encryptionPoliciesChecker1(policies, getInvalidPolicyNumber = 0) {
  const arrayPolicies = policies.split("\n");
  const invalidPolicies = [];

  arrayPolicies.forEach((policy) => {
    const [num, letter, key] = policy.trim().split(" ");

    const arrayNum = num.split("-");
    const min = Number(arrayNum[0]);
    const max = Number(arrayNum[1]);
    const letterClean = letter[0];

    let letterCount = 0;
    key.split("").every((letterKey) => {
      if (letterKey === letterClean) {
        if (letterCount <= max + 1) {
          letterCount += 1;
          return true;
        } else {
          return false;
        }
      }
      return true;
    });

    if (letterCount > max || letterCount < min) {
      invalidPolicies.push(key);
    }
  });

  return invalidPolicies[getInvalidPolicyNumber];
}

function encryptionPoliciesChecker2(policies, getInvalidPolicyNumber = 0) {
  const policyRegex = /(\d+)-(\d+) (\w): (\w+)/;
  const invalidPolicies = [];

  const arrayPolicies = policies.split("\n");
  for (const policy of arrayPolicies) {
    const [, minStr, maxStr, letter, key] = policy.match(policyRegex) || [];
    const min = parseInt(minStr);
    const max = parseInt(maxStr);

    let letterCount = 0;
    for (let i = 0; i < key.length; i++) {
      if (key[i] === letter) {
        letterCount++;
        if (letterCount > max) {
          break;
        }
      }
    }

    if (letterCount < min || letterCount > max) {
      invalidPolicies.push(key);
    }
  }

  return invalidPolicies[getInvalidPolicyNumber];
}

export { encryptionPoliciesChecker1, encryptionPoliciesChecker2 };
