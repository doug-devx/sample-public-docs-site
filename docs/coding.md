---
title: Code Snippets
nav_order: 2
---

# Code Snippets

* TOC
{:toc}

## C\#

```csharp
using System;
class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}
```

## Dart

```dart
void main() {
  print('Hello, World!');
}
```

## Go

```go
package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
}
```

## JavaScript

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("World"));
```

## Kotlin

```kotlin
fun greet(name: String): String {
    return "Hello, $name!"
}
println(greet("World"))
```

## Lua

```lua
function greet(name)
    return "Hello, " .. name .. "!"
end
print(greet("World"))
```

## Python

{% include python-snippet.md %}

## Ruby

```ruby
def greet(name)
    "Hello, #{name}!"
end
puts greet("World")
```

## Rust

```rust
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}
fn main() {
    println!("{}", greet("World"));
}
```

## Swift

```swift
func greet(name: String) -> String {
    return "Hello, \(name)!"
}
print(greet(name: "World"))
```

## TypeScript

```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("World"));
```