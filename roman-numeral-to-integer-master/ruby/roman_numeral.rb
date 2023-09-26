def roman_to_int(s)
  special_matches = s.scan(/IV|IX|XL|XC|CD|CM/)
  special_sum = special_matches.map { |n| special_numerals[n] }.sum
  special_matches.each { |m| s.gsub!(m, '') }

  normal_sum = s.each_char.map { |c| numerals[c] || special_numerals[c] }.sum
  return (special_sum + normal_sum) if special_sum

  normal_sum
end

def numerals
  {
    'I' => 1,
    'V' => 5,
    'X' => 10,
    'L' => 50,
    'C' => 100,
    'D' => 500,
    'M' => 1000,
  }
end

def special_numerals
  {
    'IV' => 4,
    'IX' => 9,
    'XL' => 40,
    'XC' => 90,
    'CD' => 400,
    'CM' => 900,
  }
end

puts roman_to_int("MCMXCIV")

##
# The `roman_to_int` function converts a Roman numeral string to an integer.
# 
# Args:
#   s: The parameter `s` in the `roman_to_int` method represents a Roman numeral string that needs to
# be converted to an integer. In the example provided, the Roman numeral string is "MCMXCIV".
# 
# Returns:
#   The code is returning the integer value of the Roman numeral "MCMXCIV", which is 1994.
