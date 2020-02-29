TSC = tsc
TSFLAGS = -t esnext

SRC = $(wildcard src/*/*.ts)
LIB = $(patsubst src/%.ts, lib/%.js, $(SRC))

all: $(LIB)

lib/%.js: src/%.ts
	$(TSC) --outdir $(@D) $(TSFLAGS) $<

clean:
	$(RM) $(LIB)

.PHONY: clean