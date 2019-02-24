# NOTES: brew cask install mactex first
rm *.aux
pdflatex spacesheet
bibtex iccc
bibtex spacesheet
pdflatex spacesheet
pdflatex spacesheet
