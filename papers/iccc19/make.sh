# NOTES: brew cask install mactex first
rm *.aux
latex iccc
bibtex iccc
latex iccc
latex iccc
pdflatex iccc
