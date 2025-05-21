document.addEventListener('DOMContentLoaded', () => {
    const questionsListDiv = document.getElementById('questions-list');
    const hintModal = document.getElementById('hint-modal');
    const hintQuestionTitle = document.getElementById('hint-question');
    const hintContentDiv = document.getElementById('hint-content');
    const closeBtn = document.querySelector('.close-btn');

    // Complete list of Fasal coding questions with hints and answers
    const fasalQuestions = [
        // ... (your existing question array remains the same)
        {
    "question": " Reverse a string without using in-built functions.",
    "description": "Tests knowledge of string manipulation and loops.",
    "hint": "Use a loop to iterate from the end of the string to the beginning.",
    "answer": `
      <pre><code class="language-java">public class ReverseString {
  public static String reverse(String str) {
    String reversed = "";
    for (int i = str.length() - 1; i >= 0; i--) {
      reversed += str.charAt(i);
    }
    return reversed;
  }
}</code></pre>
    `
  },
  {
    "question": " Check if a number is prime.",
    "description": "Tests understanding of loops and conditional logic.",
    "hint": "A prime number has no divisors other than 1 and itself.",
    "answer": `
      <pre><code class="language-java">public class PrimeCheck {
  public static boolean isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) return false;
    }
    return true;
  }
}</code></pre>
    `
  },
  {
    "question": " Find the factorial of a number using recursion.",
    "description": "Checks recursion fundamentals.",
    "hint": "Base case is factorial(0) = 1.",
    "answer": `
      <pre><code class="language-java">public class Factorial {
  public static int factorial(int n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
  }
}</code></pre>
    `
  },
  {
    "question": " Print Fibonacci series up to N terms.",
    "description": "Tests loops and series generation.",
    "hint": "F(n) = F(n-1) + F(n-2), starting from 0 and 1.",
    "answer": `
      <pre><code class="language-java">public class Fibonacci {
  public static void printFibonacci(int n) {
    int a = 0, b = 1;
    for (int i = 0; i < n; i++) {
      System.out.print(a + " ");
      int temp = a + b;
      a = b;
      b = temp;
    }
  }
}</code></pre>
    `
  },
  {
    "question": " Find the second largest element in an array.",
    "description": "Tests array traversal and comparison logic.",
    "hint": "Track two variables: max and secondMax.",
    "answer": `
      <pre><code class="language-java">public class SecondLargest {
  public static int findSecondLargest(int[] arr) {
    int max = Integer.MIN_VALUE, secondMax = Integer.MIN_VALUE;
    for (int num : arr) {
      if (num > max) {
        secondMax = max;
        max = num;
      } else if (num > secondMax && num != max) {
        secondMax = num;
      }
    }
    return secondMax;
  }
}</code></pre>
    `
  },
  {
    "question": " Check if a string is a palindrome.",
    "description": "Checks string reversal logic.",
    "hint": "Compare characters from start and end moving towards center.",
    "answer": `
      <pre><code class="language-java">public class PalindromeCheck {
  public static boolean isPalindrome(String str) {
    int left = 0, right = str.length() - 1;
    while (left < right) {
      if (str.charAt(left++) != str.charAt(right--)) {
        return false;
      }
    }
    return true;
  }
}</code></pre>
    `
  },
  {
    "question": " Find duplicate elements in an array.",
    "description": "Checks use of data structures for tracking.",
    "hint": "Use a HashSet to track visited elements.",
    "answer": `
      <pre><code class="language-java">import java.util.*;
public class DuplicateFinder {
  public static void findDuplicates(int[] arr) {
    Set<Integer> seen = new HashSet<>();
    for (int num : arr) {
      if (!seen.add(num)) {
        System.out.println("Duplicate: " + num);
      }
    }
  }
}</code></pre>
    `
  },
  {
    "question": " Count the number of vowels in a string.",
    "description": "Tests string traversal and character comparison.",
    "hint": "Check each character if it's a, e, i, o, or u.",
    "answer": `
      <pre><code class="language-java">public class VowelCounter {
  public static int countVowels(String str) {
    int count = 0;
    str = str.toLowerCase();
    for (char c : str.toCharArray()) {
      if ("aeiou".indexOf(c) != -1) {
        count++;
      }
    }
    return count;
  }
}</code></pre>
    `
  },
  {
    "question": " Check if two strings are anagrams.",
    "description": "Checks sorting and character manipulation.",
    "hint": "Sort and compare both strings.",
    "answer": `
      <pre><code class="language-java">import java.util.Arrays;
public class AnagramCheck {
  public static boolean isAnagram(String s1, String s2) {
    char[] a1 = s1.toCharArray();
    char[] a2 = s2.toCharArray();
    Arrays.sort(a1);
    Arrays.sort(a2);
    return Arrays.equals(a1, a2);
  }
}</code></pre>
    `
  },
  {
    "question": " Remove all whitespaces from a string.",
    "description": "Tests string manipulation skills.",
    "hint": "Use character filtering or regex.",
    "answer": `
      <pre><code class="language-java">public class RemoveWhitespace {
  public static String removeSpaces(String str) {
    return str.replaceAll("\\\\s", "");
  }
}</code></pre>
    `
  },
   {
    "question": " Find the GCD of two numbers.",
    "description": "Tests understanding of Euclidean algorithm.",
    "hint": "Use recursion: GCD(a, b) = GCD(b, a % b).",
    "answer": `
      <pre><code class="language-java">public class GCD {
  public static int findGCD(int a, int b) {
    if (b == 0) return a;
    return findGCD(b, a % b);
  }
}</code></pre>
    `
  },
  {
    "question": " Find the missing number in an array from 1 to N.",
    "description": "Tests arithmetic and iteration.",
    "hint": "Sum of 1 to N = N*(N+1)/2. Subtract actual sum.",
    "answer": `
      <pre><code class="language-java">public class MissingNumber {
  public static int findMissing(int[] arr, int n) {
    int total = n * (n + 1) / 2;
    for (int num : arr) total -= num;
    return total;
  }
}</code></pre>
    `
  },
  {
    "question": " Move all zeros to the end of an array.",
    "description": "Tests array manipulation and swapping.",
    "hint": "Use two pointers to shift non-zero elements forward.",
    "answer": `
      <pre><code class="language-java">public class MoveZeros {
  public static void moveZeros(int[] arr) {
    int index = 0;
    for (int num : arr) {
      if (num != 0) arr[index++] = num;
    }
    while (index < arr.length) arr[index++] = 0;
  }
}</code></pre>
    `
  },
  {
    "question": " Count number of words in a string.",
    "description": "Tests string splitting and counting logic.",
    "hint": "Split the string on space character.",
    "answer": `
      <pre><code class="language-java">public class WordCounter {
  public static int countWords(String str) {
    if (str == null || str.trim().isEmpty()) return 0;
    return str.trim().split("\\\\s+").length;
  }
}</code></pre>
    `
  },
  {
    "question": " Convert a binary number to decimal.",
    "description": "Tests number system conversion.",
    "hint": "Use power of 2 based on bit position.",
    "answer": `
      <pre><code class="language-java">public class BinaryToDecimal {
  public static int toDecimal(String binary) {
    return Integer.parseInt(binary, 2);
  }
}</code></pre>
    `
  },
  {
    "question": " Reverse a number.",
    "description": "Tests number manipulation and loops.",
    "hint": "Extract digits using modulus and division.",
    "answer": `
      <pre><code class="language-java">public class ReverseNumber {
  public static int reverse(int num) {
    int rev = 0;
    while (num != 0) {
      rev = rev * 10 + num % 10;
      num /= 10;
    }
    return rev;
  }
}</code></pre>
    `
  },
  {
    "question": " Merge two sorted arrays.",
    "description": "Checks sorting and merging logic.",
    "hint": "Use two pointers for merging.",
    "answer": `
      <pre><code class="language-java">import java.util.*;
public class MergeSortedArrays {
  public static int[] merge(int[] a, int[] b) {
    int[] result = new int[a.length + b.length];
    int i = 0, j = 0, k = 0;
    while (i < a.length && j < b.length) {
      if (a[i] < b[j]) result[k++] = a[i++];
      else result[k++] = b[j++];
    }
    while (i < a.length) result[k++] = a[i++];
    while (j < b.length) result[k++] = b[j++];
    return result;
  }
}</code></pre>
    `
  },
  {
    "question": " Check if a number is Armstrong.",
    "description": "Tests digit extraction and mathematical logic.",
    "hint": "Sum of cubes of digits should be equal to the number.",
    "answer": `
      <pre><code class="language-java">public class ArmstrongNumber {
  public static boolean isArmstrong(int num) {
    int temp = num, sum = 0;
    while (temp != 0) {
      int digit = temp % 10;
      sum += digit * digit * digit;
      temp /= 10;
    }
    return sum == num;
  }
}</code></pre>
    `
  },
  {
    "question": " Find the largest element in an array.",
    "description": "Tests array traversal and comparison.",
    "hint": "Use a single loop and track max value.",
    "answer": `
      <pre><code class="language-java">public class MaxElement {
  public static int findMax(int[] arr) {
    int max = arr[0];
    for (int i = 1; i < arr.length; i++) {
      if (arr[i] > max) max = arr[i];
    }
    return max;
  }
}</code></pre>
    `
  },
  {
    "question": " Count frequency of characters in a string.",
    "description": "Checks use of HashMap and string traversal.",
    "hint": "Use a HashMap to store character counts.",
    "answer": `
      <pre><code class="language-java">import java.util.*;
public class CharFrequency {
  public static void countFrequency(String str) {
    Map&lt;Character, Integer&gt; freqMap = new HashMap<>();
    for (char c : str.toCharArray()) {
      freqMap.put(c, freqMap.getOrDefault(c, 0) + 1);
    }
    for (Map.Entry&lt;Character, Integer&gt; entry : freqMap.entrySet()) {
      System.out.println(entry.getKey() + ": " + entry.getValue());
    }
  }
}</code></pre>
    `
  },
  {
    "question": " Tell me about a time when you had to convince your team to follow your idea.",
    "description": "Tests leadership and communication skills.",
    "hint": "Use the STAR method: Situation, Task, Action, Result.",
    "answer": "Describe the situation clearly, explain your reasoning, show how you communicated your idea, and how it positively impacted the outcome."
  },
  {
    "question": " If you had multiple tasks with the same deadline, how would you prioritize?",
    "description": "Evaluates time management and prioritization.",
    "hint": "Mention criteria like urgency, impact, and stakeholder importance.",
    "answer": "Explain how you would assess each task's priority using deadlines, dependencies, or impact, and how you would communicate or delegate if needed."
  },
  {
    "question": " What motivates you to give your best at work?",
    "description": "Reveals intrinsic motivations and alignment with company culture.",
    "hint": "Mention purpose-driven or goal-oriented triggers.",
    "answer": "Talk about learning opportunities, recognition, achieving goals, or contributing to a larger vision."
  },
  {
    "question": " How do you handle criticism from your manager or peers?",
    "description": "Assesses emotional intelligence and growth mindset.",
    "hint": "Show openness and willingness to improve.",
    "answer": "Explain how you listen actively, reflect on the feedback, and take corrective action professionally."
  },
  {
    "question": " What would you do if you were asked to lead a team with low morale?",
    "description": "Tests leadership, empathy, and initiative.",
    "hint": "Focus on communication, understanding problems, and boosting team engagement.",
    "answer": "Discuss listening to concerns, recognizing efforts, setting goals, and building trust to improve morale."
  },
   {
    "question": " Explain the difference between overloading and overriding in Java.",
    "description": "Tests OOP concepts and method behavior understanding.",
    "hint": "Overloading = same method name, different parameters. Overriding = redefining a superclass method.",
    "answer": "Overloading occurs within the same class with different parameter lists. Overriding means redefining a method from the parent class in the child class using the same signature."
  },
  {
    "question": " How does HashMap work internally in Java?",
    "description": "Checks data structures and hashing knowledge.",
    "hint": "Talk about hashCode, equals, buckets, and collisions.",
    "answer": "HashMap uses the hashCode() to find a bucket index, then stores entries in a linked list or tree structure. If keys collide, it uses equals() to resolve duplicates."
  },
  {
    "question": " What are checked and unchecked exceptions in Java?",
    "description": "Tests exception handling knowledge.",
    "hint": "Think compile-time vs runtime.",
    "answer": "Checked exceptions are verified at compile-time (like IOException). Unchecked exceptions occur at runtime (like NullPointerException)."
  },
  {
    "question": " Write a program to find duplicate elements in an array.",
    "description": "Tests Java basics and HashSet usage.",
    "hint": "Use HashSet to track seen elements.",
    "answer": "Use a Set to check if an element has already appeared. If yes, it's a duplicate."
  },
  {
    "question": " Explain the lifecycle of a servlet.",
    "description": "Checks Java EE knowledge.",
    "hint": "Include init(), service(), destroy().",
    "answer": "Servlet lifecycle starts with `init()` (called once), followed by `service()` (called for each request), and ends with `destroy()` (called before shutdown)."
  }


    ];

    fasalQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item');

        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${question.question}`;

        const description = document.createElement('p');
        description.textContent = question.description;

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.marginTop = '15px';

        // Hint Button
        const hintButton = document.createElement('button');
        hintButton.textContent = 'Show Hint';
        hintButton.style.padding = '10px 20px';
        hintButton.style.border = 'none';
        hintButton.style.borderRadius = '5px';
        hintButton.style.backgroundColor = '#4CAF50';
        hintButton.style.color = 'white';
        hintButton.style.fontWeight = 'bold';
        hintButton.style.cursor = 'pointer';
        hintButton.style.transition = 'all 0.3s ease';
        hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for hint button
        hintButton.addEventListener('mouseover', () => {
            hintButton.style.backgroundColor = '#45a049';
            hintButton.style.transform = 'translateY(-2px)';
            hintButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('mouseout', () => {
            hintButton.style.backgroundColor = '#4CAF50';
            hintButton.style.transform = 'translateY(0)';
            hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = `<p>${question.hint}</p>`;
            hintModal.style.display = 'block';
        });

        // Answer Button
        const answerButton = document.createElement('button');
        answerButton.textContent = 'Show Answer';
        answerButton.style.padding = '10px 20px';
        answerButton.style.border = 'none';
        answerButton.style.borderRadius = '5px';
        answerButton.style.backgroundColor = '#2196F3';
        answerButton.style.color = 'white';
        answerButton.style.fontWeight = 'bold';
        answerButton.style.cursor = 'pointer';
        answerButton.style.transition = 'all 0.3s ease';
        answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for answer button
        answerButton.addEventListener('mouseover', () => {
            answerButton.style.backgroundColor = '#0b7dda';
            answerButton.style.transform = 'translateY(-2px)';
            answerButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('mouseout', () => {
            answerButton.style.backgroundColor = '#2196F3';
            answerButton.style.transform = 'translateY(0)';
            answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = question.answer;
            hintModal.style.display = 'block';
        });

        // Add buttons to container
        buttonContainer.appendChild(hintButton);
        buttonContainer.appendChild(answerButton);

        questionDiv.appendChild(title);
        questionDiv.appendChild(description);
        questionDiv.appendChild(buttonContainer);
        questionsListDiv.appendChild(questionDiv);
    });

    closeBtn.addEventListener('click', () => {
        hintModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === hintModal) {
            hintModal.style.display = 'none';
        }
    });
});