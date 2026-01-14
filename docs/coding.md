---
title: Code Snippets
nav_order: 2
---

# Code Snippets
{: .no_toc }

* TOC
{:toc}

## C\#

```csharp
// The simplest C# Hello World
Console.WriteLine("Hello, World!");

// Defining a function
string GetGreeting(string name) => $"Hello, {name}!";

// Calling the function
var message = GetGreeting("C#");
Console.WriteLine(message);
```

## Dart

```dart
void main() {
  // Calling the function
  final message = getGreeting("Dart");
  print(message);
}

// Defining a function with an optional parameter
string getGreeting(String name, [String emoji = '🚀']) {
  return 'Hello, $name $emoji'; // Testing interpolation and symbols
}
```

## Go

```go
package main

import "fmt"

func main() {
	// Call the function and assign to a variable
	greeting := getMessage("Go")
	fmt.Println(greeting)
}

// getMessage returns a formatted string
func getMessage(name string) string {
	return fmt.Sprintf("Hello, %s! ʕ•ᴥ•ʔ", name)
}
```

## JavaScript

```javascript
// Function definition using an arrow function
const getGreeting = (name) => {
    return `Hello, ${name}! 🚀`; // Template literal with interpolation
};

// Calling the function
const message = getGreeting("JavaScript");

// Output to console
console.log(message);
```

## Kotlin

```kotlin
fun main() {
    // Calling the function and storing the result
    val greeting = getGreeting("Kotlin")
    println(greeting)
}

// Single-expression function with string template
fun getGreeting(name: String): String = "Hello, $name! ✨"
```

## Lua

```lua
-- Function definition
local function getGreeting(name)
    local message = "Hello, " .. name .. "! 🌙"
    return message
end

-- Calling the function
local result = getGreeting("Lua")
print(result)
```

## Python

{% include python-snippet.md %}

## Ruby

```ruby
# Method definition
def get_greeting(name)
  "Hello, #{name}! 💎" # Implicit return
end

# Calling the method and assigning to a variable
message = get_greeting("Ruby")

# Outputting to the console
puts message
```

## Rust

```rust
fn main() {
    // Calling the function
    let message = get_greeting("Rust");
    println!("{}", message);
}

// Function with explicit return type
fn get_greeting(name: &str) -> String {
    format!("Hello, {}! 🦀", name)
}
```

## Swift

```swift
// Function with an argument label 'to' and parameter name 'name'
func getGreeting(to name: String) -> String {
    return "Hello, \(name)! 🍎"
}

// Calling the function using the label
let message = getGreeting(to: "Swift")
print(message)
```

## TypeScript

```typescript
// Interface to define the shape of an object
interface User {
  name: string;
  id: number;
}

// Function with type annotations for parameters and return value
const welcomeUser = (user: User): string => {
  return `Welcome, ${user.name}! (ID: ${user.id}) 🟦`;
};

// Creating a typed object and calling the function
const newUser: User = { name: "TypeScript", id: 1 };
console.log(welcomeUser(newUser));
```
