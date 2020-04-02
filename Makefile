TSC = tsc
TSFLAGS = -t esnext --baseurl lib

SRC = $(wildcard src/*/*.ts)
LIB = $(patsubst src/%.ts, lib/%.js, $(SRC))
TEST = $(patsubst test/%.ts, test/%.js, $(wildcard test/*/*.ts))

all: $(LIB) $(TEST)

lib/%.js: src/%.ts src/global.d.ts
	$(TSC) --outdir $(@D) $(TSFLAGS) $^

test/%.js: test/%.ts
	$(TSC) $(TSFLAGS) $<

clean:
	$(RM) $(LIB)
	$(RM) $(TEST)

.PHONY: clean