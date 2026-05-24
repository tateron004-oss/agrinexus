$ErrorActionPreference = "Stop"

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$shotDir = Join-Path $root "exports\investor-screenshots"
$outDir = Join-Path $root "exports"
$pptxPath = Join-Path $outDir "AgriNexus_Investor_Screenshot_Walkthrough.pptx"

New-Item -ItemType Directory -Force -Path $outDir | Out-Null
Remove-Item -LiteralPath $pptxPath -Force -ErrorAction SilentlyContinue

$slides = @(
  @{
    Title = "Command Dashboard"
    File = "01-dashboard-command-center.png"
    Explain = "The dashboard shows the whole operating picture: learning, workforce, health, trade, map intelligence, integrations, and profile evidence."
    Takeaway = "Investor takeaway: AgriNexus is a coordinated workflow platform, not a collection of landing pages."
  },
  @{
    Title = "Learning & Development"
    File = "02-learning-development.png"
    Explain = "The learning workspace supports courses, lesson progress, quizzes, certificates, AI tutoring, and accessible learning packets."
    Takeaway = "Investor takeaway: training becomes measurable readiness and can connect directly to workforce pathways."
  },
  @{
    Title = "Workforce Pipeline"
    File = "03-workforce-pipeline.png"
    Explain = "The workforce module turns learning records into candidate readiness, applications, interviews, mentor support, shift scheduling, and earnings evidence."
    Takeaway = "Investor takeaway: the platform can prove movement from skills to employment."
  },
  @{
    Title = "AFAYAI Health / Telehealth"
    File = "04-afayai-health-telehealth.png"
    Explain = "The health workspace supports intake, representative connection, safety review, care planning, AI-assisted guidance, and accessibility support."
    Takeaway = "Investor takeaway: telehealth is designed for rural access, disability support, and human-supervised care."
  },
  @{
    Title = "AgriTrade"
    File = "05-agritrade-market-operations.png"
    Explain = "AgriTrade coordinates product lots, buyer orders, wallet transactions, market activity, route checkpoints, and logistics movement."
    Takeaway = "Investor takeaway: farmers and cooperatives can connect to structured commerce and payment evidence."
  },
  @{
    Title = "Map & AI"
    File = "06-map-ai-command.png"
    Explain = "The map connects country context, routes, checkpoints, facilities, health pressure, logistics activity, and AI recommendations."
    Takeaway = "Investor takeaway: geography becomes operational intelligence, not decoration."
  },
  @{
    Title = "Integrations"
    File = "07-integrations-provider-layer.png"
    Explain = "The integrations layer shows provider readiness for AI, certificates, workforce, telehealth, notifications, payments, logistics, maps, and persistence."
    Takeaway = "Investor takeaway: the product has a clear path from simulated demo providers to live production APIs."
  },
  @{
    Title = "Admin Control Room"
    File = "08-admin-governance.png"
    Explain = "Admin gives operators visibility into module health, users, audit events, AI governance, notifications, and production readiness."
    Takeaway = "Investor takeaway: the platform includes governance and evidence controls needed for real partners."
  },
  @{
    Title = "Unified Profile"
    File = "09-unified-profile.png"
    Explain = "The profile rolls learning, workforce, health, wallet, trade, and AI activity into one operating record."
    Takeaway = "Investor takeaway: AgriNexus creates a proof layer funders and partners can review."
  }
)

$ppLayoutBlank = 12
$msoTrue = -1
$msoFalse = 0
$ppSaveAsOpenXMLPresentation = 24

$ppt = New-Object -ComObject PowerPoint.Application
$ppt.Visible = $msoTrue
$presentation = $ppt.Presentations.Add($msoTrue)
$presentation.PageSetup.SlideWidth = 1920
$presentation.PageSetup.SlideHeight = 1080

function AddText($slide, [string]$text, [double]$left, [double]$top, [double]$width, [double]$height, [int]$size, [string]$color, [bool]$bold = $false) {
  $shape = $slide.Shapes.AddTextbox(1, $left, $top, $width, $height)
  $shape.TextFrame.TextRange.Text = $text
  $shape.TextFrame.TextRange.Font.Name = "Aptos"
  $shape.TextFrame.TextRange.Font.Size = $size
  $shape.TextFrame.TextRange.Font.Bold = $(if ($bold) { -1 } else { 0 })
  $shape.TextFrame.TextRange.Font.Color.RGB = [Convert]::ToInt32($color, 16)
  $shape.TextFrame.WordWrap = $msoTrue
  $shape.TextFrame.MarginLeft = 0
  $shape.TextFrame.MarginRight = 0
  $shape.TextFrame.MarginTop = 0
  $shape.TextFrame.MarginBottom = 0
  return $shape
}

function AddBg($slide) {
  $slide.FollowMasterBackground = $msoFalse
  $slide.Background.Fill.ForeColor.RGB = [Convert]::ToInt32("F7F8F3", 16)
  $bar = $slide.Shapes.AddShape(1, 0, 0, 32, 1080)
  $bar.Fill.ForeColor.RGB = [Convert]::ToInt32("1B8F68", 16)
  $bar.Line.Visible = $msoFalse
}

$cover = $presentation.Slides.Add(1, $ppLayoutBlank)
AddBg $cover
AddText $cover "AgriNexus" 130 160 1000 120 84 "153E35" $true | Out-Null
AddText $cover "Investor Screenshot Walkthrough" 130 300 1050 80 42 "1B8F68" $true | Out-Null
AddText $cover "A visual guide to the platform sections, workflows, and investor value story." 130 430 1100 170 42 "263D38" $false | Out-Null
AddText $cover "Learning | Workforce | AFAYAI Health | AgriTrade | Map & AI | Integrations | Admin | Profile" 130 820 1300 70 28 "687A74" $false | Out-Null

foreach ($item in $slides) {
  $slide = $presentation.Slides.Add($presentation.Slides.Count + 1, $ppLayoutBlank)
  AddBg $slide

  AddText $slide $item.Title 90 55 1040 75 44 "153E35" $true | Out-Null
  AddText $slide "Real platform screenshot" 90 125 480 40 22 "1B8F68" $true | Out-Null

  $shotPath = Join-Path $shotDir $item.File
  if (!(Test-Path $shotPath)) {
    throw "Missing screenshot: $shotPath"
  }
  $pic = $slide.Shapes.AddPicture($shotPath, $msoFalse, $msoTrue, 90, 180, 1180, 820)
  $pic.Line.Visible = $msoTrue
  $pic.Line.ForeColor.RGB = [Convert]::ToInt32("D7DED9", 16)

  $panel = $slide.Shapes.AddShape(1, 1325, 180, 500, 820)
  $panel.Fill.ForeColor.RGB = [Convert]::ToInt32("FFFFFF", 16)
  $panel.Line.ForeColor.RGB = [Convert]::ToInt32("D7DED9", 16)

  AddText $slide "What this section does" 1360 220 420 45 28 "1B8F68" $true | Out-Null
  AddText $slide $item.Explain 1360 285 410 250 28 "263D38" $false | Out-Null
  AddText $slide "Investor takeaway" 1360 590 420 45 28 "1B8F68" $true | Out-Null
  AddText $slide $item.Takeaway 1360 655 410 220 28 "263D38" $false | Out-Null
}

$presentation.SaveAs($pptxPath, $ppSaveAsOpenXMLPresentation)
$presentation.Close()
$ppt.Quit()

[System.Runtime.InteropServices.Marshal]::ReleaseComObject($presentation) | Out-Null
[System.Runtime.InteropServices.Marshal]::ReleaseComObject($ppt) | Out-Null

Write-Host "Created screenshot presentation: $pptxPath"
