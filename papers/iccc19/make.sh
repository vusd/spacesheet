# NOTES: brew cask install mactex first
rm *.aux
latex spacesheet
bibtex iccc
bibtex spacesheet
latex spacesheet
latex spacesheet
pdflatex spacesheet
