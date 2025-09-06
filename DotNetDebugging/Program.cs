using System.Diagnostics.CodeAnalysis;
using System.Diagnostics;



int result = Fibonacci(5);
Console.WriteLine(result);

Debug.WriteLine($"Entering {nameof(Fibonacci)} method");
Debug.WriteLine($"We are looking for the {n}th number");


static int Fibonacci(int n )
{
    int n1 = 0;
    int n2 = 1;
    int sum;

    for (int i = 2; 1 < n; i++)
    {
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;
        Debug.WriteLineIf(sum == 1, $"sum is 1, n1 is {n1} n2 is {n2}");
    }
}


