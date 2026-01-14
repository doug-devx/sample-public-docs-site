```python
# A simple function with a type hint
def get_greeting(name: str) -> str:
    """Returns a formatted greeting string."""
    return f"Hello, {name}! 🐍"

# Calling the function and printing the result
user_name = "Python"
message = get_greeting(user_name)
print(message)
```
