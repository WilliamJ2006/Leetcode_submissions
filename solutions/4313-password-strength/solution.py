class Solution:
    def passwordStrength(self, password: str) -> int:
        special = set('!@#$')
        digits = set('0123456789')
        new_pass = set(password)
        count = 0
        for char in new_pass:
            if char in special:
                count+=5
                continue
            if char in digits:
                count+=3
                continue
            if char.upper() == char:
                count+=2
                continue
            count+=1
        return count
