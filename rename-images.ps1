# Script to rename images to ASCII names for better compatibility

$imageDir = "C:\AI PROJEKT\leniwa-baba-restaurant (4)\public\images"
$mappings = @{}

# Define mappings from Polish characters to ASCII
function Convert-ToAscii {
    param($text)
    $text = $text -replace 'ą', 'a'
    $text = $text -replace 'ć', 'c'  
    $text = $text -replace 'ę', 'e'
    $text = $text -replace 'ł', 'l'
    $text = $text -replace 'ń', 'n'
    $text = $text -replace 'ó', 'o'
    $text = $text -replace 'ś', 's'
    $text = $text -replace 'ź', 'z'
    $text = $text -replace 'ż', 'z'
    $text = $text -replace 'Ą', 'A'
    $text = $text -replace 'Ć', 'C'
    $text = $text -replace 'Ę', 'E'
    $text = $text -replace 'Ł', 'L'
    $text = $text -replace 'Ń', 'N'
    $text = $text -replace 'Ó', 'O'
    $text = $text -replace 'Ś', 'S'
    $text = $text -replace 'Ź', 'Z'
    $text = $text -replace 'Ż', 'Z'
    $text = $text -replace "'", ''
    $text = $text -replace ' ', '_'
    $text = $text -replace '\(', ''
    $text = $text -replace '\)', ''
    return $text
}

# Get all JPG files and show what they would be renamed to
Get-ChildItem "$imageDir\*.jpg" | ForEach-Object {
    $originalName = $_.Name
    $newName = Convert-ToAscii $originalName
    Write-Host "Would rename: '$originalName' -> '$newName'"
    $mappings[$originalName] = $newName
}

# Export mapping to JSON file for updating constants.ts
$mappings | ConvertTo-Json | Out-File "$imageDir\..\image-mappings.json" -Encoding UTF8

Write-Host "`nMapping saved to image-mappings.json"
Write-Host "To actually rename files, uncomment the Copy-Item line below and run again"

# Uncomment to actually rename files:
# Get-ChildItem "$imageDir\*.jpg" | ForEach-Object {
#     $newName = Convert-ToAscii $_.Name
#     if ($newName -ne $_.Name) {
#         Copy-Item $_.FullName -Destination "$imageDir\$newName"
#         Write-Host "Copied: $($_.Name) -> $newName"
#     }
# }